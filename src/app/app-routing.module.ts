import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ObsOperatorsComponent } from './obs-operators/obs-operators.component';
import { RegisterComponent } from './register/register.component';
import { AppMainComponent } from './shared/app-main/app-main.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: 'carousels', component: CarouselsComponent },
  { path: 'imageslider', component: ImagesliderComponent },
  { path: 'obsoperators', component: ObsOperatorsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'passingdata', component: AppMainComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m =>m.BlogModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
