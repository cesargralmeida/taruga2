import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job', component: JobDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
