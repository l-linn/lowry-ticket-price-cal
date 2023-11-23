const venue = document.getElementById('venue');
const quaysSection = document.querySelector('.quays');
const lyricSection = document.querySelector('.lyric');
const inputValues = document.querySelector('input');
const stallsFrontPrice = document.getElementById('sf-f-p');
const levy = document.getElementById('levy');
const bookingFee = document.getElementById('booking-fee');
let addedOnLevy = 0;
let addedOnBf = 0;
lyricSection.classList.replace('hide', 'show');

const originalPriceElement = document.getElementById('original-table');

let originalPrice = [
    {stallsFront: 0},{stallsCentre: 0}, {stallsSides: 0}
];

originalPrice.map((op)=> {
    originalPriceElement.appendChild('<tr><td class="area"><label for="sf-o-p">Stalls Front</label></td><td class="price">£ <input id="sf-o-p" placeholder="price"></td></tr>');
    console.log(op);
})








function selectVenueForm(){
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

function showPrice(e){
    const outputPrice = `£ ${Number(e.target.value)}`;
    stallsFrontPrice.textContent = outputPrice;
}

function selectLevyOption(){
    if(levy.value == 1){
        addedOnLevy += 1.5;
    } else if (addedOnLevy >= 1.5 && levy.value == 1){
        addedOnLevy = 1.5;
    } else {
        addedOnLevy = 0;
    };
}

function selectBfOption(){ 
    if(bookingFee.value == 1){
        addedOnBf += 3;
    } else {
        addedOnBf = 0;
    }
}

venue.addEventListener('change', selectVenueForm);
levy.addEventListener('change', selectLevyOption);
bookingFee.addEventListener('change', selectBfOption);
inputValues.addEventListener('input', showPrice);

