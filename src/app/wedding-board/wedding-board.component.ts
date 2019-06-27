import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { wedding } from  '../wedding';
import * as $ from 'jquery';
import { Router } from '@angular/router';



@Component({
  selector: 'app-wedding-board',
  templateUrl: './wedding-board.component.html',
  styleUrls: ['./wedding-board.component.scss']
})
export class WeddingBoardComponent implements OnInit {
  weddings:  wedding[];
  p: number = 1;
 // selectedWedding:  wedding  = { id :  null , placeName:null, placeAdd:  null, placeDesc: null, category:null, imgPath:null, placeLink:null};
  constructor(private apiService: ApiService, private router: Router) {  }

  ngOnInit() {   
    this.apiService.readWeddings().subscribe((weddings: wedding[])=>{
      this.weddings = weddings; 
    })
  }
/*  goToPlaceDetails(id){
    console.log("this" ,id)
    this.apiService.readId()
  }*/
  goToPlaceDetails(url,i){
    console.log("this",url , i)
    this.router.navigate([url,i]);
  } 
  showInfo(i){
    const showPlace = $(".show-it").eq(i)
    const hidePlace = $(".hide").eq(i)

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
