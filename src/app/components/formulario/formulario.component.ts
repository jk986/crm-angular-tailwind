import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/User';
import { ClientesService } from 'src/app/services/clientes.service';

const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  //props
  public userData:any; // almacena modelo de formulario
  public errores:Array<any>; // errores al validar
  public showError:boolean;
  //constr
  constructor(
    private _clientesService:ClientesService,
    private _router:Router
  ){
    this.userData = new User();
    this.errores = new Array();
    this.showError = false;
  }
  //meths
  ngOnInit(): void {
    
  }

  onSubmit(customerData:any){
    this.dataValidate(customerData);
  }

  /**
   * Funcion para validar los datos recibidos
   * de un formulario
   * @param data datos del formulario
   */
  async dataValidate(data:any){
    let {nombre,empresa,email,telefono,notas} = data['value'];
    //validacion
    if([nombre,empresa,email,telefono,notas].includes('') || !regex.test(email)){
      this.errores.push('Todos los campos son obligatorios');
      this.showError = true;
      // borra mensajes de error despues de 2 segundos
      setTimeout(()=>{
        this.errores = [];
        this.showError = false;

      },2000);

      if(!regex.test(email)){ // si el email no cumple con el formato de la expresion retorna false
        this.errores.push('Email no válido');
        this.showError = true;
        setTimeout(()=>{
          this.errores = [];
          this.showError = false;
  
        },2000);
      };
    }else{
      await this._clientesService.agrgarCliente(data['value']);
      console.log('submited...');
      console.log(data['value']);
      this._router.navigate(['/']);
    };

    



  }

}
