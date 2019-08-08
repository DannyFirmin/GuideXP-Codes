const url = 'https://randomuser.me/api/?results=7'
const card0_img = document.getElementById('card0-img');
const card1_img = document.getElementById('card1-img');
const card2_img = document.getElementById('card2-img');
const card3_img = document.getElementById('card3-img');
const card4_img = document.getElementById('card4-img');
const card5_img = document.getElementById('card5-img');
const card6_img = document.getElementById('card6-img');


fetch(url)
    .then(response => response.json())
    .then(data => {
        card0_img.src = data.results[0].picture.large
        card1_img.src = data.results[1].picture.large
        card2_img.src = data.results[2].picture.large
        card3_img.src = data.results[3].picture.large
        card4_img.src = data.results[4].picture.large
        card5_img.src = data.results[5].picture.large
        card6_img.src = data.results[6].picture.large
    })