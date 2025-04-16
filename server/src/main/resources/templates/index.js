$(document).ready(async () => {
    let eventForm = $("#event-form")
    let getNameOfSelectedOption = (selectElement) => {
        return selectElement.find("option:selected").attr("name")
    }
    eventForm.ajaxForm({
        success: (responseText, statusText) =>{
            alert(statusText);
            location.reload();
        },
        error: (response, statusText) =>{
            var errorText = `An error occured ${response.status}`
            switch(response.status){
                case 409:
                    errorText = "There is already and event with that image"
                    break;
            }
            alert(errorText)
        }
    });

    //Handle event form updates
    let linkSelector = $("#link-type")
    let routeSelector = $("#select-route")
    let linkUrlInput = $("#link-url")
    let linkIsRouteInput = $("#link-is-route")
    routeSelector.val("Menu")
    linkUrlInput.val("menu")
    linkIsRouteInput.val(true)

    linkSelector.on("change", ()=>{
        let linkIsRoute = getNameOfSelectedOption(linkSelector) == "route";
        linkIsRouteInput.val(linkIsRoute)
        if(linkIsRoute){
            routeSelector.show()
            linkUrlInput.hide()
        } else {
            routeSelector.hide()
            linkUrlInput.show()
        }
    })
    routeSelector.on("change", ()=>{
        linkUrlInput.val(getNameOfSelectedOption(routeSelector))
    })
    //Size the selection box to the selected items, within the bounds of the visible table
    let eventTable = $("#eventTable");
    let eventContainer = $("#eventContainer");
    let tableRows = $("tr");
    let headerRow = $("#header-row");
    let headerCells = headerRow.children();

    var maxSelectionIndex = 0;
    let selectedCells = $("[selection-index]").toArray().map(element => {
        let selectionIndex = parseInt(element.attributes["selection-index"].value);
        maxSelectionIndex = Math.max(maxSelectionIndex, selectionIndex);
        if(selectionIndex > -1) {
            return $(element);
        } else {
            return null;
        }
    }).filter((cell) => {return cell != null})
        .sort((a, b) => {parseInt(b[0].attributes["selection-index"].value) - parseInt(a[0].attributes["selection-index"].value)});
    console.log(selectedCells);
    let leftSelectedCell = selectedCells[0];
    let rightSelectedCell = selectedCells[selectedCells.length-1];
    let selectedCellIndices = selectedCells.map(element => element.index());

    let tableBorderWidth = (eventTable.outerWidth() - eventTable.width())/2;
    var selectionOutline = $("#selectionOutline");
    let selectionPadding = 5;
    let positionSelectionOutline = () =>{
        selectionOutline.height(eventTable.height());
        if(selectedCells){
            let selectionMinLeft = leftSelectedCell.offset().left;
            let selectionMaxRight = rightSelectedCell.width() + rightSelectedCell.offset().left;
            let selectionMaxWidth = selectionMaxRight - selectionMinLeft
            let eventContainerWidth = eventContainer.width();
            let selectionBoundLeft = eventContainer.offset().left;
            let selectionBoundRight = selectionBoundLeft + eventContainerWidth;

            let outlineLeft = Math.max(selectionMinLeft, selectionBoundLeft);
            let outlineRight = Math.min(selectionMaxRight, selectionBoundRight+2*selectionPadding+1);
            let currentCellWidth = outlineRight-outlineLeft;
            let outlineWidth = Math.max(Math.min(selectionMaxWidth, currentCellWidth), 0);
            selectionOutline.width(outlineWidth);
            if(outlineWidth == 0){
                selectionOutline.hide();
            } else {
                selectionOutline.show();
                tableOffset = eventTable.offset();
                selectedOffset = leftSelectedCell.offset();
                selectionOutlineOffset = {top: tableOffset.top - selectionPadding, left: outlineLeft}
                //tableOffset.left -= selectionPadding;
                selectionOutline.offset(selectionOutlineOffset);
                selectionOutline.width()
            }
        } else {
            selectionOutline.hide();
        }
    }
    positionSelectionOutline();
    $(window).on("resize", positionSelectionOutline);
    $("#eventContainer").on("scroll", positionSelectionOutline);

    //Assign actions to table buttons
    let deleteButton = $(".delete-button");
    let decrementButton = $(".decrement-button")
    let selectButton = $(".select-button")
    let incrementButton = $(".increment-button")
    let cellCount = deleteButton.length;

    if(cellCount != selectButton.length) throw("WTH?");
    for(var i = 0; i < headerCells.length-1; i++){
        let eventID = headerCells[i+1].attributes["event-id"].value
        let selectionIndex = headerCells[i+1].attributes["selection-index"].value
        console.log(selectionIndex);
        if(selectionIndex > 0){
            $(decrementButton[i]).on("click", () => {
                console.log(selectionIndex);
                $.ajax({
                    url: `/events/decrement/${selectionIndex}`,
                    method: "PUT",
                    success: () => {location.reload();},
                    error: (response, statusText) =>{
                        var errorText = `An error occured ${response.status}`
                        alert(errorText)
                    }
                })
            })
        }
        if(selectionIndex < maxSelectionIndex && selectionIndex > -1){
            $(incrementButton[i]).on("click", () => {
                console.log(selectionIndex);
                $.ajax({
                    url: `/events/increment/${selectionIndex}`,
                    method: "PUT",
                    success: () => {location.reload();},
                    error: (response, statusText) =>{
                        var errorText = `An error occured ${response.status}`
                        alert(errorText)
                    }
                })
            })
        }
        $(selectButton[i]).on("click", () => {
            $.ajax({
                url: `/events/select/${eventID}`,
                method: "PUT",
                success: () => {location.reload();},
                error: (response, statusText) =>{
                    var errorText = `An error occured ${response.status}`
                    alert(errorText)
                }
            })
        });
        $(deleteButton[i]).on("click", () => {
            if(confirm("Are you sure you want to delete this Event?")){
                $.ajax({
                    url: `/events/${eventID}`,
                    method: "DELETE",
                    success: () => {location.reload();},
                    error: (response, statusText) =>{
                        var errorText = `An error occured ${response.status}`
                        alert(errorText)
                    }
                })
            }
        });
    }

    `
    //Drag'n'drop columns
    let draggedColumn;
    let draggingElementIndex;
    let subTableList;
    let isDragging = false;

    let x = 0;
    let y = 0;
    const mouseDownHandler = (e) =>{
        draggingElementIndex = ($(e.target).index())

        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetRight;


        $(document).on("mousemove", mouseMoveHandler)
        $(document).on("mouseup", mouseUpHandler)
    }

    const mouseUpHandler = (e) =>{
        $(document).off("mousemove", mouseMoveHandler)
        $(document).off("mouseup", mouseUpHandler)
        console.log(e)
    }
    const mouseMoveHandler = (e) =>{
        if(!isDragging){
            isDragging = true;
            cloneTable();

            draggedColumn = $(subTableList).children()[draggingElementIndex]
            console.log(draggedColumn);
            $(draggedColumn).addClass("dragging");
            $(draggedColumn).css("position", "absolute");

            console.log(draggedColumn);
            placeholder = $("<div>", {class:"placeholder"});
            draggedColumn.parentNode.insertBefore(placeholder[0], draggedColumn.nextSibling);
            placeholder.css("width", $(draggedColumn).css("width"));
        }
        $(draggedColumn).offset({
            top: (draggedColumn.offsetTop + e.clientY - y),
            left: (draggedColumn.offsetLeft + e.clientX - x)
        });
        x = e.clientX;
        y = e.clientY;
    };

    const cloneTable = () => {
        subTableList = $("<div>", {style:"position: absolute;"});
        subTableList.offset(eventTable.offset());

        eventTable[0].parentNode.insertBefore(subTableList[0], eventTable[0])
        headerRow.children().toArray().forEach((hCell, headerIndex) => {
            if(headerIndex != 0){
                const headerCell =  $(hCell);
                const item = $("<div>", {class:"draggable"});
                const newTable = $("<table>", {class:"table"});
                newTable.width(headerCell.width());
                tableRows.toArray().forEach((tRow) => {
                    const rowCells = $(tRow).children();
                    const newRow = $("<tr>");
                    const clonedCell = rowCells[headerIndex].cloneNode(true)
                    $(clonedCell).width(headerCell.width());
                    newRow.width(headerCell.width());
                    newRow.append(clonedCell);
                    newTable.append(newRow);
                })
                item.append(newTable);
                subTableList.append(item);
            }
        });

        eventTable.css("visibility", "hidden");
    }

    eventTable.find("td").toArray().forEach((cell) => {
        console.log(cell);
        $(cell).on("mousedown", mouseDownHandler);
    })
    `

    //Updating bear value
    $("#set-bear-value").on("click", ()=>{
        let newBearValue = $("#bear-value").val();
        if(newBearValue > 0) $.ajax({
            url: `/bear-value/${newBearValue}`,
            method: "PUT",
            success: () => {location.reload();},
            error: (response, statusText) =>{
                var errorText = `An error occured ${response.status}`
                alert(errorText)
            }
        })
    })

    //Assign action to log out button
    $("#log-out").on("click", () => {
        if(confirm("Are you sure you would like to log out?")){
            $.ajax({
                url: "/logout",
                method: "GET",
                success: () => {location.reload();},
                error: (response, statusText) => {
                    var errorText = `An error occured ${response.status}`
                    alert(errorText)

                }
            })
        }
    });
});