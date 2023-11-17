// classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor( //this only works when the access modifiers are put
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }