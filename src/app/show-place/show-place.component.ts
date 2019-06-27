import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { places } from  '../place';
import {wedding} from '../wedding';
import { ApiService } from '../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.scss']
})
export class ShowPlaceComponent implements OnInit {
 // place:  places[];
 weddings:  wedding[];
  index: any;
  placeTitle:any; placeAddress:any; desc:any; link:any; imgPath:any;

  constructor(private apiService: ApiService,private route: ActivatedRoute) { 
    this.index = this.route.snapshot.paramMap
    this.index = this.index.params.id
  }

  /*ngOnInit() {
    this.apiService.readId().subscribe((place: places[])=>{
      this.place = place; 
      console.log(this.place)
      console.log(this.route.snapshot.params.id)
    })
  } */
  ngOnInit() {
    this.apiService.readWeddings().subscribe((weddings: wedding[])=>{
      this.weddings = weddings; 
      this.placeTitle = this.weddings[this.index].placeName;
      this.placeAddress = this.weddings[this.index].placeAdd;
      this.desc = this.weddings[this.index].placeDesc;
      this.link = this.weddings[this.index].placeLink;
      this.imgPath = this.weddings[this.index].imgPath;
    })
  } 

  goToPage(){
    var pageLink =this.link
    console.log(this.link)
    if(pageLink == ""){
      alert("we don't have a link for this place yet")
    }

      window.open(pageLink, '_blank')
  }

}
