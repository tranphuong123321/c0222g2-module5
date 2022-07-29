import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NhaxeListComponent} from './nhaxe-list/nhaxe-list.component';
import {NhaxeCreateComponent} from './nhaxe-create/nhaxe-create.component';
import {NhaxeEditComponent} from './nhaxe-edit/nhaxe-edit.component';


const routes: Routes = [
  {path: 'list', component: NhaxeListComponent},
  {path: 'create', component: NhaxeCreateComponent},
  {path: 'edit/:id', component: NhaxeEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhaxeRoutingModule {
}
