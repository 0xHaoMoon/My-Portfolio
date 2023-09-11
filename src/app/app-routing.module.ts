import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainSiteComponent} from './component/main-site/main-site.component'
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: MainSiteComponent},
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
