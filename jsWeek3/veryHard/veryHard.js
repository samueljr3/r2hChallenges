function Person(name, job, age) { 
        this.name = name;
        this.job = job;
        this.age = age;
        
    this.excercise = function(){
        console.log("Chest day best day no cap")
    };
    this.fetchJob = function(){
        console.log(`${this.name} is a ${this.job}`);
    };

}

function Programmer(name, job, age, languages){
    Person.apply(this, [name, job, age]) //transfers over from Person
    this.languages = languages;
    this.busy = true;

    this.completeTask = function(){
        this.busy = false;
    };
    this.acceptNewTask = function(){
        this.busy = true;
    }
    this.offerNewTask = function(){
        this.busy ? console.log(`${this.name} can't accept any new tasks right now`) :console.log(`${this.name} would love to take new responsibility`);
    };
    this.learnLanguage = function(lang){
        this.languages.push(lang);
    };
    this.listLanguage = function(){
        this.languages.forEach(function(i) {
            console.log(i); //prints all the languages on new line
        });
    };
}

Programmer.prototype = new Person(); //builds new person 
Programmer.prototype.constructor = Programmer; 

const person1 = new Programmer("Samuel Rivas", "Dude", 20, ["HTML", "JS"]);
const person2 = new Programmer("Dude man", "hustler", 19, ["C#", "SAS", "Assembly"]);

//tests all requirements for assignments
person1.excercise();
person1.fetchJob();
person1.offerNewTask();
person1.learnLanguage("LC3");
person1.listLanguage();

//code works for 2 people
person2.listLanguage();

