const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js');

describe('Person', ()=>{
    it('should initialize properly', ()=> {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990');

        expect(person.firstName).to.equal('Joe');
        expect(person.surname).to.equal('Bloggs');
        expect(person.dob).to.equal('1 Jan 1990');
        expect(person.emails).to.deep.equal([]);
        expect(person.phoneNumbers).to.deep.equal([]);
    })
    it('should capitalize the first name', ()=> {
        var person = new Person('amy', 'Nother', '1 Jan 1990');

        expect(person.firstName).to.equal('Amy');
    })
    it('should return a full name', ()=> {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990');

        expect(person.fullname()).to.equal('Joe Bloggs');
    })
    it('should accept new emails and add them to the array', ()=> {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990');

        person.addEmail('joe@example.com');
        person.addEmail('joe.bloggs@workexample.com');

        expect(person.emails).to.deep.equal(['joe@example.com', 'joe.bloggs@workexample.com'])
    })
    it('should accept new phone numbers and add them to the array', ()=> {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990');

        person.addPhoneNumber('123456789');
        person.addPhoneNumber('987654321');

        expect(person.phoneNumbers).to.deep.equal(['123456789', '987654321']);
    })
    it('should return a well formatted multi-line string', ()=> {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
        
        person.addEmail('joe@example.com');
        person.addEmail('joe.bloggs@workexample.com');
        
        person.addPhoneNumber('123456789');
        person.addPhoneNumber('987654321');

        expect(person.returnFormattedDetails()).to.equal('Joe Bloggs' + '\n' + '----------' + '\n' + 'DOB: 1 Jan 1990' + '\n'+ '\n' + 'Email Addresses:' + '\n'+ '- joe@example.com' + '\n'+ '- joe.bloggs@workexample.com' + '\n'+ '\n'+ 'Phone Numbers:' + '\n'+ '- 123456789' + '\n'+ '- 987654321' + '\n');
    })
    
})