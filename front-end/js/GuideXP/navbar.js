const available_language_list = ['en','zh','ja','ko','es','fr'];
const media_url = 'http://13.239.36.190/media';
var currentid = -1;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showTextCard(id) {
    if (id !== currentid) {
        if (currentid !== -1) {
            let ele = document.getElementById("imaginarium-" + currentid);
            setTimeout(function (e) {
                ele.removeChild(ele.lastChild);
            },0);

        }
        currentid = id;
        let ele = document.getElementById("imaginarium-" + id);
        let html = "";
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${jss[id + ""]['title']}</h5>`;
        html += `<p class="card-text">${jss[id + ""]['text']}</p></div>`;
        let node = document.createElement('div');
        node.setAttribute("data-aos", "fade-down");
        node.setAttribute("data-aos-easing", "linear");
        node.setAttribute("data-aos-duration", "500");
        node.classList.add("card");
        node.innerHTML = html;
        setTimeout(function (e) {
            ele.appendChild(node);
        },0);
    }
}

function setCookie(cname, cvalue, exdays, reload) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    // if(reload){
    //     if(cvalue == getCookie("lang")){
    //         reload = false;
    //     }
    // }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    if (reload){
        window.location.reload();
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
var translation_menu;
var api_url = "http://13.239.36.190/api/get_language/"+getCookie('lang');
var request = new XMLHttpRequest();
request.open('GET', api_url, false);
request.send(null);
if (request.status === 200){
    let json = JSON.parse(request.responseText);
    let nav_translation = JSON.parse(json['jsonString'])['index']['navbar'];
    translation_menu = JSON.parse(json['jsonString']);
    let html = `<li><a id='navbar-home' href='index.html'>${nav_translation[1]}</a></li>`;
    html += `<li class='has-children'><a id='navbar-exhibitions'>${nav_translation[2]}</a></li>`;



    html += `<li><a id="navbar-about" href='about.html'>${nav_translation[3]}</a></li>`;
    html += `<li><a id="navbar-contact" href='contact.html'>${nav_translation[4]}</a></li>`;
    html += `<li class="d-xl-none"><div class="dropdown-divider"></div></li>`;
    let ele = document.getElementById('navbar-item');
    ele.innerHTML = html;

    // translate the page
    let currentPath = window.location.pathname;
    let page = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    page = page.substring(0,page.lastIndexOf('.'));
    if (page === "about" || page === "contact"){
        if (page === "about"){
            let about_translation = JSON.parse(json['jsonString'])['About'];
            document.getElementById("translation-1").innerHTML = about_translation['title'];
            let html = "";
            html += `<h3>${about_translation['sub_title']}</h3>`;
            html += `<p>${about_translation['introduction']}</p>`;
            document.getElementById("translation-2").innerHTML = html;
            html = "";
            for(let i = 1; i<=3; i++){
                html += `<div class="col-md-6 col-lg-6 col-xl-4 text-center mb-5">`;
                html += `<img src="images/person_${i}.jpg"" alt="Image" class="img-fluid w-50 rounded-circle mb-4">`;
                html += `<h2 class="text-black font-weight-light mb-4">${about_translation['contacts'][''+i]['name']}</h2>`;
                html += `<p class="mb-4">${about_translation['contacts'][''+i]['introduction']}</p>`;
                html += `<p><a href="#" class="pl-0 pr-3"><span class="icon-twitter"></span></a>`;
                html += `<a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>`;
                html += `<a href="#" class="pl-3 pr-3"><span class="icon-facebook"></span></a></p></div>`;
            }
            document.getElementById("translation-3").innerHTML = html;
        }else{
            let contact = JSON.parse(json['jsonString'])['Contact'];
            let html = ` 
            <div class="row mb-5">
              <div class="col-12 ">
                <h2 class="site-section-heading text-center">${contact['title']}</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-8 mb-5">
                <form action="#">
                  <div class="row form-group">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <label class="text-black" for="fname">${contact['FN']}</label>
                      <input type="text" id="fname" class="form-control">
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="lname">${contact['LN']}</label>
                      <input type="text" id="lname" class="form-control">
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="email">${contact['EM']}</label>
                      <input type="email" id="email" class="form-control">
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="subject">${contact['SUB']}</label>
                      <input type="subject" id="subject" class="form-control">
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="message">${contact['MES']}</label>
                      <textarea name="message" id="message" cols="30" rows="7" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <input type="submit" value="${contact['SEND']}" class="btn btn-primary py-2 px-4 text-white">
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 ml-auto">
                <div class="mb-3 bg-white">
                  <p class="mb-0 font-weight-bold">${contact['ADD']}</p>
                  <p class="mb-4">2601 Childer St. Canberra, ACT, Australia</p>

                  <p class="mb-0 font-weight-bold">${contact['PH']}</p>
                  <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

                  <p class="mb-0 font-weight-bold">${contact['CONTACT_EM']}</p>
                  <p class="mb-0"><a href="#">info@guidexp.me</a></p>
                </div>
              </div>
            </div>`;
            document.getElementById("translation-1").innerHTML = html;
        }
    }

}

