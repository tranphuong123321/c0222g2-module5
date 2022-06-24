import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  p = 1;
  idToDelete: number;
  nameToDelete: string;

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  public getCustomer() {
    this.customerService.getCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }


  public deleteCustomer() {
    this.customerService.deleteCustomer(this.idToDelete).subscribe((data) => {
      this.getCustomer();
    });
  }

  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }
}
