$(document).ready(async () => {
    $("#eventForm").ajaxForm({
        target: "body",
        success: (responseText, statusText) =>{
            alert(statusText);
            location.reload();
        },
        error: (response, statusText) =>{
            console.log(response.status);
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