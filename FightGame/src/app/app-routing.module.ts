import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { CreategunComponent } from './components/creategun/creategun.component';
import { CreatepersoComponent } from './components/createperso/createperso.component';
import { GunComponent } from './components/gun/gun.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"signin", component:LoginComponent},
  {path:"signup", component:RegisterComponent},
  {path:"createpersonage", component:CreatepersoComponent},
  {path:"", component:HomeComponent},
  {path:"personagem", component:PersonagemComponent},
  {path:"creategun", component:CreategunComponent},
  {path:"gun", component:GunComponent},
  {path:"arena", component:ArenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
