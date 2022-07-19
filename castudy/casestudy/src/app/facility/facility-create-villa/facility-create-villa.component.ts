import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create-villa',
  templateUrl: './facility-create-villa.component.html',
  styleUrls: ['./facility-create-villa.component.css']
})
export class FacilityCreateVillaComponent implements OnInit {

  villaForm: FormGroup = new FormGroup({
    // id: new FormControl(),

    name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),

    romStandard: new FormControl('', [Validators.required]),
    otherAamenities: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required,Validators.pattern("[+]?\\d+")]),
    numberFloors: new FormControl('', [Validators.required,Validators.pattern("[+]?\\d+")]),

    img: new FormControl('', [Validators.required]),
  });

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.villaForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.villaForm.reset();
      this.router.navigateByUrl('/facility/list');
    }, e => console.log(e));
  }
}
