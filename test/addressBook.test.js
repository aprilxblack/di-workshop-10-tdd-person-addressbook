const chai = require('chai')
const expect = chai.expect

const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person.js');

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

})