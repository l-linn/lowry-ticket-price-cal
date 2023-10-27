const venue = document.getElementById('venue');
const quaysSection = document.querySelector('.quays');
const lyricSection = document.querySelector('.lyric');
function selectVenueForm (){
    if(venue.value == ''){
        quaysSection.classList.add('hidden');
        lyricSection.classList.add('hidden');
    }else if (venue.value == 1) {
        quaysSection.classList.add('hidden');
        lyricSection.classList.remove('hidden');
    } else {
        quaysSection.classList.remove('hidden');
        lyricSection.classList.add('hidden');
    }
}
venue.addEventListener('change', selectVenueForm);


const inputValues = document.querySelector('input');
const stallsFrontPrice = document.getElementById('sf-f-p');
function showPrice (input){
    stallsFrontPrice.textContent = `£ ${Number(input.target.value)}`;
}
inputValues.addEventListener('input', showPrice);


const levy = document.getElementById('levy');
let addedOnLevy = 0;
function selectLevyOption (){
    if(levy.value == 1){
        addedOnLevy += 1.5;
    } else {
        addedOnLevy = 0;
    }
}
levy.addEventListener('change', selectLevyOption);


const bookingFee = document.getElementById('booking-fee');
let addedOnBf = 0;
function selectBfOption (){ 
    if(bookingFee.value == 1){
        addedOnBf += 3;
    } else {
        addedOnBf = 0;
    }
}
bookingFee.addEventListener('change', selectBfOption);







