// These are various notes related to Douglas Crockford's
// "JavaScript: The Good Parts"

// The book concludes with a JSON Parser. Since I'm into
// all things "compiler" right now, and parsing is a 
// major component of a compiler, I have an extra motivation
// to learn how this thing works.

// The following are the notes, in order, encased within
// the function structure minus the running code.

var json_parse = function () {

// This is a function that can parse a JSON text, producing a JavaScript
// data structure. It is a simple, recursive descent parser.

// We are defining the function inside of another function to avoid creating
// global variables.

// Call error when something is wrong.

// If a c parameter is provided, verify that it matches the current character.

// Get the next character. When there are no more characters,
// return the empty string.

// Parse a number value.

// Parse a string value.

// When parsing for string values, we must look for " and \ characters.

// Skip whitespace.

// true, false, or null.

// Parse an array value.

// Parse an object value.

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

// Return the json_parse function. It will have access to all of the above
// functions and variables.

// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible 
// transformation, starting with a temporary boot object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.

}();
////////// Minimalist Parser
var json_parse = function() {
    var at,
    ch,
    escapee = {...stuff...},
    error = function(m) {...stuff...},
    next = function(c) {...stuff...},
    number = function() {...stuff...},
    string = function() {...stuff...},
    white = function() {...stuff...},
    word = function() {...stuff...},
    array = function() {...stuff...},
    object = function() {...stuff...};
    value = function() {...stuff...};
    return function (source, reviver) {...stuff...}
    return typeof reviver === 'function' ?
}();



