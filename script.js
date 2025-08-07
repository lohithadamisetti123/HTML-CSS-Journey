function getTable(){
    var rows=document.getElementsByTagName("input")[0].value;
    var columns=document.getElementsByTagName("input")[1].value;
    var box=document.getElementsByTagName("body")[0]
    var table=document.createElement("table")
     table.style.borderCollapse = "collapse";
     table.style.backgroundColor="skyblue";
    for(var i=0;i<rows;i++){
        var tr=document.createElement("tr")
        for(var j=0;j<columns;j++){
           var td=document.createElement("td")
           td.style.border="1px solid black"
           td.style.width = "80px"; 
           td.style.height = "80px";
           tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    box.appendChild(table)
    console.log(box)
}
