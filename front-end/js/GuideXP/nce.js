function generate_card(number) {
    let html = '';
    for(let i = 0; i<number; i++){
        html += `<div class="swiper-slide">`;
        html += `<div class="image-wrap">`;
        html += `<div class="image-info">`;
        html += ` <h2 id="card${i}-name" class="mb-1">${i+1}</h2>`;
        html += `<a id="card${i}-link" href="#" class="btn btn-outline-white py-2 px-4">${translation_menu['index']['card']['1']}</a>`;
        html += `</div>`;
        html += `<img id="card${i}-img" src="images/placeholder.jpg" alt="Image">`;
        html += `</div>`;
        html += `</div>`;
    }
    document.getElementById("swiper-wrapper").innerHTML = html;
}
generate_card(18);


if (obj.gallery_id == 1){
    request2.open('GET', api_url, true);
    request2.send(null);
    request2.onload = function (e) {
        if (request2.readyState === 4 && request2.status === 200) {
            let slides = document.getElementsByClassName("swiper-slide");
            let json = JSON.parse(request2.responseText);
            // console.log(json);
            for(let i = 0; i<json.length; i++){
                let jsonString = JSON.parse(json[i]['jsonString']);
                // console.log(jsonString);
                let ele = slides[i];
                let atag = ele.getElementsByTagName("a")[0];
                atag.addEventListener("click", function (e) {
                    e.preventDefault();
                    let titele = document.getElementById("exb-title-div");
                    titele.children[0].style.display = "none";
                    let node = document.createElement("h4");
                    node.classList.add("site-section-heading","text-center", "mb-3");
                    node.innerHTML = jsonString['exhibition_name'];
                    setTimeout(function (e) {
                        titele.appendChild(node);
                    },0);
                    let section_counter = 1;
                    while (jsonString['section'][section_counter]){
                        section_counter++;
                    }
                    section_counter--;
                    let html = "";
                    html += `<div class="card w-75" style="margin: 0 auto;" data-aos="fade-up" data-aos-duration="1500"><div class="card-body">`;
                    for (let i = 1; i<=section_counter; i++){
                        html += `<h3 class="card-title">${jsonString['section'][i]['title']}</h3>`;
                        let paragraph_counter = 1;
                        while(jsonString['section'][i]['paragraph'][paragraph_counter]){
                            paragraph_counter++;
                        }
                        paragraph_counter--;
                        for(let j = 1; j<=paragraph_counter; j++){
                            html += `<p class="card-text">${jsonString['section'][i]['paragraph'][j]}</p>`;
                        }
                    }

                    html += `<a href="#" class="btn btn-primary" onclick="returnExhibition(); return false;">返回</a>`;

                    html += `</div></div>`;
                    let newele = document.getElementById("nce-container");
                    newele.children[0].style.display = "none";
                    let newnode = document.createElement("div");
                    newnode.setAttribute("id", "exhibition-detail-text");
                    newnode.innerHTML = html;
                    newele.appendChild(newnode);

                })
            }
        }
    }
}


function returnExhibition(){
    let ele = document.getElementById("exb-title-div");
    ele.lastChild.remove();
    ele.children[0].style.display = "block";
    ele = document.getElementById("nce-container");
    document.getElementById("exhibition-detail-text").remove();
    ele.children[0].style.display = "block";
}
