import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilitys: Facility[] = [];
  idToDelete: number;
  nameToDelete: string;

  constructor(private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFacility();
  }
  public getFacility() {
    this.facilityService.getFacility().subscribe(facilitys => {
      this.facilitys = facilitys;
    });
  }


  public deleteFacility() {
    this.facilityService.deleteFacility(this.idToDelete).subscribe((data) => {
      this.getFacility();
    });
  }
  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }
}
