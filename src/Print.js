function Print () {
  this.hello = "Your statement\n";
  this._header = "date || credit || debit || balance";
}

Print.prototype.statement = function() {
  return this.hello + this._header;
};

Print.prototype.getTitle = function() {
  return this.hello;
};
