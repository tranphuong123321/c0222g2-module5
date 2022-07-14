import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

import {FacilityService} from "../../service/facility.service";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  id: number;
  facility: Facility;

  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
  }
  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facility = facility;
      });
    };

}
