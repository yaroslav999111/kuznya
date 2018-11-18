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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__own_profile_own_profile_component__ = __webpack_require__("./src/app/own-profile/own-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_adv_adv_component__ = __webpack_require__("./src/app/pages/adv/adv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rooles_rooles_component__ = __webpack_require__("./src/app/pages/rooles/rooles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contacts_contacts_component__ = __webpack_require__("./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reestablish_reestablish_component__ = __webpack_require__("./src/app/reestablish/reestablish.component.ts");
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
    { path: 'news-one', component: __WEBPACK_IMPORTED_MODULE_12__pages_news_one_news_one_component__["a" /* NewsOneComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__own_profile_own_profile_component__["a" /* OwnProfileComponent */] },
    { path: 'adv', component: __WEBPACK_IMPORTED_MODULE_14__pages_adv_adv_component__["a" /* AdvComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_16__pages_contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'rooles', component: __WEBPACK_IMPORTED_MODULE_15__pages_rooles_rooles_component__["a" /* RoolesComponent */] },
    { path: 'reestablish', component: __WEBPACK_IMPORTED_MODULE_17__reestablish_reestablish_component__["a" /* ReestablishComponent */] }
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

module.exports = "<!--<div class=\"kuznya-ua\">-->\r\n  <!--<div class=\"icon-title\">-->\r\n    <!--Тут картинка <h1>test</h1>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"search\">-->\r\n    <!--<input type=\"text\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"settings\">-->\r\n    <!--<span>message-icon</span>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"navigation-for-pages\">-->\r\n  <!--<div class=\"people\" routerLink=\"/people\">people</div>-->\r\n  <!--<div class=\"projects\" routerLink=\"/projects\">projects</div>-->\r\n  <!--<div class=\"casts\" routerLink=\"/casts\">casts</div>-->\r\n  <!--<div class=\"news\" routerLink=\"/news\">news</div>-->\r\n  <!--<div class=\"rental\" routerLink=\"/rental\">rental</div>-->\r\n<!--</div>-->\r\n<div class=\"header\">\r\n  <div class=\"search\">\r\n    <div class=\"container\" >\r\n      <img routerLink=\"/main\" src=\"../../assets/imgs/logo.png\"> <form><input type=\"search\" name=\"search\" placeholder=\"Поиск\"></form>\r\n      <a routerLink=\"/login\" *ngIf=\"!isOnline\">Вход</a>\r\n      <a routerLink=\"/registration\" *ngIf=\"!isOnline\">Регистрация</a>\r\n      <a routerLink=\"/profile\" *ngIf=\"isOnline\">Добрый день, {{userName}}</a>\r\n\r\n      <a (click)=\"logouts()\" *ngIf=\"isOnline\">Выйти</a>\r\n\t  <img class=\"i1\" routerLink=\"/main\" src=\"../../assets/imgs/facebook.png\"><img class=\"i1\" routerLink=\"/main\" src=\"../../assets/imgs/youtube.png\"><img class=\"i1\" routerLink=\"/main\" src=\"../../assets/imgs/instagram.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"menu\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/people\">Люди</a>\r\n      <a routerLink=\"/projects\">Проекты</a>\r\n      <a routerLink=\"/casts\">Кастинги</a>\r\n      <a routerLink=\"/news\">Новости</a>\r\n      <a routerLink=\"/rental\">Rental & Sale</a>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"carousel\">\r\n     <div class=\"container\">\r\n      <img src=\"img/logos.png\">\r\n     </div>\r\n  </div>  -->\r\n</div>\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">\r\n\r\n  <div class=\"container\">\r\n\r\n    Все права защищены © 2018\r\n    <ul>\r\n      <li><a routerLink=\"/rooles\">Условия пользования</a></li>\r\n      <li><a routerLink=\"/contacts\">Контакты</a></li>\r\n      <li><a routerLink=\"/adv\">Реклама на сайте</a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px;\n  padding-bottom: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.search .container {\n  cursor: pointer; }\n.footer {\n  background: #d4d4d4;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.footer ul li {\n  list-style-type: none; }\n.footer ul {\n  margin: 0px;\n  padding: 0px; }\n.main {\n  min-height: 100vh; }\n.i1 {\n  width: 16px !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function AppComponent(authGuard, loginService, router) {
        this.authGuard = authGuard;
        this.loginService = loginService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.check();
    };
    AppComponent.prototype.check = function () {
        var _this = this;
        this.authGuard.userIsLogin.subscribe(function (data) {
            if (data['isLogin'] === 'false' && !localStorage.getItem('userEmail')) {
                _this.isOnline = false;
            }
            else {
                _this.isOnline = true;
                _this.userName = localStorage.getItem('username');
            }
        });
    };
    AppComponent.prototype.logouts = function () {
        this.isOnline = false;
        localStorage.clear();
        this.authGuard.userIsLogin.next({ 'isLogin': 'false' });
        this.router.navigate(['login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__own_profile_own_profile_component__ = __webpack_require__("./src/app/own-profile/own-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contacts_contacts_component__ = __webpack_require__("./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_adv_adv_component__ = __webpack_require__("./src/app/pages/adv/adv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rooles_rooles_component__ = __webpack_require__("./src/app/pages/rooles/rooles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reestablish_reestablish_component__ = __webpack_require__("./src/app/reestablish/reestablish.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_17__pages_news_one_news_one_component__["a" /* NewsOneComponent */],
                __WEBPACK_IMPORTED_MODULE_18__own_profile_own_profile_component__["a" /* OwnProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_adv_adv_component__["a" /* AdvComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_rooles_rooles_component__["a" /* RoolesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__reestablish_reestablish_component__["a" /* ReestablishComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__services_projects_service__["a" /* ProjectsService */], __WEBPACK_IMPORTED_MODULE_24__services_users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"div-login\" *ngIf=\"!correctLogin\">\r\n      <img src=\"../../assets/imgs/login.png\">\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"email\" formControlName=\"email\"  placeholder=\"Email\">\r\n        <input formControlName=\"password\" class=\"password-in\" type=\"password\" placeholder=\"Пароль\">\r\n        <div class=\"right-value\" *ngIf=\"correctForm\"><span>Пожалуйста, введите Ваши данные верно</span></div>\r\n        <input type=\"submit\" class=\"btn-submit\" value=\"Вход\">\r\n        <a routerLink=\"/registration\">Регистрация</a><br>\r\n        <a routerLink=\"/reestablish\">Восстановить пароль</a>\r\n      </form>\r\n    </div>\r\n    <div class=\"success\" *ngIf=\"correctLogin\">\r\n     <span>Отлично, вы ввели верные данные!</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.main {\n  min-height: 100vh; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n.success {\n  font-size: 30px;\n  color: darkolivegreen;\n  text-align: center;\n  height: 500px;\n  line-height: 500px; }\n.password-in {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.btn-submit {\n  cursor: pointer; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=email] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
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
    function LoginComponent(authGuard, router, loginService) {
        this.authGuard = authGuard;
        this.router = router;
        this.loginService = loginService;
        this.correctForm = false;
        this.correctLogin = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkForOnline();
    };
    LoginComponent.prototype.checkForOnline = function () {
        console.log(localStorage.getItem('userEmail'));
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.loginUser(this.loginForm.value).subscribe(function (data) {
            if (data.status) {
                _this.correctForm = true;
                _this.correctLogin = false;
            }
            else if (!data.status) {
                _this.loginService.currentUser.next({ name: data['username'] });
                _this.loginService.currentUserInformation.next(data);
                localStorage.setItem('userEmail', data['email']);
                localStorage.setItem('username', data['username']);
                _this.correctForm = false;
                _this.correctLogin = true;
                // setTimeout(function() {this.router.navigate(['main']) }, 3000);
                _this.authGuard.userIsLogin.next({ 'isLogin': 'true' });
                _this.router.navigate(['main']);
            }
        });
        // if(this.loginForm.value["email"] == "test@ukr.net" && this.loginForm.value["password"]=="123456789") {
        //   // this.authGuard.userIsLogin.next({'isLogin': 'true'});
        //   this.correctForm = false;
        //   this.correctLogin = true;
        //   // setTimeout(function() {this.router.navigate(['main']) }, 3000);
        //   this.authGuard.userIsLogin.next({'isLogin': 'true'});
        //   this.router.navigate(['main']);
        //
        // } else {
        //   this.correctForm = true;
        //   this.correctLogin = false;
        // }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main\">\r\n  <div class=\"carousel\">\r\n    <div class=\"container\">\r\n      <img src=\"../../../assets/imgs/logos.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"carousel\">\r\n    <div class=\"container\">\r\n      <img src=\"../../../assets/imgs/main.jpg\">\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n  <div class=\"main-left-info\">\r\n    <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" >Последние проекты</span>\r\n\r\n    <div class=\"project-list\" *ngFor=\"let projects of myAllProjectsByStatus\">\r\n      <h6>{{projects.title}}</h6>\r\n  <p>{{projects.story}}</p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"main-right-info\">\r\n    <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" > Последние новости</span>\r\n\r\n    <div class=\"project-list\" *ngFor=\"let projects of myAllProjectsByStatus2\">\r\n      <h6>{{projects.title}}</h6>\r\n  <p>{{projects.story}}</p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  cursor: pointer; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n/* Главная станица */\n.main-left-info, .main-right-info {\n  background: #fff;\n  width: 47.5%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.main-left-info span, .main-right-info span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.main-left-info p {\n  font-size: 15px; }\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function MainpageComponent(projectsService) {
        this.projectsService = projectsService;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        this.getMyProjects();
    };
    MainpageComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getAllProjectsByStatus((1)).subscribe(function (data) {
            _this.myAllProjectsByStatus = data;
        });
        this.projectsService.getAllProjectsByStatus((0)).subscribe(function (data) {
            _this.myAllProjectsByStatus2 = data;
        });
    };
    MainpageComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__("./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/mainpage/mainpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/own-profile/own-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n\r\n    <div class=\"avatar avatar-red\" [ngStyle]=\"{'box-shadow': profileInformation.freeOrBusy == 0 ? '0px 0px 10px #de0303' : '0px 0px 10px #25bb1b'}\">\r\n      <img [src]=\"'data:image/jpg;base64,'+ profileInformation.avatar\" style=\"height:100%;width:100%\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n\r\n      <div class=\"info-main-name\"><h1>{{profileInformation?.username}} {{profileInformation?.sname}}</h1>  <span class=\"starr\"><b>★★★★★★</b>★★★★</span> </div>\r\n      <!--<h4>{{profileInformation?.position}}</h4>-->\r\n      <h4>{{ positionInCompany}}</h4>\r\n      <p><span>Моб.тел:</span> {{profileInformation?.mobile}}</p>\r\n      <p><span>Email:</span> {{profileInformation?.email}}</p>\r\n      <p><span>Сайт:</span> {{profileInformation?.site}}</p>\r\n\r\n    </div>\r\n\r\n    <div class=\"info-all-profile\">\r\n      <span><img src=\"../../assets/imgs/info-all-ico.jpg\" > Редактировать данные</span>\r\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" >\r\n        <input type=\"text\" formControlName=\"mobile\"  placeholder=\"Телефон\">\r\n        <input class=\"password-in\" formControlName=\"email\" type=\"text\" placeholder=\"Email\">\r\n        <input type=\"text\" formControlName=\"site\" placeholder=\"Сайт\\Facebook\">\r\n        <!--<input type=\"text\" formControlName=\"position\" placeholder=\"Ваша должность\">-->\r\n        <textarea type=\"text\" formControlName=\"about\"  placeholder=\"Кратко о себе\"></textarea>\r\n        Ваша Должность:\r\n        <select formControlName=\"freeOrBusy\" [(ngModel)]=\"position.status\">\r\n          <option [value]=\"0\" [selected]=\"position.status ==0\">Режиссер-постановщик</option>\r\n          <option [value]=\"1\" [selected]=\"position.status ==1\">2й режиссер</option>\r\n          <option [value]=\"2\" [selected]=\"position.status ==2\">Помощник режиссера (хлопушка)</option>\r\n          <option [value]=\"3\" [selected]=\"position.status ==3\">Плейбек</option>\r\n          <option [value]=\"4\" [selected]=\"position.status ==4\">Скрипт супервайзер (редактор)</option>\r\n          <option [value]=\"5\" [selected]=\"position.status ==5\">Ассистент по актерам</option>\r\n          <option [value]=\"6\" [selected]=\"position.status ==6\">Ассистент режиссера по массовке</option>\r\n          <option [value]=\"7\" [selected]=\"position.status ==7\">Операторская группа:</option>\r\n          <option [value]=\"8\" [selected]=\"position.status ==8\">Оператор-постановщик</option>\r\n          <option [value]=\"9\" [selected]=\"position.status ==9\">Камермен</option>\r\n          <option [value]=\"10\" [selected]=\"position.status ==10\">Фокус-пуллер</option>\r\n          <option [value]=\"11\" [selected]=\"position.status ==11\">Механик камеры (инженер)</option>\r\n          <option [value]=\"12\" [selected]=\"position.status ==12\">Дольщик</option>\r\n          <option [value]=\"13\" [selected]=\"position.status ==13\">Стедикам</option>\r\n          <option [value]=\"14\" [selected]=\"position.status ==14\">Художественная группа:</option>\r\n          <option [value]=\"15\" [selected]=\"position.status ==15\">Художник-постановщик</option>\r\n          <option [value]=\"16\" [selected]=\"position.status ==16\">Ассистент художника постановщика</option>\r\n          <option [value]=\"17\" [selected]=\"position.status ==17\">Художник-декоратор</option>\r\n          <option [value]=\"18\" [selected]=\"position.status ==18\">Декоратор</option>\r\n          <option [value]=\"19\" [selected]=\"position.status ==19\">Бутафор</option>\r\n          <option [value]=\"20\" [selected]=\"position.status ==20\">Реквизитор</option>\r\n          <option [value]=\"21\" [selected]=\"position.status ==21\">Постановщик</option>\r\n          <option [value]=\"22\" [selected]=\"position.status ==22\">Генеральный продюсер</option>\r\n          <option [value]=\"23\" [selected]=\"position.status ==23\">Исполнительный продюсер</option>\r\n          <option [value]=\"24\" [selected]=\"position.status ==24\">Креативный продюсер</option>\r\n          <option [value]=\"25\" [selected]=\"position.status ==25\">Директор (линейный продюсер)</option>\r\n          <option [value]=\"26\" [selected]=\"position.status ==26\">Заместитель директора</option>\r\n          <option [value]=\"27\" [selected]=\"position.status ==27\">Администратор</option>\r\n          <option [value]=\"28\" [selected]=\"position.status ==28\">Хелпер</option>\r\n          <option [value]=\"29\" [selected]=\"position.status ==29\">Локейшн-менеджер</option>\r\n          <option [value]=\"30\" [selected]=\"position.status ==30\">Кейтеринг</option>\r\n          <option [value]=\"31\" [selected]=\"position.status ==31\">Фотограф</option>\r\n          <option [value]=\"32\" [selected]=\"position.status ==32\">Звукооператор</option>\r\n          <option [value]=\"33\" [selected]=\"position.status ==33\">Ассистент звукооператора (бумщик)</option>\r\n          <option [value]=\"34\" [selected]=\"position.status ==34\">Гаффер</option>\r\n          <option [value]=\"35\" [selected]=\"position.status ==35\">Чиф-электрик</option>\r\n          <option [value]=\"36\" [selected]=\"position.status ==36\">Кейгрип</option>\r\n          <option [value]=\"37\" [selected]=\"position.status ==37\">Осветитель</option>\r\n          <option [value]=\"38\" [selected]=\"position.status ==38\">Художник по гриму</option>\r\n          <option [value]=\"39\" [selected]=\"position.status ==39\">Ассистент художника по гриму</option>\r\n          <option [value]=\"40\" [selected]=\"position.status ==40\">Гример</option>\r\n          <option [value]=\"41\" [selected]=\"position.status ==41\">Постижист</option>\r\n          <option [value]=\"42\" [selected]=\"position.status ==42\">Стилист</option>\r\n          <option [value]=\"43\" [selected]=\"position.status ==43\">Художник по костюму</option>\r\n          <option [value]=\"44\" [selected]=\"position.status ==44\">Ассистент художника по костюму</option>\r\n          <option [value]=\"45\" [selected]=\"position.status ==45\">Костюмер</option>\r\n          <option [value]=\"46\" [selected]=\"position.status ==46\">Оператор квадрокоптера</option>\r\n          <option [value]=\"47\" [selected]=\"position.status ==47\">Пиротехник</option>\r\n          <option [value]=\"48\" [selected]=\"position.status ==48\">Каскадер</option>\r\n          <option [value]=\"49\" [selected]=\"position.status ==49\">Кастинг-директор</option>\r\n          <option [value]=\"50\" [selected]=\"position.status ==50\">Кастинг-менеджер</option>\r\n          <option [value]=\"51\" [selected]=\"position.status ==51\">Режиссер по планированию</option>\r\n          <option [value]=\"52\" [selected]=\"position.status ==52\">Начальник транспортного цеха</option>\r\n          <option [value]=\"53\" [selected]=\"position.status ==53\">Юрист</option>\r\n          <option [value]=\"54\" [selected]=\"position.status ==54\">Бухгалтер</option>\r\n          <option [value]=\"55\" [selected]=\"position.status ==55\">Экономист</option>\r\n          <option [value]=\"56\" [selected]=\"position.status ==56\">Офис-менеджер</option>\r\n          <option [value]=\"57\" [selected]=\"position.status ==57\">Композитор</option>\r\n          <option [value]=\"58\" [selected]=\"position.status ==58\">Режиссер монтажа</option>\r\n          <option [value]=\"59\" [selected]=\"position.status ==59\">Монтажер</option>\r\n          <option [value]=\"60\" [selected]=\"position.status ==60\">Финансовый директор</option>\r\n          <option [value]=\"61\" [selected]=\"position.status ==61\">Кейтеринг служба</option>\r\n          <option [value]=\"62\" [selected]=\"position.status ==62\">PR-менеджер</option>\r\n          <option [value]=\"63\" [selected]=\"position.status ==63\">Технический директор</option>\r\n          <option [value]=\"64\" [selected]=\"position.status ==64\">Клипмейкер</option>\r\n          <option [value]=\"65\" [selected]=\"position.status ==65\">Координатор спецэффектов</option>\r\n          <option [value]=\"66\" [selected]=\"position.status ==66\">Колорист</option>\r\n          <option [value]=\"67\" [selected]=\"position.status ==67\">Сценарист</option>\r\n        </select><br>\r\n        Занятость:\r\n        <select formControlName=\"freeOrBusy\" [(ngModel)]=\"busy.status\">\r\n          <option [value]=\"0\" [selected]=\"busy.status ==0\">Свободен</option>\r\n          <option [value]=\"1\" [selected]=\"busy.status ==1\">Занят</option>\r\n        </select><br>\r\n\r\n        Загрузить фото (150*150):\r\n        <input type=\"file\" class=\"form-control browse\" (change)=\"getFiles($event)\">\r\n\r\n\r\n        <!--<img  (click)=\"fileInput.click()\" src=\"../../assets/imgs/inport.png\" class=\"middle\">-->\r\n        <input type=\"submit\" class=\"btn-submit\" value=\"Изменить данные\">\r\n\r\n      </form>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"info-all\">\r\n      <span><img src=\"../../assets/imgs/info-all-ico.jpg\" > О себе </span>\r\n      <!--Страна: Украина<br>-->\r\n      <!--Водитель категории B<br>-->\r\n\r\n      <p>\r\n        {{profileInformation?.about}}\r\n      </p>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"my-project\">\r\n      <span><img src=\"../../assets/imgs/my-project-ico.jpg\" > Мои проекты</span>\r\n\r\n      <div class=\"project-list\" *ngFor=\"let project of myProjects\">\r\n\r\n        <!--<h6>Писта рулю <a href=\"#\" class=\"dot\">✎</a></h6>-->\r\n        <h6>{{project.title}}<a href=\"#\" class=\"dot\"></a></h6>\r\n        <p>{{project.story}}</p>\r\n        <span class=\"project-list-a\" (click)=\"deleteProject(project._id)\">Удалить ✖</span>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"my-project\">\r\n      <span><img src=\"../../assets/imgs/my-project-ico.jpg\" > Добавить</span>\r\n\r\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"saveProject()\" class=\"my-project-form\">\r\n\r\n            <input type=\"text\" formControlName=\"title\" placeholder=\"Заголовок\">\r\n            <textarea placeholder=\"Основной текст\"  formControlName=\"story\" rows=\"15\"></textarea>\r\n              Выберите категорию:\r\n          <select  formControlName=\"status\" [(ngModel)]=\"category.status\">\r\n          <option [value]=\"0\" [selected]=\"category.status ==0\">Новости</option>\r\n          <option [value]=\"1\" [selected]=\"category.status ==1\">Проекты</option>\r\n          <option [value]=\"2\" [selected]=\"category.status ==2\">Кастинги</option>\r\n          <option [value]=\"3\" [selected]=\"category.status ==3\">Rental & sale</option>\r\n        </select>\r\n        <br>\r\n    <!--<img src=\"../../assets/imgs/photo.png\" class=\"middle\">-->\r\n\r\n\r\n    <input type=\"file\" class=\"form-control browse\" (change)=\"getFiles2($event)\">\r\n\r\n\r\n        <input type=\"submit\" value=\"Опубликовать\" class=\"btn-submit\">\r\n\r\n  </form>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"my-news\"></div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/own-profile/own-profile.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.project-list-a {\n  cursor: pointer; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.project-list {\n  padding-bottom: 10px; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.info-all-profile, .my-project-profile {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all-profile form input[type=text] {\n  width: 48%;\n  margin-top: 5px; }\n.info-all-profile form textarea {\n  width: 97%;\n  margin-top: 5px; }\n.info-all-profile span, .my-project-profile span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all-profile p {\n  font-size: 15px; }\n.info-all-profile-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.main {\n  min-height: 100vh; }\n.info-all-profile form input[type=submit] {\n  width: 99%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.project-list-a {\n  font-size: 14px;\n  margin-bottom: 10px; }\n.project-list p {\n  margin-bottom: 0px; }\n.my-project-form input[type=submit] {\n  width: 99%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.my-project-form textarea {\n  width: 97%;\n  margin-top: 5px; }\n"

/***/ }),

/***/ "./src/app/own-profile/own-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OwnProfileComponent = /** @class */ (function () {
    function OwnProfileComponent(loginService, projectsService, userService) {
        this.loginService = loginService;
        this.projectsService = projectsService;
        this.userService = userService;
        this.busy = { status: 0 };
        this.category = { status: 0 };
        this.position = { status: 0 };
        this.defaultImageBase64 = "iVBORw0KGgoAAAANSUhEUgAAAhIAAAISCAMAAACu49aNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQyQzNERDE0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQyQzNERDI0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDJDM0RDRjRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDJDM0REMDRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmY2mEcAAAGAUExURevr7Jydn5ma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";
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            sname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            site: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            position: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            about: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            freeOrBusy: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
        });
        this.projectForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            story: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            category: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
    }
    OwnProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
        // this.profileInformation = this.loginService.currentUserInformation.value;
        // this.checkForAvatar();
        // this.getMyProjects();
    };
    OwnProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        var userId = localStorage.getItem('userEmail');
        this.loginService.getUserDetailsById(userId).subscribe(function (data) {
            _this.profileInformation = data;
            switch (_this.profileInformation.position) {
                case '0':
                    _this.userService.positionInCompany.next({ positionInCompany: 'Режиссер-постановщик' });
                    break;
                case '1':
                    _this.userService.positionInCompany.next({ positionInCompany: '2й режиссер' });
                    break;
            }
            _this.positionInCompany = _this.userService.positionInCompany.value['positionInCompany'];
            _this.loginService.currentUserInformation.next(data);
            _this.checkForAvatar();
            _this.getMyProjects();
        });
    };
    OwnProfileComponent.prototype.checkForAvatar = function () {
        if (this.loginService.currentUserInformation.value['avatar'] === undefined) {
            this.profileInformation.avatar = this.defaultImageBase64;
        }
    };
    OwnProfileComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getMyProjects(this.profileInformation).subscribe(function (data) {
            _this.myProjects = data;
        });
    };
    OwnProfileComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    OwnProfileComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
    };
    OwnProfileComponent.prototype.getFiles2 = function (event) {
        this.files2 = event.target.files;
        var reader2 = new FileReader();
        reader2.onload = this._handleReaderLoaded2.bind(this);
        reader2.readAsBinaryString(this.files2[0]);
    };
    OwnProfileComponent.prototype._handleReaderLoaded2 = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring2 = btoa(binaryString); // Converting binary string data.
    };
    OwnProfileComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectsService.deleteCurrentProject(id).subscribe(function (data) {
            _this.getMyProjects();
        });
    };
    OwnProfileComponent.prototype.saveProject = function () {
        var _this = this;
        var project = {
            email: this.profileInformation['email'],
            newEmail: this.profileForm.value.email,
            title: this.projectForm.value.title,
            story: this.projectForm.value.story,
            category: this.projectForm.value.category,
            status: this.category.status,
            avatar: this.filestring2
        };
        this.loginService.addProject(project).subscribe(function (data) {
            _this.getMyProjects();
        });
    };
    OwnProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var updateUserData = {
            mobile: this.profileForm.value.mobile,
            password: this.profileForm.value.password,
            username: this.profileForm.value.username,
            sname: this.profileForm.value.sname,
            email: this.profileInformation['email'],
            newEmail: this.profileForm.value.email,
            site: this.profileForm.value.site,
            position: this.position.status,
            about: this.profileForm.value.about,
            freeOrBusy: this.busy.status,
            avatar: this.filestring
        };
        this.loginService.updateUser(updateUserData).subscribe(function (data) {
            _this.loginService.currentUserInformation.next(data);
            _this.profileInformation = _this.loginService.currentUserInformation.value;
            switch (_this.profileInformation.position) {
                case '0':
                    _this.userService.positionInCompany.next({ positionInCompany: 'Режиссер-постановщик' });
                    break;
                case '1':
                    _this.userService.positionInCompany.next({ positionInCompany: '2й режиссер' });
                    break;
            }
            _this.positionInCompany = _this.userService.positionInCompany.value['positionInCompany'];
        });
        if (this.profileForm.value.email) {
            this.updateUserEmailForCategories();
        }
    };
    OwnProfileComponent.prototype.updateUserEmailForCategories = function () {
        var updateUserData = {
            email: this.profileInformation['email'],
            newEmail: this.profileForm.value.email,
        };
        this.loginService.updatePostUserEmailForCategories(updateUserData).subscribe(function (data) {
        });
    };
    OwnProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-own-profile',
            template: __webpack_require__("./src/app/own-profile/own-profile.component.html"),
            styles: [__webpack_require__("./src/app/own-profile/own-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */], __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]])
    ], OwnProfileComponent);
    return OwnProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/adv/adv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><h2>Реклама на сайте</h2></div>\r\n"

/***/ }),

/***/ "./src/app/pages/adv/adv.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  width: 980px;\n  padding-bottom: 30px; }\n\n.container form {\n  width: 400px; }\n\n.container form textarea {\n  width: 98%; }\n\n.container form input[type=text] {\n  width: 48.3%; }\n\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/pages/adv/adv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvComponent; });
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

var AdvComponent = /** @class */ (function () {
    function AdvComponent() {
    }
    AdvComponent.prototype.ngOnInit = function () {
    };
    AdvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adv',
            template: __webpack_require__("./src/app/pages/adv/adv.component.html"),
            styles: [__webpack_require__("./src/app/pages/adv/adv.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvComponent);
    return AdvComponent;
}());



/***/ }),

/***/ "./src/app/pages/casts/casts.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form  (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" placeholder=\"Искать здесь...\" [(ngModel)]=\"myFilter\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\" *ngFor=\"let projects of filteredArray\">\r\n      <h2>{{projects.title}}</h2>\r\n      <img [src]=\"'data:image/jpg;base64,'+ projects.avatar\" style=\"height:250px;width:250px\">\r\n      <p>\r\n        {{projects.story}}\r\n      </p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/casts/casts.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.main {\n  min-height: 100vh; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/casts/casts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CastsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function CastsComponent(projectsService) {
        this.projectsService = projectsService;
        this.defaultImageBase64 = "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vbmIY3vZLKFC0zQ9icVtzjZ/UosTU5E54/hZjCXIeEkkEtHX/6xvxfoB+IGCRfQVE+xz8skn52S/sf5u27bNdXtNTU36HnwxdeFLBelndPbA8w8rcKxEshtisZgrkWYyGX02ZOavmNdeLIqi6PHe7J5ehMDybbAtSf7ASrcMGzZMH2jF7bpNmza5bu+DDz7QrRcSOgndEN8uiswqR9qKsrIy14MDqzLD1s1eC52toSORiCEQpdh78NYLP1gWmo9eV1eHfv366X0GjkUq7ty50/Xf4r333gPQU/dv1KhRBfWplJBe6GYx2uxBcxvSGgqFdGE5eeD51FhWqcWrmusMNpCxJBHej1AMfGSdF/XYVFXVU4L5yjvsJB2rc9msYEIfO3as9AktAAldFzPvpCq0OENlZaU+Izud2fhZFoDuI/AK3uteTL64iJV4ihlA2BnoZtub7777ruN2stksNm7cCAC44IILCu5PKSG90MUHU6y55gYW5+10Rufj4o9XznQoFNIF7tXWGmC0gPjPqxhvPkvN5Qc9FlC0du1ax+189tlnuiOOhN6D9EI3E6SbM855WCqk08GC+QbY0UPM7Pf6NFXAWBSDz5orFLGPXqS/futb3wJgPHyS5bv/97//dWwt/P3vfwfQE8BEQu9BeqEzzB58t2JghRydwsJdWYEFt2a/03sAxyIAj8fBDbynvBihn3rqqTmhqmyw3bt3r+NttlWrVgEAzjnnnKKryJYKJPT/x2y2KOR8dH4bKx8snl50wHl5ThifNqqqqumhC4VgFmjE/18IgUAAEydOzGmTDVCvvfZa3jZ2796NdevWAQCuuOKKgvtSakgvdDtBul3L8g4qp6Y7kLt8KLYgIg8zsZmlwGqzFesPsDLdix1Evve97+ntMJ8C+/fGG2/kvX7lypX65zllypSi+lJKSC90OzO5kKQWhpPUSqt17fE6VaSQohj52mK4KYppx+WXX67X2hc/h3Xr1hlST81YsWIFAGDkyJEUKMMhvdDtZnS3TjF+Rnda64w57viiFV4640SrhM/SKwarPhbbblVVFa666irT9lKpFJYvX2557a5du7BhwwYAwHXXXSd9xhqP9J+EndDdzk58imtHR4fje7NEmkK9/YXg5fnovIXghTVy00036V+LA8pf/vIXy7/Ls88+q4cV33rrrUX3o5SQXuhm5myxlWABZ0Lnc69ZAo3XkXFWbRUrSN5S8NqReOmll2L8+PEAcktof/TRR6Z76t3d3XjuuecAABdddBGGDRtWdD9KCemFzjAThNtZj3/InQjdTGxeB87wvgIxAs+rdr1GURT86le/AmD+N/jDH/6Q87PFixfjwIEDAIC77rrruPXNr0gvdCuxAe5NaD7xwm0SBo+XpruYU+/FNhhgPZB5tTU4ZcoUTJ48OefvoygKXnnlFXz00Uf6z3bt2oV58+YB6ImEu+yyyzzpQykhvdDtHni3TjFe3E6KVvDVWXi8zEe3im0vdjCx2gL0asdAURQ89dRTOeejsyzDmTNnYtu2bdi0aRO++93v4siRIwgEAnj88cc9jUMoFaQvPGH3UJSXl7tqixe6k6IVLA6d74umadizZw8WL16sZ4ix6Dm++k0ymUQqlUJ1dTWuvPJKy/chRrAxihUkvzXIR8Z5aY2MHDkSTz/9NGbPnp0zIO/YsSOnRNS9996LcePGeXb/UkJ6oduJmZVfdkpra6v+tZMMNKvosjfffBNvvvmm4Xf80co85eXlaGlpsbQCYrGY6c9feOEF/Oc//9HbTCQS+hHRLFqP/ax///54+OGHDduH7HPj49I1TcNrr72GLVu26O+/s7NTT8ft6OhAMBhEIpFAMBhEXV0d5s+fb/s5X3fdddixYwcWLFhg+RoAmDdvHh588EHb18iM9EJntcrMcOsU42dxJ4OEm1NNrGZK/kRWM/r372/qybfbj2bwjrtbbrnFMIMOGDAgpyIPACxZsiRvuzwTJkzANddcY/ua+++/HyNHjsQdd9yBpqYmQ/8uvfRSzJ8/H+eff76r+8qG9EIfMWIEdu/ejYaGBv1hDYfDqKiocB1ZddNNN2Hs2LE4/fTTHV07c+ZMfPvb39YPi2A54+l0GsFg0DCL85Fi/AmmJ510km1hhdraWjz22GP49NNP9ZTPUCiEiooKpFIphEIhhMNhJBIJvQoNWyp0dXWhu7sb5eXlOSed9O3bFw899JBeEIJdU1FRoe9lq6qKRCJhOJJaVVV0dnYilUohlUrh61//uqPPdvbs2bj22mvxj3/8A62trSgvL8eECROkr9fuFEXzctPWJdls1nA+lhWBQADV1dVfQY8Iwjnd3d2OIiBVVdXr1vcW0nvdCUIGSOgEIQEkdIKQABI6QUiAVF73eDyOw4cPo6urC/F4HKFQCMOGDcuJvjKDnTHOvOKsPDPzfrOz0+y2zPhTWvlyyQRxvJFG6AcPHsSoUaNyYrRDoRDGjx+PBQsWYPLkyabXJpNJnHPOOdi8ebN+EKOqqoY6bIFAAH369MG+fftMg1eSySTGjRuH3bt3I51O46qrrsKyZcss+5tKpXDnnXfqFWFuv/1206ivZDKJ+fPn45JLLtH7P3fuXHz44Yf6FhcbiMLhMMrLy1FXV2coK5VMJjFo0CDcf//9UBQFq1evxuuvv47u7m79fUYiEaiqilgshsGDByMQCCASiejbgKqq4sILL9QPSwR6Djl8/fXX0draqp80G4vF0NXVhfLycrS1teGLL77A4cOHMXXqVPzoRz8CAKxduxYffPABAKC+vh5Tp041/Yy2bNmCDRs2YPr06TlxC3fddRe2b98OTdNwww03YNasWZaftQxII/TDhw8bRH7RRRfhkksuwZYtW7BixQpcdtllWLRoEX784x/nXLt//358+OGH+vf19fWora1FKpXS94kVRUFVVZVlKOqBAwfwySef6N+vWrUK8XjcMnKtu7sbixYt0vfOJ06caCr0VCqFhQsXIpPJ6EIfM2YMOjs7EY/H0dnZiYEDB2LZsmV6QE80GsU111yDjo4OdHR0oLW1VT88AegR6GuvvYbu7m590Gpvb8fRo0f1WIMBAwYgEAigo6MDyWQSqqpi8eLFmDZtGgBg69atOPPMMx0fVFlVVaUL/ZlnnsHzzz8PAOjXr5+l0F966SU88MADOO200/QKsox169bpteBHjBhBQu/tDnxViMkd48aNwy9/+UsAPeGTkydPxt13340rrrgC9fX1hteK4r366qvxpz/9ydX9xRNBu7u7sWfPHowePdryGiex6cyi4CPnxDRNTdPw6quv6oc6RqNRLFu2zHJQmjt3LubOnWv42e23346nn35a//7RRx/F9ddfj2w2q4e48suR3bt36yIfMWIEVq1ahVAohO7ubn3po2kaYrEYqqurDcsnvl9OohPNko/40OZeDBU5YZBG6OJDzYerjhkzBsuWLcOECRPw+OOPY+HChbbXFpKCumvXrpyfNTQ0WApdPIPNKpOOHbmUTxD8YMBOcHWT5SUOlGzZEggE8mb5xWIxjB071vG9+DwBu5NlzE50Ybg98rrUkcbrLmaTibHj5557Li6++GIsWbIk5+Fi5it7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";
        this.filteredArray = [];
        this.myFilter = '';
    }
    CastsComponent.prototype.ngOnInit = function () {
        this.getMyProjects();
    };
    CastsComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getAllProjectsByStatus((2)).subscribe(function (data) {
            _this.myAllProjectsByStatus = data;
            _this.filteredArray = data;
            _this.checkForAvatar();
        });
    };
    CastsComponent.prototype.checkForAvatar = function () {
        if (this.myAllProjectsByStatus['avatar'] === undefined) {
            this.findFree();
        }
    };
    CastsComponent.prototype.findFree = function () {
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (!this.myAllProjectsByStatus[i]['avatar']) {
                this.myAllProjectsByStatus[i]['avatar'] = this.defaultImageBase64;
            }
        }
    };
    CastsComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    CastsComponent.prototype.onSubmit = function () {
        this.filtered();
    };
    CastsComponent.prototype.filtered = function () {
        var myArr = [];
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (this.myAllProjectsByStatus[i] != undefined) {
                if (this.myAllProjectsByStatus[i].title.includes(this.myFilter)) {
                    myArr.push(this.myAllProjectsByStatus[i]);
                }
            }
        }
        this.filteredArray = myArr;
    };
    CastsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-casts',
            template: __webpack_require__("./src/app/pages/casts/casts.component.html"),
            styles: [__webpack_require__("./src/app/pages/casts/casts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], CastsComponent);
    return CastsComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Связь с администрацией:</h3>\r\n  <p>Телефон: 073 309 59 18<br>\r\n  Email: Kinokuznyasait@gmail.com</p>\r\n  <form>\r\n    <input type=\"text\" placeholder=\"Ваше имя\">\r\n    <input type=\"text\" placeholder=\"Email\\телефон для связи\">\r\n    <textarea placeholder=\"Собщение\"></textarea>\r\n    <input type=\"submit\" value=\"Отправить\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  width: 980px;\n  padding-bottom: 30px; }\n\n.container form {\n  width: 400px; }\n\n.container form textarea {\n  width: 98%; }\n\n.container form input[type=text] {\n  width: 48.3%; }\n\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/pages/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/pages/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"project-all \">\r\n      <h2>{{currentProject.title}}</h2>\r\n      <img  [src]=\"'data:image/jpg;base64,'+ currentProject.avatar\" style=\"height:250px;width:250px\">\r\n      <p>\r\n\r\n      {{currentProject.story}}\r\n      </p>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.main {\n  min-height: 100vh; }\n/* Главная станица */\n.main-left-info, .main-right-info {\n  background: #fff;\n  width: 47.5%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.main-left-info span, .main-right-info span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.main-left-info p {\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/pages/news-one/news-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function NewsOneComponent(projectsService) {
        this.projectsService = projectsService;
    }
    NewsOneComponent.prototype.ngOnInit = function () {
        this.getCurrentProject();
    };
    NewsOneComponent.prototype.getCurrentProject = function () {
        var _this = this;
        this.projectsService.moreProject.subscribe(function (data) {
            _this.currentProject = data;
            console.log(_this.currentProject);
        });
    };
    NewsOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-one',
            template: __webpack_require__("./src/app/pages/news-one/news-one.component.html"),
            styles: [__webpack_require__("./src/app/pages/news-one/news-one.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], NewsOneComponent);
    return NewsOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" placeholder=\"Искать здесь...\" [(ngModel)]=\"myFilter\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\" *ngFor=\"let projects of filteredArray\">\r\n      <h2>{{projects.title}}</h2>\r\n      <img [src]=\"'data:image/jpg;base64,'+ projects.avatar\" style=\"height:250px;width:250px\">\r\n      <p>\r\n        {{projects.story}}\r\n      </p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.main {\n  min-height: 100vh; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function NewsComponent(projectsService) {
        this.projectsService = projectsService;
        this.myAllProjectsByStatus = [];
        this.filteredArray = [];
        this.defaultImageBase64 = "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vbmIY3vZLKFC0zQ9icVtzjZ/UosTU5E54/hZjCXIeEkkEtHX/6xvxfoB+IGCRfQVE+xz8skn52S/sf5u27bNdXtNTU36HnwxdeFLBelndPbA8w8rcKxEshtisZgrkWYyGX02ZOavmNdeLIqi6PHe7J5ehMDybbAtSf7ASrcMGzZMH2jF7bpNmza5bu+DDz7QrRcSOgndEN8uiswqR9qKsrIy14MDqzLD1s1eC52toSORiCEQpdh78NYLP1gWmo9eV1eHfv366X0GjkUq7ty50/Xf4r333gPQU/dv1KhRBfWplJBe6GYx2uxBcxvSGgqFdGE5eeD51FhWqcWrmusMNpCxJBHej1AMfGSdF/XYVFXVU4L5yjvsJB2rc9msYEIfO3as9AktAAldFzPvpCq0OENlZaU+Izud2fhZFoDuI/AK3uteTL64iJV4ihlA2BnoZtub7777ruN2stksNm7cCAC44IILCu5PKSG90MUHU6y55gYW5+10Rufj4o9XznQoFNIF7tXWGmC0gPjPqxhvPkvN5Qc9FlC0du1ax+189tlnuiOOhN6D9EI3E6SbM855WCqk08GC+QbY0UPM7Pf6NFXAWBSDz5orFLGPXqS/futb3wJgPHyS5bv/97//dWwt/P3vfwfQE8BEQu9BeqEzzB58t2JghRydwsJdWYEFt2a/03sAxyIAj8fBDbynvBihn3rqqTmhqmyw3bt3r+NttlWrVgEAzjnnnKKryJYKJPT/x2y2KOR8dH4bKx8snl50wHl5ThifNqqqqumhC4VgFmjE/18IgUAAEydOzGmTDVCvvfZa3jZ2796NdevWAQCuuOKKgvtSakgvdDtBul3L8g4qp6Y7kLt8KLYgIg8zsZmlwGqzFesPsDLdix1Evve97+ntMJ8C+/fGG2/kvX7lypX65zllypSi+lJKSC90OzO5kKQWhpPUSqt17fE6VaSQohj52mK4KYppx+WXX67X2hc/h3Xr1hlST81YsWIFAGDkyJEUKMMhvdDtZnS3TjF+Rnda64w57viiFV4640SrhM/SKwarPhbbblVVFa666irT9lKpFJYvX2557a5du7BhwwYAwHXXXSd9xhqP9J+EndDdzk58imtHR4fje7NEmkK9/YXg5fnovIXghTVy00036V+LA8pf/vIXy7/Ls88+q4cV33rrrUX3o5SQXuhm5myxlWABZ0Lnc69ZAo3XkXFWbRUrSN5S8NqReOmll2L8+PEAcktof/TRR6Z76t3d3XjuuecAABdddBGGDRtWdD9KCemFzjAThNtZj3/InQjdTGxeB87wvgIxAs+rdr1GURT86le/AmD+N/jDH/6Q87PFixfjwIEDAIC77rrruPXNr0gvdCuxAe5NaD7xwm0SBo+XpruYU+/FNhhgPZB5tTU4ZcoUTJ48OefvoygKXnnlFXz00Uf6z3bt2oV58+YB6ImEu+yyyzzpQykhvdDtHni3TjFe3E6KVvDVWXi8zEe3im0vdjCx2gL0asdAURQ89dRTOeejsyzDmTNnYtu2bdi0aRO++93v4siRIwgEAnj88cc9jUMoFaQvPGH3UJSXl7tqixe6k6IVLA6d74umadizZw8WL16sZ4ix6Dm++k0ymUQqlUJ1dTWuvPJKy/chRrAxihUkvzXIR8Z5aY2MHDkSTz/9NGbPnp0zIO/YsSOnRNS9996LcePGeXb/UkJ6oduJmZVfdkpra6v+tZMMNKvosjfffBNvvvmm4Xf80co85eXlaGlpsbQCYrGY6c9feOEF/Oc//9HbTCQS+hHRLFqP/ax///54+OGHDduH7HPj49I1TcNrr72GLVu26O+/s7NTT8ft6OhAMBhEIpFAMBhEXV0d5s+fb/s5X3fdddixYwcWLFhg+RoAmDdvHh588EHb18iM9EJntcrMcOsU42dxJ4OEm1NNrGZK/kRWM/r372/qybfbj2bwjrtbbrnFMIMOGDAgpyIPACxZsiRvuzwTJkzANddcY/ua+++/HyNHjsQdd9yBpqYmQ/8uvfRSzJ8/H+eff76r+8qG9EIfMWIEdu/ejYaGBv1hDYfDqKiocB1ZddNNN2Hs2LE4/fTTHV07c+ZMfPvb39YPi2A54+l0GsFg0DCL85Fi/AmmJ510km1hhdraWjz22GP49NNP9ZTPUCiEiooKpFIphEIhhMNhJBIJvQoNWyp0dXWhu7sb5eXlOSed9O3bFw899JBeEIJdU1FRoe9lq6qKRCJhOJJaVVV0dnYilUohlUrh61//uqPPdvbs2bj22mvxj3/8A62trSgvL8eECROkr9fuFEXzctPWJdls1nA+lhWBQADV1dVfQY8Iwjnd3d2OIiBVVdXr1vcW0nvdCUIGSOgEIQEkdIKQABI6QUiAVF73eDyOw4cPo6urC/F4HKFQCMOGDcuJvjKDnTHOvOKsPDPzfrOz0+y2zPhTWvlyyQRxvJFG6AcPHsSoUaNyYrRDoRDGjx+PBQsWYPLkyabXJpNJnHPOOdi8ebN+EKOqqoY6bIFAAH369MG+fftMg1eSySTGjRuH3bt3I51O46qrrsKyZcss+5tKpXDnnXfqFWFuv/1206ivZDKJ+fPn45JLLtH7P3fuXHz44Yf6FhcbiMLhMMrLy1FXV2coK5VMJjFo0CDcf//9UBQFq1evxuuvv47u7m79fUYiEaiqilgshsGDByMQCCASiejbgKqq4sILL9QPSwR6Djl8/fXX0draqp80G4vF0NXVhfLycrS1teGLL77A4cOHMXXqVPzoRz8CAKxduxYffPABAKC+vh5Tp041/Yy2bNmCDRs2YPr06TlxC3fddRe2b98OTdNwww03YNasWZaftQxII/TDhw8bRH7RRRfhkksuwZYtW7BixQpcdtllWLRoEX784x/nXLt//358+OGH+vf19fWora1FKpXS94kVRUFVVZVlKOqBAwfwySef6N+vWrUK8XjcMnKtu7sbixYt0vfOJ06caCr0VCqFhQsXIpPJ6EIfM2YMOjs7EY/H0dnZiYEDB2LZsmV6QE80GsU111yDjo4OdHR0oLW1VT88AegR6GuvvYbu7m590Gpvb8fRo0f1WIMBAwYgEAigo6MDyWQSqqpi8eLFmDZtGgBg69atOPPMMx0fVFlVVaUL/ZlnnsHzzz8PAOjXr5+l0F966SU88MADOO200/QKsox169bpteBHjBhBQu/tDnxViMkd48aNwy9/+UsAPeGTkydPxt13340rrrgC9fX1hteK4r366qvxpz/9ydX9xRNBu7u7sWfPHowePdryGiex6cyi4CPnxDRNTdPw6quv6oc6RqNRLFu2zHJQmjt3LubOnWv42e23346nn35a//7RRx/F9ddfj2w2q4e48suR3bt36yIfMWIEVq1ahVAohO7ubn3po2kaYrEYqqurDcsnvl9OohPNko/40OZeDBU5YZBG6OJDzYerjhkzBsuWLcOECRPw+OOPY+HChbbXFpKCumvXrpyfNTQ0WApdPIPNKpOOHbmUTxD8YMBOcHWT5SUOlGzZEggE8mb5xWIxjB071vG9+DwBu5NlzE50Ybg98rrUkcbrLmaTibHj5557Li6++GIsWbIk5+Fi5it7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";
        this.myFilter = '';
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getMyProjects();
    };
    NewsComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getAllProjectsByStatus((0)).subscribe(function (data) {
            _this.myAllProjectsByStatus = data;
            _this.filteredArray = data;
            _this.checkForAvatar();
        });
    };
    NewsComponent.prototype.onSubmit = function () {
        this.filtered();
    };
    NewsComponent.prototype.checkForAvatar = function () {
        if (this.myAllProjectsByStatus['avatar'] === undefined) {
            this.findFree();
        }
    };
    NewsComponent.prototype.findFree = function () {
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (!this.myAllProjectsByStatus[i]['avatar']) {
                this.myAllProjectsByStatus[i]['avatar'] = this.defaultImageBase64;
            }
        }
    };
    NewsComponent.prototype.filtered = function () {
        var myArr = [];
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (this.myAllProjectsByStatus[i] != undefined) {
                if (this.myAllProjectsByStatus[i].title.includes(this.myFilter)) {
                    myArr.push(this.myAllProjectsByStatus[i]);
                }
            }
        }
        this.filteredArray = myArr;
    };
    NewsComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__("./src/app/pages/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"carousel\">\r\n      <div class=\"container\">\r\n        <img src=\"../../../assets/imgs/logos.png\">\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <div class=\"select-box\">\r\n\r\n        \r\n\r\n\r\n        <select formControlName=\"freeOrBusy\" [(ngModel)]=\"position.status\">\r\n          <option [value]=\"111\" [selected]=\"position.status ==111\">Все</option>\r\n          <option [value]=\"0\" [selected]=\"position.status ==0\">Режиссер-постановщик</option>\r\n          <option [value]=\"1\" [selected]=\"position.status ==1\">2й режиссер</option>\r\n          <option [value]=\"2\" [selected]=\"position.status ==2\">Помощник режиссера (хлопушка)</option>\r\n          <option [value]=\"3\" [selected]=\"position.status ==3\">Плейбек</option>\r\n          <option [value]=\"4\" [selected]=\"position.status ==4\">Скрипт супервайзер (редактор)</option>\r\n          <option [value]=\"5\" [selected]=\"position.status ==5\">Ассистент по актерам</option>\r\n          <option [value]=\"6\" [selected]=\"position.status ==6\">Ассистент режиссера по массовке</option>\r\n          <option [value]=\"7\" [selected]=\"position.status ==7\">Операторская группа:</option>\r\n          <option [value]=\"8\" [selected]=\"position.status ==8\">Оператор-постановщик</option>\r\n          <option [value]=\"9\" [selected]=\"position.status ==9\">Камермен</option>\r\n          <option [value]=\"10\" [selected]=\"position.status ==10\">Фокус-пуллер</option>\r\n          <option [value]=\"11\" [selected]=\"position.status ==11\">Механик камеры (инженер)</option>\r\n          <option [value]=\"12\" [selected]=\"position.status ==12\">Дольщик</option>\r\n          <option [value]=\"13\" [selected]=\"position.status ==13\">Стедикам</option>\r\n          <option [value]=\"14\" [selected]=\"position.status ==14\">Художественная группа:</option>\r\n          <option [value]=\"15\" [selected]=\"position.status ==15\">Художник-постановщик</option>\r\n          <option [value]=\"16\" [selected]=\"position.status ==16\">Ассистент художника постановщика</option>\r\n          <option [value]=\"17\" [selected]=\"position.status ==17\">Художник-декоратор</option>\r\n          <option [value]=\"18\" [selected]=\"position.status ==18\">Декоратор</option>\r\n          <option [value]=\"19\" [selected]=\"position.status ==19\">Бутафор</option>\r\n          <option [value]=\"20\" [selected]=\"position.status ==20\">Реквизитор</option>\r\n          <option [value]=\"21\" [selected]=\"position.status ==21\">Постановщик</option>\r\n          <option [value]=\"22\" [selected]=\"position.status ==22\">Генеральный продюсер</option>\r\n          <option [value]=\"23\" [selected]=\"position.status ==23\">Исполнительный продюсер</option>\r\n          <option [value]=\"24\" [selected]=\"position.status ==24\">Креативный продюсер</option>\r\n          <option [value]=\"25\" [selected]=\"position.status ==25\">Директор (линейный продюсер)</option>\r\n          <option [value]=\"26\" [selected]=\"position.status ==26\">Заместитель директора</option>\r\n          <option [value]=\"27\" [selected]=\"position.status ==27\">Администратор</option>\r\n          <option [value]=\"28\" [selected]=\"position.status ==28\">Хелпер</option>\r\n          <option [value]=\"29\" [selected]=\"position.status ==29\">Локейшн-менеджер</option>\r\n          <option [value]=\"30\" [selected]=\"position.status ==30\">Кейтеринг</option>\r\n          <option [value]=\"31\" [selected]=\"position.status ==31\">Фотограф</option>\r\n          <option [value]=\"32\" [selected]=\"position.status ==32\">Звукооператор</option>\r\n          <option [value]=\"33\" [selected]=\"position.status ==33\">Ассистент звукооператора (бумщик)</option>\r\n          <option [value]=\"34\" [selected]=\"position.status ==34\">Гаффер</option>\r\n          <option [value]=\"35\" [selected]=\"position.status ==35\">Чиф-электрик</option>\r\n          <option [value]=\"36\" [selected]=\"position.status ==36\">Кейгрип</option>\r\n          <option [value]=\"37\" [selected]=\"position.status ==37\">Осветитель</option>\r\n          <option [value]=\"38\" [selected]=\"position.status ==38\">Художник по гриму</option>\r\n          <option [value]=\"39\" [selected]=\"position.status ==39\">Ассистент художника по гриму</option>\r\n          <option [value]=\"40\" [selected]=\"position.status ==40\">Гример</option>\r\n          <option [value]=\"41\" [selected]=\"position.status ==41\">Постижист</option>\r\n          <option [value]=\"42\" [selected]=\"position.status ==42\">Стилист</option>\r\n          <option [value]=\"43\" [selected]=\"position.status ==43\">Художник по костюму</option>\r\n          <option [value]=\"44\" [selected]=\"position.status ==44\">Ассистент художника по костюму</option>\r\n          <option [value]=\"45\" [selected]=\"position.status ==45\">Костюмер</option>\r\n          <option [value]=\"46\" [selected]=\"position.status ==46\">Оператор квадрокоптера</option>\r\n          <option [value]=\"47\" [selected]=\"position.status ==47\">Пиротехник</option>\r\n          <option [value]=\"48\" [selected]=\"position.status ==48\">Каскадер</option>\r\n          <option [value]=\"49\" [selected]=\"position.status ==49\">Кастинг-директор</option>\r\n          <option [value]=\"50\" [selected]=\"position.status ==50\">Кастинг-менеджер</option>\r\n          <option [value]=\"51\" [selected]=\"position.status ==51\">Режиссер по планированию</option>\r\n          <option [value]=\"52\" [selected]=\"position.status ==52\">Начальник транспортного цеха</option>\r\n          <option [value]=\"53\" [selected]=\"position.status ==53\">Юрист</option>\r\n          <option [value]=\"54\" [selected]=\"position.status ==54\">Бухгалтер</option>\r\n          <option [value]=\"55\" [selected]=\"position.status ==55\">Экономист</option>\r\n          <option [value]=\"56\" [selected]=\"position.status ==56\">Офис-менеджер</option>\r\n          <option [value]=\"57\" [selected]=\"position.status ==57\">Композитор</option>\r\n          <option [value]=\"58\" [selected]=\"position.status ==58\">Режиссер монтажа</option>\r\n          <option [value]=\"59\" [selected]=\"position.status ==59\">Монтажер</option>\r\n          <option [value]=\"60\" [selected]=\"position.status ==60\">Финансовый директор</option>\r\n          <option [value]=\"61\" [selected]=\"position.status ==61\">Кейтеринг служба</option>\r\n          <option [value]=\"62\" [selected]=\"position.status ==62\">PR-менеджер</option>\r\n          <option [value]=\"63\" [selected]=\"position.status ==63\">Технический директор</option>\r\n          <option [value]=\"64\" [selected]=\"position.status ==64\">Клипмейкер</option>\r\n          <option [value]=\"65\" [selected]=\"position.status ==65\">Координатор спецэффектов</option>\r\n          <option [value]=\"66\" [selected]=\"position.status ==66\">Колорист</option>\r\n          <option [value]=\"67\" [selected]=\"position.status ==67\">Сценарист</option>\r\n\r\n        </select><br>\r\n\r\n      </div>\r\n      <div class=\"select-box\">\r\n\r\n       \r\n\r\n        <select formControlName=\"freeOrBusy\" [(ngModel)]=\"busy.status\">\r\n          <option [value]=\"111\" [selected]=\"busy.status ==111\">Все</option>\r\n          <option [value]=\"0\" [selected]=\"busy.status ==0\">Свободен</option>\r\n          <option [value]=\"1\" [selected]=\"busy.status ==1\">Занят</option>\r\n        </select><br>\r\n\r\n        <input type=\"submit\" class=\"btn-submit\" value=\"Поиск\">\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n    <div class=\"user\"  *ngFor=\"let user of filteredUsers1\">\r\n\r\n      <div class=\"avatar avatar-red\" [ngStyle]=\"{'box-shadow': user.freeOrBusy == 0 ? '0px 0px 10px #de0303' : '0px 0px 10px #25bb1b'}\"  routerLink=\"/separate-people\" (click)=\"goUser(user)\">\r\n        <img [src]=\"'data:image/jpg;base64,'+ user.avatar\" style=\"height:100%;width:100%\">\r\n      </div>\r\n\r\n      <div class=\"info-main\" >\r\n        <div class=\"info-main-name\"><h1>{{user?.username}} {{user?.sname}}</h1>\r\n          <!--<span class=\"starr\"><b>★★★★★★</b>★★★★</span> -->\r\n        </div>\r\n        <h4>{{user?.position}}</h4>\r\n        <p><span>Моб.тел:</span>{{user?.mobile}}</p>\r\n        <p><span>Email:</span> {{user?.email}}</p>\r\n        <p><span>Сайт:</span> {{user?.site}}</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<script type=\"text/javascript\">\r\n\r\n  $(\"select\").on(\"click\" , function() {\r\n\r\n    $(this).parent(\".select-box\").toggleClass(\"open\");\r\n\r\n  });\r\n\r\n  $(document).mouseup(function (e)\r\n  {\r\n    var container = $(\".select-box\");\r\n\r\n    if (container.has(e.target).length === 0)\r\n    {\r\n      container.removeClass(\"open\");\r\n    }\r\n  });\r\n\r\n\r\n  $(\"select\").on(\"change\" , function() {\r\n\r\n    var selection = $(this).find(\"option:selected\").text(),\r\n      labelFor = $(this).attr(\"id\"),\r\n      label = $(\"[for='\" + labelFor + \"']\");\r\n\r\n    label.find(\".label-desc\").html(selection);\r\n\r\n  });\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/people/people.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.main {\n  min-height: 100vh; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  cursor: pointer; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/pages/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
    function PeopleComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.filteredUsers1 = [];
        this.defaultImageBase64 = "iVBORw0KGgoAAAANSUhEUgAAAhIAAAISCAMAAACu49aNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQyQzNERDE0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQyQzNERDI0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDJDM0RDRjRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDJDM0REMDRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmY2mEcAAAGAUExURevr7Jydn5manJucnuPj5JiZm9vb3PT09MvLzMLCw5GSlPr6+qeoqdXV1tHR0rW1trW2uKusrbi4urO0tLq6vKiqq7e4uLW2tqGipLm6ury8vr6+vr+/wLu8vM7OztDQ0cjJytjY2dTU1aipqqqrrMXGxqanqKmqq6Wmp9LT062usKSlprS0ta2trra2t6ytrqWmqK2ur66vsK6ur7CwsbOztK+vsK+wsbKys7GxsqOkpqOkpZ6foampq6qqrJ2eoKenqaysraKjpZqbnbi4uaKjpKSlp5eYmqioqqurrKChory8vKGio6amqKCho7Gys7CxsrGysrKzs5+gop+gobS1tbq6u7e3uLCxsbKztLi4uJWWmJaXmba3t7i5ub29vZWXmZSWmLq6upOVl5SVl7m5up6foLq7u7u7vJqcnZOUlpeZm5aYmpKUlry8vZKTlpGTlZCRlJCRk6ytr9bX197e3q+vsb2+v8DAweDh4bOztebm5ujp6e/v756eoP///9/b0aAAABOCSURBVHja7N3texPHuYDxpdXRSqxtoG5NKViWjGXiIptaNnYhJEAPJU1pAj2Nk1BSBOUtpcXQUylIlbfzr3e1kmytsb1rve3MPvf9LV9yLfh3zTwzK2RLEQWy+CsgSBAkCBIECYIEQYIgQZAgSBAkCBIECYIEQYIgQZCgvRzXK5XulIKEyGzXbabThUwm8+LF41Z3uv35z/W0Awk5q0GjVstkii962y/C617yUVjiIXjrwfm/ep3zehEmYmZmJvEoxJJozmW/7vTX44iYmfkm4SgErxJuIduXCK9Eo5A9S9ieij5EeNVTkDD2p96stWt6x8mDVfQhwitvQcK86dGq5e55fd9TMTPp4Qgu+zvzfYjwqjqQMGpxmCzea/d9oFetvj6fKTS8NcN1vTVkLpPpS8Q3f5ndgYQpq0Ohy+EQEf2eNYIivPI2JPRfHlK5e72NVMTKyvc7kND7T1Mobt8bpwivnAMJbbeLyfr29thFrKxcsCCho4fmUmV7OxYRXjVIaPeHqFYqMYpI2OZhPgm3Wq/ELGJlJetCQpfzRa1YqcQv4uzZVxYktBggcpWKHiK8UpCIfYFobxi6iDh1KgWJeBeIfKWil4hTp6YgEd8Cka5X9BORFBMGknBzlYqWIhJiwjgSzWJFWxHJMGEWCaeWregsIhEzpkkk7OoHIHQTkQQTlkEgzlf0F7G15UJibCDMELF1zobEmEAYImJrKwuJ0Q+V6fMdEflcuma5urzXOFhEqTQJiRFXy3ogctWa216R3WJFbxGl0g4kRvqAmVzNsg+4p9JXROmFA4lRjhGB/1iqGCCiVMpAYlwzRcUMEWZvHQaRaNaNEVGqOJAY/QaSq5gjolRKQ2KMe4YJIkqPHUiMNLdomIjSdHeZcK1CJ8uCxGiWCDNETHvLhNOcz15t9dDr/1ptz9VcSAx7iTBExPT0XOZqp10Rv261PdeExICXlxUjRVy9erCIVn+ZdyHR/6aRS56I+17FFCT63DSyyRRx/49/nE1BYvBNI0kivL5PQeK4m8ZSokVcu3ataEHiWPeV+aSL8NLw35zrS8LOChBx7dpKExIRa8oQce3BAwsS0URUpIh4kIMEIgIiHjywIRFeVZKIbwuQQERAxLdnIYGIgIhvv21A4uhS0kSsX4AEk2VAxPq6CwlEBESsL0HiiDtLiSLWT0FC+i32PhHr6w1IHPbuMy9TxHoeEoe0JFTE+roNiUjHTzkiNtOQiDJaChKxeQ4SBw0SRbkiNjddSIQOErJEbC5B4sMnES1Co51DGxJOXbSIzU0LEvtKCxexmYNEMFe6iI0SJILlpIvY2GhC4tD3nzJFbOQg0VsREdrsHJZ2i4RUEdrsHJZui4RcEbrsHJZmi4RMEblSi8Q0JA5YJISuEWn3/MZGudyERKea+F0jq5xcuVzOQaJTnTmidX1bLj+GRCdEbLR+DI3psguJAAnBIjb8V+Pu9BQkei+zJYsol/2PaLvvIdFDQraI8rS/Z7g2JHZJCBfRNcEqsUtCvIhy+b0DiR4SiPDKQ2KPBCJarVUhESCBiLU1CxI9JBDhdceBxC4JRPgVIdF5x4GItU4WJPwQ0RWxNuNAohUiuq2uViHxAQnZIlYf2pDYR0K4iNXVNCSCJMSLWM1CQikXEXsiVh9CQqkmIvZErK5CQqkaInpELNuQUJOI6BGxbEFC5RDRIwISuyQQ0RYBCa88InpEQKJzLYGIrojlKiQUInpFQMIngYg9EZBokUBEjwhIeCGiVwQk9pMQL+IKJJSNiF4RkFDKRUSvCEgESCACEkESiIBEkAQiIBEkgQhIBEkgAhJBEoiARJAEIrrdhoR/VYWIXRGQ8C+0EbEn4nYDEgoRvSJu86kqpRDRKwISHRKI6Io4AwmfBCJ2RUDCJ4GIPRGQaJFARI8ISHgholcEJHpIIAISnTKI6BFxxoFEhwQiOilItEkgAhJBEoiARJAEIiARJIEISASqIaKnFUh0SCCiUx0SbRKIgESQBCK6fQ4JrwYi9kRAopWLiD0Rnxch0SaBiI6Izych4ZNARFfEAiR8EojYFQEJP0TsiYDEhySEi1hoQGIfCekiFixIBEmIFwGJ9qtQROyKgESQBCIgESSBCC8FCa8lRCxAIlAaEZA4gAQiINHzdhwRu9Uh4b/kQAQk9pNARLcLkPBJIKLbp0VI+CGiK+LTSUh0SSDCFwGJXRKIaIuARPdGGxEdEZ+mIBEkIV7EJQsSfjlEdERAonujjYiOiEs2JHpIIMJLQcIvhYiOCEh0ry8R0RFRhsQuCUT4XYBEJ0RcgkQwRHTKQ6JTHRHtJiHRvb5EBCT2XV8iol0KEt27KkS0syDRqYGIdi4kuk+BiEu6XF5qQsJGhN8nkNgNEb6IC5DY7R4iPBGQ6CmPCE/EJ/OQ2K2KiE8gETyFIqLVDiT2HgMRXhdtSOzmIMITsaogsVcRERcvZiHxwZFDtoiL85DoeYwiIi5ezDNedm6zq+wavohWj+dd6SScdJ3Jck9Eq+maaBKNe5w+94m4ePF3/06JJeHkuaE6QIRX1pFJwr6HiINFTEzccSSSQMThIuI0ER8Jp46Iw0V4JuSRyCHiKBETEzlpJHYQcbSIiQlXGIk6IkJETLyXRSKFiDARcS0TcZHIIyJUxEReEgkbEeEibi07gkg0EBEu4tatlCASeUREEHErL4gEIqKIuHVfDgkLEVFELC7aYkg0EBFJxOKOGBJVREQSsbgkhkQeEZFELObFkKgjIpKIxYoYEoiIJmLxvhQSDiKiiVhclELCQkREEZJIICKSiDguJmIigYhoIuK4mIiFRAoREUWIIZFGREQRMkkg4ggRX0gkgYijREgkgYgjRXxREEcCEUeL+GJJGglEhIj4SBoJRISJkEYCEaEihJFARLgIWSQQEUGEKBKIiCJCEglERBIhiAQioomQQwIREUXIIoGICCJEkUBEFBGSSCAikoiPUmJIICKaiI+kvBy3EBFRhFASiDhcxF1HCAkHERFF3FVCSChERBRxWgyJPCIiibhbF0NiEhGRRNyV8/0SKUREEnFXzrfQuIiIJOKyEkNCfY2IKCJOCyIxhYgIIi5nBJFIISKCiMs7gkg4iIggYkEJIqEyiAgVcbkoikQKEaEiLqdEkXAQESpiU4kioeYQESLi8pIwEhYiQkRctoWRUFlEHC2irqSRSCHiSBHxXErESkJVEHGUiFklj0QKEUeIiG2RiJNEZ5lAxIEiYlskYiWRQsShIuJbJGIl0Tp0IOJgEXUlk4SFiENELNhCSahJRBwoIq6LSw1IOI8RcZCI00osCbWDiANEXHYFk1DziPhQREFJJuFkEbFfxKwSTUK5dxARFLHpCCehLEQERCy4SjoJlUJEbykFCVVAxF41BQmvOUToI0IPEqqGCG1EaEJCpRDRmix3FCT2zqLfIOK0qyDRe2eVkS4i4yhIBGtuSxaxuaPLz0EjEsopbO+JWCmsJPybyZZ6RGzW9Pkx6ESitVLkZn0R9YKjisleI4rKzmy2PWR2dPoZaEaitVZYVvuhCsneNfx1wdnZ2dHtB6Afib1HS/YcYWv7964vCbWSZBGbChLHL5/ks0YGEv1ccyf59JmCRD83mkm+j3Ag0U+vkitiVkGin3LJvbMsQKK/i6vk3mK7kOgvvpkMEvuPoUl905WBRJ81kvrucwcS/b7vSKiIBQWJAXeOpH0+ogiJAXeOxH1iJgWJwXaOxInQet/QnURr50jep+oykBho50jg5yxdSAzSVgI/easgMdB7juR9On8JEoM9YPL+lZ8NicE6lzQRdQWJwUonTMTlGiQGvZpImIhLChIDD5iJEnF9ChKDP2KiRFy3ITF455Mkoq4gMYQbzASJuL4DiWFUSo6IUwoSw6iaGBHXa5AYzjm0lBQRPyhIDOkcmhAR16uQGFJ2QkRcciAx5GXCcBH6X1MZRMJOhAgjFglTSPjLhOkizFgkjCFhJ0CEGYuEMSRUzngRhiwS5pCwjRdhyCJhDglVNVyECReXhpFwrpot4gcFiWGXNlrExylIDL87Jot4pSAx/JoGi/jYhcQoyporIqMgMZKDqLEiTDmAGkdCVQ0V8XFNQWJEB9EZM0W8UpAY2eMaKcKg2dI8EqpooogpBYkRbh2/Nk/EloLESC8njBNh1rZhIIn21mGSiCkFidFvHSaJ2FKQGPkjGyXikguJ0TdlkIiPqwoSY2jbHBF1BYlxZN83RcSGA4kxnUQNEfGxqyAxtnHCCBFVBYmxdc8EEUUFiTHeTlzTX8SWA4lx5mov4pKtIDHWGpqLMHK0NJuEmtRbRE1BYuxldBaRUZCIoVl9RRQVJGI5dszqKuKVgkSMJjQUYejxMwkkWiOmhiKM+9RMskjoKAIScZLQUsRvIBEvCf1EQCJeEhqKgESsJHQUAYk4SWgpAhLakNBFBCR0IaGNCEhoQkIfEZDQg4RGIiChBQmdRPwWEhqQ0EoEJDQgoZcISMRPQjMRkIidhG4iIBE3Ce1EQCJmEvqJgES8JDQUAYlYSegoAhJxktBSxM8hETMJ7URAImYS+omARLwkNBQBiVhJ6CgCEnGS0FIEJLQhoYsISOhCQhsRkNCEhD4iIKEHCY1EQEILEjqJ+AMkNCChlQhIaEBCLxGQiJ+EZiIgETsJ3URAIm4S2omARMwk9BMBiXhJaCgCErGS0FHEH+YgEVvzWor4EhIxk9BOBCRiJqGfCEjES0JDEZCIKSc190JPEV9++TDTgMS4n3vynJ6TZbff//7x3A4kxpSbvqDnDVVARKvF85MuJEacnS6W9XyvcYCIVn/6VTZtQ2JUHGr5LT0/H3GECL8z2YYDieHPkuf0/JxlBBFeX311P28ICyNIWHNf6/nvNY4hwm9mrgmJwWfJyQt6/rvPPkR89dWNGzcqkxYkBjhaFDf1/LaA/kW0ulvReeLUloTdyJzV81uHBhbht5BNO5CIPks2587q+e2FQxNx48bLly8faDlx6kfCmnul57cgD13Ey5c3b95cyTUhceQsWdfztymMTITfL7SaOPV5Fm+WXNfzd/CMWkSr67+YtCERnCXX9fxdfmMS4fczPa6+4yfhNDMrev5O4DGLuHnzxIkTP8Q/ccZMojmn7W+Sj0WE3w/xTpwxkrAm62c6IaJHhN/peUsYCW+WfHDmDCIOE9Hqt6/mbSEkvFmyhwMiDhFx4sdev4th4hwzidYsefv2GUREE+FXLo534rTGyWFq+3YrRBxHRJvFGCfOcZGwqtkrV64goj8Rf2tVylmJIeHNklf8EDGAiP/1+vKnS5bxJOxG8f6VK4gYigi/ifqIJ85RknAamW+Wl68gYpgi2ixGOXFaI5wll1shYvgi/P5VbBpEwpsllzshYkQiftTq36OYOK3hz5LZ1eVlRIxDRKs/nRv2xDnU/52dLj5cXUXEGEX4LdYLtoYk7EZmZtUPEWMW0ep/flWsORqR8GbJymo3RMQhwu9MsaYFCataWVtbQ0T8IvweZppxknCb1eyaHyI0EeH19xuPMzU7BhLeQXN6rRsiNBLR6rPP/vOTfpcLq7+TRb7shQh9Rfj95yf9nESsPjy8L5cRYYAIv88LzohJNPPlMiLMEfHZZ//4x/vm6Eg46cdlRJgmwut6YTQknGqpjAgTRXz33XfHQBGdROPFBiJMFdFC0RwyCTe7gQiTRXjN2MMkUd1AhOkinjy5WRgaCSeLiASI8JpxhkPCLSEiGSKePFmwhkGisYGIpIh48uSENTgJRCRJxKNHjwqDkkBEwkSEmrAQIU3Eo0e1QUg0EZE8EY+OnicszhriRHgmnH5JOOcRkUQRT5/+rF8SOUQkU8TTp5n+SDQRkVQRT582+yHhlBCRWBFPf9MPiRwikiviiK3jcBIWIpIs4vmP7WOTyCIiySKeP68cl4SFiGSLeP7cPiaJLCISLuKwZeIwEhYiki7isGXCCl0kEJFUEYcsE4eQsBGRfBHP/uYcg8QUIpIv4tmzqWOQmEaEABHPLkYn0USEBBHPnlmRSeQQIULEs2xkEtOIECHi2c+jkmgiQoaIA3cO69B9AxECRLzORyTxGBFCRLyeiEbCRYQUEa9fO5FIpBEhRsTrWiQSeUSIEfE6G4kE32cpR8QBw8QBJGxEyBHx+nUUEg1ECBLxJhWBxBQiBIl4MxeBBN+ULknEm9kIJBAhScSbiXASNiIkiXjzJpyEhQhRIt5YoSSqiBAl4k0tlMQUIkSJeJMPJZFFhCgRb2dDSdxBhCgRb38ZSgIRskS8/VEYCRcRskS8fRtGwkKEMBFvrRASDUQIE/E2FUKiighhIt5WQ0hMIUKYiLf5EBJZRAgTEYUEIkSJePfLEBIziBAmIpQEIqSJCCWBCGki3r2LSgIRUkSEkLAQIU5ERBKIkCPinROFBCIEiXiXikACEZJEnDyaRBUR4kREIIEIWSLCSSBCmIiTcyEkECFNxMn80SQQIU5ECIkMIsSJCCGRRYQ4EdFIIEKQiEgkECFJRBQSiBAl4uSrUBKIkCXi5L/CSCBCmIhQEoiQJiKMBCLEiYhCAhGiREQggQhZIsJJIEKYiBASiJAnIowEIsSJ+OfRJBAhT8RxSCBChIhjkECEDBH/vBKVBCKEiPj/qCQQIUVECIkHiBAnIoREHRHiRETbOBAhSMQ+Ev8VYAB7Ct9tl4K65QAAAABJRU5ErkJggg==";
        this.busy = { status: 111 };
        this.category = { status: 111 };
        this.position = { status: 111 };
        this.newUsers123123 = [];
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            sname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            site: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            position: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            about: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            freeOrBusy: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
        });
        this.projectForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            story: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            category: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getUsers();
        // this.checkForAvatar();
    };
    PeopleComponent.prototype.onSubmit = function () {
        this.filteredUsers();
    };
    PeopleComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
            _this.filteredUsers1 = data;
            _this.checkForAvatar();
        });
    };
    PeopleComponent.prototype.checkForAvatar = function () {
        if (this.users['avatar'] === undefined) {
            this.findFree();
        }
    };
    PeopleComponent.prototype.findFree = function () {
        for (var i = 0; i <= this.users.length; i++) {
            if (!this.users[i]['avatar']) {
                this.users[i]['avatar'] = this.defaultImageBase64;
            }
        }
    };
    PeopleComponent.prototype.filteredUsers = function () {
        var myUsers = [];
        this.filteredUsers1 = [];
        for (var i = 0; i <= this.users.length; i++) {
            if (this.position.status == 111 && this.busy.status == 111) {
                myUsers = this.users;
            }
            if (this.users[i] != undefined) {
                if (this.users[i].freeOrBusy == this.busy.status && this.users[i].position == this.position.status) {
                    myUsers.push(this.users[i]);
                }
            }
            if (this.users[i] != undefined) {
                if (this.users[i].position == this.position.status && this.busy.status == 111) {
                    myUsers.push(this.users[i]);
                }
            }
            if (this.users[i] != undefined) {
                if (this.users[i].freeOrBusy == this.busy.status && this.position.status == 111) {
                    myUsers.push(this.users[i]);
                }
            }
        }
        this.filteredUsers1 = myUsers;
    };
    PeopleComponent.prototype.goUser = function (user) {
        this.userService.userDetails.next(user);
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/pages/people/people.component.html"),
            styles: [__webpack_require__("./src/app/pages/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n\r\n    <div class=\"avatar avatar-red\"  [ngStyle]=\"{'box-shadow':  userDetails?.freeOrBusy == 0 ? '0px 0px 10px #de0303' : '0px 0px 10px #25bb1b'}\">\r\n      <img [src]=\"'data:image/jpg;base64,'+ userDetails?.avatar\" style=\"height:100%;width:100%\">\r\n    </div>\r\n\r\n    <div class=\"info-main\">\r\n      <div class=\"info-main-name\"><h1>{{userDetails?.username}}  {{userDetails?.sname}} </h1>  <span class=\"starr\"><b>{{greenColor}}</b>{{blackColor}}</span> </div>\r\n      <!--<h4>{{userDetails?.position}}</h4>-->\r\n\t  <div class=\"phone-people\">\r\n      <p><span>Моб.тел:</span> {{userDetails?.mobile}}</p>\r\n      <p><span>Email:</span> {{userDetails?.email}}</p>\r\n      <p><span>Сайт:</span> {{userDetails?.site}}</p>\r\n      </div>\r\n\t  <div class=\"buttons-form\"> <form><label for=\"popupCheckboxOne\" class=\"popup-shower\">Отправить сообщение</label></form><form><input type=\"submit\" class=\"popup-shower\" value=\"Добавить в избранное\"></form></div>\r\n    <!-- Начало всплвающего окна  -->\r\n\r\n      <div class=\"popup-wrapper\">\r\n        <input type=\"checkbox\" class=\"popup-checkbox\" id=\"popupCheckboxOne\">\r\n        <div class=\"popup\">\r\n          <div class=\"popup-content\">\r\n            <label for=\"popupCheckboxOne\" class=\"popup-closer\">&#215;</label>\r\n            <!-- Форма для отправки сообщения -->\r\n            Отправить сообщение пользователю:\r\n            <form class=\"form-for-email\" [formGroup]=\"emailForm\" (ngSubmit)=\"sendEmail()\">\r\n              <textarea type=\"text\" formControlName=\"message\">\r\n              </textarea>\r\n              <input type=\"submit\"  value=\"Отправить\">\r\n            </form>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"info-all\">\r\n      <!--<span><img src=\"../../../../assets/imgs/info-all-ico.jpg\" > О себе <a class=\"info-all-edit\" href=\"\">редактировать</a></span>-->\r\n      <span><img src=\"../../../../assets/imgs/info-all-ico.jpg\" > О себе</span>\r\n      <!--Страна: Украина<br>-->\r\n      <!--Водитель категории B<br>-->\r\n\r\n      <p>{{userDetails?.about}}\r\n      </p>\r\n\r\n      <div class=\"raiting\" *ngIf=\"isLogin\">\r\n        Рейтинг:\r\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n          <select formControlName=\"position\" [(ngModel)]=\"position.status\" >\r\n            <option [selected]=\"position.status ==1\" value=\"1\">1</option>\r\n            <option [selected]=\"position.status ==2\" value=\"2\">2</option>\r\n            <option [selected]=\"position.status ==3\" value=\"3\">3</option>\r\n            <option [selected]=\"position.status ==4\" value=\"4\">4</option>\r\n            <option [selected]=\"position.status ==5\" value=\"5\">5</option>\r\n            <option [selected]=\"position.status ==6\" value=\"6\">6</option>\r\n            <option [selected]=\"position.status ==7\" value=\"7\">7</option>\r\n            <option [selected]=\"position.status ==8\" value=\"8\">8</option>\r\n            <option [selected]=\"position.status ==9\" value=\"9\">9</option>\r\n            <option [selected]=\"position.status ==10\" value=\"10\">10</option>\r\n          </select>\r\n          <button type=\"submit\">Проголосовать</button>\r\n       </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"my-project\">\r\n      <!--<span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" > Мои проекты <a class=\"info-all-edit\" href=\"\">редактировать</a></span>-->\r\n      <span><img src=\"../../../../assets/imgs/my-project-ico.jpg\" > Мои проекты</span>\r\n      <div class=\"project-list\" *ngFor=\"let project of currentProjects\">\r\n        <h6>{{project.title}}</h6>\r\n        <p>{{project.story}}</p>\r\n        <span routerLink=\"/news-one\" (click)=\"goMore(project)\" class=\"more\">Подробнее...</span>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"my-news\"></div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--</body>-->\r\n<!--</html>-->\r\n"

/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.more {\n  cursor: pointer; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.buttons-form, .phone-people {\n  width: 48%;\n  display: inline-block; }\n.buttons-form form {\n  width: 48%;\n  display: inline-block; }\n/* Сообщения в окне */\n.popup-checkbox, .popup {\n  display: none; }\n.popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0; }\n.popup:before {\n  display: block;\n  content: ' ';\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  opacity: .5; }\n.popup-content {\n  width: 340px;\n  height: 220px;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.popup-content textarea {\n  width: 100%;\n  height: 130px;\n  resize: none; }\n.popup-content input[type=submit] {\n  background: #33427d;\n  color: #fff;\n  padding: 5px;\n  border: none; }\n.popup-shower {\n  background: #33427d;\n  color: #fff;\n  padding: 5px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none; }\n.popup-shower:hover {\n  color: #ссс;\n  background: #1b367d; }\n.popup-closer {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: #999;\n  font-size: 20px;\n  border: 1px solid #999;\n  display: block;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer; }\n.popup-closer:hover {\n  background-color: #eee; }\n.popup-checkbox:checked + .popup {\n  opacity: 1;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/pages/people/separate-people/separate-people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeparatePeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/services/auth.service.ts");
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
    function SeparatePeopleComponent(authGuard, userService, projectsService, loginService) {
        this.authGuard = authGuard;
        this.userService = userService;
        this.projectsService = projectsService;
        this.loginService = loginService;
        this.position = { status: 1 };
        this.isLogin = false;
        this.greenColor = '';
        this.blackColor = '';
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            message: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('')
        });
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            position: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
        });
    }
    SeparatePeopleComponent.prototype.ngOnInit = function () {
        this.isInProject();
        this.getCurrentUser();
        this.countRating();
    };
    SeparatePeopleComponent.prototype.countRating = function () {
        var str1 = [];
        var sum = 0;
        if (this.userDetails.rating) {
            var names = this.userDetails.rating;
            var arr = names.split(', ');
            for (var i_1 = 0; i_1 < arr.length; i_1++) {
                str1.push(+arr[i_1]);
            }
        }
        else {
            console.log('no rating');
        }
        for (var i = 0; i < str1.length; i++) {
            sum += str1[i];
        }
        this.myRating = Math.round(sum / str1.length);
        this.howMuchStars();
    };
    SeparatePeopleComponent.prototype.sendEmail = function () {
        var userData = { name: '', sname: '', email: '', message: this.emailForm.value.message, emailTo: this.userDetails.email };
        this.loginService.currentUserInformation.subscribe(function (data) {
            userData.name = localStorage.getItem('username');
            userData.sname = data['sname'];
            userData.email = localStorage.getItem('userEmail');
        });
        this.userService.sendEmail(userData).subscribe(function (data) {
            console.log(data, 'lalal');
        });
    };
    SeparatePeopleComponent.prototype.howMuchStars = function () {
        switch (this.myRating) {
            case undefined:
                this.greenColor = '';
                this.blackColor = '★★★★★★★★★★';
                break;
            case 1:
                this.greenColor = '★';
                this.blackColor = '★★★★★★★★★';
                break;
            case 2:
                this.greenColor = '★★';
                this.blackColor = '★★★★★★★★';
                break;
            case 3:
                this.greenColor = '★★★';
                this.blackColor = '★★★★★★★';
                break;
            case 4:
                this.greenColor = '★★★★';
                this.blackColor = '★★★★★★';
                break;
            case 5:
                this.greenColor = '★★★★★';
                this.blackColor = '★★★★★';
                break;
            case 6:
                this.greenColor = '★★★★★★';
                this.blackColor = '★★★★';
                break;
            case 7:
                this.greenColor = '★★★★★★★';
                this.blackColor = '★★★';
                break;
            case 8:
                this.greenColor = '★★★★★★★★';
                this.blackColor = '★★';
                break;
            case 9:
                this.greenColor = '★★★★★★★★★';
                this.blackColor = '★';
                break;
            case 10:
                this.greenColor = '★★★★★★★★★';
                this.blackColor = '';
                break;
        }
    };
    SeparatePeopleComponent.prototype.isInProject = function () {
        var _this = this;
        this.authGuard.userIsLogin.subscribe(function (data) {
            if (data['isLogin'] === 'true' || localStorage.getItem('userEmail') != undefined) {
                _this.isLogin = true;
            }
        });
    };
    SeparatePeopleComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.userDetails.subscribe(function (data) {
            _this.userDetails = data;
            _this.getProjectsByEmail();
        });
    };
    SeparatePeopleComponent.prototype.getProjectsByEmail = function () {
        var _this = this;
        var userDetails = this.userDetails;
        this.projectsService.getMyProjects(userDetails).subscribe(function (data) {
            _this.currentProjects = data;
        });
    };
    SeparatePeopleComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    SeparatePeopleComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = { email: this.userDetails.email, rating: this.position.status };
        this.loginService.addRating(user).subscribe(function (data) {
            _this.userDetails = data;
            _this.countRating();
        });
    };
    SeparatePeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-separate-people',
            template: __webpack_require__("./src/app/pages/people/separate-people/separate-people.component.html"),
            styles: [__webpack_require__("./src/app/pages/people/separate-people/separate-people.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__services_projects_service__["a" /* ProjectsService */], __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]])
    ], SeparatePeopleComponent);
    return SeparatePeopleComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" placeholder=\"Искать здесь...\" [(ngModel)]=\"myFilter\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\" *ngFor=\"let projects of filteredArray\">\r\n      <h2>{{projects.title}}</h2>\r\n      <img [src]=\"'data:image/jpg;base64,'+ projects.avatar\" style=\"height:250px;width:250px\">\r\n      <p>\r\n    {{projects.story}}\r\n      </p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n.main {\n  min-height: 100vh; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.more {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.defaultImageBase64 = "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vbmIY3vZLKFC0zQ9icVtzjZ/UosTU5E54/hZjCXIeEkkEtHX/6xvxfoB+IGCRfQVE+xz8skn52S/sf5u27bNdXtNTU36HnwxdeFLBelndPbA8w8rcKxEshtisZgrkWYyGX02ZOavmNdeLIqi6PHe7J5ehMDybbAtSf7ASrcMGzZMH2jF7bpNmza5bu+DDz7QrRcSOgndEN8uiswqR9qKsrIy14MDqzLD1s1eC52toSORiCEQpdh78NYLP1gWmo9eV1eHfv366X0GjkUq7ty50/Xf4r333gPQU/dv1KhRBfWplJBe6GYx2uxBcxvSGgqFdGE5eeD51FhWqcWrmusMNpCxJBHej1AMfGSdF/XYVFXVU4L5yjvsJB2rc9msYEIfO3as9AktAAldFzPvpCq0OENlZaU+Izud2fhZFoDuI/AK3uteTL64iJV4ihlA2BnoZtub7777ruN2stksNm7cCAC44IILCu5PKSG90MUHU6y55gYW5+10Rufj4o9XznQoFNIF7tXWGmC0gPjPqxhvPkvN5Qc9FlC0du1ax+189tlnuiOOhN6D9EI3E6SbM855WCqk08GC+QbY0UPM7Pf6NFXAWBSDz5orFLGPXqS/futb3wJgPHyS5bv/97//dWwt/P3vfwfQE8BEQu9BeqEzzB58t2JghRydwsJdWYEFt2a/03sAxyIAj8fBDbynvBihn3rqqTmhqmyw3bt3r+NttlWrVgEAzjnnnKKryJYKJPT/x2y2KOR8dH4bKx8snl50wHl5ThifNqqqqumhC4VgFmjE/18IgUAAEydOzGmTDVCvvfZa3jZ2796NdevWAQCuuOKKgvtSakgvdDtBul3L8g4qp6Y7kLt8KLYgIg8zsZmlwGqzFesPsDLdix1Evve97+ntMJ8C+/fGG2/kvX7lypX65zllypSi+lJKSC90OzO5kKQWhpPUSqt17fE6VaSQohj52mK4KYppx+WXX67X2hc/h3Xr1hlST81YsWIFAGDkyJEUKMMhvdDtZnS3TjF+Rnda64w57viiFV4640SrhM/SKwarPhbbblVVFa666irT9lKpFJYvX2557a5du7BhwwYAwHXXXSd9xhqP9J+EndDdzk58imtHR4fje7NEmkK9/YXg5fnovIXghTVy00036V+LA8pf/vIXy7/Ls88+q4cV33rrrUX3o5SQXuhm5myxlWABZ0Lnc69ZAo3XkXFWbRUrSN5S8NqReOmll2L8+PEAcktof/TRR6Z76t3d3XjuuecAABdddBGGDRtWdD9KCemFzjAThNtZj3/InQjdTGxeB87wvgIxAs+rdr1GURT86le/AmD+N/jDH/6Q87PFixfjwIEDAIC77rrruPXNr0gvdCuxAe5NaD7xwm0SBo+XpruYU+/FNhhgPZB5tTU4ZcoUTJ48OefvoygKXnnlFXz00Uf6z3bt2oV58+YB6ImEu+yyyzzpQykhvdDtHni3TjFe3E6KVvDVWXi8zEe3im0vdjCx2gL0asdAURQ89dRTOeejsyzDmTNnYtu2bdi0aRO++93v4siRIwgEAnj88cc9jUMoFaQvPGH3UJSXl7tqixe6k6IVLA6d74umadizZw8WL16sZ4ix6Dm++k0ymUQqlUJ1dTWuvPJKy/chRrAxihUkvzXIR8Z5aY2MHDkSTz/9NGbPnp0zIO/YsSOnRNS9996LcePGeXb/UkJ6oduJmZVfdkpra6v+tZMMNKvosjfffBNvvvmm4Xf80co85eXlaGlpsbQCYrGY6c9feOEF/Oc//9HbTCQS+hHRLFqP/ax///54+OGHDduH7HPj49I1TcNrr72GLVu26O+/s7NTT8ft6OhAMBhEIpFAMBhEXV0d5s+fb/s5X3fdddixYwcWLFhg+RoAmDdvHh588EHb18iM9EJntcrMcOsU42dxJ4OEm1NNrGZK/kRWM/r372/qybfbj2bwjrtbbrnFMIMOGDAgpyIPACxZsiRvuzwTJkzANddcY/ua+++/HyNHjsQdd9yBpqYmQ/8uvfRSzJ8/H+eff76r+8qG9EIfMWIEdu/ejYaGBv1hDYfDqKiocB1ZddNNN2Hs2LE4/fTTHV07c+ZMfPvb39YPi2A54+l0GsFg0DCL85Fi/AmmJ510km1hhdraWjz22GP49NNP9ZTPUCiEiooKpFIphEIhhMNhJBIJvQoNWyp0dXWhu7sb5eXlOSed9O3bFw899JBeEIJdU1FRoe9lq6qKRCJhOJJaVVV0dnYilUohlUrh61//uqPPdvbs2bj22mvxj3/8A62trSgvL8eECROkr9fuFEXzctPWJdls1nA+lhWBQADV1dVfQY8Iwjnd3d2OIiBVVdXr1vcW0nvdCUIGSOgEIQEkdIKQABI6QUiAVF73eDyOw4cPo6urC/F4HKFQCMOGDcuJvjKDnTHOvOKsPDPzfrOz0+y2zPhTWvlyyQRxvJFG6AcPHsSoUaNyYrRDoRDGjx+PBQsWYPLkyabXJpNJnHPOOdi8ebN+EKOqqoY6bIFAAH369MG+fftMg1eSySTGjRuH3bt3I51O46qrrsKyZcss+5tKpXDnnXfqFWFuv/1206ivZDKJ+fPn45JLLtH7P3fuXHz44Yf6FhcbiMLhMMrLy1FXV2coK5VMJjFo0CDcf//9UBQFq1evxuuvv47u7m79fUYiEaiqilgshsGDByMQCCASiejbgKqq4sILL9QPSwR6Djl8/fXX0draqp80G4vF0NXVhfLycrS1teGLL77A4cOHMXXqVPzoRz8CAKxduxYffPABAKC+vh5Tp041/Yy2bNmCDRs2YPr06TlxC3fddRe2b98OTdNwww03YNasWZaftQxII/TDhw8bRH7RRRfhkksuwZYtW7BixQpcdtllWLRoEX784x/nXLt//358+OGH+vf19fWora1FKpXS94kVRUFVVZVlKOqBAwfwySef6N+vWrUK8XjcMnKtu7sbixYt0vfOJ06caCr0VCqFhQsXIpPJ6EIfM2YMOjs7EY/H0dnZiYEDB2LZsmV6QE80GsU111yDjo4OdHR0oLW1VT88AegR6GuvvYbu7m590Gpvb8fRo0f1WIMBAwYgEAigo6MDyWQSqqpi8eLFmDZtGgBg69atOPPMMx0fVFlVVaUL/ZlnnsHzzz8PAOjXr5+l0F966SU88MADOO200/QKsox169bpteBHjBhBQu/tDnxViMkd48aNwy9/+UsAPeGTkydPxt13340rrrgC9fX1hteK4r366qvxpz/9ydX9xRNBu7u7sWfPHowePdryGiex6cyi4CPnxDRNTdPw6quv6oc6RqNRLFu2zHJQmjt3LubOnWv42e23346nn35a//7RRx/F9ddfj2w2q4e48suR3bt36yIfMWIEVq1ahVAohO7ubn3po2kaYrEYqqurDcsnvl9OohPNko/40OZeDBU5YZBG6OJDzYerjhkzBsuWLcOECRPw+OOPY+HChbbXFpKCumvXrpyfNTQ0WApdPIPNKpOOHbmUTxD8YMBOcHWT5SUOlGzZEggE8mb5xWIxjB071vG9+DwBu5NlzE50Ybg98rrUkcbrLmaTibHj5557Li6++GIsWbIk5+Fi5it7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";
        this.filteredArray = [];
        this.myFilter = '';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getMyProjects();
    };
    ProjectsComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getAllProjectsByStatus((1)).subscribe(function (data) {
            _this.myAllProjectsByStatus = data;
            _this.filteredArray = data;
            _this.checkForAvatar();
        });
    };
    ProjectsComponent.prototype.checkForAvatar = function () {
        if (this.myAllProjectsByStatus['avatar'] === undefined) {
            this.findFree();
        }
    };
    ProjectsComponent.prototype.findFree = function () {
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (!this.myAllProjectsByStatus[i]['avatar']) {
                this.myAllProjectsByStatus[i]['avatar'] = this.defaultImageBase64;
            }
        }
    };
    ProjectsComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    ProjectsComponent.prototype.onSubmit = function () {
        this.filtered();
    };
    ProjectsComponent.prototype.filtered = function () {
        var myArr = [];
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (this.myAllProjectsByStatus[i] != undefined) {
                if (this.myAllProjectsByStatus[i].title.includes(this.myFilter)) {
                    myArr.push(this.myAllProjectsByStatus[i]);
                }
            }
        }
        this.filteredArray = myArr;
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/rental/rental.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carousel\">\r\n  <div class=\"container\">\r\n    <img src=\"../../../assets/imgs/logos.png\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"d3\">\r\n      <form (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" placeholder=\"Искать здесь...\" [(ngModel)]=\"myFilter\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button type=\"submit\"></button>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"project-all project-light\" *ngFor=\"let projects of filteredArray\">\r\n      <h2>{{projects.title}}</h2>\r\n      <img [src]=\"'data:image/jpg;base64,'+ projects.avatar\" style=\"height:250px;width:250px\">\r\n      <p>\r\n        {{projects.story}}\r\n      </p>\r\n      <span routerLink=\"/news-one\" (click)=\"goMore(projects)\" class=\"more\">Подробнее...</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/rental/rental.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/pages/rental/rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/services/projects.service.ts");
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
    function RentalComponent(projectsService) {
        this.projectsService = projectsService;
        this.defaultImageBase64 = "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vbmIY3vZLKFC0zQ9icVtzjZ/UosTU5E54/hZjCXIeEkkEtHX/6xvxfoB+IGCRfQVE+xz8skn52S/sf5u27bNdXtNTU36HnwxdeFLBelndPbA8w8rcKxEshtisZgrkWYyGX02ZOavmNdeLIqi6PHe7J5ehMDybbAtSf7ASrcMGzZMH2jF7bpNmza5bu+DDz7QrRcSOgndEN8uiswqR9qKsrIy14MDqzLD1s1eC52toSORiCEQpdh78NYLP1gWmo9eV1eHfv366X0GjkUq7ty50/Xf4r333gPQU/dv1KhRBfWplJBe6GYx2uxBcxvSGgqFdGE5eeD51FhWqcWrmusMNpCxJBHej1AMfGSdF/XYVFXVU4L5yjvsJB2rc9msYEIfO3as9AktAAldFzPvpCq0OENlZaU+Izud2fhZFoDuI/AK3uteTL64iJV4ihlA2BnoZtub7777ruN2stksNm7cCAC44IILCu5PKSG90MUHU6y55gYW5+10Rufj4o9XznQoFNIF7tXWGmC0gPjPqxhvPkvN5Qc9FlC0du1ax+189tlnuiOOhN6D9EI3E6SbM855WCqk08GC+QbY0UPM7Pf6NFXAWBSDz5orFLGPXqS/futb3wJgPHyS5bv/97//dWwt/P3vfwfQE8BEQu9BeqEzzB58t2JghRydwsJdWYEFt2a/03sAxyIAj8fBDbynvBihn3rqqTmhqmyw3bt3r+NttlWrVgEAzjnnnKKryJYKJPT/x2y2KOR8dH4bKx8snl50wHl5ThifNqqqqumhC4VgFmjE/18IgUAAEydOzGmTDVCvvfZa3jZ2796NdevWAQCuuOKKgvtSakgvdDtBul3L8g4qp6Y7kLt8KLYgIg8zsZmlwGqzFesPsDLdix1Evve97+ntMJ8C+/fGG2/kvX7lypX65zllypSi+lJKSC90OzO5kKQWhpPUSqt17fE6VaSQohj52mK4KYppx+WXX67X2hc/h3Xr1hlST81YsWIFAGDkyJEUKMMhvdDtZnS3TjF+Rnda64w57viiFV4640SrhM/SKwarPhbbblVVFa666irT9lKpFJYvX2557a5du7BhwwYAwHXXXSd9xhqP9J+EndDdzk58imtHR4fje7NEmkK9/YXg5fnovIXghTVy00036V+LA8pf/vIXy7/Ls88+q4cV33rrrUX3o5SQXuhm5myxlWABZ0Lnc69ZAo3XkXFWbRUrSN5S8NqReOmll2L8+PEAcktof/TRR6Z76t3d3XjuuecAABdddBGGDRtWdD9KCemFzjAThNtZj3/InQjdTGxeB87wvgIxAs+rdr1GURT86le/AmD+N/jDH/6Q87PFixfjwIEDAIC77rrruPXNr0gvdCuxAe5NaD7xwm0SBo+XpruYU+/FNhhgPZB5tTU4ZcoUTJ48OefvoygKXnnlFXz00Uf6z3bt2oV58+YB6ImEu+yyyzzpQykhvdDtHni3TjFe3E6KVvDVWXi8zEe3im0vdjCx2gL0asdAURQ89dRTOeejsyzDmTNnYtu2bdi0aRO++93v4siRIwgEAnj88cc9jUMoFaQvPGH3UJSXl7tqixe6k6IVLA6d74umadizZw8WL16sZ4ix6Dm++k0ymUQqlUJ1dTWuvPJKy/chRrAxihUkvzXIR8Z5aY2MHDkSTz/9NGbPnp0zIO/YsSOnRNS9996LcePGeXb/UkJ6oduJmZVfdkpra6v+tZMMNKvosjfffBNvvvmm4Xf80co85eXlaGlpsbQCYrGY6c9feOEF/Oc//9HbTCQS+hHRLFqP/ax///54+OGHDduH7HPj49I1TcNrr72GLVu26O+/s7NTT8ft6OhAMBhEIpFAMBhEXV0d5s+fb/s5X3fdddixYwcWLFhg+RoAmDdvHh588EHb18iM9EJntcrMcOsU42dxJ4OEm1NNrGZK/kRWM/r372/qybfbj2bwjrtbbrnFMIMOGDAgpyIPACxZsiRvuzwTJkzANddcY/ua+++/HyNHjsQdd9yBpqYmQ/8uvfRSzJ8/H+eff76r+8qG9EIfMWIEdu/ejYaGBv1hDYfDqKiocB1ZddNNN2Hs2LE4/fTTHV07c+ZMfPvb39YPi2A54+l0GsFg0DCL85Fi/AmmJ510km1hhdraWjz22GP49NNP9ZTPUCiEiooKpFIphEIhhMNhJBIJvQoNWyp0dXWhu7sb5eXlOSed9O3bFw899JBeEIJdU1FRoe9lq6qKRCJhOJJaVVV0dnYilUohlUrh61//uqPPdvbs2bj22mvxj3/8A62trSgvL8eECROkr9fuFEXzctPWJdls1nA+lhWBQADV1dVfQY8Iwjnd3d2OIiBVVdXr1vcW0nvdCUIGSOgEIQEkdIKQABI6QUiAVF73eDyOw4cPo6urC/F4HKFQCMOGDcuJvjKDnTHOvOKsPDPzfrOz0+y2zPhTWvlyyQRxvJFG6AcPHsSoUaNyYrRDoRDGjx+PBQsWYPLkyabXJpNJnHPOOdi8ebN+EKOqqoY6bIFAAH369MG+fftMg1eSySTGjRuH3bt3I51O46qrrsKyZcss+5tKpXDnnXfqFWFuv/1206ivZDKJ+fPn45JLLtH7P3fuXHz44Yf6FhcbiMLhMMrLy1FXV2coK5VMJjFo0CDcf//9UBQFq1evxuuvv47u7m79fUYiEaiqilgshsGDByMQCCASiejbgKqq4sILL9QPSwR6Djl8/fXX0draqp80G4vF0NXVhfLycrS1teGLL77A4cOHMXXqVPzoRz8CAKxduxYffPABAKC+vh5Tp041/Yy2bNmCDRs2YPr06TlxC3fddRe2b98OTdNwww03YNasWZaftQxII/TDhw8bRH7RRRfhkksuwZYtW7BixQpcdtllWLRoEX784x/nXLt//358+OGH+vf19fWora1FKpXS94kVRUFVVZVlKOqBAwfwySef6N+vWrUK8XjcMnKtu7sbixYt0vfOJ06caCr0VCqFhQsXIpPJ6EIfM2YMOjs7EY/H0dnZiYEDB2LZsmV6QE80GsU111yDjo4OdHR0oLW1VT88AegR6GuvvYbu7m590Gpvb8fRo0f1WIMBAwYgEAigo6MDyWQSqqpi8eLFmDZtGgBg69atOPPMMx0fVFlVVaUL/ZlnnsHzzz8PAOjXr5+l0F966SU88MADOO200/QKsox169bpteBHjBhBQu/tDnxViMkd48aNwy9/+UsAPeGTkydPxt13340rrrgC9fX1hteK4r366qvxpz/9ydX9xRNBu7u7sWfPHowePdryGiex6cyi4CPnxDRNTdPw6quv6oc6RqNRLFu2zHJQmjt3LubOnWv42e23346nn35a//7RRx/F9ddfj2w2q4e48suR3bt36yIfMWIEVq1ahVAohO7ubn3po2kaYrEYqqurDcsnvl9OohPNko/40OZeDBU5YZBG6OJDzYerjhkzBsuWLcOECRPw+OOPY+HChbbXFpKCumvXrpyfNTQ0WApdPIPNKpOOHbmUTxD8YMBOcHWT5SUOlGzZEggE8mb5xWIxjB071vG9+DwBu5NlzE50Ybg98rrUkcbrLmaTibHj5557Li6++GIsWbIk5+Fi5it7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";
        this.filteredArray = [];
        this.myFilter = '';
    }
    RentalComponent.prototype.ngOnInit = function () {
        this.getMyProjects();
    };
    RentalComponent.prototype.getMyProjects = function () {
        var _this = this;
        this.projectsService.getAllProjectsByStatus((3)).subscribe(function (data) {
            _this.myAllProjectsByStatus = data;
            _this.filteredArray = data;
            _this.checkForAvatar();
        });
    };
    RentalComponent.prototype.checkForAvatar = function () {
        if (this.myAllProjectsByStatus['avatar'] === undefined) {
            this.findFree();
        }
    };
    RentalComponent.prototype.findFree = function () {
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (!this.myAllProjectsByStatus[i]['avatar']) {
                this.myAllProjectsByStatus[i]['avatar'] = this.defaultImageBase64;
            }
        }
    };
    RentalComponent.prototype.onSubmit = function () {
        this.filtered();
    };
    RentalComponent.prototype.filtered = function () {
        var myArr = [];
        for (var i = 0; i <= this.myAllProjectsByStatus.length; i++) {
            if (this.myAllProjectsByStatus[i] != undefined) {
                if (this.myAllProjectsByStatus[i].title.includes(this.myFilter)) {
                    myArr.push(this.myAllProjectsByStatus[i]);
                }
            }
        }
        this.filteredArray = myArr;
    };
    RentalComponent.prototype.goMore = function (data) {
        this.projectsService.moreProject.next(data);
    };
    RentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rental',
            template: __webpack_require__("./src/app/pages/rental/rental.component.html"),
            styles: [__webpack_require__("./src/app/pages/rental/rental.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], RentalComponent);
    return RentalComponent;
}());



/***/ }),

/***/ "./src/app/pages/rooles/rooles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  ДЛЯ КОРИСТУВАЧІВ САЙТУ: <br>прочитайте умови цієї ПУБЛІЧНОЇ ОФЕРТИ уважно оскільки вони\r\n  містять важливу інформацію щодо ваших законних прав, засобів захисту та зобов&#39;язань. До них\r\n  відносяться різні обмеження і виключення, пункти, які регулюють юрисдикцію спорів, і зобов&#39;язання\r\n  дотримуватися чинних законів і правил Сайту.\r\n  <br><br>\r\n  ПУБЛІЧНА ОФЕРТА (Договір)\r\n  <br><br>\r\n  про умови використання Сайту та політика конфіденційності\r\n  <br>\r\n  м. Київ Дата опублікування на Сайті 13.01.2018 р.<br>\r\n  АДМІНІСТРАЦІЯ САЙТУ (Виконавець): Громадянин України, Суліга Артем Володимирович, що є\r\n  платником податку на доходи фізичних осіб, контактна електронна адреса:\r\n  KinoKuznyasait@gmail.com, контактний номер телефону: +380733095918, іменований надалі\r\n  «Адміністрація Сайту» та/або «Виконавець», пропонує:<br><br>\r\n  КОЖНОМУ ВІДВІДУВАЧУ САЙТУ, іменованому надалі «Користувач», публічну оферту про\r\n  надання послуг Сайту www.kinokuznya.com.ua у мережі Інтернет на укладення Договору, текст якого,\r\n  правила користування Сайтом та політика конфіденційності, розміщується Адміністрацією Сайту в\r\n  мережі Інтернет за адресою https://www.kinokuznya.com.ua/terms.pdf, на наступних умовах:\r\n  <br><br>\r\n  1. ТЕРМІНИ ТА ВИЗНАЧЕННЯ\r\n  <br>\r\n  В тексті цієї Публічної оферти (Договору) терміни, як в множині так і в однині, в будь-яких\r\n  відмінках розуміються наступним чином:\r\n  1.1. «Сайт» - інтернет-сайт, розміщений за визначеною мережевою адресою - доменом –\r\n  www.kinokuznya.com.ua та / або інші сайти, що знаходяться під його управлінням/доменом. Сайт\r\n  (-ти) містять програмно-апаратні засоби, інтегровані із Сайтом, а також, Веб-додаток на яких до\r\n  відома Користувачів надається інформація про Авторизованих Користувачів, продукти,\r\n  Інформацію, Контент Користувача (-чів). Сайт (-ти) створені з метою об’єднання творчої\r\n  спільноти у сфері кінематографу, радіомовлення, телебачення, музичної індустрії, у сфері\r\n  створення кліпів (кліпмейкерства), літературної, художньої, публіцистичної, фольклорної,\r\n  танцювально-хореографічної сфери, індустрії моди та шоу-бізнесу, сфери реклами та ЗМІ,\r\n  архітектури, ужиткового мистецтва, дизайну, розробок та інновацій, в тому числі індустрії\r\n  технічної творчості та промислової власності, наукових сферах, а також у будь-яких інших\r\n  сферах діяльності людини, як прямо так і опосередковано пов’язаних з творчістю та\r\n  інтелектуальною діяльністю людини, а також, з метою, підвищення ефективності професійної\r\n  комунікації, між Користувачами в тому числі, в обумовлених вище сферах, та задля\r\n  рекламування, популяризації діяльності Користувачів, організованих ними заходів, івентів,\r\n  проектів, стартапів та будь-яких інших їх творчих ідей.\r\n  1.2. «Публічна оферта» – пропозиція Адміністрації Сайту, адресована будь-якій фізичній та/або\r\n  юридичній особі, або фізичній особі-підприємцю, або підприємству/організації/установі,\r\n  незалежно від форми власності та/або країни резидентства, відповідно до статті 633, 641\r\n  Цивільного кодексу України, укласти з Адміністрацією Сайту:\r\n   Договір про умови використання Сайту на умовах, які містяться в публічній оферті.\r\n   Угоду про політику конфіденційності, яка міститься в публічній оферті.\r\n  <br>\r\n  1.3. «Договір» – цим терміном тут та надалі розуміється як договір про умови використання Сайту,так\r\n  і угода про політику конфіденційності, що укладені між Адміністрацією Сайту і Користувачем на\r\n  умовах Публічної оферти в момент Акцепту Користувачем її умов.\r\n  1.4. «Користувач» Сайту (або «Користувачі») - будь-яка фізична/юридична особа,або фізична особа-\r\n  підприємець, або підприємство/організація/установа, незалежно від форми власності та/або країни\r\n  резидентства, (або програми що дозволяють використовувати сайт – «Роботи»), незалежно від\r\n  правового статусу, які здійснюють використання будь-якої з функцій або сервісів Сайту. До\r\n  2 Користувачів, також, відносяться (і також іменуються як Користувачі):\r\n  <br> «Авторизований користувач» – особа, що є Користувачем, на умовах цього Договору, який\r\n  пройшов авторизацію на Сайті або через мережу Facebook, Instagram, YouTube, Twitter, Skype,\r\n  тощо та отримав особистий ID, логін та пароль.\r\n  Кожен Користувач при використанні Сайту, гарантує наявність у нього належної дієздатності\r\n  та/або повноважень на вчинення правочину у вигляді прийняття умов Публічної оферти,\r\n  відповідно до правил законодавства України та/або його особистого закону відповідної\r\n  юрисдикції. У випадку, відсутності необхідного обсягу дієздатності та/або повноважень на\r\n  здійснення такого використання Сайту, припускається, що особа або припиняє використання\r\n  Сайту або залучає уповноваженого представника – який діє у правовідносинах з Адміністрацією\r\n  Сайту від імені такої особи.<br>\r\n  <br>1.5. «Інформація»- будь-які відомості, тексти, посилання, графічні, відео- і аудіо об&#39;єкти, електронна\r\n  (цифрова) інформація, програмні коди, Матеріали та Контент.<br>\r\n  <br>1.6. «Матеріали» - текст відомостей (інформації, даних), фотографії, кліпи, фотоматеріали, компіляції\r\n  даних, програми та/або передачі організацій мовлення, твори реклами, радіопрограми, трансляції,\r\n  подкасти, фонограми, звукозаписи, виконання, плани, проекти, ескізи, ілюстрації, презентації,\r\n  бази даних, твори мистецтва, запатентовані або такі, які знаходяться в процесі реєстрації процеси,\r\n  способи, методи, корисні моделі, промислові зразки, винаходи, торговельні марки (знаки для\r\n  товарів та послуг), географічні позначення, комерційні найменування, гудвіл, графіка,\r\n  повідомлення, аудіо- (відео-) об’єкти, аудіовізуальні твори та їх складові/елементи, сценарії, будь-\r\n  які об’єкти права інтелектуальної власності, що технічно можуть бути розміщені в мережі\r\n  Інтернет, як такі що відомі наразі, так і ті, що будуть відомі, а також, будь-які інші об’єкти (іх\r\n  частини) права інтелектуальної власності, як вітчизняного так і зарубіжного походження,\r\n  коментарі та інші матеріали.<br>\r\n  1.7. «Контент» – інформаційні та будь-які інші матеріали (фото-, відеоматеріали, ілюстрації,\r\n  компіляції, художні/публіцистичні текстові твори та/або інші об’єкти права інтелектуальної\r\n  власності, зокрема, але не виключно, такі, що визначені в п.1.6. Договору) а також, персональні\r\n  дані Користувача, розміщені ним на Сайті.<br>\r\n  1.8. «Авторизація на Сайті» (надалі також – «Реєстрація» та/або «Авторизація») - процес\r\n  повідомлення Сайту персональних даних для подальшого отримання доступу до його\r\n  сервісів/Послуг або доступу до ресурсів, які не можуть використовувати неавторизовані\r\n  Користувачі.<br>\r\n  1.9. «База даних» - сукупність відомостей (Інформації, Матеріалів, Контенту та інших даних) в\r\n  комп&#39;ютерних файлах і Система управління базами даних.\r\n  1.10. «Система управління базами даних Сайту» (надалі також – «Система») (інтерфейс доступу\r\n  до баз даних, що знаходиться за мережевою адресою: www.kinokuznya.com.ua) – тобто\r\n  інформаційно-довідкова система, яка є програмним забезпеченням, що надає Користувачеві різні\r\n  можливості, для користування Послугами Сайту.<br>\r\n  1.11. «Послуга» (-и) – розміщення на Сайті www.kinokuznya.com.ua у мережі Інтернет Інформації\r\n  (в тому числі, Матеріалів та Контенту Користувачів), надаване Адміністрацією Сайту\r\n  Користувачу відповідно до мети створення Сайту – тобто для об’єднання творчої спільноти у\r\n  сфері кінематографу, радіомовлення, телебачення, музичної індустрії, у сфері створення кліпів\r\n  (кліпмейкерства), літературної, художньої, публіцистичної, фольклорної, танцювально-\r\n  хореографічної сфери, індустрії моди та шоу-бізнесу, сфери реклами та ЗМІ, архітектури,\r\n  ужиткового мистецтва, дизайну, розробок та інновацій, в тому числі індустрії технічної\r\n  творчості та промислової власності, наукових сферах, а також у будь-яких інших сферах\r\n  діяльності людини, як прямо так і опосередковано пов’язаних з творчістю та інтелектуальною\r\n  діяльністю людини, а також, з метою, підвищення ефективності професійної комунікації, між\r\n  Користувачами в тому числі, в обумовлених вище сферах, та задля рекламування, популяризації\r\n  діяльності Користувачів, організованих ними заходів, івентів, проектів, стартапів та будь-яких\r\n  інших їх творчих ідей.<br>\r\n  До Послуг Сайту, що надаються Користувачам відносяться, зокрема:\r\n  <br>\r\n\r\n   пошук відомостей (інформації, даних) в комп&#39;ютерних файлах (включаючи файли Бази даних),<br>\r\n   можливість коментувати послуги/товари/продукти/роботи та Матеріали інших Користувачів,<br>\r\n   виведення результатів пошуку Інформації для Користувачів,<br>\r\n  До Послуг Сайту, що надаються Авторизованим Користувачам відносяться, зокрема:<br>\r\n   пошук відомостей (інформації, даних) в комп&#39;ютерних файлах (включаючи файли Бази даних),<br>\r\n   можливість коментувати послуги/товари/продукти/роботи та Матеріали інших Користувачів,<br>\r\n   додавання в Базу даних відомостей (Інформації, Матеріалів, Контенту та інших даних),<br>\r\n   виведення результатів пошуку Інформації для Користувачів,<br>\r\n   можливість слідкувати за оновленнями інших Користувачів,<br>\r\n   можливість обробляти Контент з метою формування професійного іміджу Користувача,<br>\r\n   можливість комунікації з іншими Користувачами,<br>\r\n   інші послуги, що частково або повністю надаються соціальними мережами в звичайному їх\r\n  розумінні.<br>\r\n  1.12. «Мережевий етикет» - формальні правила поведінки, спілкування, традицій у Інтернет\r\n  мережі, що забороняють, як мінімум Спам, Флуд, Флейм, Офтопік та інші види неповаги в\r\n  Інтернеті, такі як зокрема – використання неетичної, аморальної лексики, приниження честі чи\r\n  гідності іншого Користувача (-ів), третіх осіб, втручання в особисте життя людини, обмеження чи\r\n  порушення прав та/або свобод, дискримінація з будь-якої ознаки тощо. Користувачі зобов’язані\r\n  дотримуватися правил Мережевого етикету при використанні Сайту.<br>\r\n  1.13. «Спам» - вид порушення Мережевого етикету (англ. Spam), що полягає у масовій розсилці\r\n  комерційної, політичної та іншої реклами, що не відносяться до кінематографії та/або професійної\r\n  діяльності Користувача.<br>\r\n  1.14. «Флуд» — вид порушення Мережевого етикету, що полягає в марнослів&#39;ї та/або\r\n  повідомленнях, які займають (в багатьох випадках) великі обсяги і не носять якоїсь нової чи\r\n  корисної інформації.<br>\r\n  1.15. «Флейм» — словесна війна, яка не має жодного стосунку до початкової теми – один з видів\r\n  порушення Мережевого етикету.<br>\r\n  1.16. «Офтопік» — будь-яке повідомлення, що виходить за межі заздалегідь встановленої теми\r\n  спілкування – один з видів порушення Мережевого етикету.<br>\r\n  1.17. «Адміністрація Сайту» та/або «Виконавець» - Громадянин України, Суліга Артем\r\n  Володимирович, контактна електронна адреса: KinoKuznyasait@gmail.com, тел. +3 8073 309 59 18,\r\n  а також, будь-які пов’язані (афілійовані) з ним особи і особи уповноважені підтримувати\r\n  функціонування, здійснювати контроль та моніторинг Сайту – діючи від імені та в інтересах\r\n  Суліги Артема Володимировича.<br>\r\n  1.18. «Сторони» – Користувач і Адміністрація Сайту, що уклали цей Договір.<br>\r\n  1.19. «Аккаунт» Користувача – обліковий запис, сторінка профілю Користувача, відомості, щодо\r\n  даних про Користувача, з інформацією про його професійну діяльність та/або про продукцію\r\n  (товари) що їм виготовляються або реалізовуються, про послуги що ним надаються чи про роботи,\r\n  що ним виконуються, розміщені на Сайті www.kinokuznya.com.ua з метою інформування\r\n  Користувачів Сайту про Користувача.<br>\r\n  1.20. «Особистий кабінет» — персональний розділ Сайту, до якого Користувач отримує доступ\r\n  після проходження Авторизації на Сайті. Він містить інформацію про Користувача та дані щодо їх\r\n  зміни, новини та Інформація Сайту та/або інших Користувачів, отримання сповіщень, надання\r\n  Контенту Адміністрації Сайту, а також вчинення інших дій і отримання додаткової інформації у\r\n  відповідності до умов цього Договору.<br>\r\n  1.21. «Ліцензія» («Ліцензійний договір»)- цей Договір, в частині, що регулює порядок надання\r\n  невиключного права (дозволу), а також, невиключне право (дозвіл) Користувача (Авторизованого\r\n  Користувача) що надається Адміністрації Сайту на розміщення Контенту, Матеріалів та іншої\r\n  Інформації в тому числі, об’єктів права інтелектуальної власності (і похідних творів), що є\r\n  елементами такої Інформації, право володільцем якої є Користувач. Ліцензія надається\r\n  Користувачем в момент завантаження та/або іншої передачі Інформації Адміністрації Сайту\r\n  <br>\r\n\r\n  (зокрема, завантаження зображення та/або залишення коментарю). Ліцензія надається\r\n  Адміністрації Сайту на всесвітній основі (не обмежена територією будь-якої з країн) та на строк,\r\n  що дорівнює строку дії законодавчо встановленого строку захисту для конкретного об’єкту, на\r\n  використання якого надається дозвіл (Ліцензія). Способи використання Інформації, які\r\n  дозволяються за Ліцензією є опублікування, відтворення, публічна демонстрація, використання\r\n  процесу, передача, відчуження та інші, передбачені цим Договором, Цивільним кодексом України\r\n  та іншими законодавчими актами в сфері інтелектуальної власності та інші правомочності\r\n  (способи), необхідні для діяльності Сайту. Сторони погодили, що Ліцензія надається в оплату за\r\n  Послуги Сайту, яким користується Користувач, і не потребує інших додаткових оплат з боку\r\n  Адміністрації Сайту.<br>\r\n  1.22. «Веб-додаток» – встановлена на абонентському пристрої Користувача Сайту програма для\r\n  ЕОМ (включно з програмою для мобільних пристроїв), за допомогою якої продукти, Інформація,\r\n  Аккаунти, Контент www.kinokuznya.com.ua відображаються та / або представляються в іншій\r\n  специфічній визначеній формі до відома Користувача з використанням сервісу\r\n  www.kinokuznya.com.ua.<br>\r\n  1.23. «Акцепт» – повне і беззастережне прийняття Користувачем умов публічної оферти Виконавця,\r\n  одним з шляхів, передбачених в п.2.3. Договору.<br>\r\n  <br>\r\n  2. ПРЕДМЕТ І ПОРЯДОК УКЛАДАННЯ ДОГОВОРУ\r\n  <br>\r\n  2.1. Цей Договір є публічним договором, відповідно до якого Адміністрація Сайту бере на себе\r\n  зобов’язання по наданню доступу до Сайту, можливість його використання для Користувачів, в\r\n  порядку та на умовах визначених цим Договором, а Користувач повністю та беззаперечно\r\n  погоджується із умовами Договору і порядком використання Сайту та його функціональних\r\n  можливостей.<br>\r\n  2.2. Укладення цього Договору здійснюється шляхом приєднання Користувача до цього Договору,\r\n  тобто за допомогою прийняття (Акцепту) Користувачем умов цього Договору який містить всі\r\n  істотні умови договору, в цілому, без яких-небудь умов, вилучень і обмовок.<br>\r\n  2.3. Повним і беззастережним Акцептом дійсної публічної оферти відповідно до статті 642\r\n  Цивільного кодексу України є один з таких фактів:<br>\r\n   є використання відвідувачем Сайту чи хоча б однієї з функцій або сервісів (Послуг) Сайту\r\n  та/або;<br>\r\n   є Реєстрація Користувача на Сайті (таким чином Користувач набуває статусу\r\n  Авторизованого) та/або<br>\r\n   є проставляння Користувачем «галочки» (або іншої форми згоди), у відповідній графі при\r\n  Реєстрації або при використання інших сервісів Сайту, якщо такі вимагають надання\r\n  окремої згоди.<br>\r\n  2.4. При використанні будь-якої з функцій або сервісів Сайту, будь-який Користувач зобов’язується\r\n  підпорядковуватися правилам і обмеженням, викладеним в даному Договорі.<br>\r\n  2.5. Момент Акцепту дійсної публічної оферти, що визначений у п.2.3., вважається моментом\r\n  укладення Договору. Договір, укладений Користувачем за допомогою Акцепту публічної оферти,\r\n  має юридичну силу відповідно до статті 642 Цивільного кодексу України і є рівносильним\r\n  договору, підписаному сторонами.<br>\r\n  2.6. За умови надання Адміністрацією Сайту окремих оплатних Послуг (якщо надання таких\r\n  передбачено цим Договором) Користувач, який перерахував грошові кошти за оплатні Послуги\r\n  (якщо такі передбачені цим Договором) шляхом перерахування грошових коштів на\r\n  розрахунковий рахунок в т.ч. з використанням білінгового сервісу білінгового сервісу «системи\r\n  LiqPay, Paypal», «системи прийому платежів Robocassa, Premieraccount» вважається таким, який\r\n  ознайомився і згоден з умовами дійсної публічної оферти і прийняв її шляхом акцепту та в момент\r\n  передбачений п.2.5. Договору. При цьому Користувач розуміє та погоджується, що оплатні\r\n  Послуги надаються після повного зарахування на рахунок Адміністрації Сайту 100% оплати за\r\n  оплатну Послугу.<br>\r\n  2.7. Користувач розуміє та погоджується, що Сайт та/або Адміністрація Сайту не відповідає за\r\n  випадки передачі Користувачем свої персональних даних іншим сайтам, за допомогою яких на\r\n  <br>\r\n\r\n  Сайті здійснюються Реєстрація та/або оплати та/або інше (надалі – «Сайті-партнери»). Передача\r\n  Інформації таким Сайтам-партнерам не врегульовується цим Договором та/або не є\r\n  правовідносинами Сторін. При цьому, отримання переданої таким Сайтам-партнерам інформації\r\n  Сайтом Виконавця – є предметом правовідносин між Адміністрацією Сайту та уповноважених\r\n  осіб Сайтів Партнерів.<br>\r\n  2.8. Договір діє з моменту здійснення Користувачем Акцепту публічної оферти в порядку,\r\n  регламентованому пунктом 2.3 Договору, до моменту закінчення строку надання Послуг\r\n  Користувачу, якщо інше не визначено Договором.<br>\r\n  2.9. Адміністрація Сайту може внести поправки, доповнити або будь-яким іншим чином змінити\r\n  даний Договір без необхідності попереднього та/або наступного повідомлення Користувача.\r\n  Користувач надає свою згоду на внесення змін до Договору без отримання будь-якого\r\n  спеціального підтвердження з боку Користувача та вважається належним чином повідомлений\r\n  про умови зміни до Договору з моменту опублікування Договору в новій редакції (або відомостей\r\n  про зміни) на Сайті.<br>\r\n  <br><br>\r\n  3. УМОВИ ТА ПОРЯДОК ВИКОРИСТАННЯ САЙТУ\r\n  <br><br>\r\n  3.1. Виконавець надає Послуги Користувачу (крім оплатних Послуг, якщо такі передбачені цим\r\n  Договором) протягом строку дії цього Договору. Порядок надання і строки надання оплатних\r\n  Послуг, якщо такі передбачені Договором, погоджуються Сторонами окремо (або окремим\r\n  Додатком до цього Договору та/або окремою домовленістю/договором/угодою Сторін).<br>\r\n  3.2. Обов’язковою умовою надання Адміністрацією Сайту Послуг та можливості Користувача\r\n  здійснювати використання Сайту є беззаперечне прийняття і дотримання Користувачем вимог і\r\n  положень Договору. Таким чином, при порушенні однієї або декількох умов Договору\r\n  Користувачем Адміністрація Сайту, має право без необхідності жодних попереджень та/або\r\n  компенсацій та/або відшкодувань припинити або призупинити надання Послуг та/або доступ\r\n  Користувачу до Сайту (Бан) як тимчасово так і назавжди.<br>\r\n  3.3. Адміністрація Сайту не несе відповідальність за Інформацію / Контент / Матеріали чи інші дані,\r\n  які розмістив Користувач. При цьому:<br>\r\n   Користувач гарантує, що вся ця Інформація, розміщена на Сайті не порушує та не буде\r\n  порушувати нічиїх прав (в тому числі, особистих немайнових прав, авторських та/або\r\n  суміжних прав, а також, інших прав майнових і немайнових прав суб’єктів права\r\n  інтелектуальної власності) їх законних інтересів чи Мережевого етикету.<br>\r\n   У випадку отримання Адміністрацією Сайту вимоги осіб про видалення Інформації з Сайту,\r\n  внаслідок порушення їх прав – такі елементи Інформації можуть бути видалені\r\n  Адміністрацією Сайту без необхідності попереднього чи наступного повідомлення\r\n  Користувача який розмістив таку Інформацію на Сайті – до моменту доведення таким\r\n  Користувачем до відома Адміністрації Сайту, шляхом направлення заяви на електронну\r\n  адресу KinoKuznyasait@gmail.com, неправомірності вимог особи, яка заявляла про порушення\r\n  свої прав.<br>\r\n   При отриманні від осіб претензій/заяв про порушення їх прав та/або законних інтересів\r\n  внаслідок розміщення Контенту Користувачем, Адміністрація Сайту може перенаправити\r\n  претензію відповідному Користувачу, що розмістив Контент (а останній зобов’язаний\r\n  задовольнити законні вимоги такої претензії) та/або Адміністрація Сайту має право вимагати\r\n  відшкодування збитків (в тому числі упущеної вигоди), а також інших витрат понесених\r\n  Адміністрацією Сайту внаслідок пред’явлення таких претензій особами стосовно Контенту від\r\n  такого Користувача (а останній зобов’язаний задовольнити такі вимоги Адміністрації Сайту).<br>\r\n  3.4. Адміністрація Сайту може надавати Послуги та/або обслуговувати фізичних/юридичних осіб\r\n  через будь-якого агента та/або посередника, який має домовленості з Адміністрацією Сайту.\r\n  Користувач не має права вимагати особистого надання Послуг/обслуговування Адміністрацією\r\n  Сайту, якщо такі надаються залученими нею особами.<br>\r\n  3.5. Всі згоди/угоди/договори/контракти/правочини (далі – правочини Користувача), що укладаються\r\n  між Користувачами безпосередньо (та/або Користувачами або третіми особами) не можуть\r\n  зобов’язувати Адміністрацію Сайту. Адміністрація Сайту не є учасником правочинів\r\n  <br>\r\n\r\n  Користувача, а лише надає Користувачеві можливість вносити Користувачам у Базу даних Сайту\r\n  відомості (інформацію, дані) на Сайт та надає Послуги на Сайті, передбачені цим Договором.<br>\r\n  3.6. Адміністрація Сайту намагатиметься робити все можливе для забезпечення правильності та\r\n  актуальності інформації яка розміщена на Сайті. Адміністрація забезпечуватиме конфіденційність\r\n  тої інформації, що заявлена, як конфіденційна Користувачем. При цьому Користувач розуміє, що\r\n  розміщуючи Інформацію для загального відома на Аккаунті, він прямо підтверджує відсутність\r\n  необхідності Адміністрації Сайту забезпечувати конфіденційність такої Інформації на Сайті. Сайт\r\n  не є гарантом правильності, точності, детальності або повноти Інформації, розміщеної на Сайті\r\n  третіми особами та/або Користувачами.<br>\r\n  3.7. У зв’язку з тим, що Адміністрація Сайту використовує Сайт як лише «платформу для розміщення\r\n  Інформації» то Адміністрація Сайту знімає з себе відповідальність (не несе відповідальності):<br>\r\n   за будь-які порушення роботи Сайту;<br>\r\n   за будь-які помилки (в тому числі технічні) в роботі Сайту;<br>\r\n   за випадки незабезпечення безпеки чи конфіденційності відповідної Інформації, крім\r\n  випадків умисного розповсюдження Інформації, яку Користувач визнав конфіденційною\r\n  письмово повідомивши про це Адміністрацію Сайту;<br>\r\n   за неналежне та/або ненадання певної частини Послуги Сайту чи обмеження доступу на\r\n  Сайт, внаслідок неможливості його функціонування чи в інших випадках передбачених\r\n  Договором;<br>\r\n   за заподіяння шкоди, збитку, втрату Інформації чи за нанесення різної іншої шкоди особам,\r\n  які виникли при користуванні сервісом Сайту, у тому числі витрати на придбання об&#39;єктів\r\n  через Сайт, втрати прибутку, клієнтів або даних і будь-які інші матеріальні втрати, понесені\r\n  внаслідок відвідування Сайту або неможливості його відвідування, а також внаслідок\r\n  надмірної довіри до будь-якої інформації, прямо або побічно отриманої на Сайті від\r\n  Користувача (-ів);<br>\r\n   за порушення Користувачем авторських (а також, суміжних прав, а також, інших прав\r\n  майнових і немайнових прав суб’єктів права інтелектуальної власності) та/або інших прав\r\n  третіх осіб, шляхом опублікування матеріалів, невідповідних чинному законодавству (в\r\n  тому числі законодавству що регулює відносини у сфері інтелектуальної власності, як\r\n  законодавства України так і міжнародного), доданих/викладених/завантажених\r\n  Користувачем на Сайт, або розповсюджених Користувачем на Сайті.<br>\r\n  <br>\r\n  3.8. Адміністрація Сайту не несе відповідальності за розміщення інформації зловмисниками, а саме\r\n  розміщення відомостей (інформації, даних) зі свідомо неправдивою інформацією, мета якої -\r\n  ввести в оману Користувачів сайту і отримати матеріальну вигоду незаконним шляхом.<br>\r\n  <br>3.9. За запитом правоохоронних органів, а також, в інших випадках, передбачених законодавством\r\n  України, Адміністрація Сайту має право негайно і в короткі терміни надати всю та/або будь-яку\r\n  необхідну Інформацію (в рамках технічних можливостей). Прийняттям Акцепту Користувач\r\n  також надає Адміністрації Сайту згоду на розкриття відомостей, що є персональними даними\r\n  та/або становлять конфіденційну інформацію та/або комерційну таємницю, які пов’язані з\r\n  укладенням та виконанням цього Договору, на запити (вимоги) уповноважених державних\r\n  органів, в тому числі Антимонопольного комітету України та його територіальних відділень.\r\n  Надання такої інформації третім особам буде вважатися наданням інформації з письмового\r\n  дозволу її власника.\r\n  <br> 3.10. Інформація Користувача, яку він додає на Сайт, може відображатися на Сайті із затримкою від\r\n  декількох хвилин до декількох робочих днів. Адміністрація Сайту залишає за собою право не\r\n  відображати та/або видаляти інформацію Користувача, що порушує умови цього Договору та/або\r\n  права третіх осіб, без необхідності попереджувати/повідомляти про таке видалення Інформації.\r\n  <br> 3.11. Місце надання послуги - Україна (та/або місце розташування відповідного обладнання\r\n  необхідного для зберігання інформації). Будь-який спір, який виникає з або у зв&#39;язку з цього\r\n  Договору, в тому числі будь-яке питання щодо його дійсності або припинення, повинні бути\r\n  передані і остаточно вирішені судами України (а саме, судами, місце розташування яких\r\n  знаходиться в м. Києві, Україна) за правом України.\r\n  <br> 3.12. Виконавець має право здійснювати перевірку Інформації Матеріалів, Контенту на\r\n\r\n\r\n  відповідність вимогам діючого законодавства країни, на території якої вони розповсюджуються,\r\n  до початку надання Послуг, так в будь-який момент після початку їх розміщення.\r\n  <br> 3.13. Користувач самостійно несе відповідальність за дії, скоєні з використанням логіну і паролю, з\r\n  моменту реєстрації на Сайті Виконавця www.kinokuznya.com.ua.\r\n  <br>3.14. Будь-які дії, скоєні третіми особами/Користувачами з використанням логіну і паролю для\r\n  доступу в Особистий кабінет іншого Користувача, вважаються скоєними неправомірно, за\r\n  виключенням випадків, коли Користувач-власник такого Особистого кабінету, в порядку,\r\n  визначеному п. 3.15 Договору, повідомив Виконавця про несанкціонований доступ третіх осіб до\r\n  логіну і паролю Користувача, їх втрату Користувачем. Користувач самостійно несе\r\n  відповідальність за всі дії і їх наслідки в рамках та / або у зв’язку з виконанням Договору під його\r\n  ID, включно з випадками передачі Користувачем даних для доступу третім особам на будь-яких\r\n  умовах.\r\n  <br> 3.15. У випадку несанкціонованого доступу до логіну і паролю, їх втраті і розкриття третім особам,\r\n  Користувач зобов’язаний негайно повідомити про це Адміністрацію Сайту у письмовій формі з\r\n  одночасним надсиланням електронного листа з вказаного у своєму обліковому записі на Сайті\r\n  адреси електронної пошти, на таку адресу: KinoKuznyasait@gmail.com. З метою безпеки,\r\n  Користувач зобов’язаний самостійно здійснювати безпечне завершення роботи під своїм\r\n  обліковим записом після завершення кожної сесії роботи в Особистому кабінеті. Виконавець не\r\n  відповідає за можливу втрату або псування даних, а також інші наслідки будь-якого характеру,\r\n  котрі можуть трапитись через порушення Користувачем цього Договору.\r\n  <br> 3.16. Сторони також визнають, що Адміністрація Сайту декларує та зберігає за собою передбачені\r\n  законодавством про авторське право права та вигоди від власної Інформації,\r\n  оформлення/графіку/наповненню/банери/знаки чи вигляду Сайту чи Сайт як такового. Цей\r\n  Договір не стосується жодного переходу права власності на будь-яку Інформацію, що належить\r\n  Адміністрації Сайту чи пов’язані з нею Матеріали чи Сайт (його елементи). Кожна із Сторін\r\n  визнає, що за цим Договором Користувачу надається лише обмежене право використання такої\r\n  Інформації, і Користувач не заявляє жодних прав, вимог власності чи інтересів стосовно\r\n  Інформації Адміністрації Сайту, а у випадку порушення прав Адміністрації Сайту нестиме\r\n  відповідальність. Адміністрація Сайту, також НЕ надає дозвіл Користувачам для обробки її\r\n  персональних даних, за жодних умов, крім цілей необхідності правомірного і легального\r\n  використання Сайту.\r\n  <br> 3.17. Сторони визнають, що функціонування Сайту, частково або повністю, може бути припинено\r\n  Адміністрацією Сайту в будь-який момент без необхідності попередження/повідомлення\r\n  Користувачів та без необхідності обґрунтування причин. Адміністрація Сайту, при цьому,\r\n  протягом розумного видаляє всю Інформацію, Контент та Матеріали Користувачів.\r\n\r\n  <br><br> 4. ЛІЦЕНЗІЇ (ЛІЦЕНЗІЙНИЙ ДОГОВІР)\r\n  <br><br>\r\n  <br>4.1. Розміщуючи Інформацію (Матеріали, Контент, електронну (цифрову) інформацію, фотографії чи\r\n  відеозаписи чи інші об’єкти права інтелектуальної власності) Користувач надає Адміністрації\r\n  Сайту на всю Інформацію, Матеріали, Контент (або їх частини) на які поширюються права\r\n  інтелектуальної власності (твори, знаки для товарів і послуг, виконання, звуко-, відеозаписи,\r\n  аудіовізуальні твори, корисні моделі, промислові зразки, винаходи та будь-які інші об’єкти права\r\n  інтелектуальної власності, відповідно до законодавства України та будь-яких інших країн),\r\n  невиключну Ліцензію, якою передбачається передання майнових прав на об’єкти права\r\n  інтелектуальної власності, вільну від роялті (та будь-яких інших платежів належних авторам та\r\n  іншим суб’єктам права інтелектуальної власності), а також, Ліцензію на використання будь-яких\r\n  Інформації, Матеріалів, Контенту (або їх частини), на які поширюються права інтелектуальної\r\n  власності, що розміщуються ним на Сайті (надалі – «Ліцензія»).\r\n  <br>4.2. Ліцензія надається Користувачем в момент завантаження та/або іншої передачі Інформації\r\n  Адміністрації Сайту (зокрема, завантаження зображення та/або залишення коментарю). Ліцензія\r\n  надається Адміністрації Сайту на всесвітній основі (не обмежена територією будь-якої з країн) та\r\n  на строк, що дорівнює строку дії законодавчо встановленого строку захисту для конкретного\r\n  об’єкту, на використання якого надається дозвіл (Ліцензія).\r\n\r\n\r\n  <br>4.3. Способи використання Інформації, Матеріалів, Контенту (або їх частини), які дозволяються за\r\n  Ліцензією є право на відтворення, публічне виконання і публічне сповіщення, публічну\r\n  демонстрацію і публічний показ в тому числі в мережі Інтернет, переклади, адаптації,\r\n  аранжування та інші подібні зміни, включення як складових частин до збірників, антологій,\r\n  енциклопедій, розповсюдження, відчуження, подання до загального відома публіки, імпорт\r\n  примірників, використання процесу, передача, відчуження та інші, передбачені Цивільним\r\n  кодексом України та іншими законодавчими актами в сфері інтелектуальної власності\r\n  правомочності (способи), необхідні для діяльності Сайту. Сторони погодили, що Ліцензія\r\n  надається в оплату за Послуги Сайту з розміщення Контенту (шляхом зарахування зустрічних\r\n  однорідних вимог, в момент завантаження Інформації), яким користується Користувач, і не\r\n  потребує жодних інших додаткових оплат з боку Адміністрації Сайту.\r\n  <br>4.4. Користувач гарантує, що володіє всіма правами, повноваженнями і підставами, необхідними для\r\n  надання такої Ліцензії. Строк дії цієї Ліцензії на інтелектуальну власність може закінчуватися\r\n  тоді, коли Користувач видаляє опубліковані ним Інформацію, Матеріали, Контент (або їх\r\n  частини), на які поширюються права інтелектуальної власності, за винятком випадків, коли його\r\n  Інформація, Матеріали, Контент (або їх частини) передавалися іншим особам і не були ними\r\n  видалені.\r\n  <br>4.5. Дія Ліцензії розповсюджується на територію України та інших країн, в тому числі, але не\r\n  виключно, з яких можливим є доступ до Сайту. Сторони розуміють та підтверджують, що цей\r\n  Договір є також, Ліцензійним договором, і що Сторонами досягнуто згоди щодо всіх його\r\n  істотних умов.\r\n\r\n  <br><br>5. ПРАВА І ОБОВ’ЯЗКИ СТОРІН\r\n  <br><br>\r\n  <br>5.1. Виконавець зобов’язаний:\r\n  <br>  Забезпечити доступ Користувачів до Сайту www.kinokuznya.com.ua та Веб-додатку, за умови\r\n  безспірного виконання умов цього Договору.\r\n  <br> За письмовою Заявою про припинення порушення авторського права (суміжних прав)\r\n  поданою у повній відповідності зі ст. 52-1 Закону України «Про авторське право і суміжні\r\n  прав» від 23.12.1993 № 3792-XII (в чинній/діючій редакції) на електронну адресу:\r\n  KinoKuznyasait@gmail.com, а також, рекомендованим листом на адреси зазначені в реквізитах\r\n  Виконавця, належним чином реагувати на порушення прав Користувачів.\r\n  <br>5.2. Виконавець має право:\r\n  <br> Не приступати до надання Послуг/ припинити їх надання / відмовитись від виконання\r\n  Договору повністю або частково, або заборонити доступ до Сайту (Бан) у випадках\r\n  порушення Користувачем вимог, передбачених розділами 3, 4, 5, 6, 10, 11, 12 Договору, а\r\n  також у випадку відкликання Користувачем згоди на обробку його персональних даних.\r\n  <br> Відмовитися від виконання укладеного Договору повністю або частково у випадках,\r\n  передбачених Договором.\r\n  <br> Запитувати у Користувача і отримувати документи, проводити перевірки вказаних у них\r\n  відомостей у будь-яких випадках, якщо у Адміністрації Сайту є причини вважати, що\r\n  Користувач порушує умови цього Договору та/або порушуються права третіх осіб.\r\n  <br> З метою удосконалення Сайту видаляти, вводити, змінювати назви і розміщення рубрик без\r\n  необхідності попереднього чи наступного повідомлення Користувачів.\r\n  <br> Залучати третіх осіб для виконання зобов’язань за укладеним Договором, несучи\r\n  відповідальність за їх дії як за свої власні.\r\n  <br> Вимагати дотримання Користувачами правил Мережевого етикету, а у випадку порушення\r\n  Мережевого етикету (Спам, Флуд, Флейм, Офтопік тощо), забороняти Користувачу доступ до\r\n  Сайту як повністю так і до певних його функціональних можливостей, як на постійній основі,\r\n  так і тимчасово.\r\n  <br> інші права передбачені Договором.\r\n  <br>5.3. Користувач зобов’язаний:\r\n  <br> Надавати Адміністрації Сайту Інформацію, Матеріали, Контент (або їх частини) у\r\n  відповідності з вимогами цього Договору.\r\n\r\n\r\n  <br> За запитом Виконавця, надавати йому документи, якщо у Адміністрації Сайту є причини\r\n  вважати, що Користувач порушує умови цього Договору та/або порушуються права третіх\r\n  осіб.\r\n  <br> визначити особу Користувача, відповідальних за здійснення робочих контактів з\r\n  Адміністрацією Сайту, і надати їх дані Адміністрації Сайту. Сторони узгодили, що переписка\r\n  відповідальних осіб за допомогою факсимільного або електронного зв’язку має силу\r\n  документів, складених в простій письмовій формі.\r\n  <br> Повідомити Виконавця у письмовій формі протягом 3 (Трьох) днів з моменту анулювання\r\n  (відміни), призупинення чи завершення терміну дії прав на розміщені на Сайті Інформації,\r\n  Матеріалів, Контенту (або їх частини), задля недопущення порушення прав третіх осіб. У\r\n  випадку невиконання цього положення Користувач зобов’язаний відшкодувати витрати та всі\r\n  збитки Адміністрації Сайту, пов’язані з невиконанням/відсутністю прав у Користувача на такі\r\n  Інформацію, Матеріали, Контент (або їх частини).\r\n  <br>  Забезпечувати достовірність відомостей, що містяться в наданих Інформації, Матеріалах,\r\n  Контенту (або їх частини), і їх відповідність іншим вимогам законодавства і цього Договору.\r\n  <br> Забезпечувати достовірність і належність Користувачеві персональних даних, відомостей про\r\n  Користувача, контактної інформації Користувача та інших даних чи Інформації, що\r\n  розміщується на Сайті Користувачем. Користувач, у випадку зміни вище переліченої\r\n  Інформації невідкладно повідомляє/приводить її у відповідність з актуальними даними. Дії /\r\n  попередження / запити вчинені Адміністрацією Сайту з використанням наданої Користувачем\r\n  Інформації, вважаються вчиненими належним чином, і відповідно до умов цього Договору і\r\n  можуть створювати / змінювати / припиняти правовідносини Сторін.\r\n  <br> При використанні Сайту дотримуватися правил Мережевого етикету в обов’язковому порядку\r\n  і не допускати порушень Мережевого етикету.\r\n  <br> Не використовувати адресу ел.пошти Виконавця чи телефон чи інші реквізити для здійснення\r\n  спаму, рекламних розсилок, флуду чи іншого порушення приватності інформації про нього.\r\n  <br><br> 5.4.<br><br> Користувач має право:\r\n  <br> Користуватися Послугами і сервісом Сайту, відповідно до умов цього Договору.\r\n  <br>  Вносити зміни в розміщені Матеріали в рамках діючого Договору з використанням сервісів\r\n  Сайту.\r\n  <br>  Знайомитись з ходом надання Послуг/Додаткових послуг за укладеним Договором.\r\n  <br> Використовувати гіперпосилання на Сайт Виконавця www.kinokuznya.com.ua в соціальних\r\n  мережах Facebook, Instagram, YouTube, Twitter, Skype, тощо.\r\n  <br><br>6. ГАРАНТІЇ СТОРІН\r\n  <br><br>\r\n  <br>6.1. Виконавець гарантує усунення будь-яких збоїв і помилок, у випадку їх виникнення при\r\n  розміщенні Матеріалів на Сайті www.kinokuznya.com.ua, у можливі стислі терміни, з урахуванням\r\n  технічної можливості.\r\n  <br>6.2. За виключенням гарантій, прямо вказаних в цьому Договорі, Виконавець не надає жодних інших\r\n  прямих чи опосередкованих гарантій за Договором. Термін Гарантія (-ї), в цьому Договорі, не\r\n  повинно розумітися як передбачений Цивільним кодексом України засіб забезпечення виконання\r\n  зобов’язання – гарантія, що є банківською гарантією, а розуміється, як зобов’язання Сторони\r\n  дотримуватись визначених відповідних умов протягом строку дії Договору.\r\n  <br> 6.3. Користувач гарантує, що не існує будь-яких правових чи інших обмежень, що перешкоджають\r\n  укладанню Договору, у тому числі (але не обмежуючи цим) гарантує:\r\n  <br>  що надана Адміністрації Сайту Інформація (в тому числі персональні дані) є повною та\r\n  достовірною, відповідає дійсності;\r\n  <br> що Користувач є власником об’єктів інтелектуальної власності, що є частиною його/наданої\r\n  ним Інформації, Матеріалів, Контенту (або їх частини), та власником всіх прав на\r\n  розпорядження та їх використання (та/або мають всі необхідні повноваження), а також, має\r\n  право на укладання цього Договору, що не порушує будь-яких прав третіх осіб, а також, не\r\n  завдає шкоди будь-яким чином третім особам;\r\n\r\n\r\n  <br>  що права на використання, публікацію об’єктів інтелектуальної власності що містяться в\r\n  Інформації, Матеріалах, Контенту (або їх частини), передані Адміністрації Сайту за\r\n  Договором, не були передані раніше у власність, відчужені, відступлені чи передані в\r\n  користування на виключній основі третім особам, не перебувають у заставі чи арешті чи на\r\n  правовому титулі інших осіб, що унеможливлює легальне їх використання відповідно до\r\n  Ліцензії та Договору.\r\n  <br> що на момент укладання Договору треті особи не пред’являють будь-яких вимог або претензій\r\n  у відношенні прав об’єктів інтелектуальної власності, контенту, що є частиною Інформації,\r\n  Матеріалів чи Контенту Користувача.\r\n  <br> що використання Адміністрацією Сайту переданих йому прав (в тому числі, за Ліцензією) за\r\n  Договором не тягне зобов’язань Адміністрації Сайту по здійсненню Користувачу та/або третім\r\n  особам будь-яких платежів, в тому числі, платежів за використання об’єктів інтелектуальної\r\n  власності.\r\n  <br> що вся Інформація, Матеріали, Контент (або їх частини), що підлягають обов’язковій\r\n  сертифікації, ліцензуванню та / або іншому обов’язковому підтвердженню їх відповідності\r\n  вимогам технічних регламентів, сертифіковані або підтверджені у відповідності до умов\r\n  технічних регламентів у встановленому порядку, Користувач гарантує надання вищевказаних\r\n  дозвільних документів протягом 7 (семи) календарних днів з моменту відповідного запиту, а\r\n  при первинному розміщені – одночасно з наданням таких Інформації, Матеріалів, Контенту\r\n  (або їх частини).\r\n  <br> що Користувач отримав всі необхідні ліцензії і інші дозволи уповноважених державних\r\n  органів, або що Користувач не здійснює такого роду діяльність, що у відповідності з вимогами\r\n  законодавства країни, на території якої здійснюється розповсюдження Інформації, Матеріалів,\r\n  Контенту (або їх частини), потребує наявності спеціального дозволу/ліцензії/свідоцтва, а\r\n  також здійснив всі інші дії, що вимагаються законодавством країни, на території якої\r\n  здійснюється розповсюдження Інформації, Матеріалів, Контенту (або їх частини), для заняття\r\n  рекламованим видом діяльності та / або виробництвом, реалізацією рекламованих товарів\r\n  (робіт, послуг);\r\n  <br>  що надані ним Інформація, Матеріали, Контент (або їх частини) повністю відповідають\r\n  законодавству країни, на території якої здійснюється їх розповсюдження, у тому числі\r\n  використання Адміністрацією Сайту наданих Інформації, Матеріалів, Контенту (або їх\r\n  частини), в межах виконання зобов’язань за Договором не порушує вимог законодавства\r\n  України, але не обмежуючись, відповідність їх вимогам чинного законодавства України про\r\n  рекламу, про мови, про обмеження недобросовісної конкуренції, антимонопольне\r\n  законодавство, а також не обмежує майнові та / або особисті немайнові права третіх осіб, без\r\n  обмежень авторські і суміжні права, права на торгові марки (товарні знаки, знаки\r\n  обслуговування) і найменування місць походження товарів, права на промислові зразки, права\r\n  на використання зображень людей, живих і мертвих і т.д., Користувачем отримані необхідні\r\n  дозволи (укладені відповідні договори).\r\n  <br>  що під час розміщення контенту в Аккаунті, Користувач гарантує збереження логотипу на\r\n  зображеннях, використовувати плеєр YouTube для розміщення відео, зазначення в тексті –\r\n  клікабельний прямий URL на сторінку, матеріали якої використані.\r\n  <br> що Користувач гарантує передачу Адміністрації Сайту права на використання, зміну,\r\n  адаптацію знаків для товарів і послуг, фірмових найменувань, відео, фото та іншого Контенту\r\n  та об’єктів інтелектуальної власності, що є Інформацією, Матеріалами, Контентом (або їх\r\n  частиною) шляхом публікації на Сайті Виконавця www.kinokuznya.com.ua , в портфоліо, в\r\n  презентаційних матеріалах без згадки імені автора при кожному такому використанні та\r\n  надання доступу до останніх Користувачам Сайту www.kinokuznya.com.ua та відтворення\r\n  твору, тобто виготовлення одного і більше екземпляра твору або його частини в будь-якій\r\n  матеріальній формі; розповсюдження твору шляхом відчуження його оригіналу чи\r\n  екземплярів; публічний показ твору; публічне використанні твору; переробка твору;\r\n  доведення твору до загального відома без обмеження строку дії та на території всіх існуючих\r\n  на дату укладення Договору країн світу,а також інших прав за Ліцензією.\r\n\r\n\r\n  <br> що Інформація, Контент, Матеріали Користувача не містять вірусів, троянських коней,\r\n  програм-хробаків, програм з таймером дії, програм-імітаторів чи інших комп’ютерних\r\n  програм, що мають на меті пошкодити, перешкодити, підступно зупинити чи примусово\r\n  відчужити будь-яку систему, чи будь-які дані (чи особисту інформацію);\r\n  <br> що Користувач гарантує використання Сайту у повній відповідності умовам цього Договору.\r\n  <br>6.4. Користувачу дозволено розміщувати на Сайті, і Користувач гарантує, що розміщуватиме, лише ті\r\n  Інформацію та/або Контент та/або Матеріали, які:\r\n  <br> не порушують жодних прав інтелектуальної власності третіх осіб, інших майнових прав чи\r\n  прав на гласність чи приватність;\r\n  <br>  не порушують жодного закону, статуту, постанови чи нормативного акту;\r\n  <br> не є наклепом, торговельною дифамацією, не містять незаконних погроз чи переслідування;\r\n  <br> не є непристойними чи порнографічними та не містять дитячої порнографії;\r\n  <br> не заохочують до насильства та ненависті до особи чи групи осіб, чи жорстокості до тварин;\r\n  <br>  не заохочують до використання наркотиків;\r\n  <br> не містять сексуально відкритого контенту;\r\n  <br> не порушують жодних законів, що регулюють несправедливу конкуренцію,\r\n  антидискримінаційну чи неправдиву рекламу; та\r\n  <br> не містять вірусів, троянських коней, програм-хробаків, програм з таймером дії, програм-\r\n  імітаторів чи інших комп’ютерних програм, що мають на меті пошкодити, перешкодити,\r\n  підступно зупинити чи примусово відчужити будь-яку систему, чи будь-які дані (чи особисту\r\n  інформацію);\r\n  <br> відповідає всім інших вимогам, що висуваються Договором та мають бути гарантованими і\r\n  забезпеченими Користувачем.\r\n  <br>6.5. У випадку виникнення у Адміністрації Сайту обґрунтованої підозри, що Інформація Користувача\r\n  (його Контент чи Матеріали) не відповідають вимогам, встановленим для неї пунктами 3.3. 4.4.,\r\n  <br> 6.1., 6.4. та іншими умовами Договору (надалі також – «Неналежна інформація»), Адміністрація\r\n  Сайту має право, без необхідності отримання будь-якого спеціального підтвердження з боку\r\n  Користувача, та без компенсації збитків, витрат чи упущеної вигоди Користувачу, а також без\r\n  необхідності попереднього та/або наступного повідомлення Користувача чи пояснень, здійснити\r\n  одну, або декілька наступних дій:\r\n  <br>  видалити таку Неналежну інформацію Користувача (його Контент чи Матеріали);\r\n  <br>  обмежити доступ іншим Користувачам до Неналежної інформації Користувача (його\r\n  Контенту чи Матеріалів);\r\n  <br>  терміново чи безстроково обмежити доступ Користувача до Сайту (Бан), або припинити\r\n  надання такому Користувачу всіх або частини Послуг Сайту;\r\n  <br>  припинити дію Договору з Користувачем із наступним видаленням всієї Інформація\r\n  Користувача (його Контенту чи Матеріалів);\r\n  <br>  вимагати відшкодування збитків (в т. упущеної вигоди) та інших витрат, що виявилися\r\n  необхідними для припинення порушення, відновлення порушених прав і видалення\r\n  Неналежної Інформації протягом 7-ми календарних днів з дня отримання таким Користувачем\r\n  претензії;\r\n  <br>  застосовувати будь-які, як передбачені законодавством, так і не передбачені - заходи\r\n  забезпечення виконання зобов’язання, оперативні санкції, заходи забезпечення позову, тощо;\r\n  <br> вчиняти інші дії спрямовані на захист, попередження чи припинення порушення і відновлення\r\n  своїх прав та/або законних інтересів.\r\n\r\n  <br><br>7. ВІДПОВІДАЛЬНІСТЬ СТОРІН\r\n  <br><br>\r\n  <br>7.1. За невиконання чи неналежне виконання прийнятих за Договором зобов’язань Сторони несуть\r\n  відповідальність у відповідності з чинним законодавством України.\r\n  <br> 7.2. Відповідальність Виконавця за Договором у будь-якому випадку обмежується відшкодуванням\r\n  завданих Користувачу документально підтверджених збитків у сумі, що не перевищує 100, 00 грн.\r\n  (сто грн. 00 коп.).\r\n\r\n\r\n  <br><br>7.3. Користувач самостійно у повному об’ємі несе відповідальність за відповідність Інформації\r\n  Користувача (його Контенту чи Матеріалів) розміщених на Сайті - www.kinokuznya.com.ua, а\r\n  також за зміст Інформації, розміщеної на інформаційних ресурсах Користувача, на які веде\r\n  гіперпосилання з Сайту Виконавця, вимогам законодавства, у тому числі за їх зміст і\r\n  правомірність використання в них об’єктів інтелектуальної власності, за можливі порушення\r\n  законодавства в сфері авторських прав, в тому числі у відношенні знаків для товарів і послуг, і\r\n  інших норм законодавства України, пов’язаних з фактом розміщення Інформації Користувача\r\n  (його Контенту чи Матеріалів) на Сайті, наявності відповідних дозволів на виробництво і\r\n  реалізацію пропонованих чи рекламованих об’єктів, отримання сертифікатів на рекламовані\r\n  товари (роботи, послуги) або підтвердження їх відповідності технічним регламентам у\r\n  встановленому порядку, а також за здійснення інших дій в межах наданої у відповідності з цим\r\n  Договором гарантії.\r\n  <br> 7.4. У випадку якщо надання Послуг та/або функціонування Сайту за Договором спричинило\r\n  пред’явлення до Виконавця вимог, претензій, позовів та / або приписи про відшкодування збитків\r\n  (виплаті компенсації) зі сторони третіх осіб та / або державних органів чи або порушення справи\r\n  про адміністративне правопорушення, у тому числі вимог і/чи претензій у відношенні прав,\r\n  пов’язаних з використанням музичних чи аудіовізуальних чи інших творів в Контенті,\r\n  відповідальність і витрати, пов’язані з такими вимогами і/чи претензіями, у тому числі вимогами\r\n  і/чи претензіями з боку організацій, які здійснюють управління майновими правами авторів та\r\n  власників суміжних прав на відповідній території, несе Користувач за власний рахунок та\r\n  самостійно, без залучення Виконавця. Виконавець звільняється від відповідальності по таким\r\n  вимогам і/чи претензіям. Користувач зобов’язується негайно на вимогу Виконавця надати йому\r\n  всю запитану інформацію, що стосується предмету спору, і сприяти Адміністрації Сайту у\r\n  врегулюванні таких претензій, а також відшкодувати всі витрати (включаючи судові витрати,\r\n  витрати на правову допомогу і витрати по виплаті штрафів), що були понесені Адміністрацією\r\n  Сайту в наслідок пред’явлення, розгляду і виконання таких претензій, позовів, приписів, а так\r\n  само залученням до адміністративної відповідальності у зв’язку з порушенням прав третіх осіб і /\r\n  або чинного законодавства в результаті надання Послуг, протягом 10 (десяти) банківських днів з\r\n  дня виставлення Адміністрацією Сайту відповідної претензії.\r\n  <br>7.5. У випадку порушення Користувачем будь-якого з положень Договору та/або невиконання чи\r\n  неналежне виконання Користувачем будь-якого з обов’язків Користувача чи його гарантій,\r\n  передбачених пунктами 6.3., 6.4., 5.3 та іншими пунктами Договору, Користувач зобов’язується\r\n  негайно на вимогу Виконавця, припинити порушення Договору, привести у попередній стан\r\n  правовідносини Сторін, а також відшкодувати всі збитки (в тому числі упущену вигоду) та всі\r\n  витрати (включаючи судові витрати та витрати на правову допомогу, витрати понесені з\r\n  необхідністю приведення Сайту (його частини) до нормального стану), що сталися в наслідок\r\n  невиконання та/або недотримання та/або порушення Користувачем умов Договору протягом 10\r\n  (десяти) банківських днів з дня виставлення Адміністрацією Сайту відповідної претензії. При\r\n  цьому, Адміністрація Сайту, додатково має право вимагати виплати неустойки у розмірі 1000,00\r\n  грн. за кожен факт порушення умов Договору Користувачем.\r\n  <br>7.6. Передбачені п.7.4. та 7.5.заходи забезпечення виконання зобов’язання є не виключними та можуть\r\n  застосовуватися разом з іншими способами захисту своїх прав чи інтересів (оперативно-\r\n  господарські санкції) додатково, зокрема але не виключно разом з переліченими в п.6.5. Договору.\r\n  При цьому Користувач при захисті не висуватиме претензій щодо адекватності способу захисту\r\n  права Адміністрації Сайту. Будь-яка судова заборона буде доповненням, а не заміщенням права\r\n  Адміністрації Сайту на відповідне відшкодування збитків та, при необхідності, порушення\r\n  судової справи.\r\n  <br> 7.7. Відшкодування Користувачем збитків, витрат не звільняє його від належного виконання своїх\r\n  зобов’язань, передбачених цим Договором.\r\n  <br>  7.8. Ані існування спору, протиріччя чи претензії, ані факт очікування арбітражу чи суду не\r\n  звільняють жодну з Сторін від виконання зобов’язань за цим Договором.\r\n\r\n\r\n  <br><br>\r\n  8. ФОРС-МАЖОР\r\n  <br><br>\r\n  <br>8.1. Сторони звільняються від відповідальності за часткове або повне невиконання зобов’язань за\r\n  договором, якщо це невиконання стало наслідком обставин непереборної сили, що виникли після\r\n  укладення Договору в результаті подій надзвичайного характеру, які сторони не могли ні\r\n  передбачити, ні запобігти розумними заходами. До таких подій надзвичайного характеру\r\n  відносяться: повінь, пожежа, землетрус, вибух, осідання ґрунту, епідемії й інші явища природи, а\r\n  також війна або військові дії, страйк в галузі або регіоні, рішення органів державної\r\n  влади/місцевого самоврядування чи технічні збої, що спричинили неможливість виконання цього\r\n  Договору.\r\n  <br>8.2. При виникненні і припинення форс-мажору Сторона за Договором, для якої створились обставини\r\n  неможливості виконання її зобов’язань, повинна протягом 20 (двадцяти) календарних днів\r\n  письмово повідомити про це іншу Сторону і підтвердити наявність таких обставин довідкою,\r\n  виданою Торгово-промисловою палатою або іншим компетентним органом чи особою. Належним\r\n  підтвердженням і повідомленням про форс-мажор, що унеможливлюють виконання\r\n  Адміністрацією Сайту своїх зобов’язань є повідомлення на Сайті і з необхідним підтвердженням\r\n  довідкою, виданою уповноваженим органом, у загальнодоступній формі.\r\n  <br> 8.3. При відсутності своєчасного повідомлення Сторона, для якої зазначеними обставинами створена\r\n  неможливість виконання зобов’язань, не має права посилатися на зазначені обставини як підставу\r\n  для звільнення від відповідальності.\r\n  <br> 8.4. У разі виникнення обставин непереборної сили термін виконання зобов’язань за Договором\r\n  відсувається відповідно до часу, протягом якого діють такі обставини і їх наслідки.\r\n  <br>8.5. Якщо обставини, передбачені цією статтею, триватимуть понад 3 (три) місяці, Сторони повинні\r\n  домовитися щодо подальшої долі Договору.\r\n\r\n  <br><br> 9. ТЕРМІН ДІЇ, ЗМІНА І ПРИПИНЕННЯ ДОГОВОРУ\r\n  <br><br>\r\n  <br>9.1. Договір вступає в силу з моменту акцепту Користувачем дійсної публічної оферти і діють до\r\n  моменту його припинення та/або повного і остаточного припинення діяльності Сайту.\r\n  <br> 9.2. Виконавець має право змінювати умови цього Договору, вводити нові умови чи додатки до цього\r\n  Договору без попереднього повідомлення Користувача. Користувач, знаючи про можливість\r\n  таких змін, згоден з тим, що вони робитимуться. Продовжуючи користуватися Сайтом та/або\r\n  Акцептуючи знову цей Договір після таких змін, Користувач, таким чином, погоджується з ними.\r\n  <br> 9.3. Текст змін і/або доповнень цього Договору, або його нова редакція доводиться Адміністрацією\r\n  Сайту до загального відома за допомогою розміщення відповідної інформації на Сайті Виконавця\r\n  www.kinokuznya.com.ua.\r\n  <br>9.4. Сторони беззастережно погоджуються з тим, що мовчання (відсутність письмових повідомлень\r\n  про незгоду з окремими положеннями цього Договору, протягом 3 (трьох) календарних діб з\r\n  моменту публікації нової редакції Договору) визнається згодою і приєднанням Користувача до\r\n  нової редакції цього Договору.\r\n  <br> 9.5. Цей Договір може бути припинений за угодою сторін. Кожна із сторін має право відмовитися від\r\n  цього Договору в односторонньому порядку, направивши іншій стороні повідомлення по\r\n  електронній пошті не пізніше ніж за 30 (тридцять) днів до планованої дати припинення.\r\n  <br>  При цьому Користувач визнає і погоджується, що у випадку припинення Договору,\r\n  Виконавець може видалити частину або весь Контент, Інформацію, Матеріали завантажені\r\n  Користувачем, а також, блокує його доступ до Особистого кабінету Користувача та/або\r\n  Аккаунту та/або або до Сайту і його Послуг загалом – на розсуд Виконавця.\r\n  <br>  У випадку технічної неможливості чи недоцільності видалення певної Інформації стосовно\r\n  Користувача, Сторони погодили, що стосовно такої Інформації, зокрема, але не виключно – в\r\n  частині дії і строку Ліцензії на таку Інформацію, а також, в частині персональних даних, цей\r\n  Договір продовжує діяти до повного виконання Сторонами своїх зобов’язань, якщо інші\r\n  строки не передбачені самим Договором.\r\n  <br>   У випадку, якщо Адміністрація Сайту залишає за Користувачем, дію Договору з яким\r\n  припинено, його право користуватися Сайтом, без права Авторизації на Сайті, дія Договору\r\n\r\n  <br>\r\n  для такого Користувача продовжується в частині, що регулює права та обов’язки\r\n  неавторизованих Користувачів.\r\n  <br>  У випадку якщо Адміністрація Сайту залишає за Користувачем, дію Договору з яким\r\n  припинено, його право користуватися Сайтом та його Послугами, такий Користувач, в момент\r\n  його першого, після припинення дії Договору, використання Сайту знову вважається таким,\r\n  що прийняв Акцепт і уклав Договір заново.\r\n  <br> 9.6. Істотною умовою цього Договору є право Виконавця за письмовим поданням уповноваженого\r\n  контролюючого (наглядового) органу у випадку порушення Користувачем законодавства про\r\n  захист прав споживачів і (чи) про торгівлю, інших правил продажу товарів відмовитися від цього\r\n  Договору. У такому разі Користувач відшкодовує Адміністрації Сайту реальний збиток і упущену\r\n  вигоду, а Договір вважатиметься розірваним з моменту отримання Користувачем повідомлення.\r\n  <br> 9.7. Припинення дії Договору не звільняє Користувача від відповідальності за його порушення.\r\n  <br> 9.8. Договір може бути розірваний і з інших підстав, передбачених чинним законодавством України\r\n  <br> 9.9. У разі порушення Користувачем відповідних умов Договору, повідомлення Адміністрацією Сайту\r\n  Користувача про часткову відмову Адміністрації Сайту від виконання Договору не вимагається.\r\n  <br> 9.10. Жодне з положень цього Договору не тлумачить жодну с Сторін як агента, представника,\r\n  партнера чи працівника іншої Сторони, а жодна з Сторін при виконанні цього Договору чи будь-\r\n  яких пов’язаних з ним дій не може представляти себе в якості агента, представника, партнера чи\r\n  працівника іншої Сторони.\r\n  <br> 9.11. Укладення цього Договору означає, що Користувач підтверджує свою згоду на передачу\r\n  Адміністрацією Сайту його конфіденційної інформації будь-яким третім особам у випадку\r\n  необхідності стягнення з Користувача заборгованості, договірної неустойки, законних відсотків,\r\n  збитків, процентів за користування чужими грошовими коштами та інших грошових коштів\r\n  незалежно від типу укладеного з такими третіми особами договору; а також будь-яким третім\r\n  особам, залучення яких необхідно для виконання зобов’язань за Договором.\r\n  <br> 9.12. Зобов’язання Сторін за Договором, які в силу своєї природи повинні продовжувати діяти\r\n  (включаючи зобов’язання по наданню гарантій, конфіденційності, проведення взаєморозрахунків,\r\n  але, не обмежуючись зазначеним), залишаються в силі після закінчення терміну дії Договору до їх\r\n  повного виконання.\r\n\r\n  <br><br>10. ОПЛАТНІ ПОСЛУГИ\r\n  <br><br>\r\n  <br>10.1. Надання оплатних Послуг Сайту, поки що не передбачено цим Договором. У випадку\r\n  виникнення такої необхідності та запровадження оплатних Послуг через Сайт, Адміністрація\r\n  Сайту, внесе дані в цей розділ про порядок їх надання Сайтом.\r\n  <br><br>11. ПРИКІНЦЕВІ ПОЛОЖЕННЯ\r\n  <br><br>\r\n  <br> 11.1. Договір, його укладання та виконання регулюється чинним законодавством України. Всі\r\n  питання, не врегульовані Договором або врегульовані не повністю, регулюються відповідно до\r\n  матеріального права України.\r\n  <br> 11.2. Спори за цим Договором підлягають розгляду у суді (-ах), юрисдикція яких розповсюджується\r\n  на м Київ.\r\n  <br>11.3. Всі повідомлення та інші документи за Договором, повинні направлятись на адреси, вказані\r\n  при Авторизації Користувача. Відомості та інші документи в письмовій формі, коли потрібна їх\r\n  доставка, надсилаються рекомендованим поштовим відправленням або кур’єрською службою,\r\n  інших повідомлення можуть направлятися факсом або електронною поштою з / на зазначених (-і)\r\n  у відповідній Заявці Користувача номерів (-и) / адрес ( и) електронної пошти. Повідомлення для\r\n  Адміністрації Сайту, завжди додатково направляються на контактну електронну адресу:\r\n  KinoKuznyasait@gmail.com.\r\n  <br>11.4. Користувач погоджується отримувати на електронну адресу, вказану у Заявці Користувача\r\n  або в ході виконання Договору, інформаційні електронні повідомлення (далі – “Повідомлення”) на\r\n  нижченаведених умовах.\r\n  <br>  Виконавець зобов’язується використовувати Повідомлення виключно для інформування\r\n  Користувача про хід виконання укладеного Договору, його зміну або дострокове припинення,\r\n  повідомляти Користувача про нові можливості, акції та інші новини Сайту та іншу\r\n  інформацію стосовно його діяльності на www.kinokuznya.com.ua.\r\n\r\n  <br>\r\n  <br> Виконавець зобов’язується не супроводжувати Повідомлення рекламними повідомленнями\r\n  від третіх осіб, крім офіційних партнерів Сайту.\r\n  <br> 11.5. Документи, отримані за допомогою факсимільного, електронного зв’язку, мають юридичну\r\n  силу до моменту отримання оригіналу. При цьому Сторони зобов’язуються вислати оригінали\r\n  відповідних документів протягом 10 (десяти) календарних днів з моменту отримання письмової\r\n  вимоги іншої Сторони про їх власноручне підписання та оформлення.\r\n  <br> 11.6. Якщо будь-яке із положень цього Договору буде визнано недійсним, то законність / дійсність\r\n  решти його положень від цього не втрачаються.\r\n\r\n  <br><br> 12. УГОДА ПРО ПОЛІТИКУ КОНФІДЕНЦІЙНОСТІ<br><br>\r\n\r\n  Предмет угоди:\r\n  <br>12.1. Угода про політику конфіденційності є розділом Договору про умови використання Сайту та\r\n  невід’ємною його частиною.\r\n  <br>12.2. Конфіденційною в розумінні цього Договору є тільки Інформація, яка зберігається в Базі\r\n  даних Сайту в зашифрованому стані і доступна тільки Адміністрації Сайту.\r\n  <br> 12.3. Користувач визнає, що, у разі його недбалого ставлення до безпеки і захисту його\r\n  персональних даних і Інформації зазначених при Авторизації, треті особи можуть дістати\r\n  несанкціонований доступ до Особистого кабінету та персональним, або іншим даними\r\n  Користувача. Адміністрація Сайту не несе відповідальності за збитки, завдані таким доступом.\r\n  <br>12.4. Достатнім повідомленням Користувача про включення його персональних даних до Бази\r\n  даних Сайту - буде підтвердження Реєстрації Користувача, або факт використання Користувачем\r\n  Сайту.\r\n  <br>12.5. Для того, щоб розмістити на Сайті відомості (інформацію, дані), використовувати Сайт,\r\n  Користувач повинен уважно ознайомитися з Договором і висловити свою повну згоду з його\r\n  умовами шляхом Акцепту.\r\n  <br>12.6. Користувач не має права розміщувати Інформацію та/або використовувати Сайт,\r\n  користуватися Послугами Сайту, використовувати сервіс третіх осіб (в тому числі сайти\r\n  партнерів), розміщені на Сайті, якщо він не згоден з умовами даного Договору, або, якщо він не\r\n  досяг встановленого законом віку, з якого він має право укладати правочини такого типу, або не є\r\n  уповноваженою особою компанії, від імені якої розміщуються відомості (інформація, дані).\r\n  <br>12.7. У разі відсутності реєстрації Користувача, він, розміщуючи відомості (інформацію, дані) на\r\n  Сайті, використовуючи Сайт, використовуючи сервіси третіх осіб розміщених на Сайті, вносячи\r\n  персональні дані або, надаючи ці дані іншим шляхом, та/або, здійснюючи будь-які дії в рамках\r\n  Сайту, та/або, використовуючи будь-яку частину Сайту, дає свою однозначну згоду з умовами\r\n  даної Договору і надає Адміністрації Сайту право одержувати, зберігати, обробляти,\r\n  використовувати та розкривати персональні дані Користувача на умовах цього Договору.\r\n  <br>12.8. Даний Договір не регулює і Адміністрація Сайту не несе відповідальності за отримання,\r\n  зберігання, обробку, використання і розкриття персональних даних Користувача і будь-який\r\n  інший Інформації третім особам, що не перебувають у власності або під управлінням\r\n  Адміністрації Сайту, навіть якщо Користувач отримав доступ до Сайту, об’єктам що\r\n  рекламуються/реалізуються іншими Користувачами, або послуг третіх осіб за допомогою Сайту,\r\n  Адміністрації Сайту або розсилки.\r\n  Порядок отримання персональних даних та Інформації:\r\n  <br>12.9. Користувач, використовуючи Послуги Сайту та/або приймаючи цей Договір погоджується\r\n  (надає письмовий дозвіл), на те що Адміністрація Сайту самостійно або через своїх агентів (сайти-\r\n  партнери) може збирати особисту інформацію, а саме: ім&#39;я, по батькові, прізвище, паспортні дані,\r\n  ідентифікаційний код, контактні телефони, адресу електронної пошти, область і населений пункт\r\n  проживання Користувача, пароль для ідентифікації, а також дані, які використовуються для\r\n  заповнення форм сервісів третіх осіб, які розміщуються на Сайті. Також Адміністрація Сайту\r\n  може збирати іншу інформацію:\r\n  <br> Cookies для того, щоб надати залежні від цього сервіси;\r\n  <br> IP-адресу користувача.\r\n\r\n\r\n  <br><br>12.10. Користувач погоджується, що використовуючи Аккаунти на сайтах-партнерах (зокрема, але не\r\n  виключно Facebook, Instagram, YouTube, Twitter, Skype, тощо) для отримання Послуг чи сервісу\r\n  Сайту, він надає повне право Адміністрації Сайту використовувати, отримувати та обробляти\r\n  Інформацію і персональні дані Користувача, отримані Сайтами-партнерами і передані\r\n  Адміністрації Сайту для внесенні їх у Базу даних Сайту, в порядку передбаченому цим Договором\r\n  та угодами з сайтами-партнерами.\r\n  <br><br>12.11. Всі персональні дані збираються Адміністрацією Сайту, як є, і не змінюються в процесі збору\r\n  даних. Користувач несе відповідальність за надання достовірної Інформації, в тому числі,\r\n  Інформації про персональні дані. Адміністрація Сайту має право, у разі необхідності, перевірити\r\n  правильність наданої Інформації, а також, запросити підтвердження наданої Інформації, якщо це\r\n  необхідно для надання послуг Користувачеві.\r\n  Порядок використання персональних даних та Інформації:\r\n  <br><br>12.12. Адміністрація Сайту може використовувати ім&#39;я, область і населений пункт, де Користувач\r\n  проживає, адресу електронної пошти, телефон, пароль для ідентифікації Користувача, може\r\n  використовувати контактну інформацію, щоб обробляти розсилку, а саме повідомляти\r\n  Користувача про нові можливості, акції та інші новини Сайту та іншої маркетингової діяльності.\r\n  <br>12.13. Користувач завжди може відмовитися від проведення рекламної розсилки на його адресу\r\n  контактної інформації, шляхом направлення з адреси електронної пошти, на яку він НЕ бажає\r\n  отримувати розсилку відповідне письмове повідомлення на контактну електронну адресу\r\n  Виконавця: KinoKuznyasait@gmail.com. Користувач не може заборонити Адміністрації Сайту\r\n  надсилати повідомлення що стосуються випадків невиконання Користувачем Договору та/або\r\n  випадків необхідності повідомлення Користувача про порядок/умови користування Сайтом.\r\n  Відмова від розсилки може стосуватися лише рекламних повідомлень.\r\n  <br><br>12.14. Обробка та передача та інші дії щодо персональних даних та Інформації може здійснюється з\r\n  метою реалізації цивільно-правових відносин, податкових та відносин у сфері бухгалтерського\r\n  обліку, виконання договірних зобов&#39;язань з надання Послуг, надання можливості доступу до\r\n  сервісу Сайту, для ідентифікації клієнта як Користувача Сайту, з метою надання, пропозиції\r\n  Послуг, обробки поштових адрес, створення і реалізації бонусних програм, відправки\r\n  комерційних пропозицій та інформації поштою, електронною поштою, пропозиції нових Послуг,\r\n  передачі будь-якої інформації, відмінної від предмета Договору, проведення розрахункових\r\n  операцій (якщо оплатні послуги передбачені Договором), подання звітності, ведення\r\n  бухгалтерського та управлінського обліку, поліпшення якості надання Послуг, надання сервісів\r\n  Сайту, розміщення відомостей (інформації, даних) клієнта на Сайті володільця Бази персональних\r\n  даних, спрощення роботи з Сайтом і поліпшення його матеріалів.\r\n  Умови надання доступу до бази даних:\r\n  <br> 12.15. Користувачі, згідно даного Договору, надали право Адміністрації Сайту розкривати, без\r\n  обмеження терміну дії і території, персональні дані, а також іншу інформацію Користувачів\r\n  третім сторонам, які надають послуги Адміністрації Сайту, зокрема, але не виключно, обробляють\r\n  заявки, або є сайтами-партнерами, через яких Користувачі, що мають там Аккаунти можуть\r\n  використовувати Послуги Сайту.\r\n  <br>12.16. Також, розкриття персональних даних, Інформації без згоди Користувача або уповноваженої\r\n  ним особи, допускається у випадках, визначених законом, або у випадках, якщо розкриття\r\n  відбувається в інтересах національної безпеки, економічного добробуту та для захисту прав\r\n  людини, зокрема але не виключно:\r\n  <br> за обґрунтованими запитами державних органів/органів місцевого самоврядування, які мають\r\n  право вимагати і одержувати такі дані та інформацію;\r\n  <br> в тому, випадку якщо, на думку Адміністрації Сайту, Користувач порушує умови даного\r\n  Договору та / або інших договорів і угод між Адміністрацією Сайту та Користувачем.\r\n  Як змінити / видалити цю інформацію або відмовитися від підписки.\r\n  <br>12.17. Користувачі в будь-який момент часу можуть змінити / видалити особисту інформацію\r\n\r\n  <br>\r\n  (телефон) або відмовитися від розсилки. Робота деяких можливостей Сайту, для яких необхідна\r\n  наявність Інформації про Користувача, може бути припинена з моменту зміни / видалення\r\n  Інформації (включаючи оплатні послуги, якщо надання таких передбачено Договором), без\r\n  необхідності повідомлення про це Користувача.\r\n  <br>12.18. Персональні дані Користувача зберігаються до моменту їх видалення Користувачем та/або\r\n  Адміністрацією Сайту.\r\n  Захист інформації.\r\n  <br> 12.19. Адміністрація Сайту вживає всіх необхідних заходів для захисту даних від несанкціонованого\r\n  доступу, зміни, розкриття чи знищення. До цих заходів належать, зокрема, внутрішня перевірка\r\n  процесів збору, зберігання і обробки даних і міри безпеки, всі дані, які Адміністрація Сайту\r\n  збирає, зберігаються на одному або декількох захищених серверах Баз даних.\r\n  <br>12.20. Адміністрація Сайту надає доступ до персональних даних та Інформації тільки тим\r\n  співробітникам, підрядникам та агентам Адміністрації Сайту, яким необхідно мати цю\r\n  Інформацію для здійснення операцій, які виконуються від імені Адміністрації Сайту, або є\r\n  необхідними для функціонування Сайту.\r\n  Зміни в політиці конфіденційності.\r\n  <br>12.21. Адміністрація Сайту може змінити умови політики конфіденційності. У такому випадку, буде\r\n  замінена версія на сторінці де викладено Договір, тому необхідно періодично переглядати\r\n  сторінку.\r\n  <br>12.22. Всі зміни набувають чинності з моменту їх публікації. Використовуючи Сайт, Користувач\r\n  підтверджує згоду з новими умовами політики конфіденційності у редакції, чинній на момент\r\n  використання Користувачем Сайту.\r\n  Додаткові умови.\r\n  <br>12.23. Адміністрація Сайту не несе відповідальності за шкоду або збитки, які поніс Користувач або\r\n  треті особи в результаті помилкового розуміння або нерозуміння умов даної угоди (розділу\r\n  Договору), інструкцій про порядок використання Сайту, Договору, щодо порядку розміщення\r\n  даних/Інформації та інших технічних питань.\r\n  <br>12.24. Дана угода про політику конфіденційності, як і Договір, поширюється на Користувача з\r\n  моменту використання ним Сайту, в тому числі, розміщення відомостей (Інформації,\r\n  персональних даних), і діє до тих пір, поки на Сайті зберігається будь-яка інформація про\r\n  Користувача, в тому числі, персональні дані.\r\n\r\n  <br>13. ПЕРСОНАЛЬНІ ДАНІ КОРИСТУВАЧА\r\n\r\n  <br> 13.1. Укладаючи цей Договір, Користувач вільно, своєю волею і в своїх інтересах дає письмову\r\n  згоду (дозвіл) на обробку будь-яких зазначених в ньому або наданих окремо персональних даних,\r\n  включаючи будь-яку дію (операцію) або сукупність дій (операцій), що здійснюються з\r\n  використанням засобів автоматизації або без використання таких засобів з персональними\r\n  даними, в тому числі збір, запис, систематизацію, накопичення, зберігання, уточнення (оновлення,\r\n  зміна), вилучення, використання, передачу (поширення, надання, доступ), знеособлення,\r\n  блокування, видалення, знищення персональних даних з метою виконання цього Договору.\r\n  <br> 13.2. Згода (дозвіл) Користувача включає в себе, в тому числі, згоду на те, що в разі невиконання\r\n  або неналежного виконання зобов’язань Користувачем, Виконавець має право передати\r\n  персональні дані будь-яким третім особам для стягнення з Користувача заборгованості, договірної\r\n  неустойки, законних відсотків, збитків, процентів за користування чужими грошовими коштами і\r\n  інших грошових коштів незалежно від типу укладеного з такими третіми особами договору.\r\n  <br>13.3. Адміністрація Сайту повідомляє, що надані Користувачами відомості включені до Бази даних\r\n  Сайту www.kinokuznya.com.ua, що призначена для забезпечення функціонування Сайту,\r\n  володільцем якої є Адміністрація Сайту, яка знаходиться за адресою зазначеною в реквізитах\r\n  Виконавця до Договору. Джерелами збирання персональних даних є відомості надані\r\n  Користувачами або Сайти-партнери, за допомогою яких може здійснюватися використання\r\n  певних сервісів Сайту.\r\n  <br>\r\n  <br>\r\n  <br> 13.4. Відповідно до ч.2 ст. 8 Закону України «Про захист персональних даних» суб’єкт\r\n  персональних даних має право:\r\n  <br>  знати про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки,\r\n  місцезнаходження або місце проживання (перебування) володільця чи розпорядника\r\n  персональних даних або дати відповідне доручення щодо отримання цієї інформації\r\n  уповноваженим ним особам, крім випадків, встановлених законом;\r\n  <br>  отримувати інформацію про умови надання доступу до персональних даних, зокрема\r\n  інформацію про третіх осіб, яким передаються його персональні дані;\r\n  <br> на доступ до своїх персональних даних;\r\n  <br>  отримувати не пізніш як за тридцять календарних днів з дня надходження запиту, крім\r\n  випадків, передбачених законом, відповідь про те, чи обробляються його персональні дані, а\r\n  також отримувати зміст таких персональних даних;\r\n  <br>  пред’являти вмотивовану вимогу володільцю персональних даних із запереченням проти\r\n  обробки своїх персональних даних;\r\n  <br>  пред&#39;являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних будь-\r\n  яким володільцем та розпорядником персональних даних, якщо ці дані обробляються\r\n  незаконно чи є недостовірними;\r\n  <br>  на захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення,\r\n  пошкодження у зв&#39;язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням,\r\n  а також на захист від надання відомостей, що є недостовірними чи ганьблять честь, гідність та\r\n  ділову репутацію фізичної особи;\r\n  <br>   звертатися із скаргами на обробку своїх персональних даних до законом встановлених органів\r\n  влади;\r\n  <br> застосовувати засоби правового захисту в разі порушення законодавства про захист\r\n  персональних даних;\r\n  <br> вносити застереження стосовно обмеження права на обробку своїх персональних даних під\r\n  час надання згоди;\r\n  <br> відкликати згоду на обробку персональних даних;\r\n  <br>  знати механізм автоматичної обробки персональних даних;\r\n  <br>  на захист від автоматизованого рішення, яке має для нього правові наслідки.\r\n  <br> 13.5. Здійсненням Користувачем акцепту публічної оферти, останній, також, надає згоду (дозвіл)\r\n  відповідно до Закону України «Про захист персональних даних» на обробку своїх особистих\r\n  персональних даних у картотеках та/або за допомогою інформаційно-телекомунікаційної системи\r\n  Бази персональних даних з метою виконання положень цього Договору.\r\n  <br>13.6. Користувач погоджується, що його персональні дані, до яких відносяться Прізвище, ім’я і по-\r\n  батькові, вік, контактна адреса, сімейний стан, телефон, контактна адреса електронної пошти та\r\n  інші відомості про його життя і професійну діяльність, у випадку зазначення їх при Реєстрації чи\r\n  наповненні Аккаунту, можуть бути доступними будь-яким іншим Користувачам Сайту чи\r\n  Роботам, чи третім особам. Сайт та Адміністрація Сайту не несе відповідальності за факт\r\n  використання таких персональних даних, розміщених Користувачами і доступних на Сайті,\r\n  третіми особами, які отримали до них доступ, в тому числі завдяки Сайту. Таким чином, при\r\n  використанні Послуг і сервісів Сайту, при наповненні Аккауту чи Реєстрації, Користувач\r\n  самостійно має забезпечувати безпеку своїх персональних даних.\r\n  <br>13.7. Користувач підтверджує, що цілком і повністю ознайомлений і згоден з його умовами, а\r\n  також, у випадку, якщо Користувач є фізичною особою, дає дозвіл на обробку Адміністрації\r\n  Сайту своїх персональних даних з метою можливості виконання умов цього Договору,\r\n  можливості проведення взаєморозрахунків, інших документів. та/або надання Послуг\r\n  Адміністрацією Сайту в повній мірі.\r\n  <br> 13.8. Дозвіл (Згода) на обробку персональних даних діє протягом усього терміну дії Договору, а\r\n  також протягом наступних 3 (трьох) років після закінчення його дії. Дострокове знищення\r\n  персональних даних є підставою для розірвання договору і виконується на підставі письмової\r\n\r\n  <br>\r\n  заяви Користувача на електронну адресу KinoKuznyasait@gmail.com . Письмова заявка має\r\n  обов’язково містити:\r\n  <br> прізвище ім’я по-батькові Користувача;\r\n  <br> логін який використовується ним, для доступу на Сайт, якщо він є Авторизованим\r\n  Користувачем;\r\n  <br> паспортні дані Користувача;\r\n  <br> адреса його електронної пошти, яку було ним використано для Авторизації;\r\n  <br>  контактні дані – телефон, адреса електронної пошти.\r\n  <br>  чіткий та виключний перелік персональних даних, який має бути знищено.\r\n  У такому випадку, Договір може бути розірвано, а Адміністрація Сайту має право видалити будь-\r\n  який Контент та/або Інформацію, що містять такі персональні дані без необхідності окремого\r\n  попередження Користувача.\r\n  <br> 13.9. Користувач може дізнатися повністю про механізм обробки його персональних даних, в\r\n  порядку направлення письмової заяви в порядку і формі передбаченими в п.13.8 цього Договору.\r\n  <br> 13.10. Крім цього, укладанням цього Договору, Користувач підтверджує, що він повідомлений\r\n  (акцептом цього Договору) про права, встановлені для суб’єктів персональних даних Законом\r\n  України «Про захист персональних даних», про цілі збору даних, а також про те, що його\r\n  персональні дані передаються Сулізі Артему Володимировичу з метою можливості виконання\r\n  умов цього Договору, в тому числі стосовно всіх персональних даних, що передаються ним\r\n  Користувачем (або Сайтом-партнером) без виключень.<br>\r\n  13.11. Користувач визнає, що цей Договір не можна вважати автоматизованим рішення, яке має для\r\n  нього правові наслідки, оскільки Договір розміщено на Сайті для загального і прямого доступу\r\n  для ознайомлення цілодобово та без обмежень.<br>\r\n  13.12. Користувач також погоджується з тим, що Адміністрація Сайту має право надавати доступ і\r\n  передавати його персональні дані третім особам без будь-яких додаткових повідомлень\r\n  Користувача, не змінюючи при цьому мету обробки персональних даних. Обсяг прав\r\n  Користувача, як суб&#39;єкта персональних даних відповідно до Закону України «Про захист\r\n  персональних даних» йому відомий і зрозумілий.\r\n\r\n  <br><br><br><br><br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/rooles/rooles.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  width: 980px; }\n\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/pages/rooles/rooles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoolesComponent; });
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

var RoolesComponent = /** @class */ (function () {
    function RoolesComponent() {
    }
    RoolesComponent.prototype.ngOnInit = function () {
    };
    RoolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rooles',
            template: __webpack_require__("./src/app/pages/rooles/rooles.component.html"),
            styles: [__webpack_require__("./src/app/pages/rooles/rooles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoolesComponent);
    return RoolesComponent;
}());



/***/ }),

/***/ "./src/app/reestablish/reestablish.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\"> <div class=\"container\"><h2>Восстановление пароля</h2>\r\n  Письмо с ссылкой на восстановление пароля будет отправлена на Ваш email\r\n<form class=\"reestablish\">\r\n  <input type=\"email\" placeholder=\"Введите ваш email\">\r\n  <input type=\"submit\" value=\"Отправить\">\r\n</form>\r\n  <p>Если пароль не удалось восстановить обратитесь к администрации сайта через форму на страницу контактов</p>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/reestablish/reestablish.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.email__input {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n/* Страница регистрации */\n.reestablish {\n  width: 300px;\n  text-align: center; }\n.reestablish img {\n  width: 100%; }\n.reestablish input[type=email] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.reestablish input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.reestablish a {\n  text-decoration: none; }\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/reestablish/reestablish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReestablishComponent; });
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

var ReestablishComponent = /** @class */ (function () {
    function ReestablishComponent() {
    }
    ReestablishComponent.prototype.ngOnInit = function () {
    };
    ReestablishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reestablish',
            template: __webpack_require__("./src/app/reestablish/reestablish.component.html"),
            styles: [__webpack_require__("./src/app/reestablish/reestablish.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReestablishComponent);
    return ReestablishComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- please add markup for registration -->\r\n\r\n<form class=\"registration\" *ngIf=\"!allForm || !allForm2 || !allForm3 || !allForm4\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n\r\n  <img src=\"../../assets/imgs/login.png\">\r\n\r\n  <div class=\"name\">\r\n    <span>Имя*</span>\r\n    <input type=\"text\" formControlName=\"name\" >\r\n  </div>\r\n\r\n  <div class=\"name-error\" *ngIf=\"!enterName\">\r\n    <span>Пожалуйста, введите свое Имя</span>\r\n  </div>\r\n\r\n  <div class=\"s-name\">\r\n    <span>Фамилия</span>\r\n    <input type=\"text\" formControlName=\"sname\" class=\"s-name__input\">\r\n  </div>\r\n\r\n  <div class=\"e-mail\">\r\n    <span>E-mail*</span>\r\n    <input type=\"email\" class=\"email__input\" formControlName=\"email\" >\r\n  </div>\r\n\r\n  <div class=\"email-error\" *ngIf=\"!enterEmail\">\r\n    <span>Пожалуйста, введите свой e-mail</span>\r\n  </div>\r\n\r\n  <div class=\"mob\">\r\n    <span>Мобильный</span>\r\n    <input type=\"text\" formControlName=\"mobile\" class=\"mobs__input\">\r\n  </div>\r\n\r\n  <div class=\"pass\">\r\n    <span>Пароль*</span>\r\n    <input type=\"text\" formControlName=\"password\" class=\"pass\">\r\n  </div>\r\n\r\n  <div class=\"check-pass\">\r\n    <span>Еще раз пароль*</span>\r\n    <input type=\"text\" formControlName=\"checkPass\" class=\"check-pass__input\">\r\n  </div>\r\n\r\n  <div class=\"check-pass-error\" *ngIf=\"!passMath || !allForm4\">\r\n    <span>Пароли не совпадаю или не введены, пожалуйста введите еще раз</span>\r\n  </div>\r\n\r\n\r\n  <div class=\"check-pass\">\r\n    <input type=\"submit\" class=\"reg-submit\" value=\"Регистрация\">\r\n  </div>\r\n\r\n  <div class=\"reg-inf\">\r\n    <input type=\"checkbox\" checked> Согласен с правами пользвателя\r\n  </div>\r\n</form>\r\n\r\n<div class=\"success-form\" *ngIf=\"allForm && allForm2 && allForm3 && allForm4\">\r\n  <div class=\"title-success-form\">Поздравляем, Вы прошли регистрацию!</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic\");\n@charset \"UTF-8\";\nbody {\n  padding: 0px;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif; }\n/*----- HEADER,FOOTER,MAIN -------*/\n/* Контейнер */\n.container {\n  margin: auto;\n  width: 980px; }\n/* Верхняя часть сайта (логотип, поиск, вход и т.п.) */\n.search a, .search img, .search form {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n  margin-right: 24px; }\n.search {\n  background: #33427d;\n  width: 100%; }\n.search img {\n  width: 326px; }\n.search a {\n  color: #878cb2;\n  text-decoration: none; }\n.search form input {\n  background: #2a386f;\n  border-radius: 20px;\n  border: 1px solid #192050;\n  line-height: 23px;\n  width: 270px;\n  color: #d8d8d8;\n  padding-left: 12px;\n  font-size: 16px;\n  font-weight: 600; }\n/* Верхнее меню */\n.menu {\n  background: #f6f6f6; }\n.menu a {\n  color: #000;\n  margin: 46px;\n  text-decoration: none;\n  text-transform: uppercase;\n  line-height: 38px;\n  padding: 9px; }\n.menu a:hover {\n  -webkit-box-shadow: 0px 2px 9px #000;\n          box-shadow: 0px 2px 9px #000; }\n/* Карусель рекламы */\n.carousel {\n  background: #e8e8e8; }\n.carousel img {\n  width: 100%; }\n/* Блок с главным контентом */\n.main {\n  background: #e8e8e8;\n  border-top: 1px solid #ccc;\n  padding-top: 30px; }\n/*----- END OF HEADER,FOOTER,MAIN -------*/\n/* Аватар пользователя */\n.avatar {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  vertical-align: top; }\n.avatar-red {\n  -webkit-box-shadow: 0px 0px 10px #de0303;\n          box-shadow: 0px 0px 10px #de0303; }\n.avatar-green {\n  -webkit-box-shadow: 0px 0px 10px #25bb1b;\n          box-shadow: 0px 0px 10px #25bb1b; }\n.info-all, .my-project {\n  background: #fff;\n  width: 47%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.info-all span, .my-project span {\n  font-weight: 600;\n  color: #696969;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 10px; }\n.info-all p {\n  font-size: 15px; }\n.info-all-edit {\n  font-size: 12px;\n  font-weight: 100;\n  color: #909090;\n  float: right; }\n.project-list h6 {\n  font-weight: 500;\n  color: #696969;\n  font-size: 15px;\n  display: block;\n  margin: 0px;\n  text-decoration: underline; }\n.info-main {\n  width: 804px;\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  margin-left: 10px;\n  height: 150px;\n  margin-bottom: 10px; }\n.info-main h1, .info-main p, .info-main h4 {\n  padding: 0px;\n  margin: 0px;\n  margin-left: 10px; }\n.info-main-name {\n  background: #33427d; }\n.info-main h1 {\n  color: #d6e0ff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n.info-main h4 {\n  padding-bottom: 10px; }\n.starr {\n  float: right;\n  font-size: 36px;\n  margin-right: 20px; }\n.starr b {\n  color: #f5e537; }\n/* Выпадающие меню */\n.select-box {\n  cursor: pointer;\n  position: relative;\n  max-width: 15em;\n  margin: 1em auto;\n  width: 100%;\n  margin-right: 10px;\n  display: inline-block; }\n.select,\n.label {\n  color: #bbbbbb;\n  display: block;\n  font: 400 17px/2em 'Source Sans Pro', sans-serif; }\n.select {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  padding: 5px 0;\n  height: 40px;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  background: none transparent;\n  border: 0 none; }\n.select-box1 {\n  background: #33427d; }\n.label {\n  position: relative;\n  padding: 5px 10px;\n  cursor: pointer; }\n.open .label::after {\n  content: \"▲\"; }\n.label::after {\n  content: \"▼\";\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px 15px;\n  border-left: 5px solid #fff; }\n/* Project etc */\n.project-all {\n  background: #fff;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  vertical-align: top; }\n.project-light {\n  -webkit-box-shadow: 0 0 20px #ffda00;\n          box-shadow: 0 0 20px #ffda00; }\n.more {\n  background: #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #fff; }\n.project-all img {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n/* форма поиска */\n.d3 {\n  width: 300px; }\n.d3 input::-webkit-input-placeholder {\n  color: #fff; }\n.d3 form {\n  background: #33427d; }\n.d3 input, .d3 button {\n  border: none;\n  outline: none;\n  background: transparent; }\n.d3 input {\n  width: 100%;\n  height: 42px;\n  padding-left: 15px; }\n.d3 button {\n  height: 42px;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer; }\n.d3 button:before {\n  content: \"\\f002\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #fff; }\n.d3 form {\n  position: relative;\n  width: 300px;\n  margin: 0 auto; }\n/* Страница входа на сайт */\n.div-login {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.div-login img {\n  width: 100%; }\n.div-login form input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.div-login form input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.div-login a {\n  text-decoration: none; }\n.email__input {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n/* Страница регистрации */\n.registration {\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  min-height: 500px; }\n.registration img {\n  width: 100%; }\n.registration input[type=text] {\n  width: 97%;\n  background: #ffffff;\n  padding: 3px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  margin-top: 6px; }\n.registration input[type=submit] {\n  width: 100%;\n  background: #33427d;\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #f6f6f6;\n  margin-top: 6px; }\n.registration a {\n  text-decoration: none; }\n.main {\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
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
    function RegistrationComponent(loginService) {
        this.loginService = loginService;
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
        this.checkForCorrectEnter();
    };
    RegistrationComponent.prototype.checkForCorrectEnter = function () {
        if (this.allForm && this.allForm2 && this.allForm3 && this.allForm4) {
            this.loginService.registerUser(this.registrationForm.value).subscribe(function (data) {
            });
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
        this.mainUrl = 'https://kuznya-server.herokuapp.com/';
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({});
        this.currentUserInformation = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({});
    }
    LoginService.prototype.ngOnInit = function () {
    };
    LoginService.prototype.registerUser = function (user) {
        return this.http.post(this.mainUrl + 'register', { username: user.name, sname: user.sname, mobile: user.mobile, email: user.email, password: user.password })
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.loginUser = function (user) {
        return this.http.post(this.mainUrl + 'login', { email: user.email, password: user.password })
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.getUserDetailsById = function (userId) {
        return this.http.post(this.mainUrl + 'login/getUserByIds', { email: userId })
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.updateUser = function (user) {
        return this.http.post(this.mainUrl + 'register/update', user)
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.addRating = function (user) {
        return this.http.post(this.mainUrl + 'login/addRating', { email: user.email, rating: user.rating })
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.updatePostUserEmailForCategories = function (user) {
        return this.http.post(this.mainUrl + 'projects/update', user)
            .map(function (res) {
            return res;
        });
    };
    LoginService.prototype.addProject = function (project) {
        return this.http.post(this.mainUrl + 'projects', project)
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

/***/ "./src/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.mainUrl = 'https://kuznya-server.herokuapp.com/';
        this.moreProject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({});
    }
    ProjectsService.prototype.ngOnInit = function () {
    };
    ProjectsService.prototype.getMyProjects = function (mail) {
        return this.http.post(this.mainUrl + 'projects/getMyProjects', { email: mail })
            .map(function (res) {
            return res;
        });
    };
    ProjectsService.prototype.deleteCurrentProject = function (id) {
        return this.http.post(this.mainUrl + 'projects/deleteProject', { id: id })
            .map(function (res) {
            return res;
        });
    };
    ProjectsService.prototype.getAllProjectsByStatus = function (status) {
        return this.http.post(this.mainUrl + 'projects/getProjectsByStatus', { status: status })
            .map(function (res) {
            return res;
        });
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.mainUrl = 'https://kuznya-server.herokuapp.com/';
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({});
        this.positionInCompany = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({});
    }
    UsersService.prototype.ngOnInit = function () {
    };
    UsersService.prototype.getAllUsers = function () {
        return this.http.get(this.mainUrl + 'users')
            .map(function (res) {
            return res;
        });
    };
    UsersService.prototype.sendEmail = function (userData) {
        return this.http.post(this.mainUrl + 'projects/sendemail', { email: userData.email, name: userData.name, sname: userData.sname, message: userData.message, emailTo: userData.emailTo })
            .map(function (res) {
            return res;
        });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map