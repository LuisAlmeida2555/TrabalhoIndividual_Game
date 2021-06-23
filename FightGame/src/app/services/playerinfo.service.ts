import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerinfoService {

  constructor() { }

   pointsEvolucao: number=2;
   backgroundImg:any="";
   password: any;
   username: any;
   playerID: any = "0" ;

  // Player
  player: any = {
    name: "login",
    id: "",
    atk: "0",
    isMonset: "",
    int: "0",
    lp: "0",
    img: "",
    idPlayer: "",
    weapon: "not"
  };

  enemy: any = {
    name: "login",
    id: "",
    atk: "0",
    isMonset: "",
    int: "0",
    life: "0",
    img: "",
    idPlayer: "",
    weapon: "not"
  }


  weapon:any=
   {
    nome :  "s",
    atk :  "10",
    durabilidade : "1000",
    vida :  "10",
    idPersonagem :  "",
    tipoPersonagem : ""
   }
}
