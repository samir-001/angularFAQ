import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';


@Component({
  
  standalone:true,
  selector: 'app-nav',
  imports:[
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],


   
})
export class NavComponent implements OnInit{
  public language:string ="english"
  private de!:Subscription
  constructor(){
  }
  ngOnInit(): void {
  
  }
  changeLanguage = ()=>{
   if( this.language === "english"){ this.language = "العربية" }else{this.language =  "english"}
  }
  

}
