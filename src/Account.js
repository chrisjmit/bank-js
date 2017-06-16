function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  this.notNumber(amount);
  this.transactions.push(new Transaction(amount, "Credit"));
  return this.balance += amount; //jshint ignore:line
};

Account.prototype.withdrawal = function(amount) {
  this.notNumber(amount);
  this.fundsAvailable(amount);
  this.transactions.push(new Transaction(amount, "Debit"));
  return this.balance -= amount;
};

Account.prototype.notNumber = function(amount) {
  if (isNaN(amount) === true) {
    throw new Error("Amount must be a number");
  }
};

Account.prototype.fundsAvailable = function(amount) {
  if (this.balance < amount) {
    throw new Error("Insufficent funds");
  }
};
