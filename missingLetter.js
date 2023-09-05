function findMissingLetter(array) { 
	const alpha = 'abcdefghijklmnopqrstuvwxyz';
	const test = array.join('').toLowerCase();
	// iterate over the string to find the starting value of where we should start our comparison
	let counter = 0
	while (alpha[counter] !== test[0]) {
		counter++;
	}
	let counter2 = 0;
	while (alpha[counter] === test[counter2]) {
		counter++;
		counter2++;
	}
	if (array[0] === test[0]) return alpha[counter]
	return alpha[counter].toUpperCase();

}
console.log(findMissingLetter(['a', 'b', 'd']));
console.log((findMissingLetter(['O','Q','R','S'])));

