import { Component, OnInit } from '@angular/core';
import {WOW} from 'wowjs';


declare var $: any 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    $('.carousel').carousel();
    new WOW().init();
  }

}
