// Version objet
let Julien ={
	// propriété
	firstname: "julien",

	// méthode
	say : function (message) {
		console.log(`${ this. firstname} dit: ${message}`);	
	}
}
Julien.say("Bonjour à toutes et à tous !")
// Version procédurale (variable + fonction)

// déclaration de la fonction
function say(firstname, message) {
	console.log(`${firstname} dit: ${message}` );
	
}