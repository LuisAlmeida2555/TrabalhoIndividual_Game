import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private playerService : PlayerinfoService, private rpgService : RgpinfoService, router : Router) {this.router = router;}

  router : Router;

  ngOnInit(): void {
    if(this.playerService.playerID <= 0){
      this.router.navigate(['/signin']);
      window.alert('Please Sign In');
    }else{
      this.getpersonagem();
      this.getenemy();
    }
  }

  //Declaracao
  vidapl:any="";
  ataquepl:any="";

  vidaEni:any="";
  ataqueEni:any="";

  //Valores Iniciais
  setInitialValue(){
    this.vidapl=Number(this.playerService.player.life)*10;
    this.ataquepl=Number(this.playerService.player.atk);

    this.vidaEni=Number(this.playerService.enemy.life)*10;
    this.ataqueEni=Number(this.playerService.enemy.atk);
  }


  //Funçao da luta entre o player e inimigo
  luta()
  {
    if(this.vidapl>0 &&  this.vidaEni>0){
      this.vidapl=this.vidapl-this.ataqueEni;
      this.vidaEni=this.vidaEni-this.ataquepl;
    }
    else{
      if(this.vidapl<this.vidaEni)
      window.alert("JÁ FOSTE! PERDESTE!!");
      else
      window.alert("ÉS O VENCEDOR");
    }
  }

  //Função para ir buscar os dados do player
  getpersonagem()
  {
    this.rpgService.getcharacter(this.playerService.playerID).subscribe((x:any) => {
        console.log(x);
        this.playerService.player.name = x['data'].Personagens[0].Nome;
        this.playerService.player.id = x['data'].Personagens[0].ID;
        this.playerService.player.atk = x['data'].Personagens[0].Atk;
        this.playerService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.playerService.player.int = x['data'].Personagens[0].Int;
        this.playerService.player.life = x['data'].Personagens[0].Vida;
        this.playerService.player.idPlayer = x['data'].Personagens[0].ID_Player;
        this.changetxt();
    });
  }

  //Função para ir buscar os dados do inimigo
  getenemy()
  {
    this.rpgService.getinimigo().subscribe((x:any) => {
        console.log(x);
        this.playerService.enemy.name = x['data'].Nome;
        this.playerService.enemy.id = x['data'].ID;
        this.playerService.enemy.atk = x['data'].Atk;
        this.playerService.enemy.isMonset = x['data'].IsMonset;
        this.playerService.enemy.int = x['data'].Int;
        this.playerService.enemy.life = x['data'].Vida;
        this.playerService.enemy.idPlayer = x['data'].ID_Player;
        this.changetxt2();
    });
  }

  //Muda o paragrafo para o nome do player
  changetxt(){

    let player:any = document.getElementById('personage');
    player.innerText =  this.playerService.player.name;
  }

  //Muda o paragrafo para o nome do inimigo escolhido
  changetxt2(){
    let inimigo:any = document.getElementById('enemy');
    inimigo.innerText =  this.playerService.enemy.name;
    this.setInitialValue();
  }


}
