import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string = '';
  estado: string = '';
  cidade: string = '';
  logradouro: string = '';
  resultado$: Observable<any> | undefined; 

  constructor(private http: HttpClient) {}


  consultarCep() {
    if (this.cep) {
      this.resultado$ = this.http.get(`https://viacep.com.br/ws/${this.cep}/json`);
    }
  }


  consultarEndereco() {
    if (this.estado && this.cidade && this.logradouro) {
      this.resultado$ = this.http.get(`https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.logradouro}/json`);
    }
  }
}
