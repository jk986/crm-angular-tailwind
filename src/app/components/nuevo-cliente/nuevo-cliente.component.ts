import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  //props

  //constr
  constructor(
    private router:Router
  ){

  }
  //meths
  /**
   * Funcion para el boton de regresar
   */
  goBack(){
    this.router.navigate(['/']);
  }
}
