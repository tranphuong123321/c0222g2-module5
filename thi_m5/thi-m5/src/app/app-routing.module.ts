import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'vexe',
    loadChildren: () => import('./vexe/vexe.module').then(module => module.VexeModule)
  },
  {
    path: 'nhaxe',
    loadChildren: () => import('./nhaxe/nhaxe.module').then(module => module.NhaxeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
