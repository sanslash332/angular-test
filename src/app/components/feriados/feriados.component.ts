import { Component, OnInit } from '@angular/core';
import {HolidaysService} from '../../services/holidays.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.component.html',
  styleUrls: ['./feriados.component.sass']
})
export class FeriadosComponent implements OnInit {
  days: any;

  constructor( private hs: HolidaysService) { }

  ngOnInit() {
    this.hs.getdays().subscribe(datos => {
this.days=datos;
console.log(datos);

    })
  }

}
