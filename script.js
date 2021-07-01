const paintWalls = function(color) {
    console.log ("The wall has been painted " + color);
};

const paintWalls2 = function(side, color) {
    console.log ("The",side, "wall has been painted",color);
};



paintWalls("red");
paintWalls("green");

paintWalls();                               /*undifined*/

paintWalls2 ("north", "orange");             /* The north wall has been painted orange*/
paintWalls2 ("southEast", "grey");           /* The south-east wall has been painted grey*/

paintWalls2 ("orange", "north");             /* Zet alles in de juiste volgorde; NIET zo dus --> The orange wall has been painted north*/
