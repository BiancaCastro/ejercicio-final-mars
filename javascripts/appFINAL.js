var rover = {
  direction: "N",
  positionX: 0,
  positionY:0,
  travelLog: []
};


// ======================



// ======================
function turnLeft(rover){
  switch(rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "W":
      rover.direction="S";
      break;
    case "E":
      rover.direction="N";
      break;
    case "S":
      rover.direction="E";
      break;
  }


  console.log("turnLeft was called!");
}





function turnRight(rover){

  switch(rover.direction){

    case "N":
      rover.direction="E";
      break; 
    case "W":
      rover.direction="N";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
  }

  console.log("turnRight was called!");
}





function moveForward(rover){

  switch(rover.direction){
    case "W":
      rover.positionX-=1;
      break;
    case "N":
      rover.positionY-=1;
      break;
    case "S":
      rover.positionY+=1;
      break;
    case "E":
      rover.positionX+=1;
      break;
  }
  console.log("Rover posicionado en " + rover.positionX +" " + rover.positionY);
  console.log("moveForward was called");
}


function moveBackward(rover){

  switch(rover.direction){
    case "W":
      rover.positionX+=1;
      break;
    case "N":
      rover.positionY+=1;
      break;
    case "S":
      rover.positionY+= -1;
      break;
    case "E":
      rover.positionX+= -1;
      break;
  }
  console.log("Rover posicionado en " + rover.positionX +" "+ rover.positionY);
  console.log("moveBackward was called");
}





function comandos(){
var string= prompt("Introduce una letra para mover el Rover (l, r, b o l)");
console.log("Comandos introducidos " + string);
if (string.includes ("F") || string.includes("f") || string.includes ("r") || string.includes ("R") || string.includes ("l") || string.includes("L" ) 
|| string.includes ("b") || string.includes ("B")){


for(i=0;i<string.length;i++){

  switch(string[i]){
    case "l":
    case "L":
    turnLeft(rover);
    break;
    case "f":
    case "F":
    moveForward(rover);
    break;
    case "r":
    case "R":
    turnRight(rover);
    break;
    case "b":
    case "B":
    moveBackward(rover);
    break;

  }
  var position= [rover.positionX, rover.positionY];
  rover.travelLog.push(position);
console.log(( "Lugares en los que ha estado Rover:" + position));
} 

}else {
  console.log("Comandos no válidos");
}
}
comandos();











//BONUS DE OBSTÁCULOS
if (rover.position==="x"){

  console.log("Error! Acabas de encontrarte con un obstáculo");


}

//x =obstáculos
var grid =[
  [null,"x", null, null, null, null, null, null, null, "x"],
  [null,null, null, null, null, null, "x",null, null, null],
  [null, null, "x", null, null, null, null, null, null, "x"],
  ["x",null, null, null, null, null, "x",null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "x", null, "x",null, null, null],
  [null,"X", null, null, null, null, null, null, null, "x"],
  ["x",null, null, null, null, null, "x",null, null, null],
  [null,"x", null, null, null, null, null, null, null, "x"],
  ["x",null, null, null, null, null,null,null, null, null],
  ];
