checkCookie();

//Get value from url
var url = location.search,
    obj = {};

if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}

//var api_url =  'http://13.239.36.190/api/get_exhibit/'+getCookie('lang')+obj.exhibit_id;


var translation_menu;
var api_url = "http://13.239.36.190/api/get_language/"+getCookie('lang');
var request = new XMLHttpRequest();
request.open('GET', api_url, false);
request.send(null);
if (request.status === 200){
    let json = JSON.parse(request.responseText);    
    let content_translation = JSON.parse(json['jsonString'])['index']['navbar'];
    translation_menu = JSON.parse(json['jsonString']);
    let html =`<br><div id ='content1'>${content_translation[1]}</div><br><div id='content2'>${content_translation[2]}</div>`;
    let ele = document.getElementById('exhibitDetail');
    ele.innerHTML = html;
}
