import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';

import {ReactiveFormsModule} from "@angular/forms";
import {FacilityCreateVillaComponent} from "./facility-create-villa/facility-create-villa.component";
import { FacilityCreateHouseComponent } from './facility-create-house/facility-create-house.component';
import { FacilityCreateRoomComponent } from './facility-create-room/facility-create-room.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';



@NgModule({
  declarations: [FacilityListComponent, FacilityEditComponent, FacilityCreateVillaComponent, FacilityCreateHouseComponent, FacilityCreateRoomComponent, FacilityDetailComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
