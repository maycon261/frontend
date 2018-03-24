import {UsersProvider} from './../../providers/users/users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, InfiniteScroll } from 'ionic-angular';
import { Client } from './../../app/cliente';



/** 
 * Lista os clientes cadastrados
 * Podendo fazer o CRUD dos clientes
 * @author maycon
*/
@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage implements OnInit {

  MyCliente: Client[] = [];
  MySingleCliente: Client = {}; 
  clientes:any;
  
 
 

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider  ) {      
      
  }

  ngOnInit() {
    
    
   }

 
  /**depois que a tela carrega, solicita os cliente via endpoint */
   ionViewDidEnter() {
    this.getTodosUsuarios(); 
  } 

  /**retorna todos clientes, utilizando nosso servico
   * no subscribe injetamos o resultado do GET no nosso array interno 
   * para popular a lista de cliente
   */
  getTodosUsuarios(){
    this.userProvider.getTodosUsuarios()
      .subscribe(data =>{        
        this.MyCliente = data;
      },
      err =>{
        console.log(err);
      });
  }  

  
  /**
   * com a lista preenchida
   * ao clicar em um cliente 
   * o app redireciona para tela de dados 
   * exibindo os dados do cliente selecionado anteriormente
   * @param id 
   */
  openUser(id: string){
    this.userProvider.get(id)
    .subscribe(data =>{      
      this.MySingleCliente = data;      
      this.navCtrl.push('UserDetailPage', {MySingleCliente: this.MySingleCliente});
    },
    err =>{
      console.log(err);
      this.toast.create({message:"Erro ao recuperar usuario. Erro: " + err, position: 'botton',duration: 3000})
    });   
  } 

  /**ao clicar no + app redireciona para tela de cadastrado de usuario */
  openCreateUser(){
    this.navCtrl.push('CreateUserPage');
  }

  /**
   * com a lista preenchida
   * ao clicar em um cliente 
   * e arrastarmos para direita e clicarmos na opcao EDITAR
   * o app redireciona para a tela de alteracao 
   * @param id 
   */
  openEditUser(id: string){
    this.userProvider.get(id)
    .subscribe(data =>{      
      this.MySingleCliente = data;
      
      this.navCtrl.push('UserEditPage', {MySingleCliente: this.MySingleCliente});
    },
    err =>{
      console.log(err);
      this.toast.create({message:"Erro ao recuperar usuario. Erro: " + err, position: 'botton',duration: 3000})
    });  
  }

  /**
   * com a lista preenchida
   * ao clicar em um cliente 
   * e arrastarmos para direita e clicarmos na opcao EXCLUIR
   * o app deleta o cliente
   * @param id 
   */
  deleteUser(cliente: Client) {
    this.userProvider.remove(cliente)
    .subscribe(data =>{

      if (data == true) {
        let index = this.MyCliente.indexOf(cliente);
        this.MyCliente.splice(index, 1); 
        this.toast.create({ message: 'Usuário excluído com sucesso.', position: 'botton', duration: 3000 }).present();
      }
    },
    err =>{
      console.log(err);
      this.toast.create({ message: 'Erro ao excluir o usuário. Erro: ' + err.error, position: 'botton', duration: 3000 }).present();
    });     
  }
}


