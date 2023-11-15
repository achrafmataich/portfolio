import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { SProjectsService } from '../services/sprojects.service';
import { Code, CodeExampleType, Paragraph, Section, Technology, TechnologyDetailed } from '../interfaces/iproject';
import { highlightAll } from 'prismjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project!: Project | undefined;
  id?: string;

  code1: string = `print("Hello, World!")`;

  @ViewChild('technologiesDetailedTemplate', { static: true }) technologiesDetailedTemplate!: TemplateRef<Technology>;
  @ViewChild('technologiesStringTemplate', { static: true }) technologiesStringTemplate!: TemplateRef<Technology>;

  constructor(
    private route: ActivatedRoute,
    private readonly projectsService: SProjectsService
  ) { }


  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.id = projectId;
      this.projectsService.getProjectById(this.id).subscribe(project => {
        this.project = project;
      });
    }

    highlightAll();


  }

  isTechnologiesDetailed(technology: Technology): technology is TechnologyDetailed {
    return typeof technology === 'object' && technology.hasOwnProperty('name') && technology.hasOwnProperty('version');
  }

  isParagraph(codeExample: CodeExampleType): codeExample is Paragraph {
    return typeof codeExample === 'object' && codeExample.hasOwnProperty("par");
  }

  isSection(codeExample: CodeExampleType): codeExample is Section {
    return typeof codeExample === 'object' && codeExample.hasOwnProperty("sec");
  }

  isCode(codeExample: CodeExampleType): codeExample is Code {
    return typeof codeExample === 'object' && codeExample.hasOwnProperty("code") && codeExample.hasOwnProperty("type");
  }

}
