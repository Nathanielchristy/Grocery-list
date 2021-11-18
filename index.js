
function additem(){
    var itemname=document.getElementById("itemname").value;
    console.log(itemname)
    var itemprice=document.getElementById("itemprice").value;
    console.log(itemprice)
    var itemquantity=document.getElementById("itemquantity").value;
    console.log(itemquantity)
    var Notes=document.getElementById("Notes").value;
    console.log(Notes)
    if(itemname==""||itemprice==""||itemquantity==""){
        alert("Please enter a valid item name,price and quantity");
    }
    else{
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML=`${itemname}`;
        cell2.innerHTML=`${itemprice}`;
        cell3.innerHTML=`${itemquantity}`;
        cell4.innerHTML=`${Notes}`;
        cell5.innerHTML=`<div class="switch">
        <label>
          <input type="checkbox" name="checkbox"onchange="checkfn(this);">
          <span class="lever"></span>
        </label>
      </div>`;
      cell6.innerHTML=`<td><button class="btn-flat" style="color: aliceblue;" onclick="deletefn(this);"><i class="material-icons">delete</i></button></td>`;
      document.getElementById("itemname").value='';
      document.getElementById("itemprice").value='';
      document.getElementById("itemquantity").value='';
      document.getElementById("Notes").value='';
    }

}

function deletefn(elem){
    if (confirm('Are you sure you want to remove this Item?')) {
        // Save it!
        elem.parentNode.parentNode.remove();
      } else {
        // Do nothing!
        console.log('Element not removed');
      }
    
        
}
var checkbox = document.querySelectorAll("input[name=checkbox]");
for(let i=0;i< checkbox.length;i++){
    checkbox[i].addEventListener('change', function() {
        if (this.checked) {
        var node=checkbox[i].closest("tr");
        node.style.textDecoration="line-through 5px";
        node.style.color="black";
        node.style.backgroundColor="rgba(23, 41, 206, 0.5)";
        console.log("checked");
        
        } else {
            var node=checkbox[i].closest("tr");
            node.style.textDecoration="None";
            node.style.color="white";
            node.style.backgroundColor=""
        }
    });}
    function checkfn(elem){
                var node=elem.closest("tr");
                node.style.textDecoration="line-through 5px";
                node.style.color="black";
                node.style.backgroundColor="rgba(23, 41, 206, 0.5)";
                console.log("checked");
                elem.addEventListener('change',function(){
                    if(this.checked){
                        console.log("checked")
                    }else{
                        var node=elem.closest("tr");
                        node.style.textDecoration="None";
                        node.style.color="white";
                        node.style.backgroundColor=""
                    }
        });
    };