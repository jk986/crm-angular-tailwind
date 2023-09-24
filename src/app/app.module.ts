import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MsgErrorComponent } from './components/msg-error/msg-error.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NuevoClienteComponent,
    FormularioComponent,
    MsgErrorComponent,
    ErrorPageComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
