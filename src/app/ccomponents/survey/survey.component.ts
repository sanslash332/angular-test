import { Component, OnInit } from '@angular/core';
import {Survey} from '../../models/survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {
  survey: Survey;

  constructor() { }

  ngOnInit() {
    this.survey = new Survey();

  }

  onSubmit() {
    console.log(this.survey);

  }
}
