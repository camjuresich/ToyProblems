/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. 
Johnny knows that no two farmers handshake more than once. 
He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated 
this year just by counting all the handshakes.

Help Johnny by writing a function,
that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes 
(a pair of farmers handshake only once). */

const getParticipants = function(handshakes) { debugger
	if (handshakes <= 0) {
		return 0;
	} 
  if (handshakes === 1) {
    return 2;
  }
	let currHandshakes = 0;
	const persons = [0];
	let lastPerson = 1;
	while (currHandshakes < handshakes) {
		for (let i = 0; i < persons.length; i++) {
			for (let j = lastPerson; j < persons.length; j++) {
				currHandshakes++;
			}
		}
		lastPerson = persons.length;
    
		persons.push(persons.length)
	}
	
	return persons.length
}