var lightGalleryDiv = document.getElementById('lightgallery');
var imageCardDiv = document.createElement("div")
imageCardDiv.className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
imageCardDiv.setAttribute('data-aos', 'fade')
imageCardDiv.setAttribute('data-src', 'images/big-images/nature_big_2.jpg')
imageCardDiv.setAttribute('data-sub-html', '<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis quaerat molestiae, praesentium. Ipsam, reiciendis. Aut molestiae animi earum laudantium.</p>')
a = document.createElement('a')
a.setAttribute('href', '#')
img = document.createElement('img')
img.src = "images/nature_small_2.jpg"
img.setAttribute('alt', 'IMage')
img.className = "img-fluid"
a.appendChild(img)
imageCardDiv.appendChild(a)
lightGalleryDiv.appendChild(imageCardDiv)

{/* <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
<a href="#"><img src="images/nature_small_1.jpg" alt="IMage" class="img-fluid"></a>
</div> */}