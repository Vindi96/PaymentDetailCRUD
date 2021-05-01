import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  formData: PaymentDetail = new PaymentDetail();
  readonly baseUrl = 'https://localhost:44316/api/PaymentDetail';
  list: PaymentDetail[];

  // tslint:disable-next-line:align
  // tslint:disable-next-line:typedef
  postPaymentDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  // tslint:disable-next-line:typedef
  putPaymentDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
  }
  // tslint:disable-next-line:typedef
  refreshList() {
    return this.http.get(this.baseUrl).toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
  // tslint:disable-next-line:typedef
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
