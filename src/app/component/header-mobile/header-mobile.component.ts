import { Component, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {

  @Input() burgerMenuState : boolean = true;

  openBurgerMenu(){
    this.burgerMenuState = !this.burgerMenuState;
    const burgerMenuElement:any = document.querySelector('.burgerMenu');
    const menuElement:any = document.querySelector('.menu-mobile');
    
    if (!this.burgerMenuState) {
      burgerMenuElement.classList.toggle('change');
      menuElement.classList.toggle('hideHeader');
    } else{
      burgerMenuElement.classList.toggle('change');
      menuElement.classList.toggle('slideOutAnimation');
      setTimeout(() => {
        menuElement.classList.toggle('hideHeader');
        menuElement.classList.remove('slideOutAnimation');
      }, 500);
    }
}

scrollPoint(element:string) {
  const newLocal = document.getElementById(element);
  if (this.burgerMenuState == false) {
    newLocal?.scrollIntoView({behavior: "smooth"});
    this.openBurgerMenu();
  } else{
        newLocal?.scrollIntoView({behavior: "smooth"});
  }

 
}





}