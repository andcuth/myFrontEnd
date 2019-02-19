import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
// import our services
import {AuthLoginService} from './service/auth-login.service';
import {AlertService, AuthRegisterService}from './service/auth-register.service';
import { AppRouting } from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {AlertComponent } from './directives/alert/alert.component';
import {ErrorInterceptorProvider} from './service/helper/error.interceptor';
import {JwtInterceptorProvider} from './service/helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [AuthRegisterService,
              AuthLoginService,
              AuthGuard,
              AlertService,
              JwtInterceptorProvider,
              ErrorInterceptorProvider
  ], //our service providers
  bootstrap: [AppComponent]
})
export class AppModule { }
