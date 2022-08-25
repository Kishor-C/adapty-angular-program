class Employee { 
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    printInfo() {
        console.log(this.id, this.name, this.salary);    
    }
}
let emp: Employee = new Employee(120, 'Raj', 35000);
emp.printInfo();