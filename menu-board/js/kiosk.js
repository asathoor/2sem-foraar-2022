/**
 * file: kiosk.js
 **/

/* JSOM menu */
let dish = [{
    name: "Shepards Pie",
    image: "🥧",
    price: 123
  },
  {
    name: "Irish Stew",
    image: "🍲",
    price: 129
  },
  {
    name: "Chili Sin Carne",
    image: "🍲",
    price: 111
  }
]

let amount = 0
sum.innerHTML = amount

/* display the menu */
for (let i = 0; i < dish.length; i++) {

  theMenu.innerHTML += `
    <div class="aDish">
      <h3>  ${dish[i].name} </h3>
      <p> ${dish[i].image}  </p>
      <p> Price: ${dish[i].price} kr. </p>
      <button onclick="anOrder(
        '${dish[i].name}',
        '${dish[i].price}'
        )"> Order ${dish[i].name}</button>
    <div>
  `
}

// add order til orderlist
function anOrder(order, price, i) {
  // create list
  ordersList.innerHTML += '<li class="orderItem">' + order
  +  ' price: ' + price + ' kr.'+
  ' <button onclick="this.parentNode.remove();amount-='+ parseInt(price) +';sum.innerHTML=amount">Remove</button> </li>'
  // update amount
  amount += parseInt( price ) // string to number
  sum.innerHTML = amount + ' kr.';
  sum.innerHTML += `
    <form action="thanx.html">
    <button> Pay </button>
    </form>
  `

  // sessionStorage - save data in the session
  sessionStorage.setItem("yourOrders", orders.innerHTML)
  console.log(sessionStorage.getItem("yourOrders"))
}

// save orders session
