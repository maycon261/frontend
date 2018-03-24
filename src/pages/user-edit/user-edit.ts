import {UsersProvider} from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Client } from './../../app/cliente';


@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  
  //MySingleCliente: Client = { cpf: "", nome_cliente: "", endereco:"", estado:"", municipio:"",telefone:"", email:"", senha:"" };

  MySingleCliente: Client= {};
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {

      this.MySingleCliente = navParams.get('MySingleCliente');
      
    }
  
    updateClient() {
    this.userProvider.update(
          this.MySingleCliente.cpf,this.MySingleCliente.nome_cliente, this.MySingleCliente.endereco,
          this.MySingleCliente.estado,this.MySingleCliente.municipio,this.MySingleCliente.telefone,
          this.MySingleCliente.email, this.MySingleCliente.senha)
    .subscribe(data =>{
      
      console.log('RESPOSTA DO SERVER' + data);

      if (data == true) {
        this.toast.create({message:"Cliente atualizado com sucesso", position: 'botton',duration: 3000}).present();
        this.navCtrl.push('UserListPage');  
      }else {
        this.toast.create({message:"Não foi possivel atualizar tente novamente", position: 'botton',duration: 3000}).present();
      }
    },
    err =>{
      console.log(err);
      this.toast.create({message:"Erro ao atualizar cliente .Erro: " + err, position: 'botton',duration: 3000}).present();
    });
  }
 
  

}



