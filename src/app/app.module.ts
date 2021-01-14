import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ProjectsComponent } from './projects/projects.component';
import { SertificatesComponent } from './sertificates/sertificates.component';
import { TopartnersComponent } from './topartners/topartners.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PriceComponent,
    ProjectsComponent,
    SertificatesComponent,
    TopartnersComponent,
    NewsComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
