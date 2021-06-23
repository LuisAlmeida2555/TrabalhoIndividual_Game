import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RgpinfoService {

  constructor(private http: HttpClient) { }


  linkSignIn = "http://moreiramoises.pt/server/apis/login.php";
  linkSignUp = 'http://moreiramoises.pt/server/apis/signup.php';
  linkCreateChar = 'http://moreiramoises.pt/server/apis/createChart.php';
  linkGetArma = "http://moreiramoises.pt/server/apis/createArma.php";
  linkCharId = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkRndChar = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  linkUpdateChar = 'http://moreiramoises.pt/server/apis/updateChart.php';
  linkinimigo = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  linkgetArma = 'http://moreiramoises.pt/server/apis/get/getRandomArma.php';


  //Login
  SignIn(name:string, pass:string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append("username", name);
    dataToSend.append("password", pass);
    return this.http.post(this.linkSignIn, dataToSend);
  }

  //Registar
  SignUp(name:string, pass:string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('username', name);
    dataToSend.append('password', pass);
    return this.http.post(this.linkSignUp, dataToSend);
  }

  //Create character
  createPersonage(name:string, atk:string, int:string, vida:string, user:string, pass:string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', user);
    dataToSend.append('password', pass);
    return this.http.post(this.linkCreateChar, dataToSend);
  }

  //Create Gun
  createArma(name:string, attack:string, durabilidade:string, life:string, user:string, pass:string, idPerso:string, tipoPerso:string)
 {
  let dataToSend : FormData = new FormData();

  dataToSend.append("name",name);
  dataToSend.append("atk", attack);
  dataToSend.append("durabilidade", durabilidade);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  dataToSend.append("idPersonagem", idPerso);
  dataToSend.append("tipoDeArma", tipoPerso);
  return this.http.post(this.linkGetArma,dataToSend);
 }

  //Get personagem por id
  getpersonageID(id) {
    return this.http.get(this.linkCharId + id);
  }

  //Get inimigo
  getinimigo() {
    return this.http.get(this.linkinimigo);
  }

  //Get gun
  getgun(id :String)
  {
    return this.http.get(this.linkgetArma);
  }

}
