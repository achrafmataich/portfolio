import { Component, OnInit } from '@angular/core';
import { SProjectsService } from '../services/sprojects.service';
import { Project } from '../models/project';
import { TypeOfProject } from '../interfaces/iproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  
  constructor(
    private projectsService: SProjectsService
  ) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    try {
      this.projectsService.getProjects()
        .subscribe(projects => {
          this.projects = projects;
        });
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Something went wrong when trying to fetch projects");
    }
  }

  // Function to determine the CSS class based on the project type
  getPillClass(type: TypeOfProject): string {
    switch (type) {
      case 'UI/UX':
        return 'from-blue-200 to-blue-50 text-green-800';
      case 'Software':
        return 'from-green-200 to-green-50 text-green-800';
      case 'Data Science':
        return 'from-yellow-200 to-yellow-50 text-yellow-800';
      default:
        return 'from-gray-100 to-gray-50 text-gray-700'; // Default class if type is not recognized
    }
  }

}
