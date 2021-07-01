const paintWalls = function(side, color) {
    console.log ("The",side, "wall has been painted",color);
};

const red = "red";
const green = "green";
const grey = "grey";
const orange = "orange";

const north = "north";
const southEast = "south-east";

// paintWalls(red);
// paintWalls(green);

// paintWalls();

paintWalls (north, orange);             /* The north wall has been painted orange*/
paintWalls (southEast, grey);           /* The south-east wall has been painted grey*/

paintWalls (orange, north);             /* Zet alles in de juiste volgorde; NIET zo dus --> The orange wall has been painted north*/
