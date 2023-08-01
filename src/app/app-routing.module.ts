import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDashboardComponent } from './module/chat-dashboard/chat-dashboard.component';
import { ChatUploadComponent } from './module/chat-upload/chat-upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/upload',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: ChatDashboardComponent,
  },
  {
    path: 'upload',
    component: ChatUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
