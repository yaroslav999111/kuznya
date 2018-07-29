webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_people_people_component__ = __webpack_require__("./src/app/pages/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_projects_projects_component__ = __webpack_require__("./src/app/pages/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_casts_casts_component__ = __webpack_require__("./src/app/pages/casts/casts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news_component__ = __webpack_require__("./src/app/pages/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rental_rental_component__ = __webpack_require__("./src/app/pages/rental/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_people_separate_people_separate_people_component__ = __webpack_require__("./src/app/pages/people/separate-people/separate-people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mainpage_mainpage_component__ = __webpack_require__("./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_one_news_one_component__ = __webpack_require__("./src/app/pages/news-one/news-one.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_3__pages_people_people_component__["a" /* PeopleComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_4__pages_projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'casts', component: __WEBPACK_IMPORTED_MODULE_5__pages_casts_casts_component__["a" /* CastsComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_6__pages_news_news_component__["a" /* NewsComponent */] },
    { path: 'rental', component: __WEBPACK_IMPORTED_MODULE_7__pages_rental_rental_component__["a" /* RentalComponent */] },
    { path: 'separate-people', component: __WEBPACK_IMPORTED_MODULE_10__pages_people_separate_people_separate_people_component__["a" /* SeparatePeopleComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_11__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'news-one', component: __WEBPACK_IMPORTED_MODULE_12__pages_news_one_news_one_component__["a" /* NewsOneComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"kuznya-ua\">-->\r\n  <!--<div class=\"icon-title\">-->\r\n    <!--Тут картинка <h1>test</h1>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"search\">-->\r\n    <!--<input type=\"text\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"settings\">-->\r\n    <!--<span>message-icon</span>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"navigation-for-pages\">-->\r\n  <!--<div class=\"people\" routerLink=\"/people\">people</div>-->\r\n  <!--<div class=\"projects\" routerLink=\"/projects\">projects</div>-->\r\n  <!--<div class=\"casts\" routerLink=\"/casts\">casts</div>-->\r\n  <!--<div class=\"news\" routerLink=\"/news\">news</div>-->\r\n  <!--<div class=\"rental\" routerLink=\"/rental\">rental</div>-->\r\n<!--</div>-->\r\n<div class=\"header\">\r\n  <div class=\"search\">\r\n    <div class=\"container\" >\r\n      <img routerLink=\"/main\" src=\"../../assets/imgs/logo.png\"> <form><input type=\"search\" name=\"search\" placeholder=\"Поиск\"></form>\r\n      <a routerLink=\"/login\" *ngIf=\"!isOnline\">Вход</a>\r\n      <a routerLink=\"/registration\" *ngIf=\"!isOnline\">Регистрация</a>\r\n      <a *ngIf=\"isOnline\">Добрый день, test@ukr.net</a>\r\n      <a (click)=\"logouts()\" *ngIf=\"isOnline\">Выйти</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/people\">Люди</a>\r\n      <a routerLink=\"/projects\">Проекты</a>\r\n      <a routerLink=\"/casts\">Кастинги</a>\r\n      <a routerLink=\"/news\">Новости</a>\r\n      <a routerLink=\"/rental\">Rental & Sale</a>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"carousel\">\r\n     <div class=\"container\">\r\n      <img src=\"img/logos.png\">\r\n     </div>\r\n  </div>  -->\r\n</div>\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">\r\n  <!--<span>here will be footer</span>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.search .container {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authGuard) {
        this.authGuard = authGuard;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authGuard.userIsLogin.subscribe(function (data) {
            if (data['isLogin'] === 'false') {
                _this.isOnline = false;
            }
            else {
                _this.isOnline = true;
            }
        });
    };
    AppComponent.prototype.logouts = function () {
        this.isOnline = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_people_people_component__ = __webpack_require__("./src/app/pages/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects_component__ = __webpack_require__("./src/app/pages/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_casts_casts_component__ = __webpack_require__("./src/app/pages/casts/casts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news_component__ = __webpack_require__("./src/app/pages/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rental_rental_component__ = __webpack_require__("./src/app/pages/rental/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_people_separate_people_separate_people_component__ = __webpack_require__("./src/app/pages/people/separate-people/separate-people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mainpage_mainpage_component__ = __webpack_require__("./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_one_news_one_component__ = __webpack_require__("./src/app/pages/news-one/news-one.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_casts_casts_component__["a" /* CastsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rental_rental_component__["a" /* RentalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_people_separate_people_separate_people_component__["a" /* SeparatePeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_news_one_news_one_component__["a" /* NewsOneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"div-login\" *ngIf=\"!correctLogin\">\r\n      <img src=\"../../assets/imgs/login.png\">\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" formControlName=\"email\"  placeholder=\"Email\">\r\n        <input formControlName=\"password\" class=\"password-in\" type=\"password\" placeholder=\"Пароль\">\r\n        <div class=\"right-value\" *ngIf=\"correctForm\"><span>Пожалуйста, введите Ваши данные верно</span></div>\r\n        <input type=\"submit\" class=\"btn-submit\" value=\"Вход\">\r\n        <a routerLink=\"/registration\">Регистрация</a>\r\n      </form>\r\n    </div>\r\n    <div class=\"success\" *ngIf=\"correctLogin\">\r\n     <span>Отлично, вы ввели верные данные!</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n.success {\n  font-size: 30px;\n  color: darkolivegreen;\n  text-align: center;\n  height: 500px;\n  line-height: 500px; }\n.password-in {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.btn-submit {\n  cursor: pointer; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authGuard, router) {
        this.authGuard = authGuard;
        this.router = router;
        this.correctForm = false;
        this.correctLogin = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginForm.value["email"] == "test@ukr.net" && this.loginForm.value["password"] == "123456789") {
            // this.authGuard.userIsLogin.next({'isLogin': 'true'});
            this.correctForm = false;
            this.correctLogin = true;
            // setTimeout(function() {this.router.navigate(['main']) }, 3000);
            this.authGuard.userIsLogin.next({ 'isLogin': 'true' });
            this.router.navigate(['main']);
        }
        else {
            this.correctForm = true;
            this.correctLogin = false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main\">\r\n  <div class=\"carousel\">\r\n    <div class=\"container\">\r\n      <img src=\"../../../assets/imgs/logos.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"carousel\">\r\n    <div class=\"container\">\r\n      <img src=\"../../../assets/imgs/main.jpg\">\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n  <div class=\"main-left-info\">\r\n    <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" >Последние проекты</span>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"main-right-info\">\r\n    <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" > Последние новости</span>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n\r\n    <div class=\"project-list\">\r\n      <h6>Писта рулю</h6>\r\n      <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n/* Главная станица */\n.main-left-info, .main-right-info {\n  background: #fff;\n  width: 47.5%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.main-left-info span, .main-right-info span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.main-left-info p {\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__("./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/mainpage/mainpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/pages/casts/casts.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Искать здесь...\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/casts/casts.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/casts/casts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CastsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CastsComponent = /** @class */ (function () {
    function CastsComponent() {
    }
    CastsComponent.prototype.ngOnInit = function () {
    };
    CastsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-casts',
            template: __webpack_require__("./src/app/pages/casts/casts.component.html"),
            styles: [__webpack_require__("./src/app/pages/casts/casts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CastsComponent);
    return CastsComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n\r\n\r\n\r\n    <div class=\"project-all \">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n/* Главная станица */\n.main-left-info, .main-right-info {\n  background: #fff;\n  width: 47.5%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.main-left-info span, .main-right-info span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.main-left-info p {\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsOneComponent = /** @class */ (function () {
    function NewsOneComponent() {
    }
    NewsOneComponent.prototype.ngOnInit = function () {
    };
    NewsOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-one',
            template: __webpack_require__("./src/app/pages/news-one/news-one.component.html"),
            styles: [__webpack_require__("./src/app/pages/news-one/news-one.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsOneComponent);
    return NewsOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Искать здесь...\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__("./src/app/pages/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"carousel\">\r\n      <div class=\"container\">\r\n        <img src=\"../../../assets/imgs/logos.png\">\r\n      </div>\r\n    </div>\r\n    <form action=\"#\">\r\n\r\n      <div class=\"select-box\">\r\n\r\n        <label for=\"select-box1\" class=\"label select-box1\"><span class=\"label-desc\">Должность</span> </label>\r\n        <select id=\"select-box1\" class=\"select\">\r\n          <option value=\"Choice 1\">Кинооператор</option>\r\n          <option value=\"Choice 2\">Звукорежисер</option>\r\n          <option value=\"Choice 3\">Стилист</option>\r\n        </select>\r\n\r\n      </div>\r\n      <div class=\"select-box\">\r\n\r\n        <label for=\"select-box1\" class=\"label select-box1\"><span class=\"label-desc\">Опыт работы</span> </label>\r\n        <select id=\"select-box1\" class=\"select\">\r\n          <option value=\"Choice 1\">1</option>\r\n          <option value=\"Choice 2\">2</option>\r\n          <option value=\"Choice 3\">3</option>\r\n        </select>\r\n\r\n      </div>\r\n      <div class=\"select-box\">\r\n\r\n        <label for=\"select-box1\" class=\"label select-box1\"><span class=\"label-desc\">Занятость</span> </label>\r\n        <select id=\"select-box1\" class=\"select\">\r\n          <option value=\"Choice 1\">Занят</option>\r\n          <option value=\"Choice 2\">Свободен</option>\r\n        </select>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n    <div class=\"avatar avatar-red\" routerLink=\"/separate-people\">\r\n      <img src=\"../../../assets/imgs/avatar.jpg\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <h4>Директор сьемочной площадки</h4>\r\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\r\n      <p><span>Email:</span> karapuz@mini.ua</p>\r\n      <p><span>Сайт:</span> fb.com/karapuz</p>\r\n\r\n    </div>\r\n    <div class=\"avatar avatar-red\" routerLink=\"/separate-people\">\r\n      <img src=\"../../../assets/imgs/avatar.jpg\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <h4>Директор сьемочной площадки</h4>\r\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\r\n      <p><span>Email:</span> karapuz@mini.ua</p>\r\n      <p><span>Сайт:</span> fb.com/karapuz</p>\r\n\r\n    </div>\r\n    <div class=\"avatar avatar-red\" routerLink=\"/separate-people\">\r\n      <img src=\"../../../assets/imgs/avatar.jpg\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <h4>Директор сьемочной площадки</h4>\r\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\r\n      <p><span>Email:</span> karapuz@mini.ua</p>\r\n      <p><span>Сайт:</span> fb.com/karapuz</p>\r\n\r\n    </div>\r\n    <div class=\"avatar avatar-red\">\r\n      <img src=\"../../../assets/imgs/avatar.jpg\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <h4>Директор сьемочной площадки</h4>\r\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\r\n      <p><span>Email:</span> karapuz@mini.ua</p>\r\n      <p><span>Сайт:</span> fb.com/karapuz</p>\r\n\r\n    </div>\r\n    <div class=\"avatar avatar-red\" routerLink=\"/separate-people\">\r\n      <img src=\"../../../assets/imgs/avatar.jpg\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <h4>Директор сьемочной площадки</h4>\r\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\r\n      <p><span>Email:</span> karapuz@mini.ua</p>\r\n      <p><span>Сайт:</span> fb.com/karapuz</p>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<script type=\"text/javascript\">\r\n\r\n  $(\"select\").on(\"click\" , function() {\r\n\r\n    $(this).parent(\".select-box\").toggleClass(\"open\");\r\n\r\n  });\r\n\r\n  $(document).mouseup(function (e)\r\n  {\r\n    var container = $(\".select-box\");\r\n\r\n    if (container.has(e.target).length === 0)\r\n    {\r\n      container.removeClass(\"open\");\r\n    }\r\n  });\r\n\r\n\r\n  $(\"select\").on(\"change\" , function() {\r\n\r\n    var selection = $(this).find(\"option:selected\").text(),\r\n      labelFor = $(this).attr(\"id\"),\r\n      label = $(\"[for='\" + labelFor + \"']\");\r\n\r\n    label.find(\".label-desc\").html(selection);\r\n\r\n  });\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/people/people.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303;\n  cursor: pointer; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/pages/people/people.component.html"),
            styles: [__webpack_require__("./src/app/pages/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n\n\n    <div class=\"avatar avatar-red\">\n      <img src=\"../../../../assets/imgs/avatar.jpg\">\n    </div>\n\n    <div class=\"info-main\">\n      <div class=\"info-main-name\"><h1>Бред Питт</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\n      <h4>Директор сьемочной площадки</h4>\n      <p><span>Моб.тел:</span> 099 99 999 99</p>\n      <p><span>Email:</span> karapuz@mini.ua</p>\n      <p><span>Сайт:</span> fb.com/karapuz</p>\n\n    </div>\n\n\n    <div class=\"info-all\">\n      <span><img src=\"../../../../assets/imgs/info-all-ico.jpg\" > О себе <a class=\"info-all-edit\" href=\"\">редактировать</a></span>\n      Страна: Украина<br>\n      Водитель категории B<br>\n\n      <p>Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\n      </p>\n\n\n    </div>\n\n    <div class=\"my-project\">\n      <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" > Мои проекты <a class=\"info-all-edit\" href=\"\">редактировать</a></span>\n\n      <div class=\"project-list\">\n        <h6>Писта рулю</h6>\n        <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\n      </div>\n\n      <div class=\"project-list\">\n        <h6>Писта рулю</h6>\n        <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\n      </div>\n\n      <div class=\"project-list\">\n        <h6>Писта рулю</h6>\n        <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций, занимаемых участниками...</p>\n      </div>\n\n\n    </div>\n\n    <div class=\"my-news\"></div>\n\n\n\n  </div>\n</div>\n\n\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeparatePeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeparatePeopleComponent = /** @class */ (function () {
    function SeparatePeopleComponent() {
    }
    SeparatePeopleComponent.prototype.ngOnInit = function () {
    };
    SeparatePeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-separate-people',
            template: __webpack_require__("./src/app/pages/people/separate-people/separate-people.component.html"),
            styles: [__webpack_require__("./src/app/pages/people/separate-people/separate-people.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SeparatePeopleComponent);
    return SeparatePeopleComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Искать здесь...\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/rental/rental.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Искать здесь...\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"project-all\">\r\n      <h2>Звездные гости на съемочной площадке Отеля Элеон</h2>\r\n      <img src=\"../../../assets/imgs/kuhnya.jpg\">\r\n      <p>\r\n\r\n        Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.\r\n      </p>\r\n      <a routerLink=\"/news-one\" class=\"more\">Подробнее...</a>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/rental/rental.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/rental/rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RentalComponent = /** @class */ (function () {
    function RentalComponent() {
    }
    RentalComponent.prototype.ngOnInit = function () {
    };
    RentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rental',
            template: __webpack_require__("./src/app/pages/rental/rental.component.html"),
            styles: [__webpack_require__("./src/app/pages/rental/rental.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RentalComponent);
    return RentalComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- please add markup for registration -->\r\n\r\n<form class=\"registration\" *ngIf=\"!allForm || !allForm2 || !allForm3 || !allForm4\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n\r\n  <img src=\"../../assets/imgs/login.png\">\r\n\r\n  <div class=\"name\">\r\n    <span>Имя*</span>\r\n    <input type=\"text\" formControlName=\"name\" >\r\n  </div>\r\n\r\n  <div class=\"name-error\" *ngIf=\"!enterName\">\r\n    <span>Пожалуйста, введите свое Имя</span>\r\n  </div>\r\n\r\n  <div class=\"s-name\">\r\n    <span>Фамилия</span>\r\n    <input type=\"text\" class=\"s-name__input\">\r\n  </div>\r\n\r\n  <div class=\"e-mail\">\r\n    <span>E-mail*</span>\r\n    <input type=\"email\" class=\"email__input\" formControlName=\"email\" >\r\n  </div>\r\n\r\n  <div class=\"email-error\" *ngIf=\"!enterEmail\">\r\n    <span>Пожалуйста, введите свой e-mail</span>\r\n  </div>\r\n\r\n  <div class=\"mob\">\r\n    <span>Мобильный</span>\r\n    <input type=\"text\" class=\"mobs__input\">\r\n  </div>\r\n\r\n  <div class=\"pass\">\r\n    <span>Пароль*</span>\r\n    <input type=\"text\" formControlName=\"password\" class=\"pass\">\r\n  </div>\r\n\r\n  <div class=\"check-pass\">\r\n    <span>Еще раз пароль*</span>\r\n    <input type=\"text\" formControlName=\"checkPass\" class=\"check-pass__input\">\r\n  </div>\r\n\r\n  <div class=\"check-pass-error\" *ngIf=\"!passMath || !allForm4\">\r\n    <span>Пароли не совпадаю или не введены, пожалуйста введите еще раз</span>\r\n  </div>\r\n\r\n\r\n  <div class=\"check-pass\">\r\n    <input type=\"submit\" class=\"reg-submit\" value=\"Регистрация\">\r\n  </div>\r\n\r\n  <div class=\"reg-inf\">\r\n    <input type=\"checkbox\" checked> Согласен с правами пользвателя\r\n  </div>\r\n</form>\r\n\r\n<div class=\"success-form\" *ngIf=\"allForm && allForm2 && allForm3 && allForm4\">\r\n  <div class=\"title-success-form\">Поздравляем, Вы прошли регистрацию!</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.email__input {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n/* Страница регистрации */\n.registration {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.registration img {\n  width: 100%; }\n.registration input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.registration input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.registration a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.passMath = true;
        this.enterName = true;
        this.enterEmail = true;
        this.allForm = false;
        this.allForm2 = false;
        this.allForm3 = false;
        this.allForm4 = true;
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            sname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            checkPass: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onRegisterSubmit = function () {
        if (this.registrationForm.value["password"] === this.registrationForm.value["checkPass"]) {
            this.passMath = true;
            this.allForm = true;
        }
        else if (this.registrationForm.value["password"] !== this.registrationForm.value["checkPass"]) {
            this.passMath = false;
            this.allForm = false;
        }
        if (this.registrationForm.value["password"].length == 0 || this.registrationForm.value["checkPass"].length == 0) {
            this.allForm4 = false;
        }
        else {
            this.allForm4 = true;
        }
        if (this.registrationForm.value["name"].length == 0) {
            this.enterName = false;
            this.allForm2 = false;
        }
        else if (this.registrationForm.value["name"].length !== 0) {
            this.enterName = true;
            this.allForm2 = true;
        }
        if (this.registrationForm.value["email"].length == 0) {
            this.enterEmail = false;
            this.allForm3 = false;
        }
        else if (this.registrationForm.value["email"].length !== 0) {
            this.enterEmail = true;
            this.allForm3 = true;
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
        this.userIsLogin = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ 'isLogin': 'false' });
    }
    AuthService.prototype.login = function () {
        // return (true).pipe(
        //   delay(1000),
        //   tap(val => this.isLoggedIn = true)
        // );
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.ngOnInit = function () {
    };
    LoginService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.addUser = function (user) {
        return this.http.post('/api/addUser', { username: user.username, password: user.password })
            .map(function (res) {
            return res;
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map