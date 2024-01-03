// JavaScript source code
var AllBox = document.getElementsByClassName('box')
var NoRemindBox = document.getElementById('NoRemind')

for (var i = 0; i < AllBox.length; i++) {
    if (AllBox[i] != NoRemindBox) {
        AllBox[i].addEventListener('click', function () {
            alert('This page is still developing.')
        })
    }
}