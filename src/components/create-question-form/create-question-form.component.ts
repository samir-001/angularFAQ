import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from 'src/services/question.service';
import { Router } from '@angular/router';
import { IQuestion } from 'src/modals/question';
@Component({
  selector: 'app-create-question-form',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule

  ],
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css']
})
export class CreateQuestionFormComponent implements OnInit{
  constructor(private questionService:QuestionService,private router:Router){}
  public mode!:string
  public  id!:number
  public question!:IQuestion|null
  ngOnInit(): void {
    this.mode = String(this.router.url).split('/')[1]
    this.id = Number(String(this.router.url).split('/')[2])
    this.fillFormOnEditMode()
  }

  onSubmit(form:NgForm){
    if(this.mode =='edit'){
      this.questionService.upDateQuestion(this.id,form.value).subscribe((data)=>{
        this.router.navigate(['/admin'])
      })
    }else{
      this.questionService.createQuestion(form.value).subscribe((data)=>{
        this.router.navigate(['/site'])
      })}
    }

    fillFormOnEditMode(){
      this.questionService.getQuestion(this.id).subscribe((data)=>{
        this.question = data
      })
    }

}
