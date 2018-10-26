const chai = require('chai')
const expect = chai.expect

const Pet = require('../models/pet.js');

describe('Pet', ()=>{
    it('should initialize properly', ()=>{
        var pet = new Pet('AdaCat', 'cat');
        expect(pet.name).to.equal('AdaCat');
        expect(pet.type).to.equal('cat');
    })

})