import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('KH-\\d{4}')]),
    name: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}')]),
    numberPhone: new FormControl('', [Validators.required, Validators.pattern('((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-z]\\w+@[a-z]{2,}\\.)\\w{3,10}(\\.\\w{3})?$')]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });


  constructor(private customerService: CustomerService,
              private router: Router
              ) {
  }

  ngOnInit() {

  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      this.router.navigateByUrl('/customer/list');
    }, e => console.log(e));
  }


}
