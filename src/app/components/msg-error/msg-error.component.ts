import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.css']
})
export class MsgErrorComponent {
  //props
  @Input() errors:Array<any>; // recibe los mensajes de error
  //constr
  constructor(){
    this.errors = new Array();
  }
  //meths
  
}
