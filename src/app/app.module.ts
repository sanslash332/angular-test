import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {Ng2Rut} from 'ng2-rut';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SurveyComponent } from './ccomponents/survey/survey.component';
import { VideoComponent } from './components/video/video.component';
import {VideoServisService} from './services/video-servis.service';
import {HolidaysService} from './services/holidays.service';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FeriadosComponent } from './components/feriados/feriados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNewsComponent,
    NavbarComponent,
    SurveyComponent,
    VideoComponent,
    SignupFormComponent,
    FeriadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Rut,
    HttpClientModule

  ],
  providers: [
VideoServisService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
