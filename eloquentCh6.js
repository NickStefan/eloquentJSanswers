// chapter examples
//

// methods
var rabbit = {};
rabbit.speak = function(line){
	console.log("the rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");

function speak(line){
	console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type: "white", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers!");

speak.apply(whiteRabbit, ["Burp!"]);

speak.call({type: "old"}, "Oh my.");

// prototypes

console.log(Object.getPrototypeOf({}));
// object {} // aka the object prototype himself!

console.log(Object.getPrototypeOf(isNaN));
// function empty () {} // aka the function prototype itself

//////////
// one way to create objects from a prototype
var protoRabbit = {
	speak: function (line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");

// or use a constructor
function Rabbit(type){
	this.type = type;
}

var killerRabbit = new Rabbit("killer");
console.log(killerRabbit.type);

console.log(Object.getPrototypeOf(killerRabbit));
// --> Rabbit {}

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// --> small // the small property is passed to from the prototype to the objects created from it

Rabbit.prototype.dance = function (){
	console.log("The " + this.type + " rabbit dances a jig.")
}
killerRabbit.dance();
// or add a new function

killerRabbit.teeth = "large";
console.log(killerRabbit.teeth);
// --> large // we overide the prototype property

// enumarable and non-enumarable properties
var map = {
	'pizza': 1,
	'touched tree': 1
}

// my console still isn't printing out "hi" even for this
// supposedly enumarable property ???? ...
// ...
// if you were to do the unthinkable:
// add to THE object prototype
Object.prototype.nonsense = "hi"
for (var name in map){
	console.log(name);
}
// pizza
// touched tree
// nonsense enumarable (ie it shows up in iterators)

// no sign of: toString because its non-enumarable
// (ie its not included in iterators)
Object.defineProperty(Object.prototype,"nonsense",
{enumerable: false, value:"hi"});
for (var name in map){
	console.log(name);
}
// pizza
// touched tree
// no sign of the hidden property nonsense

//create an object with no prototype
var map = Object.create(null)
console.log("toString" in map); // no toString function









