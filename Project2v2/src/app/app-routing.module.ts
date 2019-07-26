import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { AboutComponent } from './about/about.component';
import { ViewTourneyComponent } from './view-tourney/view-tourney.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'main-display',component:MainDisplayComponent},
  {path:'about',component:AboutComponent},
  {path:'view-tourney/:id',component:ViewTourneyComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
