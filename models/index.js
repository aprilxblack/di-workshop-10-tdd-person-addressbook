const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person.js');
const Pet = require('../models/pet.js');
var readLine = require('readline-sync')

book = new AddressBook();

var personSelected;

console.log('Welcome to the Address Book. Use the menu below.');

while(true){
    console.log();
    console.log('PRINT - shows all the entries in the current Address Book');
    console.log('ADD - adds an entry');
    console.log('SAVE - saves the current address book into a file');
    console.log('LOAD - loads previously saved address book');
    console.log('SELECT - selects an entry to edit');
    console.log('ADD EMAIL');
    console.log('ADD PET');
    console.log('ADD PHONE NUMBER');
    console.log('SEARCH BY FIRSTNAME');
    console.log('SEARCH BY SURNAME');

    var userInput = readLine.question('');

    userInput = userInput.toLowerCase();

    if(userInput == 'print'){
        if (book.entries.length == 0){
            console.log();
            console.log('Your book is empty.');
        }
        else{
            book.print();
        }
    }
    else if(userInput == 'add'){
        var firstName = readLine.question('First name: ');
        var surname = readLine.question('Surname: ');
        var dob = readLine.question('Date of birth:');

        var newPerson = new Person(firstName, surname, dob);
        book.add(newPerson);
    }
    else if(userInput == 'save'){
        var bookName = readLine.question('Your save file name:');
        book.save(bookName);
        console.log('Your book was saved as ' + bookName + '.json');
    }
    else if(userInput == 'load'){
        try{
            var bookName = readLine.question('Your save file name:');
            book.load(bookName + '.json');
            console.log('Successfully loaded ' + bookName + '.json');
        }
        catch(error){
            console.log()
            console.error('This save does not seem to exist. Try again.')
        }
    }
    else if (userInput == 'select'){
        console.log()
        console.log('These are all the people in the address book. Write the number of the one you want to select.');
        book.print();
        var index = readLine.question('');
        var index = parseInt(index) - 1;
        if (index > book.entries.length){
            console.log();
            console.log('Invalid input.')
        }
        else{
            personSelected = book.entries[index];
            console.log('You have selected: ' + book.entries[index].firstName + ' ' + book.entries[index].surname);
        }
    }
    else if ((userInput == 'add pet' || userInput == 'add phone number' || userInput == 'add email') && personSelected == undefined){
        console.log();
        console.log('Select a person first.')
    }
    else if (userInput == 'add pet'){
        console.log();
        console.log('You are adding pet to: ' + personSelected.firstName + ' ' + personSelected.surname);
        var petName = readLine.question('Your pet name: ');
        var petType = readLine.question('Your pet type: ');
        var pet = new Pet(petName, petType)

        for(var i = 0; i < book.entries.length; i++){
            if(personSelected.firstName == book.entries[i].firstName && personSelected.surname == book.entries[i].surname){
              book.entries[i].pets.push(pet);
            }
        }
    }
    else if(userInput == 'add email'){
        console.log();
        console.log('You are adding email to: ' + personSelected.firstName + ' ' + personSelected.surname);
        var email = readLine.question('Your email: ');

        for(var i = 0; i < book.entries.length; i++){
            if(personSelected.firstName == book.entries[i].firstName && personSelected.surname == book.entries[i].surname){
              book.entries[i].emails.push(email);
            }
        }
    }
    else if(userInput == 'add phone number'){
        console.log();
        console.log('You are adding phone number to: ' + personSelected.firstName + ' ' + personSelected.surname);
        var phoneNumber = readLine.question('Your phone number: ');

        for(var i = 0; i < book.entries.length; i++){
            if(personSelected.firstName == book.entries[i].firstName && personSelected.surname == book.entries[i].surname){
              book.entries[i].phoneNumbers.push(phoneNumber);
            }
        }
    }
    else if(userInput == 'search by firstname'){
        var firstname = readLine.question('Write first name here:');
        book.findByFirstName(firstname);
    }
    else if (userInput == 'search by surname'){
        var surname = readLine.question('Write surname here:');
        book.findBySurname(surname);
    }
    else{
        console.log();
        console.log('Invalid input. Try again.');
    }

}