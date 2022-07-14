import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create-room',
  templateUrl: './facility-create-room.component.html',
  styleUrls: ['./facility-create-room.component.css']
})
export class FacilityCreateRoomComponent implements OnInit {

  roomForm: FormGroup = new FormGroup({
    // id: new FormControl(),

    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    maxPeople: new FormControl(''),
    rentType: new FormControl(''),

    freeServiceIncluded: new FormControl(''),

    img: new FormControl(''),
  });

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.roomForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.roomForm.reset();
      this.router.navigateByUrl('/facility/list');
    }, e => console.log(e));
  }
}

