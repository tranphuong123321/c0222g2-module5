import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VexeListComponent} from './vexe-list/vexe-list.component';
import {VexeCreateComponent} from './vexe-create/vexe-create.component';
import {VexeEditComponent} from './vexe-edit/vexe-edit.component';


const routes: Routes = [
  {path: 'list', component: VexeListComponent},
  {path: 'create', component: VexeCreateComponent},
  {path: 'edit/:id', component: VexeEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VexeRoutingModule {
}
