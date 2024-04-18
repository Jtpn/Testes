const colors = ["green","red","rgba (133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.getElementById(".color");

btn.addEventListener("click", function () {
  // pegar um número entre 0 - 3 
  const randomnumber = getRandomNumber();
  console.log(randomnumber);

  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}