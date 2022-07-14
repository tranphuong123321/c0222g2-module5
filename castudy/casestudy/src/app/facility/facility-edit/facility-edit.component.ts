import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  editForm: FormGroup;
  id: number;


  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit() {

  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.editForm = new FormGroup({
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        rentType: new FormControl(facility.rentType),
        romStandard: new FormControl(facility.romStandard),
        otherAamenities: new FormControl(facility.otherAamenities),
        poolArea: new FormControl(facility.poolArea),
        numberFloors: new FormControl(facility.numberFloors),
        freeServiceIncluded: new FormControl(facility.freeServiceIncluded),
        img: new FormControl(facility.img),
      });
    });
  }

  updateFacility(id: number) {
    const facility = this.editForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      this.router.navigate(['/facility/list']);
    });
  }
}
