//EXERCISE 1
function areaOfTriangle (base, height) {
    var area = (base * height)/2;
    return area;
}

var base = 14;
var height = 10;
var areaTri = areaOfTriangle(base,height);

document.writeln("<h1>Exercise 1</h1>");
document.writeln("<p> Area of a triangle with a base of " + base + " and a height of "
                + height + " is: " + areaTri + "</p>");


//EXERCISE 2
function areaOfCircle (radius) {
    var area = Math.PI * (radius * radius);
    return area;
}

var radius = 5;
var areaCir = areaOfCircle(radius);

document.writeln("<h1>Exercise 2</h1>");
document.writeln("<p> Area of thecircle with a radius of " + radius + " is: " + areaCir + "</p>");



//EXERCISE 3
function areaOfShape(shape, arg) {
    if (shape == "triangle") {
        var area = (arg[0] * arg[1])/2;
        return area;
    }
    else if (shape == "circle") {
        var area = Math.PI * (arg[0] * arg[0]);
        return area;
    }
    else if (shape == "rectangle") {
        var area = arg[0] * arg[1];
        return area;
    }
    else {
        document.write("UNKNOWN_PARAMETERS");
        return 0;
    }
}
    

var base = 14;
var height = 10;
var triangleValues = [base, height];

var radius = 5;
var circleValues = [5];

var length = 14;
var width = 10;
var rectangleValues = [length, width];


document.writeln("<h1>Exercise 3</h1>");
document.writeln("<p> Area of a triangle with a base of " + base + " and a height of "
                + height + " is: " + areaOfShape("triangle", triangleValues) + "</p>");
document.writeln("<p> Area of a circle with a radius of " + radius + " is: " 
                 + areaOfShape("circle", circleValues) + "</p>");
document.writeln("<p> Area of a rectangle with a length of " + length + " and a width of "
                + width + " is: " + areaOfShape("rectangle", rectangleValues) + "</p>");