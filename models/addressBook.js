const fs = require('fs');
class AddressBook{

    constructor(){
        this.entries = []
    }

    add(person){
        this.entries.push(person)
    }

    findByFirstName(name){
        var fullNames = [];
        for(var person of this.entries){
            if(person.firstName == name){
                fullNames.push(person.firstName + ' ' + person.surname);
            }
        }
        return fullNames;
    }

    findBySurname(surname){
        var fullNames = [];
        for (var person of this.entries){
            if(person.surname == surname){
                fullNames.push(person.firstName + ' ' + person.surname);
            }
        }
        return fullNames;
    }

    save(){
        var jsonString = JSON.stringify(this.entries, null, 2);
        fs.writeFileSync('addressBook.json', jsonString, 'utf-8');
    }

}

module.exports = AddressBook