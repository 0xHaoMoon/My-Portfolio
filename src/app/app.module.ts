import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingScreenComponent } from './component/landing-screen/landing-screen.component';
import { HeaderMobileComponent } from './component/header-mobile/header-mobile.component';
import { MainSiteComponent } from './main-site/main-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingScreenComponent,
    HeaderMobileComponent,
    MainSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
