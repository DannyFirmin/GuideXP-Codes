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
        if (obj.gallery_id == 1) {
            let json = JSON.parse(request2.responseText);
            let container = document.getElementById("lightgallery");
            let html = "";
            for (let i = 0; i < json.length; i++) {
                html += ` <div class="col-12 col-sm-4 col-md-3 col-lg-2 px-5 px-sm-4 mt-5" data-aos="fade" style="height: 100px;">`;
                html += `<div style="width: 100%; height: 100%; background-color: tomato; text-align: center; line-height: 100px; font-size: 2em">${i + 1}</div>`;
                html += `</div>`;
            }
            container.innerHTML = html;
        }else{
           var index = [];
           for(let i = 1; i<=13; i++){
               index.push(i);
           }
           shuffleArray(index);
           let json = JSON.parse(JSON.parse(request2.responseText)[0]['jsonString']);
           let container = document.getElementById("lightgallery");
           let div1 = "", div2="", div3="";
           let imgdiv;
           for (let i = 0; i<index.length; i++){
                let j = i % 3;
                let imgurl = media_url + json[index[i]]['img'];
                imgdiv = `<img data-aos="flip-up" src="${imgurl}" class="img-fluid rounded p-1" alt="Imaginarium-${index[i]}">`;
                switch (j) {
                    case 0:
                        div1 += imgdiv;
                        break;
                    case 1:
                        div2 += imgdiv;
                        break;
                    case 2:
                        div3 += imgdiv;
                        break;
                }
           }
           let html = `<div class="col-12 col-sm-6 col-md-4 col-lg-4 p-1">`;
           div1 = html + div1 + `</div>`;
           div2 = html + div2 + `</div>`;
           div3 = html + div3 + `</div>`;
           container.innerHTML = div1 + div2 + div3;
           container.classList.add("mt-4")
        }
    }
};




