import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    if (this.service.formData.paymentDetailId == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  // tslint:disable-next-line:typedef
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submited Sucessfuly', 'Payment Detail Register');
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line:typedef
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Sucessfuly', 'Payment Detail Register');
      },
      err => {
        console.log(err);
      }
    );

  }
  // tslint:disable-next-line:typedef
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
