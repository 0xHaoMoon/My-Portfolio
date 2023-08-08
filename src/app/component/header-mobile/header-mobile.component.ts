import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {

  @Input() burgerMenuState : boolean = false;

  openBurgerMenu(){
    this.burgerMenuState = !this.burgerMenuState;
    const burgerMenuElement = document.querySelector('.burgerMenu');
    if (burgerMenuElement) {
      burgerMenuElement.classList.toggle('change');
    }
}

}


