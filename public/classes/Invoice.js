// classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(//this only works when the access modifiers are put
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
