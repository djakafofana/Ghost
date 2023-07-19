
let canvas = document.getElementsByTagName("svg")[0];

let ghosts = [];
let colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "purple", "orange"];
let eyeRadius = 20;
let pupilRadius = 10;
let headRadius = 60;
let bodyWidth = 2 * headRadius;
let bodyHeight = 100;
let eyeSpacing = 25; //from center of head

//You'll need to create two event listeners.
canvas.addEventListener("click", addGhost, false);
canvas.addEventListener("mousemove", moveEyes, false);

function addGhost(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let ghost = document.createElementNS("http://www.w3.org/2000/svg", "g");
    ghost.setAttribute("x", x - headRadius);
    ghost.setAttribute("y", y - headRadius);
    let color = colors[Math.floor(colors.length*Math.random())];
    ghost.appendChild(createCircle(x, y, headRadius, color));
    ghost.appendChild(createRectangle(x - headRadius, y, bodyWidth, bodyHeight, color ));
    ghost.appendChild(createCircle(x - eyeSpacing, y, eyeRadius, "white"));
    ghost.appendChild(createCircle(x + eyeSpacing, y,eyeRadius, "white"));
    ghost.appendChild(createCircle(x - eyeSpacing, y,pupilRadius, "black"));
    ghost.appendChild(createCircle(x + eyeSpacing, y, pupilRadius, "black"));
    //feet//
    ghost.appendChild(createCircle(x - bodyWidth/3, y + bodyHeight, bodyWidth/6, color));
    ghost.appendChild(createCircle(x, y + bodyHeight , bodyWidth/6, color));
    ghost.appendChild(createCircle(x + bodyWidth/3, y + bodyHeight, bodyWidth/6, color));
    canvas.appendChild(ghost);
}
function createCircle(x, y, radius, color){
    let circle =  document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);

    return circle;
}
function createRectangle(x, y, width, height, color) {
    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangle.setAttribute("x", x);
    rectangle.setAttribute("y", y);
    rectangle.setAttribute("width", width);
    rectangle.setAttribute("height", height);
    rectangle.setAttribute("fill", color);
    return rectangle;
}
/* You'll need a click event listener on the canvas that draws a randomly
colored ghost at the precise location of the click and places a JavaScript
reference to that ghost into the ghosts array*/
function moveEyes(event){
    
}
/* You'll need a mousemove listener on the canvas that makes the eyes
of each ghost in the ghosts array move in the direction of the current
mouse coordinates */