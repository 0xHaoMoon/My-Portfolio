import { Component, OnInit } from '@angular/core';
import* as AOS from 'aos'

@Component({
  selector: 'app-arrow-right',
  templateUrl: './arrow-right.component.html',
  styleUrls: ['./arrow-right.component.scss']
})
export class ArrowRightComponent implements OnInit{

  ngOnInit() {
    AOS.init();
  }

}
