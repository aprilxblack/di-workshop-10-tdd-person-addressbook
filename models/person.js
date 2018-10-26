class Person {
    constructor(firstName, surname, dob){
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.surname = surname;
        this.dob = dob;
        this.emails = [];
        this.phoneNumbers = [];
        this.pets = [];
    }

    fullname(){
        return this.firstName + ' ' + this.surname;
    }

    addEmail(email){
        this.emails.push(email);
    }

    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber);
    }

    returnFormattedDetails(){
        var details = this.firstName + ' ' + this.surname + '\n'
        + '----------' + '\n'
        + 'DOB: ' + this.dob + '\n'
        + '\n'
        + 'Email Addresses:' + '\n'
        var emailAdresses = ''
        if(this.emails.length > 0){
            for(var i = 0; i < this.emails.length; i++){
                emailAdresses += '- ' + this.emails[i] + '\n'
            }
        }
        var phones = ''
        if(this.phoneNumbers.length > 0){
            for(var number of this.phoneNumbers){
                phones += '- ' + number + '\n'
            }
        }
        
        return details + emailAdresses + '\n' + 'Phone Numbers:' + '\n' + phones;
    }

    addPet(pet){
        this.pets.push(pet);
    }
}

module.exports = Person