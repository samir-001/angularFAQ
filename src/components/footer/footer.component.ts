import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/services/lang.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public language!:string
  constructor(private lang:LangService){}
  public arabicDateAR!:any
  public arabicDateEN!:any
  public englishDateEN!:any
  public englishDateAR!:any
  ngOnInit(): void {
    this.lang.currentlang.subscribe((lang)=>{
      this.language = lang
    })
    const date  = new Date()
    this.arabicDateAR = date.toLocaleDateString('ar-SA',{weekday:"long",month:"long",day:"numeric",year:"numeric",})
    this.arabicDateEN = new Intl.DateTimeFormat('en-Sa-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
    this.englishDateEN = date.toLocaleDateString('en-US',{weekday:"long",month:"long",day:"numeric",year:"numeric",})
    this.englishDateAR= new Intl.DateTimeFormat('ar-EG-u-nu-latn', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
  }

 
}
