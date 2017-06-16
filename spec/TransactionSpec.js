describe("Transaction", function() {
  var account;
  var transaction;

  beforeEach(function(){
    account = new Account();
  });

  it("creates the deposit as a transaction", function() {
    account.deposit(2000);
    expect(account.transactions[0].amount).toBe(2000);
  });

  it("creates a type", function() {
    transaction = new Transaction(100, "Debit");
    expect(transaction.type).toBe("Debit");
  });

  it("stores a date", function() {
    transaction = new Transaction(150, "Credit", 150, new Date("2017-06-16"));
    expect(transaction.date).toMatch("Fri Jun 16 2017");
  });


});
