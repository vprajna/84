canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function add() {
  backgroundimg = new Image();
   rover = new Image();
  backgroundimg.src = "mars.jpg";
  rover.src = "rover.png";
  backgroundimg.onload = uploadbackground;
  rover.onload=uploadrover;
}
function uploadbackground() {
  ctx.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover, 0, 0,100,90);
  }