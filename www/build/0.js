webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageModule", function() { return UserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserListPageModule = (function () {
    function UserListPageModule() {
    }
    UserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */]),
            ],
        })
    ], UserListPageModule);
    return UserListPageModule;
}());

//# sourceMappingURL=user-list.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_users__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_retry__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListPage = (function () {
    function UserListPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.MyCliente = [];
        this.MySingleCliente = {};
    }
    UserListPage.prototype.ngOnInit = function () {
        this.getTodosUsuarios();
    };
    UserListPage.prototype.ionViewDidEnter = function () {
        this.MyCliente = [];
        this.getTodosUsuarios();
    };
    UserListPage.prototype.getTodosUsuarios = function () {
        var _this = this;
        this.userProvider.getTodosUsuarios()
            .subscribe(function (data) {
            _this.MyCliente = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserListPage.prototype.openUser = function (id) {
        var _this = this;
        this.userProvider.get(id)
            .subscribe(function (data) {
            _this.MySingleCliente = data;
            _this.navCtrl.push('UserDetailPage', { MySingleCliente: _this.MySingleCliente });
        }, function (err) {
            console.log(err);
            _this.toast.create({ message: "Erro ao recuperar usuario. Erro: " + err, position: 'botton', duration: 3000 });
        });
    };
    UserListPage.prototype.openCreateUser = function () {
        this.navCtrl.push('CreateUserPage');
    };
    UserListPage.prototype.openEditUser = function (id) {
        var _this = this;
        this.userProvider.get(id)
            .subscribe(function (data) {
            _this.MySingleCliente = data;
            _this.navCtrl.push('UserEditPage', { MySingleCliente: _this.MySingleCliente });
        }, function (err) {
            console.log(err);
            _this.toast.create({ message: "Erro ao recuperar usuario. Erro: " + err, position: 'botton', duration: 3000 });
        });
    };
    UserListPage.prototype.deleteUser = function (cliente) {
        var _this = this;
        this.userProvider.remove(cliente)
            .subscribe(function (data) {
            if (data == true) {
                var index = _this.MyCliente.indexOf(cliente);
                _this.MyCliente.splice(index, 1);
                _this.toast.create({ message: 'Usuário excluído com sucesso.', position: 'botton', duration: 3000 }).present();
            }
        }, function (err) {
            console.log(err);
            _this.toast.create({ message: 'Erro ao excluir o usuário. Erro: ' + err.error, position: 'botton', duration: 3000 }).present();
        });
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-user-list',template:/*ion-inline-start:"D:\cordova-apps\ecommercFrontEnd\src\pages\user-list\user-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Clientes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let mycliente of MyCliente">\n      <ion-item (click)="openUser(mycliente.cpf)">       \n        <h2>{{ mycliente.nome_cliente}}</h2>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="primary" (click)="openEditUser(mycliente.cpf)">\n            <ion-icon name="create"></ion-icon>\n            Editar\n          </button>\n        <button ion-button color="danger" (click)="deleteUser(mycliente)">\n            <ion-icon name="trash"></ion-icon>\n            Excluir\n          </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  \n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="openCreateUser()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\cordova-apps\ecommercFrontEnd\src\pages\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_users_users__["a" /* UsersProvider */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(7);
var retry_1 = __webpack_require__(296);
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retry_1 = __webpack_require__(297);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return retry_1.retry(count)(this);
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(18);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
exports.retry = retry;
var RetryOperator = (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=retry.js.map

/***/ })

});
//# sourceMappingURL=0.js.map