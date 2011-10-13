This is part of my ongoing mission
to master the closure concept. 

// from (flanagan 2006 143)

var x = "global";
function f() {
    var x = "local";
    function g() { alert(x); }
    g();
}
f();  // calling this function displays "local"

// from (crockford 2008 39)

// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);


// from (crockford 2008 37)

var myObject = function () {
    var value = 0;
    
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

// Invocation patterns from (crockford 2008 28-30)

// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then
// 1 is used as the default. 

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value); // 1

myObject.increment(2);
document.writeln(myObject.value); // 3

// Augment myObject with a double method.

myObject.dubble = function () {
    var that = this; // Workaround
    
    var helper = function () {
        that.value = add(that.value, that.value);
    };
    
    helper();  // Invoke helper as a function
};

// Invoke double as a method

myObject.dubble();
document.writeln(myObject.value);













// from (crockford 2008 31) 
// I am not yet sure whether or not this is a closure

// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of the
// function does not interfere with the sum 
// defined outside of the function. The function
// only sees the inner one.

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln(sum(4,8,15,16,23,42)); // 108


        
        
        
        
        







