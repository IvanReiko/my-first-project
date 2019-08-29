import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './components/car/car.component';
import {NewComponent} from './components/new/new.component';
import {AboutComponent} from './components/about/about.component';
import {SuportComponent} from './components/suport/suport.component';
import {LoginComponent} from './components/login/login.component';
import {ViewComponent} from './components/detail/view/view.component';

const routes: Routes = [
    { path: '', component: CarComponent },
    { path: 'new', component: NewComponent },
    { path: 'about', component: AboutComponent },
    { path: 'suport', component: SuportComponent },
    { path: 'login', component: LoginComponent },
    { path: 'view/:id/:price', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
