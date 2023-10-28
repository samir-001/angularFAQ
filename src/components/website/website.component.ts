import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatPaginator, MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { QuestionService } from 'src/services/question.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IQuestion } from 'src/modals/question';
import { Observable } from 'rxjs';
import { LangService } from 'src/services/lang.service';
import {MatButtonModule} from '@angular/material/button';

import { TranslateService  } from '@ngx-translate/core';


@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordionModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  dataSource!: MatTableDataSource<IQuestion>;
  public dataSetCount!:number; 
  public pageSize!:number; 
  public ErrorMessage!:string|null
  public dataLength!:number
  public arCategory!:string[] 
  public enCategory!:string[] 
  //for connecting accordion with paginator
  public obs!:Observable<any>
  public language!:string
  public allQuestions!:IQuestion[]
  public la:string =this.Translate.instant('home')

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private questionsService :QuestionService,public lang:LangService,public Translate:TranslateService) {}

   ngOnInit(): void {
    this.questionsService.getAllQuestions().subscribe(this.handleHttpObs)
    this.lang.currentlang.subscribe((lang)=>{
      this.language = lang
    })
  }
  private handleHttpObs = {
    next:(question:IQuestion[])=>{
      const filteredQuetions = question.filter((item)=>{
        return item.visibility
      })
      if(filteredQuetions.length < 1){
        this.ErrorMessage= 'no data found'
      }else{
        this.pageSize = 5
        this.dataLength = filteredQuetions.length
        this.ErrorMessage= null
        this.arCategory = filteredQuetions.map(item=> item.arCategory)
        this.enCategory = filteredQuetions.map(item=> item.enCategory)
        this.allQuestions = filteredQuetions
      }
      this.dataSource = new MatTableDataSource(filteredQuetions);
      this.dataSource.paginator = this.paginator
      this.dataSetCount = question.length

      //connect paginator to accordion 
      this.obs = this.dataSource.connect()
    },
    error:(err:any)=>{
    }
  }
 filterData(cat:string="all"){
   this.dataSource.data = this.allQuestions.filter((item)=>{
      if(cat ==="all"){
        return true
      }
    if(this.language =='en'){
      return item.enCategory == cat
    }else{
      return item.arCategory == cat
    }
  })
 }

}
