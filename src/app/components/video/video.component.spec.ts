import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import {Video} from '../../models/video';
import {VideoServisService} from '../../services/video-servis.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
let vs: VideoServisService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoComponent ],
      providers: [
        VideoServisService,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
