import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../shared/payment-detail.service';
import { PaymentDetail } from './../shared/payment-detail.model';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  // tslint:disable-next-line:typedef
  populateRecord(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  // tslint:disable-next-line:typedef
  onDelete(id: number) {
    this.service.deletePaymentDetail(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Deleted Successfuly', 'Payment Detail Register');
      },
      err => {
        console.log(err);
      }
    );
  }

}
