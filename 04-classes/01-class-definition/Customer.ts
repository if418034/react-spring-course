class Customer {
    _firstName: string;
    _lastName: string;

    get firstName(): string {
        return this.firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }
}

let myCustomer = new Customer();
myCustomer.firstName = "Susan";

console.log(myCustomer._firstName)

