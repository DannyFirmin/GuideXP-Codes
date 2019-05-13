
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
const apiurl = 'http://admin.guidexp.me/api/exhibition/' + obj.exibition + '/'

fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        console.log('hi', data[0])
        for (i = 0; i < data.length; i++) {
            console.log(data[i]);
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

            // document.write('    <div style=\"display:none;\" id=\"audio' + i + '\">\n');
            // document.write('      <audio class=\"lg-video-object lg-html5 video-js vjs-default-skin\" poster=\"' + domain + "/" + data[i].art_img + '\" controls preload=\"none\">\n');
            // document.write('        <source\n');
            // document.write('          src=\"' + domain + "/" + data[i].art_audio + '\"\n');
            // document.write('          type=\"audio/mpeg\">\n');
            // document.write('        Your browser does not support HTML5 video.\n');
            // document.write('      </audio>\n');
            // document.write('    </div>');
        }
    })


