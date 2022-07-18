import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
        code: new FormControl(customer.code,[Validators.required]),
        name: new FormControl(customer.name,[Validators.required]),
        birthDay: new FormControl(customer.birthDay,[Validators.required]),
        gender: new FormControl(customer.gender,[Validators.required]),
        idCard: new FormControl(customer.idCard,[Validators.required]),
        numberPhone: new FormControl(customer.numberPhone,[Validators.required]),
        email: new FormControl(customer.email,[Validators.required]),
        address: new FormControl(customer.address,[Validators.required]),
        customerType: new FormControl(customer.customerType,[Validators.required]),
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
