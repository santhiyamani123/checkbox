import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { ShareModule } from "./share/share.module";

import { ImagesliderComponent } from './imageslider/imageslider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselsModule } from './carousels/carousels.module';
import { MathsService } from './services/maths.service';
import { ObsOperatorsComponent } from './obs-operators/obs-operators.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ImagesliderComponent,
    ObsOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    NgImageSliderModule,
    CarouselsModule
    ],

  
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
