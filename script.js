// Une classe
class Evenement{
	constructor(nom, places){// c'est 
		this.nom =nom
		this.places =places
		this.participants =[]
	}
	afficher (){
		console.log(`Il rest ${this.places} places au ${this.nom}`);
	}
	participer(participant) {
		this.places --
		this.participants.push(participant)
	}
}
// Instaanciation // Deux objets
 let bingo = new                 Evenement("Bingo du Larzac" ,20)
 //------    ---                 -------------
 //objet    Instanciation           classe
 let petanque = new Evenement("Petanque party", 4)


 // c'est la même choose mais la maniere differente
/* let evenement  ={
	nom : "Bingo du Larzac",
	places: 20,
	participants:[],
	// Méthode "afficher" qui affiche le nom de l'énènement
	// afficher: function {}c'est la meme choose (afficher() {})
	afficher: function (){
		console.log(`Il rest ${this.places} places au ${this.nom}`);
		// Il reste 20 places au Bingo du Larazac
	},
			
}
let petanque = {
	nom : "Pentanque party",
	places : 4,
	participants: [],

	afficher: function () {
		console.log(`Il rest ${this.places} places au ${this.nom}`);
	},
	participer: function (participant) {
		this.places --
		this.participants.push(participant)
	}
}*/
bingo.participer("Bob")
bingo.afficher ()
