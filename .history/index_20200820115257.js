// Your code here
class Cat {
    //...

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
        if (this.male === true) {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`            
        }
    }
}