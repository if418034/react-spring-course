export class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get firstName(): string {
        return this._firstName;
    }
}

let myCustomer = new Customer("Bobby", "Kim");

console.log(myCustomer.firstName)
