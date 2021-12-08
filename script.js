//The menu navigation
function atm() {
  let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
  switch(choice) {
    case "1":
      console.log("See balance");
      break;
    case "2":
      console.log("Make a deposit");
      break;
    case "3":
      console.log("Make a withdrawal");
      break;
    case "4":
      console.log("See account name");
      break;
    case "5":
      console.log("Exit");
      break;
    default:
      console.log("Wrong input, valid input is number between 1-5. Please try again!");
  }

  /* I chose to use the switch statement for this function,
  because I wanted to try it out to see if I can work with it in the future.
  Also, I felt that for this specific assignment, I wanted to get a better and more instinctive
  overview over the different choice options and what they prompt based on the user's input,
  since this assignment is more complex than the last one*/

// BANK ACCOUNT

const account = {
  accountName: "Sigridur Eggertsdottir",
  balance: 100, // value should be updated based on deposit or withdrawal
  getBalance: function () {
    // want to display in the prompt the current balance
    // balance should update based on the deposit or withdrawal
  },
  deposit: function () {
    parseFloat(prompt("How much would you like to deposit?"));
    // should ask for value to input
    // should let use input
    // input should update value of balance
    // errors in the input should be handled
    // when action ius finished, user should return to atm
    // it works to run the deposit function inside this very deposit function, using the this keyword

  },
  withdrawal: function () {
    parseFloat(prompt("How much would you like to withdrawal?"));
    // should ask for value to input
    // should let use input
    // input should update value of balance
    // errors in the input should be handled
    // when action ius finished, user should return to atm
  },
  getAccountName: function () {
    // should display the property accountName
    // when action is finished, use should return to atm

  },
  accountError: function () {
    // this should store the message and code that runs when user inputs incorrectly
    // the other functions should return this function
    // when action is finished, user should return to atm
    // the user should not be able to deposit 0, empty strings or negative values
    // this function should run when user make incorrect input
  },
  exitAccount: function () {
    // this should store closeWin method
    // should store the confirm method as well, to ask user to confirm action
    // when action is finished, the active browser window where the atm program is should close

  }
};
console.log(account);
console.log(account.accountName);
console.log(account.balance);


// In the deposit and withdrawal function use this code to show the prompt
// !Why do we use parseFloat(prompt)/parseInt(prompt)?
// !Why do we use it in the account object and not in the atm function

// !Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// !To handle one of the potential error you can use this piece of code
// !isNaN(variableName); // this is for incorrect input!
// !you need to change the variableName to your actual variable.

// !you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// !"A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// !Do you know what operator you should use?
// !Probably the !|| operator?

// !In the accountError and accountExit function you can use this to show a message to the user:
// ! alert("your code here and maybe properties");
// !of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
// !the atm function should hold the menu(prompt) and the switch/if else statement to navigate the options
// !Why do we use parseInt here and not in the object



  // !you can use the variable choice for your switch or if/else statement
  // !so choice will hold the value of the user input.
}
