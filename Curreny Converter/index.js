let select = document.querySelectorAll(".currency");
// console.log(select)
let btn = document.getElementById("btn");
let inpu = document.getElementById("input");
let resu =    document.getElementById('result')

fetch(`https://api.frankfurter.app/currencies`)
  .then((res) => res.json())
  .then((data) => displayCountry(data));

function displayCountry(data) {
  let country = Object.entries(data);
    //  console.log(country[0][0])
  for (let i = 0; i < country.length; i++) {
    let item = country[i][0];
    let opt = `<option value="${item}">${item}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
    // console.log(item)
  }
}

btn.addEventListener("click", () => {
  let cur1 = select[0].value;
  let cur2 = select[1].value;
  let input = inpu.value;
  
  if(cur1===cur2){
     alert("The Country Are Same So Change Country....!")  
  }else if (input===""){
     alert("Place enter the Input...!")
  }else{
    convert(cur1,cur2,input)
  }
});

function convert(cur1,cur2,input){
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${input}&from=${cur1}&to=${cur2}`)
      .then((resp) => resp.json())
      .then((data) => {
        let price = Object.entries(data.rates)[0][1]
        console.log(price)
        resu.value=price
      });
}
