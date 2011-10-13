// adapted from (flanagan 2006 161-162)

function Complex(real, imaginary) {
    this.x = real;       
    this.y = imaginary;
}

Complex.prototype.magnitude = function() {...stuff...};
Complex.prototype.negative = function() {...stuff...};
Complex.prototype.add = function(that) {...stuff...}
Complex.prototype.multiply = function(that) {...stuff...}  
Complex.prototype.toString = function() {...stuff...};
Complex.prototype.equals = function(that) {...stuff...}
Complex.prototype.valueOf = function() {...stuff...}

Complex.sum = function (a, b) {...stuff...};
Complex.product = function (a, b) {...stuff...};

Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

// adapted from (flanagan 2006 152-153)

// The constructor function initializes those properties that
// will be different for each instance.
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

// The prototype object holds methods and other properties that
// should be shared by each instance.
Rectangle.prototype.area = function() { return this.width * this.height; }

// Using prototype-based inheritance without constructors and classes.

// Create and return an object that has p as its prototype
function heir(p) {
    function f(){}    // a dummy constructor function
    f.prototype = p;  // Specify the prototype object we want 
    return new f();   // Invoke the constructor to create new object
}

// from (flanagan 2006 160-161)

// We begin with the constructor
function Circle(radius) {
    this.r = radius;   // instance property
}

Circle.PI = 3.14159; // class property

Circle.prototype.area = function() { return Circle.PI * this.r * this.r; } // instance method

Circle.max = function(a,b) {         // class method: takes two Circle objects and returns the larger
    if (a.r > b.r) return a;
    else return b;
}

var c = new Circle(1.0);      // Create an instance of the Circle class
c.r = 2.2;                    // Set the r instance property
var a = c.area();             // Invoke the area() instance method
var x = Math.exp(Circle.PI);  // Use the PI class property in our own computation
var d = new Circle(1.2);      // Create another Circle instance
var bigger = Circle.max(c,d); // Use the max() class method

