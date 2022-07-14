import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityCreateVillaComponent} from "./facility-create/facility-create-villa/facility-create-villa.component";



const routes: Routes = [
  {path:'list', component: FacilityListComponent},
  {
    path: 'create', component: FacilityCreateComponent, children: [
      // {path: '', pathMatch: 'full', redirectTo: 'villa'},
      {path: 'villa', component: FacilityCreateVillaComponent},
      // {path: 'room', component: FacilityCreateRoomComponent},
      // {path: 'house', component: FacilityCreateHouseComponent},
    ]
  },
  {path:'edit', component: FacilityEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
