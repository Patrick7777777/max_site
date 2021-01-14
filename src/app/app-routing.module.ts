import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import { PriceComponent } from './price/price.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { SertificatesComponent } from './sertificates/sertificates.component';
import { TopartnersComponent } from './topartners/topartners.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'price', component: PriceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'sertificates', component: SertificatesComponent },
  { path: 'topartners', component: TopartnersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
