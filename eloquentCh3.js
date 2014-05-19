//min
function min(arg1,arg2){
	if (arg1 > arg2)
		return arg2;
	else (arg1 < arg2)
		return arg1;
}
console.log(min(22,10))

//recursion
function isEven(arg1){
	arg1 = Math.abs(arg1);

	if (arg1 == 0)
		return true
	else if (arg1 == 1)
		return false
	else
		arg1 -= 2
		return isEven(arg1);
}
console.log(isEven(-2));

//bean counting
// v1
function countBs (str){
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if (str.charAt(i) == "B")
		count += 1;
	}
	return count;
}
console.log(countBs('BBC'));

//v2

function countChar (str,char) {
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if (str.charAt(i) == char)
		count += 1;
	}
	return count;
}

console.log(countChar('BBC','B'))