class Contact{
	constructor(firstname,lastname,phone,email){
		this.firstname = firstname
		this.lastname = lastname
		this.phone = phone
		this.email = email
	}	
	 call(destination){
      
	   console.log(`${this.firstname} appelle ${destination.firstname}`);
	 }
	 send(destination){
		console.log(`${this.email}envoie un mail à${destination.email}`);
	 }
}

class PhoneBook{
	constructor(contacts =[]){
		this.contacts=contacts
	}
	addContact(contact){
		this.contacts.push(contact)
	}
	getContact(firstname,lastname){
		return this.contacts.find((item)=> item.firstname === firstname && item.lastname ===lastname)
	}
	getContactByLastName(lastname){
		return this.contacts.filter((item) => item.lastname === lastname)
	}
}
let bob = new Contact("bob" ,"bobby", "+33 7 86 36 81 38","bobby.bo@bo.com")
let alice = new Contact("alice" ,"bobby", "+33 7 77 64 32 00","bobby.alice@gmail.com")
let carole = new Contact("carole" ,"dupont", "+33 7 77 64 32 88","carole@gmail.com")


let phonebook = new PhoneBook([bob ,alice])

phonebook.addContact(carole)

console.log(phonebook.getContactByLastName("bobby"));
