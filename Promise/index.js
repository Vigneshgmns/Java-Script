//The Promise object represents the eventual completion
//(or failure) of an asynchronous operation

let olx = new Promise((resolve,reject)=>{
    let olxBooking = true
    if(olxBooking){
        resolve(250)
    }else{
        reject()
    }
})

olx.then((amt)=>console.log(`You booking the olx.The cost of Booking Rs.${amt}`))
.catch(()=>console.log("Sorry you not booking in the olx"))


function rapido(){
    return new Promise((resolve,reject)=>{
        let rapidoBook = false
        if(rapidoBook){
            resolve(230)
        }else{
            reject(230)
        }
    })
}

rapido().then((amt)=>console.log(`You Booked rapido the cost ${amt} `))
.catch((amt)=>console.log(`Sorry your book is rejected your payment ${amt} refund in four days. `))