import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LineBreakPipe } from './pipes/line-break.pipe';
import { SharedModule } from './shared/shared.module';
import { NgxVcardModule } from 'ngx-vcard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    FourOhFourComponent,
    FooterComponent,
    AboutComponent,
    LineBreakPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxVcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
