import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IQuestion } from 'src/modals/question';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { QuestionService } from 'src/services/question.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-admin',
  standalone: true,

  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements  OnInit {

  displayedColumns: string[] = ['id', 'arQuestion', 'arAnswer','category','control'];
  dataSource!: MatTableDataSource<IQuestion>;
  public dataSetCount!:number; 
  public pageSize!:number; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private questionsService :QuestionService,private router:Router,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.questionsService.getAllQuestions().subscribe((user)=>{
      console.log(user)
      this.dataSource = new MatTableDataSource<IQuestion>(user);
      this.dataSetCount = user.length
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteQuestion(row:IQuestion){
 
    this.questionsService.deleteQuestion(row.id).subscribe(()=>{
        const index = this.dataSource.data.indexOf(row);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription(); 

    })
    // this.router.navigate(['add',id])
  }
  hideQuestion(row:IQuestion){
    const newData =  {...row,visibility:!row.visibility}
    const newDataSource =this.dataSource.data.map((item )=>{
        if(item.id == row.id){
          return newData
        }
        return item
    });
    this.questionsService.upDateQuestion(row.id,newData).subscribe(()=>{
        
        this.dataSource.data = newDataSource; 
    })
  }
  updateQuestion(row:IQuestion){
  this.router.navigate([`edit/${row.id}`])
  }
  addNew(){
    this.router.navigate(['/add'])
  }
  openDialog(){}

}


    
  

