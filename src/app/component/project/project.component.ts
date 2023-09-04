import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/mock-project';
import { Project } from 'src/app/project';
import* as AOS from 'aos'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  projects : Project[] = PROJECTS ;

  constructor() {}

  ngOnInit() {
    AOS.init();
  }

  
}



