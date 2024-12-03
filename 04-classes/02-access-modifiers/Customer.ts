class Customer {
    private _firstName: string;
    private _lastName: string;


    set firstName(value: string) {
        this._firstName = value;
    }

    constructor(value0: string, value1: string ){
        this._firstName = value0;
        this._lastName = value1;
    }

    get firstName(): string {
        return this._firstName;
    }
}

let myCustomer = new Customer("Bobby", "Kim");

console.log(myCustomer.firstName)

