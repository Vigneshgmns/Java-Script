let user = {
    name:"vikki",
    age:26,
    login(){
        console.log("Hi",this.name)
        console.log("You are logged in")
    },logout(){
        console.log("You are logged out")
    }
}

let user2 = {
    name:"vijay",
    age:25,
    login(){
        console.log("Hi",this.name)
        console.log("You are logged in")
    },logout(){
        console.log("You are logged out")
    }
}
let user3 = {
    name:"vino",
    age:30,
    login(){
        console.log("Hi",this.name)
        console.log("You are logged in")
    },logout(){
        console.log("You are logged out")
    }
}

user.login()

//Class is a template of properties and methods
//Static common variables/methods for class accessed with className

class User { // parent class
        static numberOfUser = 0;
    constructor(name,age){
        //instance variable 
        this.name =name;
        this.age = age
        User.numberOfUser++
    }
    login(){
        console.log("Hi",this.name)
        console.log("You are logged in")
    }
    logout(){
        console.log("You are logged out")
    }
    static displayTotal(){
        console.log("Total number of User",this.numberOfUser)
    }

}

let userOne = new User("vino",27)
let userTwo = new User("vini",22)
let userThree = new User("Vikaram",24)
userOne.login()

User.displayTotal()

//inheritance acquiring properties of a base class

//child class
class PaidUser extends User{
    static numberOfUser = 0;
    constructor(name,age,storage){
        super(name,age)
        this.storage=storage
        PaidUser.numberOfUser++;
    }
    message(){
        console.log(`You have ${this.storage}GB free internet`)
    }
    login(){
        console.log(`Paid User login ${this.name}`)
        return this
    }
   static displayTotal(){
    console.log(`total number of user ${this.numberOfUser}`)
   }
}

let paidUser= new PaidUser("vino",26,200)
let paidUser1= new PaidUser("vino",26,200)
let paidUser2= new PaidUser("vino",26,200)
let paidUser3= new PaidUser("vino",26,200)
let paidUser4= new PaidUser("vino",26,200)
let paidUser5= new PaidUser("vino",26,200)
let paidUser6= new PaidUser("vino",26,200)

paidUser.message()
paidUser.login()
PaidUser.displayTotal()

//method chaining
paidUser.login().message()


//get and set

class Temp {
    constructor(temp){
        this._temp = temp
    }
    get temp (){
        return `${this._temp}degree`
    }
    set temp(temp){
        if(temp>100)
            temp=200
        this._temp=temp
    }

}

let temp = new Temp(30)
temp.temp=120
console.log(temp.temp)