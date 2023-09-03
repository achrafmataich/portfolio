import { Component, OnInit } from '@angular/core';
import { SProjectsService } from '../services/sprojects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  /**
   *
   */
  constructor(
    private projectsService: SProjectsService 
  ) {
    
  }

  ngOnInit(): void {
      this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

}
