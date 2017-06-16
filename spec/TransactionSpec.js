describe("Transaction", function() {
  var account;
  var transaction;

  beforeEach(function(){
    account = new Account();
    transaction = new Transaction();
  });

  it("creates the deposit as a transaction", function() {
    account.deposit(2000);
    expect(account.transactions[0].amount).toBe(2000);
  });

  it("creates a type", function() {
    transaction = new Transaction(100, "Debit");
    expect(transaction.type).toBe("Debit");
  });



});
