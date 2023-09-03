import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SProjectsService {

  projects: Project[] = [
    {
      _id: "1",
      title: "MeowApp",
      desc: "A Cross Platform mobile chat app written in React Native / Expo",
      typeOfProject: "software",
      imageUrl: "assets/img/react.png"
    },
    {
      _id: "2",
      title: "Sportify",
      desc: "A Recommandation system that helps the coach to choose the best linup for a football team",
      typeOfProject: "ds",
      imageUrl: ""
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of<Project[]>(this.projects);
  }
}
