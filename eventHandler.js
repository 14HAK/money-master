





// const caseBtnPlus = document.getElementById('case_btn_plus');
// const caseBtnMinus = document.getElementById('case_btn_minus')


// const incressDecress = function (ifIncress) {
//   const caseNumberField = document.getElementById('case_number_field');
//   const caseNumberString = caseNumberField.value;
//   const priviousCaseNumber = parseInt(caseNumberString);

//   let newCaseNumber;

//   if (ifIncress) {
//     newCaseNumber = priviousCaseNumber + 1;
//   } else {
//     newCaseNumber = priviousCaseNumber - 1;

//   }
//   caseNumberField.value = newCaseNumber;

//   return newCaseNumber;
// }

// const updateTotalPrice = function (newCaseNumber) {
//   const caseTotalPrice = newCaseNumber * 59;
//   const caseTotal = document.getElementById('case_total');
//   caseTotal.innerText = caseTotalPrice

// }





// caseBtnPlus.addEventListener('click', () => {
//   const newCaseNumber = incressDecress(true);
//   updateTotalPrice(newCaseNumber)
// });


// caseBtnMinus.addEventListener('click', () => {
//   const newCaseNumber = incressDecress(false);
//   updateTotalPrice(newCaseNumber)
// });

const caseBtnPlus = document.getElementById('case_btn_plus');
const caseBtnminus = document.getElementById('case_btn_minus');

const phoneBtnPlus = document.getElementById('phone_btn_plus');
const phoneBtnMinus = document.getElementById('phone_btn_minus');


const subTotal = function () {

  const phoneValue = parseInt(document.getElementById('phone_total').innerText);
  const caseValue = parseInt(document.getElementById('case_total').innerText);


  const subTotal = document.getElementById('sub_total');
  const subCalculate = phoneValue + caseValue;
  subTotal.innerText = subCalculate.toFixed(2);

  const tax = document.getElementById('tax');
  const taxCalculate = (subCalculate * 4) / 100;
  tax.innerText = taxCalculate.toFixed(2);

  const total = document.getElementById('total');
  const totalCalculate = subCalculate + taxCalculate;
  total.innerText = totalCalculate.toFixed(2);
}



caseBtnPlus.addEventListener('click', () => {
  const numberInputField = document.getElementById('case_number_field');
  const numberInputFieldString = numberInputField.value;
  const priviousNumber = parseInt(numberInputFieldString);

  const newNumber = priviousNumber + 1;
  numberInputField.value = newNumber;


  const total = newNumber * 59;
  const caseTotal = document.getElementById('case_total');
  caseTotal.innerHTML = total;

  subTotal();

})

caseBtnminus.addEventListener('click', () => {
  const numberInputField = document.getElementById('case_number_field');
  const numberInputFieldString = numberInputField.value;
  const priviousNumber = parseInt(numberInputFieldString);

  const newNumber = priviousNumber - 1;
  numberInputField.value = newNumber;

  const total = newNumber * 59;
  const caseTotal = document.getElementById('case_total');
  caseTotal.innerHTML = total;

  subTotal()

})

phoneBtnPlus.addEventListener('click', () => {
  const numberInputField = document.getElementById('phone_number_field');
  const numberInputFieldString = numberInputField.value;
  const priviousNumber = parseInt(numberInputFieldString);

  const newNumber = priviousNumber + 1;
  numberInputField.value = newNumber;


  const total = newNumber * 1219;
  const phoneTotal = document.getElementById('phone_total');
  phoneTotal.innerHTML = total;

  subTotal()
})

phoneBtnMinus.addEventListener('click', () => {
  const numberInputField = document.getElementById('phone_number_field');
  const numberInputFieldString = numberInputField.value;
  const priviousNumber = parseInt(numberInputFieldString);

  const newNumber = priviousNumber - 1;
  numberInputField.value = newNumber;


  const total = newNumber * 1219;
  const phoneTotal = document.getElementById('phone_total');
  phoneTotal.innerHTML = total;

  subTotal()
})