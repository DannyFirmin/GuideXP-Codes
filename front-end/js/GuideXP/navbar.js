const available_language_list = ['en','zh','ja','ko','es','fr'];

function setCookie(cname, cvalue, exdays, reload) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
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
}
