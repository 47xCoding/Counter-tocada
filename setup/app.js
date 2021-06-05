// set initial count"n
let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
 btn.addEventListener('click', function (event) {
  const styles = event.currentTarget.classList;
  // code to increase or decrease counter value
  if (styles.contains("decrease")) {
   count--;
  }else if (styles.contains("increase")) {
   count++;
  }else {
   count = 0;
  }
// code to change value color
  if (count < 0) {
   value.style.color = "red"
  }else if (count > 0) {
   value.style.color = "green"
  }else {
   value.style.color = "#222"
  }
  value.textContent = count;
 })
})