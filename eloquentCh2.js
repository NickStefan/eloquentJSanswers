// chapter 2 program structure
//

// end-of-chapter exercises
//


//triangle
var container = '';
for (var i = 0; i < 7; i++){
	container += '#'
	console.log(container)
}

//fizzbuzz
for (var i = 1; i < 101; i++){
	if (i % 3 == 0 && i % 5 !== 0)
	console.log('Fizz');
	else if (i % 3 !== 0 && i % 5 == 0)
	console.log('Buzz');
	else if (i % 3 == 0 && i % 5 == 0)
	console.log('FizzBuzz');
	else 
	console.log(i);
}

//chessboard
var grid = 8;
str= "";
for (var h = 0; h < grid; h++){
	
	for (var w = 0; w < grid; w++){
		if (h % 2 !== 0){
			if (w % 2 !== 0)
			str += '#';
			else if (w % 2 == 0)
			str += ' ';
		}
		else if (h % 2 == 0){
			if (w % 2 == 0)
			str += '#';
			else if (w % 2 !== 0)
			str += ' ';
		}
	}
	str += '\n'
}
console.log(str);

