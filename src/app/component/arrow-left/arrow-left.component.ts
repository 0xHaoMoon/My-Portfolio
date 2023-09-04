import { Component, OnInit } from '@angular/core';
import* as AOS from 'aos'

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.html',
  styleUrls: ['./arrow-left.component.scss']
})
export class ArrowLeftComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
