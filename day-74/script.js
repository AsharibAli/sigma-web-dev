let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b>Yay you were clicked!</b> Enojy it";
});

button.addEventListener("contextmenu", () => {
  alert("You were right clicked");
});

document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.KeyCode);
});
