import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "projects", component: ProjectsComponent },
  /* { path: "projects/:id", component: ProjectDetailsComponent }, */
  { path: "about", component: AboutComponent },
  { path: "**", component: FourOhFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: "enabled",
    onSameUrlNavigation: "reload",
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
