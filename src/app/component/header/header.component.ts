import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  scrollPoint(element:string) {
    const newLocal = document.getElementById(element);
    newLocal?.scrollIntoView({behavior: "smooth"});

  }


}
