import { Component, Input } from '@angular/core';

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
    const menuElement:any = document.querySelector('.menu');
    
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

}


