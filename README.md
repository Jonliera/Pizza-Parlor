# _Pizza Parlor_

#### By _**Jonathan Liera**_

####  A webpage to determine a pizza prcie base on the user selection

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Javascript_

## Description
A webpage that Uses HTML, Javascript and CSS to allow a user choose any size of pizza and toppings and return the price.

## Tests

Describe: Pizza()

Test: It should return a Pizza object with properties of size and toppings
Code : let testPizza = new Pizza (size:small, hasSalami:true, hasPepperoni:true,hasHam:false,hasSausage:true);
Expected Output = Pizza {size :'small',salami:'true',pepperoni:'true',ham:'false',sausage:'true'}

Describe: Pizza.prototype.getTotalTopings()

Test: It should return the amount of toppings added to a pizza
Code : let testPizza = new Pizza ('large','true');
testPizza.getTotalToppings();
Expected Output = 1

Describe: Pizza.prototype.getPrice()

Test: It should return the total cost of the Pizza adding the toppings to the size selcted
Code : let pizzaOne = new Pizza('small','false','false','true');
pizzaOne.getprice
Expected Output:13


## Setup/Installation Requirements

* _Click link above for the gitHub repository_
* _Clone the repository_
* _Save the repository to your computer_
* _Click the index.html file_
* _It should open in your preferred web browser_

## Known Bugs

* _No known bugs_

## License

_If you have any questions or concerns please contact me @ jonliera1@gmail.com. You are also welcome to contribute if you feel you may so._

*_MIT_

Copyright (c) _Aug 2022_ _Jonathan Liera_