
const domain = 'http://admin.guidexp.me';

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


// Create GUI from API, Synchronous method
var request = new XMLHttpRequest();
request.open('GET', 'http://admin.guidexp.me/api/exhibition/' + obj.exhibition + '/', false);
request.send(null);
if (request.status === 200) {
    var data = JSON.parse(request.responseText);

    var exhibitDetailDiv = document.getElementById('exhibitDetail');
    var imageDiv = document.createElement("p");
    imageDiv.className = "text-center";
    img = document.createElement('img');
    img.src = domain + "/" + data[i].art_img;
    img.setAttribute('alt', 'IMage');
    imageDiv.appendChild(img);
    exhibitDetailDiv.appendChild(imageDiv);

    var makeItCenter = document.createElement("center");
    var exhibitAudio = document.createElement("audio");
    var title = document.createElement("h4");
    var description = document.createElement("p");
    var titleText = data[i].art_name;
    var desText = data[i].art_description;

    exhibitAudio.setAttribute("src","");
    exhibitAudio.setAttribute("controls","controls");

    makeItCenter.appendChild(exhibitAudio);
    makeItCenter.appendChild(title);
    makeItCenter.appendChild(description);

    exhibitDetailDiv.appendChild(makeItCenter);

}
// Create resource from API, Asynchronous method
const apiurl = 'http://admin.guidexp.me/api/exhibition/' + obj.exhibition + '/';
fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.length; i++) {
            // load audio resource
            var audioResDiv = document.createElement("div");

            audioResDiv.style = "display:none;";
            audioResDiv.id = 'audio' + i;

            audioTag = document.createElement('audio');
            audioTag.className = "lg-video-object lg-html5 video-js vjs-default-skin";
            audioTag.setAttribute('poster', domain + "/" + data[i].art_img);
            audioTag.setAttribute('preload', 'none');
            audioTag.setAttribute('controls', 'none');

            audioSource = document.createElement('source');
            audioSource.src = domain + "/" + data[i].art_audio;
            audioSource.setAttribute('type', 'audio/mpeg');
            audioTag.appendChild(audioSource);
            audioResDiv.appendChild(audioTag);
            var res = document.getElementById('res');
            res.appendChild(audioResDiv);
        }
    })


