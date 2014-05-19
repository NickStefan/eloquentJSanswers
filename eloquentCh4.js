//sum of a range
function range(start,end,step){

	if (arguments.length > 2 && start < end)
		step = step;
	else if (arguments.length > 2 && end < start)
		step = step;
	else if (start > end)
		step = -1;
	else
		step = 1;
		
	var numArr = [];
	if (step < 0){
		for (var i = start; i >= end; i += step){
			numArr.push(i);
		}}
		
	else if (step > 0){
		for (var i = start; i <= end; i += step){
			numArr.push(i);
		}}	
	return numArr;
}
console.log(range(10,2));
console.log(range(2,10));
console.log(range(2,10,2))

function sum(numArr){
	
	var total = 0;
	for (var i = 0; i < numArr.length; i++){
		total += numArr[i];
	}
	
	return total;
}

console.log(sum(range(2,10)));



// reverse an array

function reverseArray(arr){
	var arr2 = [];
	for (var i = arr.length - 1; i >= 0; i--){
		arr2.push(arr[i]);
	}
	return arr2;
}

console.log(reverseArray([1,2,3,4,5,6]));

var arrayEx = [1,2,3,4,5,6];

function reverseArrayInPlace(arr){
	
	len = Math.floor(arr.length / 2) - 1
	console.log(len);
	
	for (var i = 0; i <= len; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
}

reverseArrayInPlace(arrayEx);

console.log(arrayEx);

// A list
//v1
function arrayToList(arr) {
	
	var list = {};
	for (var i = arr.length; i >= 0; i--){
		temp = list;
		var list = {value: arr[i], rest: temp}
	}
	return list;
}
listEx = arrayToList(["a","b","c","d","e","f"])
console.log(listEx);

function listToArray(list) {
	var arr = [];
	for (var node = list; node; node = node.rest){
		if (node.value == undefined)
			return arr
		else
			arr.push(node.value);
	}
	return arr;
}

console.log(listToArray(listEx));

function prepend(elem,list){
	
	newlist = {
		value: elem,
		rest: list
	};
	return newlist;
}

console.log(prepend("Z",listEx));

function nth(list,num){
	index = num;
	
	for (var node = list; node; node = node.rest){
		if (index == 0)
			return node.value;
		index -= 1;
	}
	return undefined
}

console.log(nth(listEx,2))

function nthRec(list,num){
	if (num == 0){
		if (list.value == undefined){
			return undefined
		} else
			return list.value
	}
	else
		num -= 1
		return nthRec(list.rest,num)
}

console.log(nthRec(listEx,2));

// deep comparison
function deepEqual(arg1,arg2){
	if (arg1 == null && arg2 == null)
		return true
	else if (arg1 == null || arg2 == null)
		return false
	if (typeof(arg1) == "object" && typeof(arg2) == "object"){
		
		var count1 = 0;
		for (element in arg1){
			count1++
		}
		var count2 = 0;
		for (element in arg2){
			count2++
		}
		
		if (count1 !== count2)
			return false
		else {
			for (element in arg1){
				
				test = deepEqual(arg1[element],arg2[element]);

				if (test == false)
					return false
			}
		}
	} 
	else {
		if (arg1 === arg2)
			return true
		else
			return false
	}
	// nothing trips false...
	return true
}

var obj1 = {
	name: {first: "Nick",last: "Stefan"},
	web: {address: "SwimSolo"}
}

var obj2 = {
	name: {first: "Bob",last: "BlaBla"},
	web: {address: "BLABLABLA"}
}

console.log(deepEqual(obj1,obj2));