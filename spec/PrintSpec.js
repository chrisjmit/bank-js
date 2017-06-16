describe("Print", function() {
  var account;
  var print;

  beforeEach(function(){
    account = new Account();
    print = new Print();
  });

  it("has a header row", function() {
    expect(print._header).toMatch("date || credit || debit || balance");
  });

  it("finds one item", function() {
    account.deposit(1000, new Date("2012-01-14"));
    expect(print.statement()).toMatch("Sat Jan 14 2012 00:00:00 GMT+0000 (GMT) || 1000 || || 1000");
  });

});
