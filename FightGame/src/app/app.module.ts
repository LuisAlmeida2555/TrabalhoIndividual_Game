import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatepersoComponent } from './components/createperso/createperso.component';
import { RegisterComponent } from './components/register/register.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { CreategunComponent } from './components/creategun/creategun.component';
import { GunComponent } from './components/gun/gun.component';
import { ArenaComponent } from './components/arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CreatepersoComponent,
    RegisterComponent,
    PersonagemComponent,
    CreategunComponent,
    GunComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
