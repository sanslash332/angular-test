import { Injectable } from '@angular/core';
import {VIDEOS} from '../data/videoMock';
import {Video} from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoServisService {

  constructor() { }

  getVideo(id: number): Video {
    return VIDEOS[id];

  }
}
