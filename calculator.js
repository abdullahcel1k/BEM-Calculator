const allButtons = 
Array.from(document.querySelectorAll(".btn"));

allButtons.forEach(item => {
 item.addEventListener("click", (e) => {
  console.log(e);
 });
});
