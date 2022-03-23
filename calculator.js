const allButtons =
 Array.from(document.querySelectorAll(".btn"));

const calculatorValueEl = document.querySelector(".calculator__value");
const calculatorMemoryEl = document.querySelector(".calculator__memory");

const computeEl = document.querySelector(".btn-equal");

let operatorFlag = false;

computeEl.addEventListener("click", (e) => {
 calculatorMemoryEl.innerText = calculatorMemoryEl.innerText + calculatorValueEl.innerText;
 calculatorValueEl.innerHTML = eval(calculatorMemoryEl.innerText);

 operatorFlag = true;

});



const catchOperators = {
 "*": true,
 "/": true,
 "-": true,
 "+": true
};

allButtons.forEach(button => {
 button.addEventListener("click", (e) => {
  if (catchOperators[e.target.innerText]) {
   operatorFlag = true;
   calculatorMemoryEl.innerHTML += calculatorValueEl.innerHTML + e.target.innerText
  } else {
   if (calculatorValueEl.innerHTML == 0 || operatorFlag) {
    if (operatorFlag) operatorFlag = false;
    calculatorValueEl.innerHTML = e.target.innerText;
   }
   else if (calculatorValueEl.innerHTML != 0) {
    calculatorValueEl.innerHTML += e.target.innerText;
   }
  }

 });
});
