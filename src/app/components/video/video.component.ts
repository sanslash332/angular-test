import { Component, OnInit } from '@angular/core';
import {Video} from '../../models/video';
import {VideoServisService} from '../../services/video-servis.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  video: Video;


  constructor(private vs: VideoServisService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.video = this.vs.getVideo(this.route.snapshot.params.id);


  }

  generateYoutubeUrl(id: string) {
return this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/'+id);

  }

}
