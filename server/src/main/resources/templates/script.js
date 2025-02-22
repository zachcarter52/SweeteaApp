$(document).ready(async () => {
    let eventForm = $("#eventForm")
    let getNameOfSelectedOption = (selectElement) => {
        return selectElement.find("option:selected").attr("name")
    }
    eventForm.ajaxForm({
        target: "body",
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
    linkSelector.on("change", ()=>{
        if(getNameOfSelectedOption(linkSelector) == "route"){
            routeSelector.show()
            linkUrlInput.hide()
        } else {
            routeSelector.hide()
            linkUrlInput.show()
        }
    })
    eventForm.on("submit", ()=>{
        let linkIsRoute = getNameOfSelectedOption(linkSelector) == "route"
        $("#link-is-route").val(linkIsRoute)
        if(linkIsRoute){
            linkUrlInput.val(getNameOfSelectedOption(routeSelector))
        }
        return true;
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
            let currentCellWidth = eventContainer.width()+eventContainer.offset().left-selectedCell.offset().left+2*selectionPadding;
            let outlineWidth = Math.max(Math.min(selectedCell.width(), currentCellWidth), 0);
            selectionOutline.width(outlineWidth);
            if(outlineWidth == 0){
                selectionOutline.hide();
            } else {
                selectionOutline.show();
            }
        }
        tableOffset = eventTable.offset();
        selectedOffset = selectedCell.offset();
        selectionOutlineOffset = {top: tableOffset.top - selectionPadding, left: selectedOffset.left}
        //tableOffset.left -= selectionPadding;
        selectionOutline.offset(selectionOutlineOffset);
        selectionOutline.width()

    }
    positionSelectionOutline();
    $(window).on("resize", positionSelectionOutline);
    $("#eventContainer").on("scroll", positionSelectionOutline);
    let onClicks = []
    for(var i = 1; i < headerCells.length; i++){
        let eventID = headerCells[i].attributes["event-id"].value
        onClicks[i] = () => {
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
    }
    for(var i = 0; i < tableRows.length; i++){
        var tableCells = $(tableRows[i]).children();
        for(var j = 1; j < tableCells.length; j++){
            if(j != selectedCellIndex){
                let cell =$(tableCells[j]);
                cell.on("click", onClicks[j]);
                cell.css("cursor", "pointer");
            }
        }
    }
});