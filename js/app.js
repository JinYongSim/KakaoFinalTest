console.log('my-note app.js');
//노트 출력, 저장, 다운로드
var btn_newnote = document.getElementById('btn_newnote');
var btn_savenote = document.getElementById('btn_savenote');
var btn_downloadnote = document.getElementById('btn_downloadnote');
var memo = document.getElementById('memo');

btn_newnote.onclick = function () {
  memo.value = '';
}

btn_savenote.onclick = function() {
  var saveMemo;
  saveMemo = memo.value;
  localStorage.setItem("1", saveMemo);
}

document.body.onload = function () {
  var saveMemo;
  saveMemo = localStorage.getItem("1");
  memo.value = saveMemo;
}

btn_downloadnote.onclick = function () {
  var blob = new Blob([memo.value], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Download_Note.txt");
}
