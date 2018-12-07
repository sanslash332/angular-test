import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyComponent} from './ccomponents/survey/survey.component';
import {VideoComponent} from './components/video/video.component';
const routes: Routes = [
  {path: 'survey', component: SurveyComponent},
  {path: 'video', component: VideoComponent},
  {path: 'video/:id', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
