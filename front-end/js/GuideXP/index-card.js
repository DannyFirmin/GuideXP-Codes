function generate_card(number) {
    let html = '';
    for(let i = 0; i<number; i++){
        html += `<div class="swiper-slide">`;
        html += `<div class="image-wrap">`;
        html += `<div class="image-info">`;
        html += ` <h2 id="card${i}-name" class="mb-1">${translation_menu['index']['card']['2']}</h2>`;
        html += `<a id="card${i}-link" href="contact.html" class="btn btn-outline-white py-2 px-4">${translation_menu['index']['card']['1']}</a>`;
        html += `</div>`;
        html += `<img id="card${i}-img" src="images/placeholder.jpg" alt="Image">`;
        html += `</div>`;
        html += `</div>`;
    }
    document.getElementById("swiper-wrapper").innerHTML = html;
}

generate_card(4);
var api_url =  'http://13.239.36.190/api/get_gallery/'+getCookie('lang')+'/all';
var media_url = 'http://13.239.36.190/media';
var xhr = new XMLHttpRequest();
xhr.open("GET", api_url, true);
xhr.onload = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200){
        let slides = document.getElementsByClassName("swiper-slide");
        let json = JSON.parse(xhr.responseText);
        for(let i = 0; i<json.length; i++){
            let jsonString = JSON.parse(json[i]['jsonString']);
            let gallery_name = jsonString['gallery_name'];
            let gallery_cover = jsonString['gallery_cover'];
            let ele = slides[i];
            ele.getElementsByTagName("h2")[0].innerHTML = gallery_name;
            let atag = ele.getElementsByTagName("a")[0];
            atag.innerHTML = translation_menu['index']['card']['1'];
            atag.href = 'exhibit.html?exhibition_id='+json[i]['model_id'];
            ele.getElementsByTagName("img")[0].src = media_url + gallery_cover;
        }
    }
};

// xhr.onerror = function (e) {
//
// };
xhr.send(null);