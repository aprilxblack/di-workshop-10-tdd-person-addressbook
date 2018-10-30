const fs = require('fs');
const Person = require('../models/person.js');
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
            var counter = 0;
            for(var i = 0; i < name.length; i++){
                if(person.firstName[i] == name[i]){
                    counter++;
                } 
            }
            if(counter == name.length){
                fullNames.push(person.firstName + ' ' + person.surname);
            }
        }
        if (fullNames.length == 0){
            console.log();
            console.log('No results matched.');
        }
        else{
            console.log()
            console.log('These are your results:')
            for (var name of fullNames){
                console.log(name);
            }
        }
        
    }

    findBySurname(surname){
        var fullNames = [];
        for(var person of this.entries){
            var counter = 0;
            for(var i = 0; i < surname.length; i++){
                if(person.surname[i] == surname[i]){
                    counter++;
                } 
            }
            if(counter == surname.length){
                fullNames.push(person.firstName + ' ' + person.surname);
            }
        }
        if (fullNames.length == 0){
            console.log();
            console.log('No results matched.');
        }
        else{
            console.log()
            console.log('These are your results:')
            for (var name of fullNames){
                console.log(name);
            }
        }
    }

    save(name){
        var jsonString = JSON.stringify(this.entries, null, 2);
        fs.writeFileSync(name + '.json', jsonString, 'utf-8');
    }

    load(path){
        var loadedBook = fs.readFileSync(path, 'utf-8');
        loadedBook = JSON.parse(loadedBook);
        var savedEntries = [];

        for (var entry of loadedBook){
            var person = new Person(entry.firstName, entry.surname, entry.dob);
            person.emails = entry.emails;
            person.phoneNumbers = entry.phoneNumbers;
            person.pets = entry.pets;
            savedEntries.push(person);
        }

        this.entries = savedEntries;
    }

    print(){
        //console.log(this.entries);

        for(var i = 0; i < this.entries.length; i++){
            console.log(i + 1 + '.')
            console.log(this.entries[i].firstName + ' ' + this.entries[i].surname)
            console.log(this.entries[i].dob);
            if(this.entries[i].emails != undefined){
                console.log('- E-mails:');
                for(var email of this.entries[i].emails){
                    console.log(email);
                }
            }
            if(this.entries[i].phoneNumbers != undefined){
                console.log('- Phone numbers:');
                for(var number of this.entries[i].phoneNumbers){
                    console.log(number);
                }
            }
            if(this.entries[i].pets != undefined){
                console.log('- Pets:');
                for(var pet of this.entries[i].pets){
                    console.log(pet.name + ' (' + pet.type + ')');
                }
            }
            
            console.log();

        }
    }

}

module.exports = AddressBook