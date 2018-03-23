webpackJsonp([3],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.MyCliente = { email: "", senha: "" };
        this.MyCliente = {};
    }
    LoginPage.prototype.validalogin = function () {
        var _this = this;
        this.userProvider.login(this.MyCliente.email, this.MyCliente.senha)
            .subscribe(function (data) {
            console.log(data);
            //this.MyCliente = data;
            if (data == true) {
                _this.toast.create({ message: "Usuário logado com sucesso", position: 'botton', duration: 3000 }).present();
                _this.navCtrl.push('UserListPage');
            }
            else {
                _this.toast.create({ message: "Usuário Invalido tente novamente", position: 'botton', duration: 3000 }).present();
            }
        }, function (err) {
            console.log(err);
            _this.toast.create({ message: "Erro ao efetuar login. Erro: " + err, position: 'botton', duration: 3000 }).present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\cordova-apps\ecommercFrontEnd\src\pages\login\login.html"*/'<ion-header>\n<ion-navbar>\n  <ion-title>\n    Ionic Rest Api Example\n  </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<h1 text-center>Exemplo de criação de conta</h1>\n\n<ion-list>  \n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="text" name="email" [(ngModel)]="MyCliente.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Senha</ion-label>\n    <ion-input type="password" name="senha" [(ngModel)]="MyCliente.senha"></ion-input>\n  </ion-item>\n</ion-list>\n\n<button ion-button block (click)="validalogin()" color="primary">Login page</button>\n\n</ion-content>'/*ion-inline-end:"D:\cordova-apps\ecommercFrontEnd\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_users_users__["a" /* UsersProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map