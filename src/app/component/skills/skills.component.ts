import { Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  icons: Array<any> = ICONS;

  constructor() { }

  ngOnInit() {}
  

}
