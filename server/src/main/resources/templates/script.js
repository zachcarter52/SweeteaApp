$(document).ready(async () => {
    let eventForm = $("#eventForm")
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
    let eventTable = $("#eventTable");
    let eventContainer = $("#eventContainer");
    let tableRows = $("tr");
    let headerRow = $(tableRows[0]);
    let headerCells = headerRow.children()

    let selectedCell = $("#selected");
    let selectedCellIndex = selectedCell.index();

    let tableBorderWidth = (eventTable.outerWidth() - eventTable.width())/2;
    var selectionOutline = $("#selectionOutline");
    let selectionPadding = 5;
    let positionSelectionOutline = () =>{
        selectionOutline.height(eventTable.height());
        if(selectedCell){
            let selectedCellWidth = selectedCell.width();
            let selectedCellLeft = selectedCell.offset().left;
            let selectedCellRight = selectedCellLeft + selectedCellWidth;
            let eventContainerWidth = eventContainer.width();
            let eventContainerLeft = eventContainer.offset().left;
            let eventContainerRight = eventContainerLeft + eventContainerWidth;

            let outlineLeft = Math.max(selectedCellLeft, eventContainerLeft);
            let outlineRight = Math.min(selectedCellRight, eventContainerRight+2*selectionPadding+1);
            let currentCellWidth = outlineRight-outlineLeft;
            let outlineWidth = Math.max(Math.min(selectedCell.width(), currentCellWidth), 0);
            selectionOutline.width(outlineWidth);
            if(outlineWidth == 0){
                selectionOutline.hide();
            } else {
                selectionOutline.show();
                tableOffset = eventTable.offset();
                selectedOffset = selectedCell.offset();
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
    let selectClicks = []
    let deleteClicks = []
    for(var i = 1; i < headerCells.length; i++){
        let eventID = headerCells[i].attributes["event-id"].value
        selectClicks[i] = (i) => {
            $.ajax({
                url: `/events/select/${eventID}`,
                method: "PUT",
                success: () => {location.reload();},
                error: (response, statusText) =>{
                    var errorText = `An error occured ${response.status}`
                    alert(errorText)
                }
            })
        }
        deleteClicks[i] = (i) => {
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
        }
    }
    let headerRowIndex = $("#header-row").index()
    let deleteRowIndex = $("#delete-row").index()
    for(var i = 0; i < tableRows.length; i++){
        var tableRow = $(tableRows[i])
        var tableCells = $(tableRows[i]).children();
        for(var j = 1; j < tableCells.length; j++){
            let cell =$(tableCells[j]);
            switch(i){
                case deleteRowIndex:
                    cell.on("click", deleteClicks[j])
                    cell.css("cursor", "pointer");
                break;
                default:
                    if(j != selectedCellIndex){
                        cell.on("click", selectClicks[j]);
                        cell.css("cursor", "pointer");
                    }
                break;
            }
        }
    }

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
});