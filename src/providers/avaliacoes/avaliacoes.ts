import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the AvaliacoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvaliacoesProvider {
  constructor(public http: HttpClient) {
    console.log("Hello AvaliacoesProvider Provider");
  }

  adicionar(nota: number) {
    let avaliacoes = [];
    if (localStorage.getItem("avaliacoes")) {
      avaliacoes = JSON.parse(localStorage.getItem("avaliacoes"));
    }
    avaliacoes.push(nota);
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
  }

  list() {
    return JSON.parse(localStorage.getItem("avaliacoes"));
  }
}
