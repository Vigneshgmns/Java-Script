//Exception Handling

try{
    nam = prompt("Enter the Your Name")
    if(nam==='')
        throw "Cannot be emty"
    if(nam === null)
        throw "Enter the string"
    console.log(nam)
}
catch(error){
    console.log(error)
}