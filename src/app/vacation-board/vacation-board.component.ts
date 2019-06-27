import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { wedding } from  '../wedding';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-board',
  templateUrl: './vacation-board.component.html',
  styleUrls: ['./vacation-board.component.scss']
})
export class VacationBoardComponent implements OnInit {
  weddings:  wedding[];
  p: number = 1;

  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
    this.apiService.readVacations().subscribe((weddings: wedding[])=>{
      this.weddings = weddings;
      
    })
  }
  goToPlaceDetails(url,i){
    console.log("this",url , i)
    this.router.navigate([url,i]);
  }
  goToPage(i){
    var pageLink = this.weddings[i].placeLink
    console.log(pageLink)
    
      window.open(pageLink, '_blank');
  
  }
  showId(i){
    var showPlace = $(".show-it").eq(i)
    var hidePlace = $(".hide").eq(i)
    var pageLink = this.weddings[i].placeLink
    var checkIt = $(".linkToPage").eq(i)
    //if there is a link written in the DB then type "check it", if not then just leave it empty
    if(pageLink == ""){
      //do nothing.. ik this is wrong but whatever
    }
    else{
      checkIt.html("Check it!")
    }

    if(showPlace.css("display") == "block"){
      showPlace.css("display","none")
      hidePlace.css("display","block")

    }
    else{
      showPlace.css("display","block")
      hidePlace.css("display","none")
    }  }

}
