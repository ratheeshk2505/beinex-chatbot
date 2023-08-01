import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatDashboardComponent } from './module/chat-dashboard/chat-dashboard.component';
import { ChatUploadComponent } from './module/chat-upload/chat-upload.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatDashboardComponent,
    ChatUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({// required for toastr
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      countDuplicates: false,
      closeButton: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
