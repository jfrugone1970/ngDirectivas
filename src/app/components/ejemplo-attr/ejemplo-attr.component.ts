import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-attr',
  templateUrl: './ejemplo-attr.component.html',
  styleUrls: ['./ejemplo-attr.component.scss']
})
export class EjemploAttrComponent implements OnInit {

  color: string = '';
  iscomic: boolean;

  constructor() {
    this.iscomic = false;

  }

  ngOnInit(): void {

  }

  cambiarFuente() {
    this.iscomic = !this.iscomic;

  }
}
