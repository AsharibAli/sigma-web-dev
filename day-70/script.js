const boxes = document.querySelectorAll(".box");

// function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function to assign random color and background to each box
function colorBoxes() {
  boxes.forEach((box) => {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    box.style.color = "black";
  });
}

// call the function to color the boxes
colorBoxes();
