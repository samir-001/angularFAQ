import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgFor} from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { QuestionService } from 'src/services/question.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IQuestion } from 'src/modals/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordionModule,
    NgFor,
    MatPaginatorModule
  ],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  dataSource!: MatTableDataSource<IQuestion>;
  public dataSetCount!:number; 
  public pageSize!:number; 

  //for connecting accordion with paginator
  public obs!:Observable<any>


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private questionsService :QuestionService) {
  }

   ngOnInit(): void {
    this.questionsService.getAllQuestions().subscribe(this.handleHttpObs)
  }
  private handleHttpObs = {
    next:(question:IQuestion[])=>{
      
      this.dataSource = new MatTableDataSource(question);
      this.dataSource.paginator = this.paginator
      this.dataSetCount = question.length

      //connect paginator to accordion 
      this.obs = this.dataSource.connect()
    },
    error:(err:any)=>{
    }
  }
 

}
