webpackJsonp([4],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function() { return CreateUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_user__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateUserPageModule = (function () {
    function CreateUserPageModule() {
    }
    CreateUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */]),
            ],
        })
    ], CreateUserPageModule);
    return CreateUserPageModule;
}());

//# sourceMappingURL=create-user.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_users__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateUserPage = (function () {
    function CreateUserPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.myCliente = {};
    }
    CreateUserPage.prototype.createUser = function () {
        var _this = this;
        this.userProvider.insert(this.myCliente.cpf, this.myCliente.nome_cliente, this.myCliente.endereco, this.myCliente.estado, this.myCliente.municipio, this.myCliente.telefone, this.myCliente.email, this.myCliente.senha)
            .subscribe(function (data) {
            if (data == true) {
                _this.toast.create({ message: "Cliente inserido com sucesso", position: 'botton', duration: 3000 }).present();
                _this.navCtrl.push('UserListPage');
            }
            else {
                _this.toast.create({ message: "Não foi possivel inserir  tente novamente", position: 'botton', duration: 3000 }).present();
            }
        }, function (err) {
            console.log(err);
            _this.toast.create({ message: "Erro ao inserir cliente .Erro: " + err, position: 'botton', duration: 3000 }).present();
        });
    };
    CreateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-create-user',template:/*ion-inline-start:"D:\cordova-apps\ecommercFrontEnd\src\pages\create-user\create-user.html"*/'<ion-header>\n<ion-navbar>\n  <ion-title>\n    Exemplos de CRUD\n  </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<h1 text-center>Exemplo de INSERT</h1>\n\n<ion-list>\n  <ion-item>\n    <ion-label stacked>Nome</ion-label>\n    <ion-input type="text" name="nome" [(ngModel)]="myCliente.nome_cliente"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>CPF</ion-label>\n    <ion-input type="text" name="cpf" [(ngModel)]="myCliente.cpf"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Telefone</ion-label>\n    <ion-input type="text" name="telefone" [(ngModel)]="myCliente.telefone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Endereço</ion-label>\n    <ion-input type="text" name="endereco" [(ngModel)]="myCliente.endereco"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Estado</ion-label>\n    <ion-input type="text" name="estado" [(ngModel)]="myCliente.estado"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Municipio</ion-label>\n    <ion-input type="text" name="municipio" [(ngModel)]="myCliente.municipio"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="text" name="email" [(ngModel)]="myCliente.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Senha</ion-label>\n    <ion-input type="password" name="senha" [(ngModel)]="myCliente.senha"></ion-input>\n  </ion-item>\n</ion-list>\n\n<button ion-button block (click)="createUser()" color="primary">Criar Usuário</button>\n\n</ion-content>'/*ion-inline-end:"D:\cordova-apps\ecommercFrontEnd\src\pages\create-user\create-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_users_users__["a" /* UsersProvider */]])
    ], CreateUserPage);
    return CreateUserPage;
}());

//# sourceMappingURL=create-user.js.map

/***/ })

});
//# sourceMappingURL=4.js.map