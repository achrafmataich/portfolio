import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SProjectsService {

  private projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor(
    private readonly http: HttpClient
  ) {
    console.log("CTR");

    this.fetchAllProjects().then(res => {
      this.projectsSubject.next(res);
    });
  }

  fetchAllProjects = async (): Promise<Project[]> => {
    return new Promise<Project[]>((resolve, reject) => {
      this.http.get<Project[]>("assets/db/projects.json").subscribe(values => {
        if (values) {
          resolve(values);
        } else {
          reject(new Error("No values | EMPTY"));
        }
      });
    });
  }

  getProjects = (): Observable<Project[]> => {
    return this.projects$;
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.projects$.pipe(
      filter((projects) => projects.find((project) => project._id === id) !== undefined),
      map((projects) => projects.find((project) => project._id === id))
    );
  }
}
