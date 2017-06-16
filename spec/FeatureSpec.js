describe("Features", function() {
  var account;
  var transaction;

  beforeEach(function(){
    account = new Account();
  });

  it("Make a deposit to an bank account", function() {
    account.deposit(1000);
    expect(account.checkBalance()).toBe(1000);
  });

  it("Make a withdrawl from a bank account", function() {
    account.deposit(2000);
    account.withdrawal(1000);
    expect(account.checkBalance()).toEqual(1000);
  });

  it("Balance can be checked", function() {
    account.deposit(1000);
    expect(account.checkBalance()).toEqual(1000);
  });

  it("Print transactions by latest date, with credit, debit and balance headings", function() {
    account.deposit(1000, new Date("2012-01-10"));
    account.deposit(2000, new Date("2012-01-13"));
    account.withdrawal(500, new Date("2012-01-14"));
    expect(print.statement()).toEqual("date || credit || debit || balance, 14/01/2012 || || 500.00 || 2500.00, 13/01/2012 || 2000.00 || || 3000.00, 10/01/2012 || 1000.00 || || 1000.00");
  });

});

function Helpers() {
  account = new Account();
  account.deposit(1000, new Date("2012-01-10"));
  account.deposit(2000, new Date("2012-01-13"));
  account.withdrawal(500, new Date("2012-01-14"));
}
