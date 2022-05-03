import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  photoUrl = '';

  constructor(private fetchPhotoService: FetchPhotoService) {
    this.fetchPhotoService.getPhoto().subscribe(response=>{
     
      this.photoUrl =response.urls.regular
      
    });
   }

  ngOnInit() {
  }

  onClick(){
    this.fetchPhotoService.getPhoto().subscribe(response=>{
     
      this.photoUrl =response.urls.regular
      
    });
  }
}
