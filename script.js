const calculatorInput = document.querySelector("#calculatorInput");
const numbersOperators = document.querySelectorAll(".inputElements");
for(el of numbersOperators){
  el.addEventListener("click", function(){
    calculatorInput.append(this.textContent)
    console.log(this.textContent)
  })
}

const equals = document.querySelector(".evaluate");
equals.addEventListener("click", function(){
  calculatorInput.innerHTML = eval(calculatorInput.textContent)
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
  calculatorInput.innerHTML = ""
})
