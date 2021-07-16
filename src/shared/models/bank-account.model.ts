export class BankAccountItem {

    constructor(public name: string, public type: string, public imgPath: string,
        public monthlyFee: number, public interestRate: number, public sub: number,
        public overdraftFee: number, public debitCard: string, public description: string,
        public appLink: string) {}
}