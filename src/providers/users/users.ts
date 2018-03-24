import { HttpClient, HttpHeaders,HttpResponse,HttpParams  } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Client } from './../../app/cliente';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersProvider {

	private API_URL ='https://ecommerc-pucminas-rest.herokuapp.com/api/'

  constructor(public http: HttpClient) {
    
  }


  createUser(id: string,  nome_cliente: string,    endereco: string,
    estado: string,    municipio: string,    telefone: string,    email: string,
    senha: string){
      return new Promise((resolve, reject) => {
  
        let url = this.API_URL + 'cliente';

        var data ={
          id: id,  nome_cliente: nome_cliente,  endereco: endereco,
          estado: estado,  municipio: municipio,  telefone: telefone,  email: email,
          senha: senha
        };
  
        this.http.post(url, data)
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
      });
  }

  

  login(email: string,  senha: string){
    let url = this.API_URL + 'login';   

    return this.http.post(url,{email,senha})
    
}


  
  getTodosUsuarios(): Observable<Client[]> {
    let url = this.API_URL + 'clientes';    
    return this.http
      .get<Client[]>(url);      
} 


  get(id: string): Observable<Client> {  

    let url = this.API_URL + 'cliente/' + id;    
    return this.http.get<Client>(url);
    
  }

  insert(cpf: string,  nome_cliente: string,    endereco: string,
    estado: string,    municipio: string,    telefone: string,    email: string,
    senha: string): Observable<Boolean> {

    let url = this.API_URL + 'cliente';

    const expandedHeaders = this.prepareHeader(null);

    return this.http.post<Boolean>(url, {cpf,nome_cliente,endereco,estado,municipio,telefone,email,senha }, expandedHeaders)
      
  }

  update(cpf: string,  nome_cliente: string,    endereco: string,
    estado: string,    municipio: string,    telefone: string,    email: string,
    senha: string) {
    
      let url = this.API_URL + 'cliente/' + cpf ;     

      const expandedHeaders = this.prepareHeader(null);
   
    
      return this.http.patch(url, {nome_cliente,endereco,estado,municipio,telefone,email,senha }, expandedHeaders)
      
  }

  remove(cliente: Client):Observable<Boolean> {

      let url = this.API_URL + 'cliente/' + cliente.cpf ;     

      const expandedHeaders = this.prepareHeader(null);

      return this.http.delete<boolean>(url,expandedHeaders);
    
  }

  private prepareHeader(headers: HttpHeaders | null): object {
    headers = headers || new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('charset', 'UTF-8');

    return {
        headers: headers
    }
}


}
