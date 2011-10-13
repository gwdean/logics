// this file consists of a variety of javascript functions

* (crockford 2008)
// from (crockford 2008 xxx)
var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};

hanoi(3, 'Src', 'Aux', 'Dst');

* (burdette 2010)
** (closure 70 74)

function scopeFunc() {
    var scopedVar = 42;

    function innerFunc() {
	console.log(scopedVar);
    };

    return innerFunc;
};

var closure = scopeFunc();
closure();
42

// my closure example
function yo() {
    var ill = 28;

    function def() {
	console.log(ill);
    };

    return def;
};

var oy = yo();
oy();
28

// creating a function that returns a unique string
// every time it runs, like this:

var uniqueId = (function() {
    var counter = 0;

    return function() {
	return "unique-id-" + counter++;
    };
})(); // Self-invoking function that executes automatically

uniqueId();
"unique-id-0"
uniqueId();
"unique-id-1"
uniqueId();
"unique-id-2"

// a for loop that creates 10 <a> elements and appends them
// to the body of the page.
for (var i = 0; i < 10; i++) {
    var link = document.createElement("a");
    link.innerHTML = "Link " + i;
    link.href = "#";
    link.onclick = function() {
	alert("This is link " + i);
        return false;
    };
    document.body.appendChild(link);
}
** (fibonacci 74)
function fibonacci(n) {
    if ( n < 2 ) {
	return 1;
    } else {
	return fibonacci(n-2) + fibonacci(n-1);
    }
}
fibonacci(5);   // -> 8
fibonacci(10);  // -> 89

** (jedi 87)
var Jedi = function(name) {
    this.name = name;
    this.theForce = "strong";
}

var obiwan = new Jedi("Obi Wan");
var yoda = new Jedi("Yoda");

yoda.name;        // "Yoda"
yoda.theForce;    // "strong"
obiwan.theForce;  // "strong"  
** (prototypes 87 92)
Every datatype has a prototype object that defines a
set of properties. Each instance of a data type has
access to the properties of its types prototype.

Find the prototype object for a type:

Number.prototype;
String.prototype;
Array.prototype;
Object.prototype;

var Jedi = function(name) {
  this.name = name;
};

Jedi.prototype = {
   theForce: "strong",
   lightSaber: function() {
      console.log("Yo!");
   }
};

// understanding constructor functions
// and prototypes

var ConstructorFunc = function() {
   this.description = "I'm an instance of ConstructorFunc";
};

ConstructorFunc.prototype = {
   property : 28,
   method : function() {
      alert(this.description);
   }
};

var instance = {};

for (var name in ConstructorFunc.prototype) {
  instance[name] = ConstructorFunc.prototype[name];
}

ConstructorFunc.call(instance);

instance.method();

// Object Oriented Patterns

var Person = function(name) {
    this.name = name;
};

Person.prototype = {
    says : function(message) {
	console.log(this.name + " says " + message);
    }
};

var greg = new Person("Greg");
greg.says("Yo!");

var Jedi = function(name, saberColor) {
    Person.call(this, name);
    this.saberColor = saberColor;
};

Jedi.prototype = new Person();

Jedi.prototype.lightSaber = function() {
    console.log("Yo! Oy!");
};

var yoda = new Jedi("Yoda" "blue");
var luke = new Jedi("Luke" "green");

yoda.says("Do or do not, there is no try.");

