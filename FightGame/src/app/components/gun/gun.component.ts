import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gun',
  templateUrl: './gun.component.html',
  styleUrls: ['./gun.component.css']
})
export class GunComponent implements OnInit {

  constructor(private rpgService: RgpinfoService, private playerService : PlayerinfoService, router: Router) {this.router = router }

  router: Router;

  ngOnInit(): void {

    if(this.playerService.playerID <= 0){
      this.router.navigate(['/signin']);
      window.alert('Please Sign In ');
    }
    else{
      this.getgun();
    }
  }

//Vai buscar os status da arma
  getgun(){
    this.rpgService.getgun(this.playerService.playerID).subscribe((x:any) => {
      console.log(x);
      this.playerService.weapon.nome = x['data'].nome;
      this.playerService.weapon.atk = x['data'].Atk;
      this.playerService.weapon.vida = x['data'].Durabilidade;
      this.changetext();
  });
}

//Muda o texto dos paragrafos para os status da arma
changetext()
  {
    let name2:any = document.getElementById('nome');
    name2.innerText = this.playerService.weapon.nome;
    let name3:any = document.getElementById('durabi');
    name3.innerText = this.playerService.weapon.vida;
    let name4:any = document.getElementById('ataque');
    name4.innerText = this.playerService.weapon.atk;
  }
}


