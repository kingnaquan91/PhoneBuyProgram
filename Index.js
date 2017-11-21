/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* PhoneBuyer Program - Problem #1 Challenge | SESSION 2 - What Is Programming included in SESSION 1 slides */

//declare constants
const TAX_RATE = .07;
const PHONE_PRICE = 850;
const ACCESSORY_PRICE = 150;
const BUDGET = 10000;

//declaring variables
var accountBalance = 10000; //will later change to BUDGET - remaining_budget
var phoneCount = 0;
var totalPrice = 0;


//function to calculate and return the taxes
function calcTaxes(cost){
  
  cost = (cost + (cost * TAX_RATE)).toFixed(2);//add 2 decimal places
  console.log("Taxes come up to: $" +(cost*TAX_RATE).toFixed(2));
  return cost; 
}

//function to format and return the total price
function calcPrice(){
  
  var cost = PHONE_PRICE + ACCESSORY_PRICE; //total price of a phone with the accessory
  
  //keep buying phones while you are within budget
  while(accountBalance > 0){
    
    totalPrice = calcTaxes(cost); //calculate taxes
    
    if(accountBalance < totalPrice)
    {
      //print message if you cannot afford this purchase
      console.log("Sorry, Insufficient Funds. Please try a different form of payment");
      break; //end program if there are insufficient funds   
    }
    else
    {
        accountBalance = accountBalance - totalPrice;
        phoneCount++;
        console.log("Phone Count: " +phoneCount);
        console.log("Your account balance is: " + "$"+accountBalance);
        
    }
  }//while
}//func

calcPrice(); //call function to run program
