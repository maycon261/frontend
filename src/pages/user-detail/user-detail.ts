import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Client } from './../../app/cliente';

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  MySingleCliente: Client = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.MySingleCliente = navParams.get('MySingleCliente');
  }

  ionViewDidLoad() {
    console.log('Teste Depois de carregar' + this.navParams.data);
  }

}
