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
const finalPriceElement = document.getElementById('final-table');

let originalPrice = [
    {StallsFront: 0},
    {StallsCentre: 0},
    {StallsSides: 0},
    {CircleCentre: 0},
    {CircleSides: 0},
    {CircleRVs: 0},
    {Boxes: 0},
    {UcFront: 0},
    {UcRear: 0},
    {UcRVs: 0},
];
let finalPrice = [
    {StallsFront: 0},
    {StallsCentre: 0},
    {StallsSides: 0},
    {CircleCentre: 0},
    {CircleSides: 0},
    {CircleRVs: 0},
    {Boxes: 0},
    {UcFront: 0},
    {UcRear: 0},
    {UcRVs: 0},
];

function loadTable(tableElement, tableData, inputKey){
    tableData.forEach((op) => {
        for (const key in op) {
            if (op.hasOwnProperty(key)) {
                const row = document.createElement('tr');
                const labelCell = document.createElement('td');
                labelCell.className = 'area';
                const labelWords = key.split(/(?=[A-Z])/).join(' ').toUpperCase(); // Split and capitalize
                labelCell.innerHTML = `<label for="${key}">${labelWords}</label>`;

                const priceCell = document.createElement('td');
                priceCell.className = 'price';
                const originalPriceValue = op[key];
                priceCell.innerHTML = `£ <input id="${inputKey}-${key}" placeholder="price">`;

                row.appendChild(labelCell);
                row.appendChild(priceCell);
                tableElement.appendChild(row);

                // Add an event listener to update finalPrice when originalPrice input loses focus
                const originalPriceInput = priceCell.querySelector('input');
                originalPriceInput.addEventListener('blur', (e) => {
                    console.log(e.target.value)
                    console.log(document.getElementById('levy').value)
                    hasLevy = document.getElementById('levy').value;
                    const updatedOriginalPriceValue = parseFloat(originalPriceInput.value);
                    if (!isNaN(updatedOriginalPriceValue)) {
                        if(hasLevy === "1"){
                            document.getElementById(`final-table-${e.target.id.split('-')[2]}`).value = 1.5 * updatedOriginalPriceValue;
                        }else{
                            document.getElementById(`final-table-${e.target.id.split('-')[2]}`).value = updatedOriginalPriceValue;
                        }
                        document.getElementById(`final-table-${e.target.id.split('-')[2]}`).disabled = true;
                    }
                });
            }
        }
    });
}

loadTable(originalPriceElement, originalPrice, 'original-table');
loadTable(finalPriceElement, finalPrice, 'final-table');




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

// function showPrice(e){
//     const outputPrice = `£ ${Number(e.target.value)}`;
//     stallsFrontPrice.textContent = outputPrice;
// }

// function selectLevyOption(){
//     if(levy.value == 1){
//         addedOnLevy += 1.5;
//     } else if (addedOnLevy >= 1.5 && levy.value == 1){
//         addedOnLevy = 1.5;
//     } else {
//         addedOnLevy = 0;
//     };
// }

// function selectBfOption(){
//     if(bookingFee.value == 1){
//         addedOnBf += 3;
//     } else {
//         addedOnBf = 0;
//     }
// }

// venue.addEventListener('change', selectVenueForm);
// levy.addEventListener('change', selectLevyOption);
// bookingFee.addEventListener('change', selectBfOption);
// inputValues.addEventListener('input', showPrice);

