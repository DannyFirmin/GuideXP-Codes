var api_url = "http://13.239.36.190/api/get_language/all";
var request = new XMLHttpRequest();
request.open('GET', api_url, false);
request.send(null);
if (request.status === 200){
    let json = JSON.parse(request.responseText);
    let currentLanguage;
    for (let i = 0; i<json.length; i++){
        // translation[json[i]['code']] = json[i]['jsonString'];
        if(json[i]['code'] === getCookie("lang")){
            currentLanguage = json[i]['name'];
        }
    }

    let html = '<div id="language-select-wrapper" class="container-fluid">';
    html += `<button id="language-select-btn" type="button" class="btn btn-sm btn-light trigger"><i class="fas fa-language" style="padding-right: 0.5em"></i><span id="current-language">${currentLanguage}</span></button>`;
    html += '</div>';
    html += '<div class="slider close container-fluid"><div class="row">';
    html += '<div class="col-12 text-center py-4 border-bottom h4">Select an Language</div>';

    for (let i = 0; i<json.length; i++){
        let code = json[i]['code'] + "";
        html += `<div class='col-12 text-center py-4'><span class='language' onclick='setCookie(\"lang\", \"${code}\", ${1}, true)'>`;
        html += json[i]['name'];
        html += '</span></div>';
    }
    html += '</div></div>';
    //insert to the dom
    $("#footer-div").html(html);
    $('.trigger, .slider').click(function() {
        $('.slider').toggleClass('close');
    });

}

