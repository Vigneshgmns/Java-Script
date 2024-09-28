async function amzon() {
  return "Your oder succesfuly placed...!";
}

console.log(amzon());

amzon()
  .then((msg) => console.log(msg));




let flipkart = new Promise((resolve, reject) => {
  let flipkartOrder = true;
  if (flipkartOrder) {
    setTimeout(resolve, 5000, "Your order is placed one day");
  } else {
    reject("Your order not Placed");
  }
});

async function orderPlace() {
  try {
    let res = await flipkart;
    console.log(res);
    console.log("Thank bye..!")
  } catch (error) {
    console.log(error);
  }
}

orderPlace();
