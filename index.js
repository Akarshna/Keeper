//Order ID details and fetch Button
const orderId = document.querySelector("#order-Id");
const fetchButton = document.querySelector("#fetch-btn");

// referencing Names, email, numbers, address, state, city

const fname = document.getElementById("fName");
const lname = document.getElementById("lName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const city = document.getElementById("city");

const address1 = document.getElementById("address-1");
const address2 = document.getElementById("address-2");

//Calling fetch order details
fetchButton.addEventListener("click", fetchOrderDetails);

function fetchOrderDetails() {
  let value = orderId.value;

  fetch(
    `https://bofrike.in/wp-json/wc/v3/orders/${value}?consumer_key=ck_16e49e7d4efcb1181f8eede87ac4afe982bcece4&consumer_secret=cs_c25df858dc9f92d85c9c2ecf28d0c94170f19a55`
  )
    .then((response) => response.json())
    .then((data) => converter(data));
}
function converter(data) {
  let var1 = data.id;
  let billing = data.billing;

  fname.value = billing.first_name;
  lname.value = billing.last_name;
  address1.value = billing.address_1;
  address2.value = billing.address_2;
  city.value = billing.city;
}
// function injectNewData()

// POST starts here
function generateToken() {
  let data = {
    username: "sayyer11@gmail.com",
    password: "S@yyer11",
  };

  let options = {
    method: "POST",
    body: JSON.stringify(data),
      headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    }
  };
  fetch(
    "https://app.goswift.in/integrations/v2/auth/token/6140cc97ac120e007127278c",
    options
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}
generateToken();

function getRequest() {
  fetch("https://app.goswift.in/api/v2/serviceability/464665", {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

