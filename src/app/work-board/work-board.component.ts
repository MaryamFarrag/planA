import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { wedding } from  '../wedding';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-board',
  templateUrl: './work-board.component.html',
  styleUrls: ['./work-board.component.scss']
})
export class WorkBoardComponent implements OnInit {
  weddings:  wedding[];
  p: number = 1;

  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
    this.apiService.readWork().subscribe((weddings: wedding[])=>{
      this.weddings = weddings;
    })
  }
  goToPlaceDetails(url,i){
    console.log("this",url , i)
    this.router.navigate([url,i]);
  }
  showId(i){
    var showPlace = $(".show-it").eq(i)
    var hidePlace = $(".hide").eq(i)
    //if there is a link written in the DB then type "check it", if not then just leave it empty

    if(showPlace.css("display") == "block"){
      showPlace.css("display","none")
      hidePlace.css("display","block")

    }
    else{
      showPlace.css("display","block")
      hidePlace.css("display","none")
    }
    
  }

}
