import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),

    romStandard: new FormControl('', [Validators.required]),
    otherAamenities: new FormControl('', [Validators.required]),

    numberFloors: new FormControl('', [Validators.required]),

    img: new FormControl('', [Validators.required]),
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

