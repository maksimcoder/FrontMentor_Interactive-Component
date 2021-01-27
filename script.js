// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

'use strict';

const input = document.querySelector('#rangeInput'),
      span = document.querySelector('.views-text'),
      price = document.querySelector('.price-amount'),
      checkbox = document.querySelector('.checkbox');

let pricingList = {
    0: '8',
    1: '12',
    2: '16',
    3: '24',
    4: '36'
  };


span.textContent = '10K pageviews';
price.textContent = `$${pricingList[0]}.00`;


function getYearPrice(oldObj) {
    const values = Object.values(oldObj);
    let newArr = [];
    values.forEach(item => {
        if (item.length < 5) {
            newArr.push(((item * 12) - (item * 12 * 25 /100)) / 12);
        } else {
            newArr.push(((item * 12) - (item * 12 * 25 /100)) / 12);
        }
    });
    const newObj = Object.assign({}, newArr);
    return newObj;
}

function changePricingContent() {
    checkbox.addEventListener('click', () => {
        const event = new Event('input');
        input.dispatchEvent(event);
        console.log(123);
    });
}
changePricingContent();


function changeRangeValue(range, viewers, pricing, isYear) {
    let tempDB = getYearPrice(pricingList);
    let monthList = pricingList,
        yearList;
    range.addEventListener('input', () => {
        if (isYear.checked) {
            yearList = tempDB;
            pricingList = yearList;
        } else {pricingList = monthList;}
        if (range.value < 35 && range.value == 10) {
            viewers.textContent = '10K pageviews';
            pricing.textContent = `$${pricingList[0]}.00`;
        } else if (range.value < 60 && range.value == 35){
            span.textContent = '50K pageviews';
            pricing.textContent = `$${pricingList[1]}.00`;
        } else if (range.value < 85 && range.value == 60) {
            span.textContent = '100K pageviews'; 
            pricing.textContent = `$${pricingList[2]}.00`;   
        } else if (range.value < 110 && range.value == 85) {
            viewers.textContent = '500K pageviews';
            pricing.textContent = `$${pricingList[3]}.00`;
        } else if (range.value == 110) {
            viewers.textContent = '1M pageviews';
            pricing.textContent = `$${pricingList[4]}.00`;
        } else {
            viewers.textContent = 'error';
        }
    });
}
changeRangeValue(input, span, price, checkbox);

