import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  evento = {
  name:'PHP Conference', 
  date: '6/30/2020', 
  time: '10am', 
  location: {address: 'UniBH ', city: 'Belo Horizonte', country: 'Brasil'}}
  constructor() { }

  ngOnInit(): void {
  }

}
