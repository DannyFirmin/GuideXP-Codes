

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

  
//example:
//http://www.runoob.com/index.php?id=1&image=awesome.jpg
//getQueryVariable("id") returns 1
// getQueryVariable("image") returns  "awesome.jpg"