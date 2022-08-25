var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.printInfo = function () {
        console.log(this.id, this.name, this.salary);
    };
    return Employee;
}());
var emp = new Employee(120, 'Raj', 35000);
emp.printInfo();
