
// var now=new Date();
// var resultCount = now.getSeconds()%11;
 
// for(var i = 0;resultCount-1>i;i++){
var lightGalleryDiv = document.getElementById('lightgallery');
    var imageCardDiv = document.createElement("div");
    imageCardDiv.className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item";
    imageCardDiv.setAttribute('data-aos', 'fade');
    imageCardDiv.setAttribute('data-html', '#audio1');
    imageCardDiv.setAttribute('data-sub-html', '<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis quaerat molestiae, praesentium. Ipsam, reiciendis. Aut molestiae animi earum laudantium.</p>');
    a = document.createElement('a');
    a.setAttribute('href', '#');
    img = document.createElement('img');
    img.src = "images/nature_small_2.jpg";
    img.setAttribute('alt', 'IMage');
    img.className = "img-fluid";
    a.appendChild(img);
    imageCardDiv.appendChild(a);
    lightGalleryDiv.appendChild(imageCardDiv);



    // var audioResDiv = document.createElement("div");

    // audioResDiv.setAttribute('data-aos', 'fade');
    // audioResDiv.style = "display:none;";
    // audioResDiv.id = 'audio1';

    
    // audioTag = document.createElement('audio');
    // audioTag.className = "lg-video-object lg-html5 video-js vjs-default-skin";
    // audioTag.setAttribute('poster', 'images/nature_small_1.jpg');
    // audioTag.setAttribute('controls preload', 'none');

    // audioSource = document.createElement('source');
    // audioSource.src = "https://cs.anu.edu.au/courses/comp2300/v_media/lecture-recordings/01_COPE_Part_0__Organisation_&_Contents.mp3";
    // audioSource.setAttribute('type', 'audio/mpeg');
    // audioTag.appendChild(audioSource);
    // audioResDiv.appendChild(audioTag);
    // document.appendChild(audioResDiv);
    document.write( '    <div style=\"display:none;\" id=\"audio1\">\n' );
document.write( '      <audio class=\"lg-video-object lg-html5 video-js vjs-default-skin\" poster=\"images/nature_small_1.jpg\" controls preload=\"none\">\n' );
document.write( '        <source\n' );
document.write( '          src=\"https://cs.anu.edu.au/courses/comp2300/v_media/lecture-recordings/01_COPE_Part_0__Organisation_&_Contents.mp3\"\n' );
document.write( '          type=\"audio/mpeg\">\n' );
document.write( '        Your browser does not support HTML5 video.\n' );
document.write( '      </audio>\n' );
document.write( '    </div>' );







// }