import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModule { }
