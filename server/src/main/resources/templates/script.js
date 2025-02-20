$(document).ready(async () => {
    $("#eventForm").ajaxForm({
        target: "body",
        success: (responseText, statusText) =>{
            alert(statusText);
            location.reload();
        },
        error: (response, statusText) =>{
            var errorText = `An error occured $(response.status)`
            switch(response.status){
                case 409:
                    errorText = "There is already and event with that image"
                    break;
            }
        }
    });
    let table = $("#eventTable");
    let headerRow = table.children(0).children(0);
    console.log(headerRow);
    let firstCell = $("#eventHeader1");
    let tableBorderWidth = (table.outerWidth() - table.width())/2;
    var selectionOutline = $("#selectionOutline");
    let selectionPadding = 0;
    selectionOutline.height(table.height());
    if(firstCell) selectionOutline.width(firstCell.width())
    tableOffset = table.offset();
    tableOffset.top -= selectionPadding;
    tableOffset.left -= selectionPadding;
    selectionOutline.offset(tableOffset);

});