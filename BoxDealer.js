// JavaScript source code
var ProgramsDealer = document.getElementById('ProgramsBox')
var AnimeDealer = document.getElementById('AnimeBox')
var ArticalsDealer = document.getElementById('ArticalsBox')

//alert('This page is still developing.')
var StartDealers = [ProgramsDealer, AnimeDealer, ArticalsDealer]

for (let a = 0; a < StartDealers.length; a++) {
    StartDealers[a].style.cursor = "pointer"
}
