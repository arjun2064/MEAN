import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent}  from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import  { AuthGuardService } from './auth-gaurd.service';
import { FlightComponent } from './flight/flight.component';
import { WakeupComponent } from './wakeup/wakeup.component';
import { PayComponent } from './pay/pay.component';
import { PayfComponent } from './payf/payf.component';
import { EuropeComponent } from './europe/europe.component';
import { IndiaComponent } from './india/india.component';
import { OurComponent } from './our/our.component';
import { DiningComponent } from './dining/dining.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pay', component: PayComponent},
  {path: 'payf', component: PayfComponent},
  {path: 'europe', component: EuropeComponent},
  {path: 'india', component: IndiaComponent},
  {path: 'our', component: OurComponent},
  {path: 'dining', component: DiningComponent},
  {path: 'book', component: BookingComponent},
  {path: 'a', component: WakeupComponent},
  
  {path: '', redirectTo: '/a', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path : 'booking', component : BookingComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'flight', component : FlightComponent},
  {path : 'profile', component : ProfileComponent, canActivate : [AuthGuardService] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
