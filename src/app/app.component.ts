import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from "./interests/interests.component";
import { SkillsComponent } from './skills/skills.component';
import { AchivementsComponent } from "./achivements/achivements.component";
import { LenguagesComponent } from "./lenguages/lenguages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    InterestsComponent,
    SkillsComponent,
    AchivementsComponent,
    LenguagesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyCv';
}
