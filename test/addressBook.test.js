const chai = require('chai')
const expect = chai.expect
const fs = require('fs');

const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person.js');
const Pet = require('../models/pet.js');

describe('AddressBook', ()=>{
    it('initializes properly', ()=> {
        book = new AddressBook();
        expect(book.entries).to.deep.equal([]);
    })

    it('can add people to the book', ()=> {
        book = new AddressBook();
        person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');
        book.add(person1);

        expect(book.entries.length).to.equal(1);
        expect(book.entries[0].firstName).to.equal('Joe');
    })
    it('should find people by first name', () => {
        book = new AddressBook();
        person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');
        person2 = new Person('Joe', 'Smith', '1 Jan 2000');

        book.add(person1);
        book.add(person2);

        expect(book.findByFirstName('Joe')).to.deep.equal(['Joe Bloggs', 'Joe Smith']);
    })
    it('should find people by last name', () =>{
        book = new AddressBook();
        person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');
        person2 = new Person('Jacob', 'Bloggs', '1 Jan 2000');

        book.add(person1);
        book.add(person2);

        expect(book.findBySurname('Bloggs')).to.deep.equal(['Joe Bloggs', 'Jacob Bloggs']);
    })
    it('should save an addressbook into a file', ()=>{
        book = new AddressBook();
        person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');
        person2 = new Person('Jacob', 'Bloggs', '1 Jan 2000');
        person1.addEmail('joe@example.com');
        person2.addEmail('joe.bloggs@workexample.com');
        
        person1.addPhoneNumber('123456789');
        person2.addPhoneNumber('987654321');
        pet1 = new Pet('AdaCat', 'cat')
        pet2 = new Pet('Rover', 'dog')
        pet3 = new Pet('Nemo', 'goldfish')

        person1.addPet(pet1)
        person2.addPet(pet2)
        person2.addPet(pet3)
        book.add(person1);
        book.add(person2);
        book.save();
        var savedBook = fs.readFileSync('addressBook.json', 'utf-8');
        savedBook = JSON.parse(savedBook)

        expect(savedBook[0].firstName).to.equal('Joe');
        expect(savedBook[0].pets[0].name).to.equal('AdaCat');
    })
})