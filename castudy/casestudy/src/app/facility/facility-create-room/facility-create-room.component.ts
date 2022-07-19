import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    area: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    maxPeople: new FormControl('',[Validators.required]),
    rentType: new FormControl('',[Validators.required]),

    freeServiceIncluded: new FormControl('',[Validators.required]),

    img: new FormControl('',[Validators.required]),
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

