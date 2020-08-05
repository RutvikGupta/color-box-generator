function colorSubmit() {
  // Getting the user inputs
  const color = document.getElementById("col").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;

  // Creating a new dom div element
  const body = document.getElementsByTagName("body")[0];
  const box = document.createElement("div");
  box.style.width = width;
  box.style.height = height;
  box.style.backgroundColor = color;
  box.style.margin = "20px";
  box.style.alignContent = "center";
  box.className = "box";

  // Appending the box under the form as an new dom element
  body.appendChild(box);
}

function removeBoxes() {
  // Get the body dom element
  const body = document.getElementsByTagName("body")[0];

  // Select all the boxes with class name box
  const boxes = document.getElementsByClassName("box");
  console.log(boxes);
  // Remove the boxes from the body
  while (boxes[0]) {
    body.removeChild(boxes[0]);
  }
}
