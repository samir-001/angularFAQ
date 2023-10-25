import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private lang ="en"
  public currentlang = new BehaviorSubject(this.lang)
  constructor(private translate:TranslateService) { 
    this.translate.setDefaultLang(localStorage.getItem('lang')||this.lang);
  }
  changeLang(){
    this.lang = this.lang =="en"?"ar":"en"
    this.currentlang.next(this.lang)
  }
}
