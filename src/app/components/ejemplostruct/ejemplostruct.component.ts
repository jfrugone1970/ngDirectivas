import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplostruct',
  templateUrl: './ejemplostruct.component.html',
  styleUrls: ['./ejemplostruct.component.scss']
})
export class EjemplostructComponent implements OnInit {

  rol: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  cambiarRol() {
    this.rol = !this.rol;

  }



}
