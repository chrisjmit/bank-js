describe("Features", function() {
  var account;
  var transaction;

  beforeEach(function(){
    account = new Account();
    transaction = new Transaction();
  });

  it("Make a deposit to an bank account", function() {
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });

  it("Make a withdrawl from a bank account", function() {
    account.deposit(2000);
    account.withdrawal(1000);
    expect(account.balance).toEqual(1000);
  });

});
