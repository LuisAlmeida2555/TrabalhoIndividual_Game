import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(private PlayerService : PlayerinfoService, private rpgService: RgpinfoService, router : Router ) {this.router = router;}

  router: Router;
  ngOnInit(): void {

    if(this.PlayerService.playerID <= 0){
      this.router.navigate(['/signin']);
      window.alert('Please Sign In');
    }
    else{
      this.getChar();
    }

  }

  //Funçao para ir buscar os dados da personagem
  getChar()
  {
    this.rpgService.getcharacter(this.PlayerService.playerID).subscribe((x:any) => {

        console.log(x);
        this.PlayerService.player.name = x['data'].Personagens[0].Nome;
        this.PlayerService.player.id = x['data'].Personagens[0].ID;
        this.PlayerService.player.atk = x['data'].Personagens[0].Atk;
        this.PlayerService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.PlayerService.player.int = x['data'].Personagens[0].Int;
        this.PlayerService.player.life = x['data'].Personagens[0].Vida;
        this.PlayerService.player.idPlayer = x['data'].Personagens[0].ID_Player;
        this.changeTxt();
    });
  }


  //Muda o texto para os status do personagem
  changeTxt()
  {
    let nome:any = document.getElementById('nome');
    nome.innerText = this.PlayerService.player.name;
    let vida:any = document.getElementById('vida');
    vida.innerText = this.PlayerService.player.life;
    let ataque:any = document.getElementById('ataque');
    ataque.innerText = this.PlayerService.player.atk;
    let inteli:any = document.getElementById('inteli');
    inteli.innerText = this.PlayerService.player.int;
  }

}
