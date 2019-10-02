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
var request1 = new XMLHttpRequest();
var api_url ="http://13.239.36.190/api/get_gallery/"+getCookie('lang')+"/all";
request1.open('GET',api_url, true);
request1.onload = function (e) {
    if (request1.readyState === 4 && request1.status === 200){
        let json = JSON.parse(request1.responseText);
        console.log(json);
        console.log(json[0].model_id);
        for (let i = 0; i<json.length; i++){
            if (json[i].model_id == obj.gallery_id){

                let jsonstring = JSON.parse(json[i]["jsonString"]);
                let gn = jsonstring["gallery_name"];
                let ele = document.getElementById("exb-title");
                ele.innerHTML = gn;
                break;
            }
        }
    }
};
request1.send(null);

var request2 = new XMLHttpRequest();
api_url = "http://13.239.36.190/api/get_exhibition/"+getCookie('lang')+"/"+obj.gallery_id+"/all";
request2.open('GET', api_url, true);
request2.send(null);
request2.onload = function (e) {
    if (request2.readyState === 4 && request2.status === 200){
        let json = JSON.parse(request2.responseText);
        let container = document.getElementById("lightgallery");
        let html = "";
        for(let i = 0; i<json.length; i++){
            html += ` <div class="col-12 col-sm-4 col-md-3 col-lg-2 px-4 my-3" data-aos="fade" style="height: 100px;">`;
            html += `<div style="width: 100%; height: 100%; background-color: tomato; text-align: center; line-height: 100px;">${i+1}</div>`;
            html += `</div>`;
        }
        container.innerHTML = html;
    }
};




