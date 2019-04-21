import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}  from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import  { AuthGuardService } from './auth-gaurd.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightComponent } from './flight/flight.component';
import { DiningComponent } from './dining/dining.component';
import { WakeupComponent } from './wakeup/wakeup.component';
import { IndiaComponent } from './india/india.component';
import { EuropeComponent } from './europe/europe.component';
import { OurComponent } from './our/our.component';
import { PayComponent } from './pay/pay.component';
import { PayfComponent } from './payf/payf.component';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { EmailService } from './email.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookingComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    NavbarComponent,
    FlightComponent,
    DiningComponent,
    WakeupComponent,
    IndiaComponent,
    EuropeComponent,
    OurComponent,
    PayComponent,
    PayfComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,


  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
