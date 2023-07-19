
let canvas = document.getElementsByTagName("svg")[0];
let ghosts = [];
let colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "purple", "orange"];
let eyeRadius = 20;
let pupilRadius = 10;
let headRadius = 60;
let bodyWidth = 2 * headRadius;
let bodyHeight = 100;
let eyeSpacing = 25; //from center of head

canvas.addEventListener("mousemove",eyemovement,false);

// You'll need a mousemove listener on the canvas that makes the eyes
//         of each ghost in the ghosts array move in the direction of the current
//         mouse coordinates

let time = setInterval(eyemovement, 10);
function eyemovement(event) {

//array for all pupils & ox oy
let pupils = [];
let ox = [];
let oy = [];


for(let u = 0 ; u < ghosts.length ; u++) {  // creating pupil array with ghosts array at start, chage func need a length
    for (let count = 0 ; count < 2 ; count++){
        let eachPupil = ghosts[u].getElementsByClassName("pupils");
    }
    pupils.push(eachPupil[0]);
    pupils.push(eachPupil[1]);
}


for (let j = 0 ; j < pupils.length ; j++){ // basically for changing the coords of the pupils with an array everytime moves
    if (j > 0 ) {
        pupils = [];    //erase all the previous pupils from each ghosts in the array; will not if its only first ghost
    }

    ??????;//create a new pupil for moving to each ghosts in the array where it should be


 
    //create a pupil array: stores each pupil in ghosts as one
    ox.push(pupils[j].) //ox array: stores each x coor of each pupil in pupil array
    //oy array: stores each y coor of each pupil in pupil array
// }




//for (let i = 0 ; i < ox.length ; i++){ // creating new each time it 
    //create elemetns of tx, ty, dx, dy, ds
    let tx = event.offsetX;
    let ty = event.offsetY;
    let dx = 0;
    let dy = 0;
    let ds = 5;
    //ox and oy would an array of the x and y coordinates of the pupils
    //line formula for each ox and oy with each pupil array
        // line formula 
    if(tx != ox[i]) {
        let m = (ty - oy[i]) / (tx - ox[i]);
        dx = Math.sign(tx - ox[i]) * ds / Math.sqrt(1 + m * m);
        dy = m * dx;
        } else {
        dy = Math.sign(ty - oy[i]) * ds;
        }
    let x = ox + dx; //the new x-coordinate for the moving object
    let y = oy + dy; //the new y-coordinate for the moving object

//}
 



}