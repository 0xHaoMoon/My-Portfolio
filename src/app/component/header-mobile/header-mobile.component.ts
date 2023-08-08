import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {

  @Input() burgerMenuState : boolean = false;

  openBurgerMenu(x){
    if(this.burgerMenuState == true){
    this.burgerMenuState = false;
    }else{
      this.burgerMenuState = true;
    }
      x.classList.toggle("change");
  

}
}


