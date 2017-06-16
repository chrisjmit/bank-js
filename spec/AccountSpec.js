describe("Account", function() {
  var account;
  var transaction;

  beforeEach(function(){
    account = new Account();
    transaction = new Transaction();
  });

  describe("A deposit", function() {

    it("Deposit exists", function() {
      amount = 1000;
      account.deposit(amount);
      expect(account.balance).toBe(1000);
    });

    it("Deposit fails if a positive integer is not passed", function() {
      expect(function(){ account.deposit("hello world");}).toThrowError("Amount must be a number");
    });
  });

  describe("#A withdrawal", function() {
    it("Updates the balance", function() {
      account.deposit(2000);
      account.withdrawal(1000);
      expect(account.transactions[1].type).toBe("Debit");
    });

    it("Is not possible if it exceeds the balance", function() {
      expect(function(){ account.withdrawal(10); }).toThrowError("Insufficent funds");
    });

  });


});
