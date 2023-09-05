import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent {
  
  scrollPoint(element:string) {
    const newLocal = document.getElementById(element);
    newLocal?.scrollIntoView({behavior: "smooth"});

  }
}
