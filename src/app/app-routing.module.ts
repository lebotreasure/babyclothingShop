import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './components/categories/accessory/accessory.component';
import { DressesComponent } from './components/categories/dresses/dresses.component';
import { LeggingsComponent } from './components/categories/leggings/leggings.component';
import { SetsComponent } from './components/categories/sets/sets.component';
import { ShoesComponent } from './components/categories/shoes/shoes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'sets', component: SetsComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'leggings', component: LeggingsComponent },
  { path: 'accessory', component: AccessoryComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
