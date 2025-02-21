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
            var errorText = "An error occured $(response.status)"
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
    let table = $("#eventTable");
    let tableRows = $("tr");
    let headerRow = $(tableRows[0]);
    let headerCells = headerRow.children()

    let selectedCell = $("#selected");

    let tableBorderWidth = (table.outerWidth() - table.width())/2;
    var selectionOutline = $("#selectionOutline");
    let selectionPadding = 7;
    selectionOutline.height(table.height());
    if(selectedCell) selectionOutline.width(selectedCell.width())
    tableOffset = table.offset();
    selectedOffset = selectedCell.offset();
    selectionOutlineOffset = {top: tableOffset.top - selectionPadding, left: selectedOffset.left}
    //tableOffset.left -= selectionPadding;
    selectionOutline.offset(selectionOutlineOffset);
    let onClicks = []
    for(var i = 0; i < headerCells.length; i++){
        let eventID = headerCells[i].attributes["event-id"].value
        onClicks[i] = () => {
            $.ajax({
                url: `/events/select/${eventID}`,
                method: "PUT",
                success: () => {location.reload();},
                error: (response, statusText) =>{
                    var errorText = "An error occured $(response.status)"
                    alert(errorText)
                }
            })
        }
    }
    for(var i = 0; i < tableRows.length; i++){
        var tableCells = $(tableRows[i]).children();
        for(var j = 0; j < tableCells.length; j++){
            let cell =$(tableCells[j]);
            cell.on("click", onClicks[j]);
            cell.css("cursor", "pointer");
        }
    }
});