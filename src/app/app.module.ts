import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AboutComponent } from './components/about/about.component';
import { NewComponent } from './components/new/new.component';
import { SuportComponent } from './components/suport/suport.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ViewComponent } from './components/detail/view/view.component';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGuard } from './dashboard.guard';
import {ExitDashboardGuard} from './exit.dashboard.guard';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AboutComponent,
    NewComponent,
    SuportComponent,
    LoginComponent,
    ViewComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DashboardGuard, ExitDashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
