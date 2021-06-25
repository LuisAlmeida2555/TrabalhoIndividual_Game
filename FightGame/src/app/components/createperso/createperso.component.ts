import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createperso',
  templateUrl: './createperso.component.html',
  styleUrls: ['./createperso.component.css']
})
export class CreatepersoComponent implements OnInit {

  constructor(private criarPerso : RgpinfoService, private player : PlayerinfoService, router : Router) {this.router = router;}

  router : Router;

  ngOnInit(): void {
    if(this.player.playerID <= 0){
      this.router.navigate(['/signin']);
      window.alert('Please Sign In');
    }
    else{
      this.registarPerso();
    }
  }

  //Regista os dados da personagem
  registarPerso()
  {
    this.criarPerso.createPersonage(this.user,this.name,this.pass,this.isMonster,this.int,this.life).subscribe(data => console.log
    (data));
  }
    user : string = "";
    name : string = "";
    pass : string  =  "";
    isMonster : string = "";
    int : string = "20";
    life : string = "15";
    attack : string = "30";

}
