import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creategun',
  templateUrl: './creategun.component.html',
  styleUrls: ['./creategun.component.css']
})
export class CreategunComponent implements OnInit {

  constructor( private criarArma: RgpinfoService, private player: PlayerinfoService, router : Router) {this.router = router; }

  router : Router;
  ngOnInit(): void {
    //Se o player nao estiver logado nao deixa abrir
    if(this.player.playerID <= 0){
      this.router.navigate(['/signin']);
      window.alert('Please Sign In');
    }
    else{
      this.registarArma();
    }
  }

  //Guarda os dados da arma
  registarArma(){
    this.criarArma.createArma(this.nome,this.atk,this.durabilidade,this.vida,this.username,this.password,this.idPersonagem,this.tipoPersonagem).subscribe(data => console.log
    (data));
    console.log(this.nome,this.atk,this.durabilidade,this.vida,this.username,this.password,this.idPersonagem,this.tipoPersonagem)
  }

  //Declaraçao
  nome : string = "";
  atk : string = "500";
  durabilidade : string  =  "3000";
  vida : string = "100";
  username : string = "";
  password : string = "";
  idPersonagem : string = "";
  tipoPersonagem : string ="";

}
