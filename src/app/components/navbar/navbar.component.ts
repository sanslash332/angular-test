import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public navlinks: any = [
    {name: 'main', path: '/'},
    {name: 'dominacion mundial', path: 'about'},
    {name: 'encuestas', path: 'survey'},
    {name: 'mis videos', path: 'video'},
    {name: 'registrate put... amigo mio', path: 'signup'},
    {name: 'lista de feriados de chile', path: 'feriados'},
];

  constructor() { }

  ngOnInit() {
  }

}
