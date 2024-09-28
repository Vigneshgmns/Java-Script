// Set Object - Collection of values 
//            - Values are unique 

let arr = [1,2,3,4,5,6,6,7,7,5,4,3,2,8,9,1,10]
let set = new Set(arr)

console.log(arr)
console.log(set)

let mySet = new Set()
mySet.add(5)
mySet.add(4)
mySet.add(3)
mySet.add({name:"vikki",age:24})

let obj = {name:"vikki",age:24}
mySet.add(obj)

console.log(mySet)
console.log(mySet.has(4))
console.log(mySet.size)
console.log(mySet.delete(3))


let arra = Array.from(mySet)
console.log(arra)



//Map
//Map objects are collection of key-value pairs.
//A  key in the map may only occur once 
//key or value can be object 

let map = new Map()
map.set("a",1)
map.set("b",2)
map.set("c",3)
map.set("a",3)

console.log(map)
console.log(map.entries())
console.log(map.keys())
console.log(map.get("b"))
console.log(map.size)
console.log(map.values())

map.forEach((v,k)=>{
    console.log("key", k , "value", v*3)
})



//Memory loaction

//Stack     and    Heap

//Primitive data type       Reference type

// String          array 
// Number          funcation
// Boolean         object
// BigInt
// Symbol
// undefined
// null