function Account() {
  this._balance = 0;
  this.transactions = [];
}

Account.prototype.checkBalance = function() {
  return this._balance;
};

Account.prototype.deposit = function(amount, date) {
  var newBalance = this._balance += amount;
  this.add(amount, "Credit", newBalance, date);
  return this._balance = newBalance; //jshint ignore:line
};

Account.prototype.withdrawal = function(amount, date) {
  this.fundsAvailable(amount);
  var newBalance = this._balance -= amount;
  this.add(amount, "Debit", newBalance, date);
  return this._balance = newBalance; //jshint ignore:line
};

Account.prototype.add = function(amount, type, newBalance, date){
  this.notNumber(amount);
  this.transactions.push(new Transaction(amount, type, newBalance, date));
};

Account.prototype.notNumber = function(amount) {
  if (isNaN(amount) === true) {
    throw new Error("Amount must be a number");
  }
};

Account.prototype.fundsAvailable = function(amount) {
  if (this._balance < amount) {
    throw new Error("Insufficent funds");
  }
};
