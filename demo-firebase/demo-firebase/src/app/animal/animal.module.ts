import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ AnimalListComponent, AnimalCreateComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    ReactiveFormsModule
  ]
})
export class AnimalModule { }
