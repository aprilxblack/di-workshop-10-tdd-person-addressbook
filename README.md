# Workshop: Using TDD to build an AddressBook

This workshop builds on the previous TDD workshop.

⚠️ **You should finish that workshop before moving onto this one!**

Here's the format for this workshop:

1. **Setting up a project** (3 min video)
2. **Test Driving a new class** (23 min video)
3. **Task 1**
4. **Adding a second class** (14 min video)
5. **Task 2**
6. **Task 3**

### Key Points

Some key points to bear in mind while you work through this...

- There's nothing _fundamentally_ new in here. We're joining together a bunch of concepts we've already covered. This is a chance to **practice** and consolidate your learning.
- Because of this, the videos go at a slightly faster pace than previous ones - use the ⏸ button if you need to!
- It's okay if you don't finish this workshop, but if you take the time to do it you'll find the assignments easier to complete.
- Unlike other workshops, there are no questions to answer in the `README.md`.
- You'll see some ES2015 syntax in the videos. It's up to you whether you use them in you own code.

| ES2015 Syntax       | Equivilent Syntax |
| ------------------- | ----------------- |
| `()=> {}`           | `function() {}`   |
| `const thing = 'something'` | `var thing = 'something'` |

### Things we'll recap during this workshop

- Command line, git and Node.js setup.
- Arrays, loops and functions.
- Object Oriented Design.
- OOP - Creating classes in Javascript
- TDD with Mocha and Chai

## 1. Setting up a project

This is a short recap of some command line, git and Node.js stuff. There's no need to follow along in your editor, since this repo already has the stuff set up for you.

[**Open screencast**](https://adaapp.github.io/screencasts/person-workshop-1/index.html) (or use [youtube](https://youtu.be/8nFKgX53dgk))

## 2. Test driving a new class

 ## Person
- [X] Constructor. Check it worked.
- [X] Capitalizing first name.
- [X] Fullname method.
- [X] Emails attribute and addEmail.

## AdressBook

- [ ] Create the class. Have entries attribute ([])
- [ ] add method which takes a person object


We'll walk throught the process of creating a class, practicing OOP and TDD as we go. Follow along in your editor as you watch the video.

[**Open screencast**](https://adaapp.github.io/screencasts/person-workshop-2/index.html) (or use [youtube](https://youtu.be/T0LDcCN9FUM))

⚠️ Make sure you've implemented everything in the video before moving on to the next section. And **make sure you've commited your work**.

## 3. Task 1 - most people should complete these

1. Add an `addPhoneNumber()` method that works just like the `addEmail()` method, but adds to a `phoneNumbers` array. **Use TDD**.

2. Add a `returnFormattedDetails()` method that returns a well formatted multi-line string in this format:

```
Joe Bloggs
----------
DOB: 1 Jan 1990

Email Addresses:
- joe@example.com
- joe.bloggs@workexample.com

Phone Numbers:
- 07712345678
- 07654321987
```

```
Amy Noth
--------
DOB: 2 Jan 1993

Email Addresses:
- amy@example.com
- amy.noth@workexample.com

Phone Numbers:
- 07712555443
```

##### Tips

- Pay close attention to the format of the examples above.
- Think about the 4-phase test. What setup code do you need for this test?

⚠️ Be sure to commit your work before moving on to the next video.

## 4. Adding a second class

Watch the video to the end first, then rewind and follow along in your project.

[**Open screencast**](https://adaapp.github.io/screencasts/person-workshop-3/index.html) (or use [youtube](https://youtu.be/xBxovz2p78Q))

⚠️ Make sure you've implemented everything in the video before moving on to the next section. And **make sure you've commited your work**.

## 5. Task 2 - most people should complete these

1. Implement a `findByFirstName()` method on `AddressBook` which takes a search term as a string and returns an array of all the people whose first names match the string.
2. Implement a similar method for searching by surname.
3. Add a `Pet` class and a `addPet()` method to `Person` that works something like this:

```js
person = new Person('Joe', 'Bloggs', '1 Jan 1990')
pet1 = new Pet('AdaCat', 'cat')
pet2 = new Pet('Rover', 'dog')
pet2 = new Pet('Nemo', 'goldfish')

pet1.sound() //=> 'Meow'
pet2.sound() //=> 'Woof'
pet3.sound() //=> 'Blub'

person.addPet(pet1)
person.addPet(pet2)
person.addPet(pet3)
person.pets //=> Array containing all three pet objects
```

## 6. Task 3 - do this if you've completed all the other stuff

Add a `save()` method to your addressbook that saves all of the data in it to a JSON file called `addressBook.json`.

## Extension Work

If you fancy a challenge, work on improving your address book. Here are some ideas:

- Make your search methods fuzzy, so they also allow partial matches.
- Look for abstractions and opportunities to refactor your code.
- Add a `print()` method to the address book that prints all of the entries' details out to the console (don't bother writing tests for this one - testing output to the console is hard).
- Add a static `load()` method to your `AddressBook` that takes the path to an `addressBook.json` file, loads the data and returns a pre-populated `AddressBook` instance.
- Implement a simple command line interface that uses the AddressBook and Person classes.
