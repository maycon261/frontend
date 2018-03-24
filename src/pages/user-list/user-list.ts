import {UsersProvider} from './../../providers/users/users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, InfiniteScroll } from 'ionic-angular';
import { Client } from './../../app/cliente';



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

 
  ionViewDidEnter() {
    this.getTodosUsuarios(); 
  } 

  getTodosUsuarios(){
    this.userProvider.getTodosUsuarios()
      .subscribe(data =>{        
        this.MyCliente = data;
      },
      err =>{
        console.log(err);
      });
  }  

  
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

  openCreateUser(){
    this.navCtrl.push('CreateUserPage');
  }

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


