import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {AnimalCreateComponent} from "./animal-create/animal-create.component";


const routes: Routes = [
  {path: 'list', component: AnimalListComponent},
  {path: 'create', component: AnimalCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
