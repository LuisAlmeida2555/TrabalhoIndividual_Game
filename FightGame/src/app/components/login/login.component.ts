import { Component, OnInit } from '@angular/core';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signinService: RgpinfoService, private playerservice: PlayerinfoService, router: Router ) { this.router = router }

  ngOnInit(): void {
  }

  router: Router;

  signin()
  {
    this.signinService.SignIn(this.name, this.pass).subscribe((x:any)=> {
      console.log(x);
      this.idplayer=x['data'];
      console.log(this.idplayer);
      this.playerservice.playerID=this.idplayer;

      if (x['code'] <= 200){
        window.alert("Login sucessful");
        this.router.navigate(['/character']);
        this.playerservice.username=this.name;
        this.playerservice.password=this.pass;
    }
    else{
      window.alert("Login Failed")
    }
    );
  }

  name : string = "";
  pass : string  = "";
  idplayer: any;

}
