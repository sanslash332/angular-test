import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SurveyComponent } from './ccomponents/survey/survey.component';
import { VideoComponent } from './components/video/video.component';
import {VideoServisService} from './services/video-servis.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNewsComponent,
    NavbarComponent,
    SurveyComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
VideoServisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
