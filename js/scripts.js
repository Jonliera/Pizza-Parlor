//Business logic

function Pizza (size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 8;
}

Pizza.prototype.getTotalToppings = function() {
  return this.toppings.length;
}

Pizza.prototype.getPrice = function(){
  const basePrice = 8;
  const costOfASingleTopping = 1;
  const amountOfToppings = this.getTotalToppings();

  const costOfToppings = costOfASingleTopping * amountOfToppings;

  let sizeDefinition;
  if(this.size==='Small'){
    sizeDefinition = 1;
  }
  if (this.size==='Medium'){
    sizeDefinition = 3;
  }
  if (this.size==='Large'){
    sizeDefinition = 6
  }
  const totalCost = basePrice + sizeDefinition + costOfToppings;
  this.price = totalCost
  return totalCost;
}

//UI Logic

function handleFormSubmission(event){
  event.preventDefault();
const pizzaSize = document.querySelector('#size').value;
let toppingsArray = [];
    document.querySelectorAll("input[name=topping]:checked").forEach(function(element) {
      let topping = element['value'];
      toppingsArray.push(topping);
      });
const newPizza =new Pizza(pizzaSize,toppingsArray);
//const totalPrice = newPizza.getPrice();
document.querySelector("#totalprice").innerText = newPizza.getPrice();
}

window.addEventListener('load',function(){
  document.querySelector('form#order-form').addEventListener('submit',handleFormSubmission)
});