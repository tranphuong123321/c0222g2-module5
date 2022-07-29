import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhaxeRoutingModule } from './nhaxe-routing.module';

import { NhaxeListComponent } from './nhaxe-list/nhaxe-list.component';
import { NhaxeCreateComponent } from './nhaxe-create/nhaxe-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NhaxeEditComponent } from './nhaxe-edit/nhaxe-edit.component';


@NgModule({
  declarations: [ NhaxeListComponent, NhaxeCreateComponent, NhaxeEditComponent],
  imports: [
    CommonModule,
    NhaxeRoutingModule,
    ReactiveFormsModule
  ]
})
export class NhaxeModule { }
