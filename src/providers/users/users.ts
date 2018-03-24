import { HttpClient, HttpHeaders,HttpResponse,HttpParams  } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Client } from './../../app/cliente';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


/**
 * Representa um servico de consumo HTTP/REST 
 *
 * @author maycon
 */
@Injectable()
export class UsersProvider {

  /**
   * url do servico rest
   */
  private API_URL ='https://ecommerc-pucminas-rest.herokuapp.com/api/'

  constructor(public http: HttpClient) {
    
  }

/**
 * metodo cria um usuario e envia o endpoint 
 * via POST
 * @author maycon
 * @returns e tradado no obj interceptador
 */
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

  

  /**
   * metodo envia os parametros ao endpoint via POST 
   * @param email 
   * @param senha
   * @returns e tradado no obj interceptador 
   */
  login(email: string,  senha: string){
    let url = this.API_URL + 'login';   

    return this.http.post(url,{email,senha})
    
}


  /**
   * metodo solicita todos os clientes da base ao endpoint via GET
   * @returns lista de clientes tradado no obj interceptador 
   */
  getTodosUsuarios(): Observable<Client[]> {
    let url = this.API_URL + 'clientes';    
    return this.http
      .get<Client[]>(url);      
} 



/**
   * metodo solicita um  cliente da base ao endpoint via GET
   * @param cpf do cliente
   * @returns o cliente e tradado no obj interceptador 
   */    
get(id: string): Observable<Client> {  

    let url = this.API_URL + 'cliente/' + id;    
    return this.http.get<Client>(url);
    
  }


 
  /**
   * Insere um cliente via POST
   * @param cpf 
   * @param nome_cliente 
   * @param endereco 
   * @param estado 
   * @param municipio 
   * @param telefone 
   * @param email 
   * @param senha 
   * @returns boolean e tratrado no obj interceptador
   */
  insert(cpf: string,  nome_cliente: string,    endereco: string,
    estado: string,    municipio: string,    telefone: string,    email: string,
    senha: string): Observable<Boolean> {

    let url = this.API_URL + 'cliente';

    const expandedHeaders = this.prepareHeader(null);

    return this.http.post<Boolean>(url, {cpf,nome_cliente,endereco,estado,municipio,telefone,email,senha }, expandedHeaders)
      
  }

  /**
   * Atualiza um cliente via PATCH
   * o endpoint tratara quais os campos que serao atualizado
   * @param cpf 
   * @param nome_cliente 
   * @param endereco 
   * @param estado 
   * @param municipio 
   * @param telefone 
   * @param email 
   * @param senha 
   * @returns boolean e tratrado no obj interceptador
   */
  update(cpf: string,  nome_cliente: string,    endereco: string,
    estado: string,    municipio: string,    telefone: string,    email: string,
    senha: string) {
    
      let url = this.API_URL + 'cliente/' + cpf ;     

      const expandedHeaders = this.prepareHeader(null);
   
    
      return this.http.patch(url, {nome_cliente,endereco,estado,municipio,telefone,email,senha }, expandedHeaders)
      
  }

  /**
   * delete um cliente
   * @param cliente 
   * @returns boolean e tratrado no obj interceptador
   */
  remove(cliente: Client):Observable<Boolean> {

      let url = this.API_URL + 'cliente/' + cliente.cpf ;     

      const expandedHeaders = this.prepareHeader(null);

      return this.http.delete<boolean>(url,expandedHeaders);
    
  }

  /**
   * cria um Header padrao
   * @param headers 
   */
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
