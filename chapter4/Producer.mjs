export class Producer {
    constructor(aProvince, data) {
        console.log(data);
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = 0;
        this.production = data.production;
    }

    get name() { return this._name; }
    get cost() { return this._cost; }
    set cost(arg) { this._cost = arg; }

    get production() { return this._production; }
    set production(amountStr) {
        const amount    = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}