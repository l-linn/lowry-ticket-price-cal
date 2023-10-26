const venue = document.getElementById('venue');
const quaysSection = document.querySelector('.quays');
const lyricSection = document.querySelector('.lyric');

venue.addEventListener('change', function(){ //or toggle? can I use arrow function?
    if(this.value == ''){
        quaysSection.classList.add('hidden');
        lyricSection.classList.add('hidden');
    }else if (this.value == 1) {
        quaysSection.classList.add('hidden');
        lyricSection.classList.remove('hidden');
    } else {
        quaysSection.classList.remove('hidden');
        lyricSection.classList.add('hidden');
    }
});

const levy = document.getElementById('levy');
const bookingFee = document.getElementById('booking-fee');

const stallFrontPrice = document.getElementById('sf-f-p');
const inputPrice = document.querySelector('input');
function updateValue(e){
    stallFrontPrice.textContent = `£ ${e.target.value}`;
}
inputPrice.addEventListener('input', updateValue);
