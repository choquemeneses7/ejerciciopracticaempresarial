import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import data from '../../../data.json';
import * as config from '../../../config.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  readonly users = (<any>data).users;
  readonly title : string = (<any>config).appName;
  
  constructor(title:Title)
  {
  	title.setTitle(this.title); 
  }

  ngOnInit() {  }

}
