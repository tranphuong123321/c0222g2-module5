import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    // id: new FormControl(),

    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    img: new FormControl(''),
  });


  constructor(private facilityService: FacilityService,
              private router: Router
  ) {
  }

  ngOnInit() {

  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.facilityForm.reset();
      this.router.navigateByUrl('/facility/list');
    }, e => console.log(e));
  }


}

