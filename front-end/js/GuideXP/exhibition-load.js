
const domain = 'http://13.239.36.190/';

// Get the parameter in URL
var url = location.search,
    obj = {};

if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(){
    let lang = getCookie("lang");
    if (lang === ""){
        let [lang, locale] = (((navigator.userLanguage || navigator.language).replace('-', '_')).toLowerCase()).split('_');
        let i = available_language_list.indexOf(lang);
        if (i !== -1){
            setCookie("lang",lang,1, false);
        }else{
            setCookie("lang",'en',1, false);
        }
    }
}
checkCookie();
var api_url = domain + "api/get_exhibition/"+getCookie('lang')+"/"+obj.exhibition_id+"/all";
// function resizeImage(obj) {obj.height = 150;  obj.width = 150; }

// Create GUI from API, Synchronous method
var request = new XMLHttpRequest();
request.open('GET', api_url, false);
request.send(null);
console.log(api_url);
if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    console.log(data);
    for (i = 0; i < data.length; i++) {
        console.log(data[i].model_id);
        var containerDiv = document.getElementById('card-container');
        var cardDiv = document.createElement("div");
        cardDiv.className = "text-center col-sm-6 col-md-4 col-lg-3 col-xl-2 item";
        cardDiv.setAttribute('data-aos', 'fade');
        cardDiv.setAttribute('background-color', 'black');
        cardDiv.setAttribute('display', 'flex');
        cardDiv.setAttribute('justify-content', 'center');
        cardDiv.setAttribute('align-items','center');
        cardDiv.setAttribute('style', 'width: 18rem;');

        var bodyDiv = document.createElement("div");
        bodyDiv.className = "card-body";

        a = document.createElement('a');
        a.setAttribute('href', 'linkhere');
        a.innerText = data[i].model_id;
        a.className = "btn btn-primary";

        bodyDiv.appendChild(a);
        cardDiv.appendChild(bodyDiv);
        containerDiv.appendChild(cardDiv);
    }

}
// // Create resource from API, Asynchronous method
// const apiurl = 'http://admin.guidexp.me/api/exhibition/' + obj.exhibition + '/';
// fetch(apiurl)
//     .then(response => response.json())
//     .then(data => {
//         for (i = 0; i < data.length; i++) {
//             // load audio resource
//             var audioResDiv = document.createElement("div");

//             audioResDiv.style = "display:none;";
//             audioResDiv.id = 'audio' + i;

//             audioTag = document.createElement('audio');
//             audioTag.className = "lg-video-object lg-html5 video-js vjs-default-skin";
//             audioTag.setAttribute('poster', domain + "/" + data[i].art_img);
//             audioTag.setAttribute('preload', 'none');
//             audioTag.setAttribute('controls', 'none');

//             audioSource = document.createElement('source');
//             audioSource.src = domain + "/" + data[i].art_audio;
//             audioSource.setAttribute('type', 'audio/mpeg');
//             audioTag.appendChild(audioSource);
//             audioResDiv.appendChild(audioTag);
//             var res = document.getElementById('res');
//             res.appendChild(audioResDiv);
//         }
//     })


