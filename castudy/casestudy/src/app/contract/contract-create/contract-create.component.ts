import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  customers: Customer[] = [];
  facilitys: Facility[] = [];

  contractForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    deposit: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d+')]),
    total: new FormControl('', [Validators.required]),
  });


  constructor(private contractService: ContractService,
              private router: Router,
              private customerService: CustomerService,
              private facilityService: FacilityService
  ) {
  }

  ngOnInit() {
    this.getCustomer()
    this.getFacility()
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractForm.reset();
      this.router.navigateByUrl('/contract/list');
    }, e => console.log(e));
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }
  getFacility() {
    this.facilityService.getFacility().subscribe(facilitys => {
      this.facilitys = facilitys;
    });
  }
}
