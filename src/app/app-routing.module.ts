import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path:'', redirectTo:'/clientes', pathMatch:'full' },
  { path:'clientes', component:ClientesComponent  },
  { path:'clientes/nuevo', component: NuevoClienteComponent },
  { path: 'clientes/:clientId/edit', component: EditarClienteComponent},
  { path: 'clientes/:clientId/destroy', component: EditarClienteComponent},
  { path: '**', component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
