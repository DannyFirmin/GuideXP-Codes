
//  Fetch from API to get the list of all exibitions
var exbi = new Array();

const url_head = 'http://admin.guidexp.me/api/exhibition/'
fetch(url_head)
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.length; i++) {
            exbi[i] = data[i].exhibition_name;
        }
    })

function insert() {
    var str = "";
    var ul = document.getElementById("dropdowncontent");

    for (var i = 0; i < exbi.length; i++) {
        var data = exbi[i];
        var url = "exibition.html?exibition=" + data;
        str = str + "<a href='" + url + "'>" + data + "</a>";

        var li = document.createElement('li');
        li.innerHTML = str;
    }
    ul.appendChild(li);
}




document.writeln("<header class=\'site-navbar py-3 border-bottom\' role=\'banner\'>");
document.writeln("");
document.writeln("  <div class=\'container-fluid\'>");
document.writeln("    <div class=\'row align-items-center\'>");
document.writeln("");
document.writeln("      <div class=\'col-6 col-xl-2\' data-aos=\'fade-down\'>");
document.writeln("        <h1 class=\'mb-0\'><a href=\'index.html\' class=\'text-black h2 mb-0\'>GuideXP</a></h1>");
document.writeln("      </div>");
document.writeln("      <div class=\'col-10 col-md-8 d-none d-xl-block\' data-aos=\'fade-down\'>");
document.writeln("        <nav class=\'site-navigation position-relative text-right text-lg-center\' role=\'navigation\'>");
document.writeln("");
document.writeln("          <ul class=\'site-menu js-clone-nav mx-auto d-none d-lg-block\'>");
document.writeln("            <li><a href=\'index.html\'>Home</a></li>");
document.writeln("            <li class=\'has-children\'>");
document.writeln("              <a>Exibitions</a>");
document.writeln("              <ul class=\'dropdown\' id=\'dropdowncontent\'>");
document.writeln("");
document.writeln("                <body onload=\'insert()\'>");
document.writeln("                </body>");
document.writeln("");
document.writeln("              </ul>");
document.writeln("");
document.writeln("            </li>");
document.writeln("");
document.writeln("            <li><a href=\'artists.html\'>Artists</a></li>");
document.writeln("            <li><a href=\'about.html\'>About</a></li>");
document.writeln("            <li><a href=\'contact.html\'>Contact</a></li>");
document.writeln("          </ul>");
document.writeln("        </nav>");
document.writeln("      </div>");
document.writeln("");
document.writeln("      <div class=\'col-6 col-xl-2 text-right\' data-aos=\'fade-down\'>");
document.writeln("        <div class=\'d-none d-xl-inline-block\'>");
document.writeln("          <ul class=\'site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0\' data-class=\'social\'>");
document.writeln("            <li>");
document.writeln("              <a href=\'http://admin.guidexp.me/upload/art/\' class=\'pl-3 pr-3\'><span class=\'icon-cloud-upload\'></span></a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'http://admin.guidexp.me/\' class=\'pl-3 pr-3\'><span class=\'icon-user\'></span></a>");
document.writeln("            </li>");
document.writeln("          </ul>");
document.writeln("        </div>");
document.writeln("");
document.writeln("        <div class=\'d-inline-block d-xl-none ml-md-0 mr-auto py-3\' style=\'position: relative; top: 3px;\'><a href=\'#\'");
document.writeln("            class=\'site-menu-toggle js-menu-toggle text-black\'><span class=\'icon-menu h3\'></span></a></div>");
document.writeln("");
document.writeln("      </div>");
document.writeln("");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("  <script src=\'js/jquery-3.3.1.min.js\'></script>");
document.writeln("  <script src=\'js/bootstrap.min.js\'></script>");
document.writeln("");
document.writeln("</header>");