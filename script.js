// BANK ACCOUNT

const account = {
  accountName: "Sigridur Eggertsdottir",
  balance: 100,
  getBalance: function () {
    alert("The balance is: " + this.balance);
    atm();
  },
  deposit: function () {
    let dep = parseFloat(prompt("How much would you like to deposit?"));
    if (isNaN(dep) || dep === "" || dep === null || dep <= 0) {
      alert(this.accountError());
      this.deposit();
    } else {
      this.balance += dep;
      this.getBalance();
    }
    atm();
  },
  withdrawal: function () {
    let withDraw = parseFloat(prompt("How much would you like to withdraw?"));
    if (
      isNaN(withDraw) ||
      withDraw === "" ||
      withDraw === null ||
      withDraw <= 0
    ) {
      alert(this.accountError());
      this.withdrawal();
    } else if (withDraw > this.balance) {
      alert(
        "Amount is greater than current balance: Please try another amount."
      );
      this.withdrawal();
    } else {
      this.balance -= withDraw;
      this.getBalance();
    }
    atm();
  },
  getAccountName: function () {
    const accName = alert("Name of account: " + this.accountName);
    console.log(accName);
    atm();
  },
  accountError: function () {
    alert("Incorrect input: Please enter a number between 1-5");
    atm();
  },
  exitAccount: function () {
    const exit = confirm("Are you sure you want to exit?");
    console.log(exit);
    if (exit) {
      window.close();
    } else {
      atm();
    }
  },
};

// ATM
function atm() {
  let choice = parseInt(
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );
  if (choice === 1) {
    account.getBalance();
  } else if (choice === 2) {
    account.deposit();
  } else if (choice === 3) {
    console.log(account.withdrawal());
  } else if (choice === 4) {
    console.log(account.getAccountName());
  } else if (choice === 5) {
    console.log(account.exitAccount());
  } else {
    console.log(account.accountError());
  }
}

atm();

// * QUESTIONS
// ? Why do we use parseFloat(prompt) in the deposit and withdrawal functions?
// ? Why do we use parseInt(prompt) in the atm function?
// ? What kind of conditional did I use, switch or if/else-statement?
// ? Why did I choose it?
