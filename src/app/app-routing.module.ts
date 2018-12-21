import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyComponent} from './ccomponents/survey/survey.component';
import {VideoComponent} from './components/video/video.component';
import {SignupFormComponent } from './components/signup-form/signup-form.component';
import {FeriadosComponent} from './components/feriados/feriados.component';

const routes: Routes = [
  {path: 'signup', component: SignupFormComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'video', component: VideoComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'feriados', component: FeriadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
