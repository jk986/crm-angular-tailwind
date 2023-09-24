import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
const API_URL =  environment.api; // accede a variables de entorno

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  //props
  //constr
  constructor() { }
  //meths
  async obtenerClientes(){
    const respuesta = await fetch(API_URL);
    const resultado = await respuesta.json();
    //console.log(resultado);
    return resultado 
  }

  async agrgarCliente(data:any){
    try {
      const respuesta = await fetch(API_URL,{
        method:'POST',
        body: JSON.stringify(data),// datos a enviar 
        headers:{
          'Content-Type': 'application/json'
        }
      });
      await respuesta.json();
    } catch (error) {
      console.log(error);
    }
  }

  async obtenerCliente(id:any){
    const respuesta = await fetch(API_URL+'/'+id);
    const resultado = await respuesta.json();
    if(resultado[id] == ''){
      throw new Response('',{
        status:404,
        statusText: 'No hay resulatdos'
      });
    }
    return await resultado;
  }

  async editarCliente(id:any,data:any){
    try {
      const respuesta = await fetch(`${API_URL}/${id}`,{
        method:'PUT',
        body: JSON.stringify(data),// datos a enviar 
        headers:{
          'Content-Type': 'application/json'
        }
      });
      await respuesta.json();
    } catch (error) {
      console.log(error);
    }
  }

  async eliminarCliente(id:any){
    try {
      const respuesta = await fetch(`${API_URL}/${id}`,{
        method:'DELETE'
      });
      await respuesta.json();
    } catch (error) {
      console.log(error);
    }
  }
}
