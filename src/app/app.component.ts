import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crm Angular - Angular Router DOM';
  //constr
  //meths
  ngOnInit(): void {
    if(isDevMode()){
      console.log('Developmet!');
    }else{
      console.log('Production');
    }
  }
}
