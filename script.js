
// BANK ACCOUNT

// ? Why parseFloat(prompt) here?
const account = {
  accountName: "Sigridur Eggertsdottir",
  balance: 100,
  getBalance: function() {
      alert("The balance is: " + this.balance);
      atm();
  },
  deposit: function() {
    let dep = parseFloat(prompt("How much would you like to deposit?"));
    if(isNaN(dep) || dep === '' ||dep === null || dep <= 0) {
      // alert(this.accountError);
      this.deposit();
    } else {
      this.balance += dep;
      this.getBalance();
    }
    atm();
  },

  // ** Something's fishy with the withdrawal function
  // TODO: Update withdrawal
  withdrawal: function () {
    parseFloat(prompt("How much would you like to withdraw?"));
    if(isNaN(this.withdrawal || this.withdrawal === '')) {
    return alert(this.accountError);
    this.withdrawal;
    } else if(this.withdrawal === null || this.withdrawal <= 0) {
      return alert(this.accountError);
      this.withdrawal
    } else if(this.withdrawal > this.balance) {
      return alert(`Amount is greater than balance: Please try another amount`);
      this.withdrawal;
    } else {
      this.balance -= this.withdrawal;
      this.getBalance;
    }
    atm();
  },

  // ** Something's fishy with the getAccountName function
  getAccountName: function () {
    if(isNaN(this.getAccountName) || this.getAccountName === '') {
      alert(this.accountError);
      atm();
    } else if(this.getAccountName === null || this.getAccountName <= 0) {
      alert(this.accountError);
      atm();
    } else {
      alert(`Name of account: ${this.accountName}`);
      atm();
    }
  },
  // TODO: Edit the getAccountName function so it looks like getBalance


  //** something's fishy with the error function
  //TODO: Edit the error function
  accountError: function () {
    alert("Incorrect input: Please enter a number between 1-5!")
    atm();
  },

  exitAccount: function () {
    const exit = confirm("Are you sure you want to exit?");
    console.log(exit);
    if(exit) {
      window.close();
    } else {
      atm();
    }
  }
};
// * In the accountError and accountExit function you can use this to show a message to the user:
// * alert("your code here and maybe properties");
// * of course you need to put a proper message and you might need to display some of the properties.


// ATM
function atm() {
  let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
  if(choice === 1) {
    account.getBalance();
  } else if(choice === 2) {
    account.deposit();
  } else if(choice === 3) {
    console.log(account.withdrawal());
  } else if(choice === 4) {
    console.log(account.getAccountName());
  } else if(choice === 5) {
    console.log(account.exitAccount());
  } else {
    console.log(account.accountError());
  }
}

// ? Why parseInt(prompt) here?
// * Be aware of that you need to add some code to this so you can display the actual input.

atm();

// ? Maybe a feedback message that lets the user know that the deposit or withdrawal was successful?
/*function accountSuccess() {
  alert("Successful action!")
}*/
