// Your code here
class Cat {
    //...
    constructor (name,gender)
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    //...
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    //...
    speak(){
        if (this.gender === 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`            
        }
    }
}