import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create-house',
  templateUrl: './facility-create-house.component.html',
  styleUrls: ['./facility-create-house.component.css']
})
export class FacilityCreateHouseComponent implements OnInit {

  houseForm: FormGroup = new FormGroup({
    // id: new FormControl(),

    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    maxPeople: new FormControl(''),
    rentType: new FormControl(''),

    romStandard: new FormControl(''),
    otherAamenities: new FormControl(''),

    numberFloors: new FormControl(''),

    img: new FormControl(''),
  });

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.houseForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.houseForm.reset();
      this.router.navigateByUrl('/facility/list');
    }, e => console.log(e));
  }
}

