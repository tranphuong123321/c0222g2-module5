import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VexeRoutingModule } from './vexe-routing.module';
import { VexeListComponent } from './vexe-list/vexe-list.component';
import { VexeCreateComponent } from './vexe-create/vexe-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { VexeEditComponent } from './vexe-edit/vexe-edit.component';

@NgModule({
  declarations: [VexeListComponent, VexeCreateComponent, VexeEditComponent],
  imports: [
    CommonModule,
    VexeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class VexeModule { }
