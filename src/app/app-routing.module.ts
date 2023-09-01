import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "projects", component: ProjectsComponent },
  /* { path: "projects/:id", component: ProjectDetailsComponent }, */
  { path: "**", component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
