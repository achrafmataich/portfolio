import { Component, OnInit } from '@angular/core';
import { SProjectsService } from '../services/sprojects.service';
import { Project } from '../models/project';
import { TypeOfProject } from '../interfaces/iproject';

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
  ) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  // Function to determine the CSS class based on the project type
  getPillClass(type: TypeOfProject): string {
    switch (type) {
      case 'UI/UX':
        return 'from-blue-600 to-blue-400 text-white';
      case 'Software':
        return 'from-green-800 to-green-600 text-white';
      case 'Data Science':
        return 'from-yellow-600 to-yellow-500 text-white';
      default:
        return 'from-gray-100 to-gray-50 text-gray-700'; // Default class if type is not recognized
    }
  }

}
