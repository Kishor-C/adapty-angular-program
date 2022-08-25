class Customer { 
    private accountNumber: number;
    private customerName: string;
    constructor(accountNumber: number, customerName: string) {
        this.accountNumber = accountNumber;
        this.customerName = customerName;
    }
    public getAccountNumber() : number{return this.accountNumber;}
    public setName(name: string) : void {this.customerName = name;}
    public getName() : string {  return this.customerName;   }
}
let c1: Customer = new Customer(1345, 'Rajesh');
console.log(`No = ${c1.getAccountNumber()}, Name = ${c1.getName()}`);
c1.setName('Rajesh Kumar');
console.log(`No = ${c1.getAccountNumber()}, Name = ${c1.getName()}`);
// creating emp class with short-cut constructor initialization
class Emp {
    constructor(private id : number, private name : string) {
    }
    public getId(): number {return this.id;}
    public getName(): string { return this.name; }
}
let e1 = new Emp(222, 'Vijay');
console.log(`ID = ${e1.getId()} Name = ${e1.getName()}`);
