import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let work1 = {
      fecha: "2023 - 2024",
      ubicacion: "Ixtac, Ver.",
      puesto: "BillieGrean",
      empresa: "Enigma's Inc.",
      logro: [
        {descripccion:"Diseño de la DB en Postgres"},
        {descripccion:"Login con JWT en Angular"}
      ]
    };

    let work2 = {
      fecha: "2023 - 2024",
      ubicacion: "Ixtac, Ver.",
      puesto: "Just Type It",
      empresa: "Enigma's Inc.",
      logro: [
        {descripccion:"Construccion del front-end"},
        {descripccion:"Creacion de un API con GraphQL"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
