//노트 Info
var btn_about = document.getElementById('btn_about');
btn_about.onclick = function () {
    noteInfo();
}

function noteInfo() {
    document.getElementById('info').innerHTML =
    '<div class="information" id = "information">'+'<p>No game No life</p>'+'</div>';
}
