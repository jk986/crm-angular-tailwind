import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service'; // servicios para acceder a los metodos http

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  // props
  public clientes:Array<any>; //clientes a mostrar
  // constr
  constructor(
    private _clientes:ClientesService,
    private _router:Router
    ){
    this.clientes = new Array();
  }
  // meths
  async ngOnInit(): Promise<void> {
    this.clientes = [...await this._clientes.obtenerClientes()]; // obtener clientes
  }

  async redirectToEditClient(id:any){
    this._router.navigate(['clientes/',id,'edit']);
    //const respuesta = await this._clientes.obtenerCliente(id);
    //console.log(respuesta);
  }

  async deleteCliente(id:any):Promise<void> {
    if(confirm('¿Deseas eliminar este registro?')){
      await this._clientes.eliminarCliente(id);
    };
    this.ngOnInit();
  }
  
}
