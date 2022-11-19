let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


this.addEventListener("DOMContentLoaded", () =>{
  const questions = document.querySelectorAll(".question")
  questions.forEach((question) => question.addEventListener("click", () =>{

      if(question.parentNode.classList.contains("active")){
          question.parentNode.classList.toggle("active")
      }
  else{
  questions.forEach(question => question.parentNode.classList.remove("active"))
  question.parentNode.classList.add("active")
      }

  }))
}) 
