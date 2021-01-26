'use strict';

const input = document.querySelector('#rangeInput'),
      span = document.querySelector('.views-text'),
      step = input.getAttribute('step');

input.addEventListener('input', () => {
if (input.value == '1000') {
    let newInput = input.value.slice(0, 1);
    span.textContent = newInput + 'M';
} else {
    if (input.value >= '40' ) {
        input.setAttribute('step', 50);
    } else {
        input.setAttribute('step', 10);
    }

    span.textContent = input.value + 'K';
}

});


// function checkForStep(input) {
//     switch (step) {
//         case :
            
//             break;
    
//         default:
//             break;
//     }
// }


// 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month