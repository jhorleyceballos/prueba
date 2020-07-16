import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { RazasComponent } from './razas/razas.component';

const routes: Routes = [
  { path: '', component: RazasComponent },
  { path: 'listar/:raza', component: ListarComponent },
  { path: 'agregar/:raza', component: AgregarComponent },
  { path: 'razas', component: RazasComponent },
  { path: '**', component: RazasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
