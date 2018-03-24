import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list';

import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    UserListPage,
    
  ],
  imports: [
    IonicPageModule.forChild(UserListPage),
    PipesModule
    
  ],
})
export class UserListPageModule {}
