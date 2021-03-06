import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
//import { AuthService } from './services/auth.service';


const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    FormsModule
    
  ],
  providers: [ValidateService
        //,AuthService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
