// Get the parameter in URL
var url = location.search,
    obj = {},
    jss = {};


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
                html += ` <div class="col-12 col-sm-4 col-md-3 col-lg-2 px-5 px-sm-4 mb-5" data-aos="fade" style="height: 100px;">`;
                html += `<div style="width: 100%; height: 100%; background-color: tomato; text-align: center; line-height: 100px; font-size: 2em">${i + 1}</div>`;
                html += `</div>`;
            }
            container.innerHTML = html;
        }else{
            let json = JSON.parse(JSON.parse(request2.responseText)[0]['jsonString']);
            jss = json;
            let container = document.getElementById("lightgallery");
            let s = [1,2,4,6], m = [8,9,10,11], l=[3,5,7,12,13];
            shuffleArray(s); shuffleArray(m); shuffleArray(l);
            let a = [], b = [], c = [];
            for (let j = 0; j<3; j++){
                if (j === 0){
                    a.push(s.pop());
                    b.push(s.pop());
                    c.push(s.pop());
                }else if (j === 1){
                    a.push(m.pop());
                    b.push(m.pop());
                    c.push(m.pop());
                }else{
                    a.push(l.pop());
                    b.push(l.pop());
                    c.push(l.pop());
                }
            }
            let r  = Math.floor(Math.random() * 3);
            if (r === 0 || r === 1){
                if (r===0){
                    a.push(s.pop());
                    a.push(m.pop());
                    b.push(l.pop());
                    c.push(l.pop());
                }else{
                    b.push(s.pop());
                    b.push(m.pop());
                    a.push(l.pop());
                    c.push(l.pop());
                }
            }else{
                c.push(s.pop());
                c.push(m.pop());
                a.push(l.pop());
                b.push(l.pop());
            }
            let div1 = `<div class="col-12 col-sm-4 col-md-4 col-lg-4 p-0">`, div2 = `<div class="col-12 col-sm-4 col-md-4 col-lg-4 p-0">`, div3 = `<div class="col-12 col-sm-4 col-md-4 col-lg-4 p-0">`;
            for(let i = 0; i<a.length; i++){
                let imgurl = media_url + json[a[i]+""]['img'];
                div1 += `<div id="imaginarium-${a[i]}"><img data-aos="flip-up" src="${imgurl}" class="img-fluid rounded p-1" alt="Imaginarium-${a[i]}" onclick="showTextCard(${a[i]})"></div>`;

            }
            div1 += `</div>`;

            for(let i = 0; i<b.length; i++){
                let imgurl = media_url + json[b[i]+""]['img'];
                div2 += `<div id="imaginarium-${b[i]}"><img data-aos="flip-up" src="${imgurl}" class="img-fluid rounded p-1" alt="Imaginarium-${b[i]}" onclick="showTextCard(${b[i]})"></div>`;
            }
            div2 += `</div>`;
            for(let i = 0; i<c.length; i++){
                let imgurl = media_url + json[c[i]+""]['img'];
                div3 += `<div id="imaginarium-${c[i]}"><img data-aos="flip-up" src="${imgurl}" class="img-fluid rounded p-1" alt="Imaginarium-${c[i]}" onclick="showTextCard(${c[i]})"></div>`;
            }
            div3 += `</div>`;
            container.innerHTML = div1 + div2 + div3;

        }
    }
};
