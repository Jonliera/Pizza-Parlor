//Business logic

function Pizza (size,salami,pepperoni,ham,sausage){
  this.size = size;
  this.salami = salami;
  this.pepperoni = pepperoni;
  this.ham = ham;
  this.sausage = sausage;
}

Pizza.prototype.getTotalToppings = function() {
  let amountOfToppings = 0;
  if (this.salami){
    amountOfToppings +=1;
  }
  if (this.pepperoni){
    amountOfToppings +=1;
  }
  if (this.ham){
    amountOfToppings +=1;
  }
  if (this.sausage){
    amountOfToppings +=1;
  }
  
  return amountOfToppings;
}

Pizza.prototype.getPrice = function(){
  const basePrice = 8;
  const costOfASingleTopping = 1;
  const amountOfToppings = this.getTotalToppings();

  const costOfToppings = costOfASingleTopping * amountOfToppings;

  let sizeDefinition;
  if(this.size==='small'){
    sizeDefinition = 1;
  }
  if (this.size==='medium'){
    sizeDefinition = 3;
  }
  if (this.size==='large'){
    sizeDefinition = 6
  }
  const totalCost = basePrice + sizeDefinition + costOfToppings;
  return totalCost;
}




