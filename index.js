document.addEventListener("keydown", saisie);

function saisie(event) {
  console.log(event.key);
  if (event.key === "ArrowUp") {
    document.getElementById("c1").style.top =
      document.getElementById("c1").offsetTop - 10 + "px";
  }
  if (event.key === "ArrowDown") {
    document.getElementById("c1").style.top =
      document.getElementById("c1").offsetTop + 10 + "px";
  }
  if (event.key === "ArrowLeft") {
    document.getElementById("c1").style.left =
      document.getElementById("c1").offsetLeft - 10 + "px";
  }
  if (event.key === "ArrowRight") {
    document.getElementById("c1").style.left =
      document.getElementById("c1").offsetLeft + 10 + "px";
  }
}
