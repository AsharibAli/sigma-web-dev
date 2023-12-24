console.log("Asharib");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "yellow";

// document.getElementById("redbox").style.backgroundColor = "yellow";
// document.querySelector(".box").style.backgroundColor = "yellow";
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "yellow";
});
