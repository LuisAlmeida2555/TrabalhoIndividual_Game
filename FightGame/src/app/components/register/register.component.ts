import { Component, OnInit } from '@angular/core';
import { RgpinfoService } from 'src/app/services/Rgpinfo.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registoservice: RgpinfoService) { }

  ngOnInit(): void {
  }

  //Registo o novo user
  signup()
  {
    this.registoservice.SignUp(this.name,this.pass).subscribe(data => console.log(data));
  }

  //Declaracao
  name :string = "";
  pass :string  =  "";

}
