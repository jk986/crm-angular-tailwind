import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ClientesService } from 'src/app/services/clientes.service';

const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{
  //props
  public userData:any;
  public userId:any;
  public errores:Array<any>;
  public showError:boolean;
  //constr
  constructor(
    private _route:ActivatedRoute, //recuperar parametros de ruta
    private _router:Router,
    private _clientes:ClientesService
    ){
    this.userData = new User();
    this.errores = new Array();
    this.showError = false;

  }
  //meths
  async ngOnInit():Promise<void> {
    //const resultado = this._clientes.obtenerCliente(1);
    this.userId = this._route.snapshot.paramMap.get('clientId');
    this.userData = await this._clientes.obtenerCliente(this.userId);
    console.log(this.userData);
  }

  submitUpdate(){
    this.dataValidate(this.userData);
  }
  
  /**
   * Funcion para validar los datos recibidos
   * de un formulario
   * @param data datos del formulario
   */
  async dataValidate(data:any){
    let {nombre,empresa,email,telefono,notas} = data;
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
      //Actuaizar cliente si todo va bien
      await this._clientes.editarCliente(this.userId,data);
      console.log('Updated...');
      console.log(data);
      this._router.navigate(['/']);
    };
  }

  goBack():void{
    this._router.navigate(['/']);
  }
}
