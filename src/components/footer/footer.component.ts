import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public arabicDate!:any
  public englishDate!:any
  ngOnInit(): void {
    const date  = new Date()
   const arDate = date.toLocaleDateString('ar-SA',{
      weekday:"long",
      month:"long",
      day:"numeric",
      year:"numeric",})
   const enDate = date.toLocaleDateString('en-US',{
      weekday:"long",
      month:"long",
      day:"numeric",
      year:"numeric",})
    this.arabicDate = arDate
    this.englishDate = enDate
  }

 
}
