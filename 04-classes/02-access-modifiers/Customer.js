var Customer = /** @class */ (function () {
    function Customer(value0, value1) {
        this._firstName = value0;
        this._lastName = value1;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Bobby", "Kim");
console.log(myCustomer.firstName);
