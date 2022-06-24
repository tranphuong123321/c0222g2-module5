import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit() {

  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        code: new FormControl(customer.code),
        name: new FormControl(customer.name),
        birthDay: new FormControl(customer.birthDay),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        numberPhone: new FormControl(customer.numberPhone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        customerType: new FormControl(customer.customerType),
      });
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      this.router.navigate(['/customer/list']);
    });
  }


}
