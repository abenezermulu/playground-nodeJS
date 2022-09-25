class Person {
    constructor (name = "Christopher Andrew") {
        this.name = name;
    }

    getName(){ 
        console.log(this.name); 
    }
}

module.exports = Person; 