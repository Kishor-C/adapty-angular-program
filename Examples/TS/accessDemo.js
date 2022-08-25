var Customer = /** @class */ (function () {
    function Customer(accountNumber, customerName) {
        this.accountNumber = accountNumber;
        this.customerName = customerName;
    }
    Customer.prototype.getAccountNumber = function () { return this.accountNumber; };
    Customer.prototype.setName = function (name) { this.customerName = name; };
    Customer.prototype.getName = function () { return this.customerName; };
    return Customer;
}());
var c1 = new Customer(1345, 'Rajesh');
console.log("No = ".concat(c1.getAccountNumber(), ", Name = ").concat(c1.getName()));
c1.setName('Rajesh Kumar');
console.log("No = ".concat(c1.getAccountNumber(), ", Name = ").concat(c1.getName()));
var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    Emp.prototype.getId = function () { return this.id; };
    Emp.prototype.getName = function () { return this.name; };
    return Emp;
}());
var e1 = new Emp(222, 'Vijay');
console.log("ID = ".concat(e1.getId(), " Name = ").concat(e1.getName()));
