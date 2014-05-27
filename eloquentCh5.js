// Chapter 5 high order functioncs
//

// end-of-chapter exercises
//

var ancestry = JSON.parse(ANCESTRY_FILE);

// flattening
var arrays = [[1,2,3],[4,5,6],[7,8,9]];

console.log(arrays.reduce( function (a,b){
	return a.concat(b);
}))

// mother-child age difference
function average(array){
	function plus(a,b) { return a+b;}
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person){
	byName[person.name] = person;
})

function ageDifference(array){
	
	var getages = function (person){
		arr.push(
			person.born - byName[person.mother].born
		);
	}
	
	array = array.filter(function(elem){
		return elem.mother != null && byName[elem.mother];
	})
	
	var arr = [];
	for (var key in array) {
		getages(array[key]);
	}
	
	avg = average(arr)
	return avg;
}

console.log(ageDifference(ancestry))

//historical life expectancy

// keep getting 'undefinied is not a function' line145

function avgPerCentury(array){
	
	var age = function(p) {return p.died - p.born;}
	
	var century = function (person){
		return Math.ceil(person.died / 100);
	}
	
	var groupBy = function(array,f){
		var groupholder = {};
		for (var i = 0; i < array.length; i++) {
			
			var e = array[i];
			var group = f(e);
			
			if (groupholder[group] === undefined){
				var centlist = [];
				centlist.push(age(e));
				groupholder[group] = centlist;

			} else {
				groupholder[group].push(age(e));
			}
		};
		return groupholder;
	}
	
	results = groupBy(array,century);
	
	var average = function(array){
		function plus(a,b){ return a + b;}
		return (array.reduce(plus)/array.length);
	}
	
	for (var key in results){
		results[key] = average(results[key])
		console.log(key +" : "+ results[key])
	}
	
}

avgPerCentury(ancestry);

// Every and then some

function every(array,f){
	for (var i = 0; i < array.length;i++){
		if(f(array[i]) == false)
			return false
	}
	return true
	
}

console.log(every([NaN,NaN,5],isNaN))

function some(array,f){
	for (var i = 0; i < array.length; i++){
		if (f(array[i]) == true)
			return true
	}
	return false
}

console.log(some([NaN,NaN,5],isNaN))


////////////////////////////

//chapter examples
//



function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(ancestry, function(person){
	return person.born > 1900 && person.born < 1925;
}));

var overNinety = ancestry.filter(function(person){
	return person.died - person.born > 90;
})

console.log(overNinety.map(function(person){
	return person.name;
}));

console.log(ancestry.reduce(function(min,cur) {
	if (cur.born < min.born) return cur;
	else return min;
}))

function average(array){
	function plus (a,b) {return a + b;}
	return array.reduce(plus) / array.length;
}

function age(p) {return p.died - p.born;}
function male(p) {return p.sex == "m";}
function female(p) {return p.sex == "f";}

console.log(Math.floor(average(ancestry.filter(male).map(age))));

// great-great-great-great...
var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
})

console.log(byName);

function reduceAncestors (person, f, defaultValue) {
	function valueFor(person) {
		if (person == null)
			return defaultValue;
		else
			return f(person, valueFor(byName[person.mother]),
							 valueFor(byName[person.father]));
		
	}
	return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
	if (person.name == "Pauwels van Haverbeke")
		return 1;
	else
		return (fromMother + fromFather) / 2;
}

var ph = byName['Philibert Haverbeke'];
console.log(reduceAncestors(ph,sharedDNA,0) / 4);



