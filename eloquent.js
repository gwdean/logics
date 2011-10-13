// Notes from (Haverbeke 2011)

* Introduction
** On Programming
** Why Language Matters
** What is JavaScript?
ECMAScript 3
** Trying Programs
To run the code from the book create a "test.html" file as follows:

<html><body><script type="text/javascript">

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
document.write(total);

</script></body></html>

** Overview of This Book
Chapters 1-3  -> Introduction to JavaScript, its grammar, etc.
Chapters 4-7  -> More Advanced Techniques (errors, functional, oo, modules)
Chapter  8    -> Regexps
Chapters 9-12 -> Facilities available to a program inside a browser
** Typographic Conventions
function fac(n) {
  return n == 0 ? 1 : n * fac(n-1);
}
* Chapter 1: Basic JavaScript: Values, Variables, and Control Flow
** Values
*** Numbers
*** Arithmetic
*** Strings
*** Unary Operations
*** Boolean Values, Comparisons, and Boolean Logic
*** Expressions and Statements
** Variables
*** Keywords and Reserved Words
** The Environment
** Program Structure
* Chapter 2: Functions
* Chapter 3: Data Structures: Objects and Arrays
* Chapter 4: Error Handling
* Chapter 5: Functional Programming
* Chapter 6: Object-Oriented Programming
** Objects
*** Defining Methods
// Giving an object methods

// Way 1 -> Attach function values to it
var rabbit = {};
rabbit.speak = function(line) {
  print("The rabbit says '", line, "'");
};

rabbit.speak("Yo!");

// Way 2 -> Using this
function speak(line) {
  print("The ", this.adjective, " rabbit says '", line, "'");
} 
var whiteRabbit = {adjective: "white", speak: speak};
var blackRabbit = {adjective: "white", speak: speak};

whiteRabbit.speak("Yo.");
blackRabbit.speak("Oy.");

// The mysterious first argument to the apply method
speak.apply(blackRabbit, ["Yo."]);

// Functions also have a call method, which is similar to apply
speak.call(blackRabbit, "Oy.");

// Apply and call with functions of more than one argument
function run(from, to) {
  print("The ", this.adjective, " rabbit runs from ", from, " to ", to, ".");
}
run.apply(whiteRabbit, ["A", "B"]);
run.call(blackRabbit, "Yo", "oy");

*** Constructors
*** Building from Prototype
*** Constructors and Prototypes
*** Prototype Pollution
*** Objects as Dictionaries
*** Specifying an Interface
** Building an Ecosystem Simulation
*** Defining the Terrarium
*** Points in Space
*** Representing the Grid
*** A Bug's Programming Interface
*** The Terrarium Object
*** this and Its Scope
*** Animating Life
*** It Moves
*** More Life Forms
*** Polymorphism
** A More Lifelike Simulation
*** Inheritance
*** Keeping Track of Energy
*** Adding Plant Life
*** The Herbivore
*** Bringing It to Life
*** Artificial Stupidity
** Prototypal Inheritance
*** Type-Definition Utilities
*** Prototypes as Types
*** A World of Objects
*** The instanceof Operator
*** Mixing Types 
* Chapter 7: Modularity
* Chapter 8: Regular Expressions
* Chapter 9: Web Programming: A Crash Course
* Chapter 10: The Document Object Model
* Chapter 11: Browser Events
* Chapter 12: HTTP Requests
* Index
