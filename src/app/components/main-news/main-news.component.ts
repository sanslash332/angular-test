import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.sass']
})
export class MainNewsComponent implements OnInit {
  @Input() title: string = 'el titulo de la noticia ';
  constructor() { }

  ngOnInit() {
  }

  setTitle(titulo: string) {
this.title=titulo;

  }

}
