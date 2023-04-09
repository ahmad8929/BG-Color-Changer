const btn = document.getElementById("button");

function randomColor() {
  let val = "0123456789ABCDEF";
  let con = "#";

  for (let i = 0; i < 6; i++) {
    con = con + val[Math.floor(Math.random() * 16)];
    // Math.floor values ko float karega and Math.random koi bhi number le lega 0-0.99 tak
    // isliye agar 0-0.99 ko 16 se * karege to koi exact number aa jayega
  }
  return con;
}

console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
