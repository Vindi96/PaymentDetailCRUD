export class PaymentDetail {
  paymentDetailId: number;
  cardOwnerName: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;

  constructor() {
    this.paymentDetailId = 0;
    this.cardOwnerName = '';
    this.cardNumber = '';
    this.expirationDate = '';
    this.securityCode = '';
  }
}
