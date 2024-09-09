import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lenguages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lenguages.component.html',
  styleUrl: './lenguages.component.css'
})
export class LenguagesComponent {

  lenguages: Array<any> = []

  constructor() {}

  ngOnInit(): void {

    let lenguage1 = {
      name: "Spanish"
    }

    let lenguage2 = {
      name: "English"
    }

    this.lenguages.push(lenguage1);
    this.lenguages.push(lenguage2);
    console.log(this.lenguages);
  }
}
