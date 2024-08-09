class BankAccount {
  #accountNumber;
  #accountHolderName;
  #balance;

  constructor(accountNumber, accountHolderName, initialBalance) {
      this.#accountNumber = accountNumber;
      this.#accountHolderName = accountHolderName;
      this.#balance = initialBalance;
  }

  getDetails() {
      return `Account Holder: ${this.#accountHolderName}, Account Number: ${this.#accountNumber}`;
  }

  deposit(amount) {
      if (amount > 0) {
          this.#balance += amount;
          return `Deposit successful. New balance: $${this.#balance.toFixed(2)}`;
      } else {
          return 'Deposit amount must be positive.';
      }
  }

  withdraw(amount) {
      if (amount > 0) {
          if (amount <= this.#balance) {
              this.#balance -= amount;
              return `Withdrawal successful. New balance: $${this.#balance.toFixed(2)}`;
          } else {
              return 'Insufficient funds.';
          }
      } else {
          return 'Withdrawal amount must be positive.';
      }
  }

  getBalance() {
      return `Current balance: $${this.#balance.toFixed(2)}`;
  }
}

// Bank Account Management System
class Bank {
  constructor() {
      this.accounts = [];
  }

  addAccount(account) {
      this.accounts.push(account);
  }

  listAccounts() {
      return this.accounts.map(account => account.getDetails()).join('\n');
  }

  findAccount(accountNumber) {
      return this.accounts.find(account => account.accountNumber === accountNumber);
  }
}

// Create a new bank
const bank = new Bank();

// Add accounts to the bank
const account1 = new BankAccount('123456789', 'Alice Johnson', 1000);
const account2 = new BankAccount('987654321', 'Bob Smith', 500);

bank.addAccount(account1);
bank.addAccount(account2);

// List all accounts in the bank
console.log('Bank accounts:');
console.log(bank.listAccounts());

// Deposit money into an account
console.log(`\nDepositing into Alice's account:`);
console.log(account1.deposit(200));

// Withdraw money from an account
console.log(`\nWithdrawing from Bob's account:`);
console.log(account2.withdraw(300));

// Check account balances
console.log(`\nAccount balances:`);
console.log(account1.getBalance());
console.log(account2.getBalance());
