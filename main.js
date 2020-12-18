//dribble the ball on the platform using any key on a keyboard. When a user presses a key down (space), it should lift the ball up. When the user releases the key, the ball should drop.

const ball = document.getElementById("float-circle");

function up(e) {
  // console.log(typeof e.keyCode);
  if (e.keyCode === 32) {
    ball.style.bottom = "250px";
  }
}

function down(e) {
  if (e.keyCode === 32) {
    ball.style.bottom = "50px";
  }
}

document.addEventListener("keydown", up);
document.addEventListener("keyup", down);
