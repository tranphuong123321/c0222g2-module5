import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {FacilityService} from "../../../service/facility.service";

@Component({
  selector: 'app-facility-create-villa',
  templateUrl: './facility-create-villa.component.html',
  styleUrls: ['./facility-create-villa.component.css']
})
export class FacilityCreateVillaComponent implements OnInit {
  villaForm: FormGroup = new FormGroup({
    // id: new FormControl(),

    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    maxPeople: new FormControl(''),
    rentType: new FormControl(''),

    romStandard: new FormControl(''),
    otherAamenities: new FormControl(''),
    poolArea: new FormControl(''),
    numberFloors: new FormControl(''),

    img: new FormControl(''),
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
