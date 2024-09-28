let cardDeatils = [
{
    "card":"watch",
    "price":1300
},
{
    "card":"airbods"
    ,"price":1600
},
{
    "card":"Tv",
    "price":23500
},
{
    "card":"Phone",
    "price":1300
}
];


let datiles = JSON.stringify(cardDeatils)

console.log(datiles)

let parse = JSON.parse(datiles)

console.log(parse)