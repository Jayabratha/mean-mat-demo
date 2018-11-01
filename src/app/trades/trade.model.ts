export class Trade {
    tradeId: number;
    tradeDate: string;
    commodity: string;
    side: string;
    counterparty: string;
    price: number;
    quantity: number;
    location: string;
    tradeStatus: string;

    constructor(tradeObj) {
        this.tradeId = tradeObj.tradeId || 0;
        this.tradeDate = tradeObj.tradeDate || new Date();
        this.commodity = tradeObj.commodity || '';
        this.side = tradeObj.side || 'Buy';
        this.counterparty = tradeObj.counterparty || '';
        this.price = tradeObj.price || 0;
        this.quantity = tradeObj.quantity || 0;
        this.location = tradeObj.location || '';
        this.tradeStatus = tradeObj.tardeStatus || 'OPEN';
    }
}