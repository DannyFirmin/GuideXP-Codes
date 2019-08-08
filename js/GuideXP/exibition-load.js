
const domain = 'http://admin.guidexp.me';

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
request.open('GET', 'http://admin.guidexp.me/api/exhibition/' + obj.exibition + '/', false); 
request.send(null);
if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    for (i = 0; i < data.length; i++) {
            var lightGalleryDiv = document.getElementById('lightgallery');
            var imageCardDiv = document.createElement("div");
            imageCardDiv.className = "col-sm-6 col-md-4 col-lg-3 col-xl-2 item";
            imageCardDiv.setAttribute('data-aos', 'fade');
            imageCardDiv.setAttribute('data-html', '#audio' + i);
            imageCardDiv.setAttribute('data-sub-html', '<h4>' + data[i].art_name + '</h4><p>' + data[i].art_description + '</p>');
            a = document.createElement('a');
            a.setAttribute('href', '#');
            img = document.createElement('img');
            img.src = domain + "/" + data[i].art_img;
            img.setAttribute('alt', 'IMage');
            img.className = "img-fluid";
            a.appendChild(img);
            imageCardDiv.appendChild(a);
            lightGalleryDiv.appendChild(imageCardDiv);
        }
}
// Create resource from API, Asynchronous method
const apiurl = 'http://admin.guidexp.me/api/exhibition/' + obj.exibition + '/'
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

