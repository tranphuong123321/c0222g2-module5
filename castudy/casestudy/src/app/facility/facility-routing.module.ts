import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from "./facility-list/facility-list.component";

import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityCreateVillaComponent} from "./facility-create-villa/facility-create-villa.component";
import {FacilityCreateHouseComponent} from "./facility-create-house/facility-create-house.component";
import {FacilityCreateRoomComponent} from "./facility-create-room/facility-create-room.component";
import {FacilityDetailComponent} from "./facility-detail/facility-detail.component";




const routes: Routes = [
  {path:'list', component: FacilityListComponent},
  {path:'create-villa', component: FacilityCreateVillaComponent},
  {path:'create-house', component: FacilityCreateHouseComponent},
  {path:'create-room', component: FacilityCreateRoomComponent},
  {path:'edit/:id', component: FacilityEditComponent},
  {path:'detail/:id', component: FacilityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
