// JavaScript source code
var AllBox = document.getElementsByClassName('box')

for (var i = 0; i < AllBox.length; i++) {
    if (AllBox[i]!=document.getElementById('NoRemind')) {
        AllBox[i].addEventListener('click', function () {
            alert('This page is still developing.')
        })
    }
}