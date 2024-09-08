import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {

  education: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let education1 = {
      fecha: '2022 - Present',
      faculty: 'Negocios y Tecnologias',
      university: 'Universidad Veracruzana',
    };

    this.education.push(education1);
    console.log(this.education);
  }
}
