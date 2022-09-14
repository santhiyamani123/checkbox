import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminWorkGuard } from './admin-work.guard';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CarouselsComponent } from './carousels/carousels.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ObsOperatorsComponent } from './obs-operators/obs-operators.component';
import { PerfernceCheckGuard } from './perfernce-check.guard';
import { RegisterComponent } from './register/register.component';
import { ResolverGuard } from './resolver.guard';
import { SearchComponent } from './search/search.component';
import { AppMainComponent } from './shared/app-main/app-main.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: 'carousels', component: CarouselsComponent },
  { path:'userdetail',component:UserdetailsComponent},

  //Resolver data is loaded before route is activated

  { path: 'imageslider',
    component: ImagesliderComponent,
    resolve:{
      data : ResolverGuard
    }
  },
  { path: 'obsoperators', component: ObsOperatorsComponent},
  { path: 'register', component: RegisterComponent,canActivate: [AdminGuard,AuthGuard]},
  { path: 'passingdata', component: AppMainComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path:'pereferences',
    canLoad:[PerfernceCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)

  },
  {
    path: 'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },

  
  {
    path:'admin',
    canActivate:[SuperAdminGuard],
    children:[
      {
        path:'',
        component:AdminComponent
      },
      {
        path:'',
        canActivateChild:[AdminWorkGuard],
        children:[
          {
            path:'manage',
            component:AdminManageComponent
          },
          {
            path:'edit',
            component:AdminEditComponent
          },
          {
            path:'delete',
            component:AdminDeleteComponent
          }

        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
