import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingScreenComponent } from './component/landing-screen/landing-screen.component';
import { HeaderMobileComponent } from './component/header-mobile/header-mobile.component';
import { MainSiteComponent } from './component/main-site/main-site.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { SkillsComponent } from './component/skills/skills.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ArrowRightComponent } from './component/arrow-right/arrow-right.component';
import { ArrowLeftComponent } from './component/arrow-left/arrow-left.component';
import { ProjectComponent } from './component/project/project.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingScreenComponent,
    HeaderMobileComponent,
    MainSiteComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ArrowRightComponent,
    ArrowLeftComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
