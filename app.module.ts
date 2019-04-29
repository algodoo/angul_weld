import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditformComponent } from './editform/editform.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthFormComponent } from './auth-form/auth-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EditformComponent,
    FormDetailComponent,
    MessagesComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
