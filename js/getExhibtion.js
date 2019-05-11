
var exbi = new Array();
exbi[0] = "Civic Art";
exbi[1] = "Makers in Resdience"; 
exbi[2] = "From the Hearts";
exbi[3] = "Building Arts";


function insert(){
    var str = "";
    var ul = document.getElementById("dropdowncontent");

    for(var i = 0; i < exbi.length;i++){
        var data=exbi[i];
        var url = "exibition.html?exibition=" + data;
        str= str + "<a href='"+ url + "'>"+data+"</a>";
   
        var li = document.createElement('li');
        li.innerHTML = str;
    }
    ul.appendChild(li);
 }
                  
