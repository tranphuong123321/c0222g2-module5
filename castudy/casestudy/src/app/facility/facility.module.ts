import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FacilityCreateVillaComponent} from './facility-create/facility-create-villa/facility-create-villa.component';


@NgModule({
  declarations: [FacilityListComponent, FacilityEditComponent, FacilityCreateComponent, FacilityCreateVillaComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
