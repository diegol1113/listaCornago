import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-prime-content',
  templateUrl: './prime-content.component.html',
  styleUrls: ['./prime-content.component.css']
})
export class PrimeContentComponent implements OnInit {

  students: Array<Persona> = [
    {nombre: 'luis miguel', presente: true, justificativo: false},
    {nombre: 'john cena', presente: false, justificativo: false},
    {nombre: 'shreck', presente: false, justificativo: false},
    {nombre: 'lionel messi', presente: false, justificativo: true},
    {nombre: 'pepe', presente: true, justificativo: false}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
