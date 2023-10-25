import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { LangService } from 'src/services/lang.service';

@Component({
  
  standalone:true,
  selector: 'app-nav',
  imports:[
    RouterModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],


   
})
export class NavComponent implements OnInit{
  public ActiveRoute!:string
  public currentLang!:string
  constructor(private route:Router,public lang:LangService,private Translate:TranslateService){}
  ngOnInit(): void {
    this.lang.currentlang.subscribe((lang)=>{
      this.currentLang = lang
      this.Translate.use(lang)
    })
    }

  changeRoute(){
    if(this.ActiveRoute === 'admin'){
      this.route.navigate(['/site'])
      this.ActiveRoute = 'site'
    }else{
      this.route.navigate(['/admin'])
      this.ActiveRoute = 'admin'
      
    }
  }
}
