const venue = document.getElementById('venue');
const quaysSection = document.querySelector('.quays');
const lyricSection = document.querySelector('.lyric');
const inputValues = document.querySelector('input');
const stallsFrontPrice = document.getElementById('sf-f-p');
const levy = document.getElementById('levy');
const bookingFee = document.getElementById('booking-fee');
let addedOnLevy = 0;
let addedOnBf = 0;

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

function showPrice (e){
    const outputPrice = `£ ${Number(e.target.value)}`;
    stallsFrontPrice.textContent = outputPrice;
}
inputValues.addEventListener('input', showPrice);

function selectLevyOption (){
    if(levy.value == 1){
        addedOnLevy += 1.5;
    } else if (addedOnLevy >= 1.5 && levy.value == 1){
        addedOnLevy = 1.5;
    } else {
        addedOnLevy = 0;
    };
}
levy.addEventListener('change', selectLevyOption);

function selectBfOption (){ 
    if(bookingFee.value == 1){
        addedOnBf += 3;
    } else {
        addedOnBf = 0;
    }
}
bookingFee.addEventListener('change', selectBfOption);
