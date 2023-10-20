import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import {OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { WebsiteComponent } from '../website/website.component';
import { AdminComponent } from '../admin/admin.component';
import { CreateQuestionFormComponent } from '../create-question-form/create-question-form.component';



@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[
    NavComponent,
    RouterModule,
    MatTableModule,
    FooterComponent,
    WebsiteComponent,
    AdminComponent,
    CreateQuestionFormComponent
  ]
})
export class AppComponent implements OnInit {

  constructor(){
    
  }
  ngOnInit(): void {
    // this.auth.getUsers().subscribe((data)=>{
    //   console.log(data)
    // })
  }
 
  title = 'FAQ';
}
