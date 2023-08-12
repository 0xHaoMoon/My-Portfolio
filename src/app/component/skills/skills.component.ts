import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  icons :String[] = [
    'icon1.png', 
    'icon2.png', 
    'icon3.png', 
    'icon4.png', 
    'icon5.png',
    'icon6.png',
    'icon7.png',
    'icon8.png',
    'icon9.png',
    'icon10.png'
  ];

  constructor() { }

  ngOnInit() {}
  

}
