import { Component } from '@angular/core';
import { PROJECTS } from 'src/app/mock-project';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project : Project[] = PROJECTS ;

}
