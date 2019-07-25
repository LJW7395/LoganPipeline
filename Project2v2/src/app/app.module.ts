import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { ViewTourneyComponent } from './view-tourney/view-tourney.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainDisplayComponent,
    AboutComponent,
    ViewTourneyComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
