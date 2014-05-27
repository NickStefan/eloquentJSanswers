// Chapter 6 secret life of objects 
//


// end-of-chapter exercises
//

// A Vector Type
function Vector(x,y){
	this.x = x;
	this.y = y;
	this.plus = function(othervector){
		var newX = othervector.x + this.x;
		var newY = othervector.y + this.y;
		return new Vector(newX,newY);
	}
	this.minus = function(othervector){
		var newX = othervector.x - this.x;
		var newY = othervector.y - this.y;
		return new Vector(newX,newY);
	}
	this.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
}

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(3,4).length);



// Another Cell

function repeat(string, times){
	var result = "";
	for (var i = 0; i < times; i++){
		result += string;
	}
	return result;
}

function TextCell(text) {
	// split the text into number of rows of text
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function(){
	// reduce the array of rows down to a min width
	// reach next element of the array evaluate the current
	// width (ie length) against the previous elements length
	// return the max length needed in this array
	// the ,0) after the callback refers to optional initial value of the array
	
	return this.text.reduce(function(width, line) {
		return Math.max(width,line.length);
	}, 0);
};

TextCell.prototype.minHeight = function() {
	return this.text.length;
}

TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i ++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
}

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
};

StretchCell.prototype.minWidth = function() {
	return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function(){
	return Math.max(this.inner.minHeight() + 1, this.height);
};

StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1).concat(
		[repeat(" ", width)]);
}

var sc = new StretchCell(new TextCell("abc"),1,2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3,2));



// Sequence Interface

function logFive(sequence) {
	var counter = 0;
	for (var key in sequence) {
		if (counter < 5) {
			if (sequence.hasOwnProperty(key)){
				console.log(sequence[key]);
				counter++
			}
		}
	}
};

function ArraySeq (array) {
	
	var obj = {};
	
	for (var i = 0; i < array.length; i++){
		obj[i] = array[i];
	}
	return obj;
}

function RangeSeq(from,to){
	var obj = {};
	
	for (var i = from; i < to; i++){
		obj[i] = i;
	}
	return obj;
}

logFive(new ArraySeq([1,2]));

logFive(new RangeSeq(100,1000));




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

// Laying Out A Table
// see exercise "A New Cell"






