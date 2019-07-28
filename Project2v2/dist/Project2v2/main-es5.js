(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This website is brought to you by Organization 13.<br><br>\n\n    Team members:<br><br>\n\n    - Logan Willis (Angular)<br>\n    - Syed Newaz (Testing, Backend)<br>\n    - Darion Toney (Backend)<br><br>\n\n    Reality can be whatever we want.\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <!-- Bootstrap and materialize stuff -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n</head>\n\n<header>\n  <div style=\"text-align:center\">\n    <span>\n      <h1>\n        <div style=\"height:50px\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/en/8/86/Ike_SSBU.png\" id=\"headerimage\">\n        </div>\n        <b>⚔<i>AETHER.GG</i></b>\n      </h1>\n      <h5>A site by Organization</h5>\n    </span>\n  </div>\n</header>\n\n<nav class=\"navbar bg-custom navbar-expand-sm\" id=\"mainnav\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/login\">/login</a>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/main-display\">/main-display</a>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">/about</a>\n  </ul>\n</nav>\n\n\n<div id=\"mainbody\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer>\n  Site by Organization 13 | Powered by Angular | 2019\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script>\n    $(document).ready(function(){\n   var $form = $('form');\n   $form.submit(function(){\n      $.post($(this).attr('action'), $(this).serialize(), function(response){\n            // do something here on success\n      },'json');\n      return false;\n   });\n});\n    </script>\n\n<h3>Please enter your login information below.</h3><br>\n\n\n<form action=\"http://34.239.48.216:8085/MavenProjectPipeline/aether/login\" method=\"POST\" id=\"mainform\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <label for=\"username\">Username</label>\n                <input class=\"textinput\" type=\"text\" name=\"username\"><br>\n                <label for=\"password\">Password</label>\n                <input class=\"textinput\" type=\"password\" name=\"password\" style=\"margin-bottom: 20px;\"><br>\n                <input id=\"submitbutton\" type=\"submit\" value=\"Submit\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n</form>\n\n<label>Don't have an account? Click <a routerLink='/register'>here</a> to register!</label>\n\n\n<!--\n    <h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Login\n        </button>\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-display/main-display.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-display/main-display.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-8\">\n            <h3>Tournaments</h3>\n            <div *ngFor='let tournament of tournaments$'>\n                <h5>\n                    <img\n                        src=\"https://secure.gravatar.com/avatar/6d9fc4cfb129f85377fbe756de639d0a?r=r&s=40&d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png\">\n                    {{tournament.tournament.name}} - {{tournament.tournament.participants_count}} entrants -\n                    <span *ngIf=\"tournament.tournament.completed_at == null\">\n                        In Progress\n                    </span>\n                    <span *ngIf=\"tournament.tournament.completed_at != null\">\n                        Completed\n                    </span>\n                    <a routerLink=\"/view-tourney/{{tournament.tournament.url}}\"><button>View</button></a>\n                </h5>\n            </div>\n        </div>\n        <div class=\"col-4\" id=\"rankings\">\n            <h3>Rankings</h3>\n            <table>\n                <tr>\n                    <th>Rank</th>\n                    <th>Name</th>\n                    <th>Wins</th>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>Some Guy</td>\n                    <td>1</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Some Dude</td>\n                    <td>0</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n<!--\n<h3>Users (Test)</h3>\n<div *ngFor='let user of users$'>\n    <h4>{{user.name}}</h4>\n</div>\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Register Account</h3>\n\n<form action=\"http://34.239.48.216:8085/MavenProjectPipeline/aether/registration\" method=\"POST\" id=\"mainform\" enctype=\"application/json\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <label for=\"username\">Enter a username:</label>\n                <input class=\"textinput\" type=\"text\" name=\"username\"><br>\n\n                <label for=\"password\">Enter a password:</label>\n                <input class=\"textinput\" type=\"password\" name=\"password\"><br>\n\n                <label for=\"first_name\">First name:</label>\n                <input class=\"textinput\" type=\"text\" name=\"first_name\"><br>\n\n                <label for=\"last_name\">Last name:</label>\n                <input class=\"textinput\" type=\"text\" name=\"last_name\"><br>\n\n                <label for=\"region\">Region:</label>\n                <input class=\"textinput\" type=\"text\" name=\"region\"><br>\n\n                <label for=\"phrase\">Enter a fun phrase:</label>\n                <input class=\"textinput\" type=\"text\" name=\"phrase\"><br>\n\n                <label for=\"users_role\">What type of account would you like?</label><br>\n                <input class=\"textinput\" type=\"text\" name=\"users_role\"><br>\n\n                <input id=\"submitbutton\" type=\"submit\" value=\"Submit\">\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n    </div>\n</form>\n\n<form action=\"http://localhost:8080/MavenProjectPipeline/aether/registration\" method=\"POST\" id=\"mainform\" enctype=\"application/json\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <label for=\"username\">Enter a username:</label>\n                <input class=\"textinput\" type=\"text\" name=\"username\"><br>\n\n                <label for=\"password\">Enter a password:</label>\n                <input class=\"textinput\" type=\"password\" name=\"password\"><br>\n\n                <label for=\"first_name\">First name:</label>\n                <input class=\"textinput\" type=\"text\" name=\"first_name\"><br>\n\n                <label for=\"last_name\">Last name:</label>\n                <input class=\"textinput\" type=\"text\" name=\"last_name\"><br>\n\n                <label for=\"region\">Region:</label>\n                <input class=\"textinput\" type=\"text\" name=\"region\"><br>\n\n                <label for=\"phrase\">Enter a fun phrase:</label>\n                <input class=\"textinput\" type=\"text\" name=\"phrase\"><br>\n\n                <label for=\"users_role\">What type of account would you like?</label><br>\n                <input class=\"textinput\" type=\"text\" name=\"users_role\"><br>\n\n                <input id=\"submitbutton\" type=\"submit\" value=\"Submit\">\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-tourney/view-tourney.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-tourney/view-tourney.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"tournamentName == undefined\">Loading...</h3>\n<h3>{{tournamentName}}</h3>\n\n<span>\n    <h4 style=\"display:inline-block\">Bracket</h4>\n    <a style=\"float:right;margin-top:20px\" href=\"https://challonge.com/{{id}}\" target=\"_blank\"><button>Open Challonge</button></a>\n</span>\n\n<iframe [src]=completeURL width=\"100%\" height=\"500\" frameborder=\"0\" scrolling=\"auto\" allowtransparency=\"true\"></iframe>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-display/main-display.component */ "./src/app/main-display/main-display.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _view_tourney_view_tourney_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-tourney/view-tourney.component */ "./src/app/view-tourney/view-tourney.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main-display', component: _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_4__["MainDisplayComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'view-tourney/:id', component: _view_tourney_view_tourney_component__WEBPACK_IMPORTED_MODULE_6__["ViewTourneyComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project2v2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-display/main-display.component */ "./src/app/main-display/main-display.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _view_tourney_view_tourney_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-tourney/view-tourney.component */ "./src/app/view-tourney/view-tourney.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");



//import{ReactiveFormsModule} from '@angular/forms';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_6__["MainDisplayComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _view_tourney_view_tourney_component__WEBPACK_IMPORTED_MODULE_10__["ViewTourneyComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        //
        this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
        //tournamentsIndexURL = 'https://api.challonge.com/v1/tournaments.json?api_key=XOrxEi0Ml0MTpeKmB3ddlRfgHgAbGfc8kvHAtW0Y';
        this.tournamentsIndexURL = 'https://TheRealMrWillis:XOrxEi0Ml0MTpeKmB3ddlRfgHgAbGfc8kvHAtW0Y@api.challonge.com/v1/tournaments.json';
        //tournamentsIndexURL = 'https://api.challonge.com/v1/tournaments.json';
        this.loginURL = 'http://34.239.48.216:8085/MavenProjectPipeline/aether/login';
    }
    /*
    getUsers(){
      return this.httpClient.get<User[]>(this.apiUrl);
    }
    */
    DataService.prototype.getTournamentsIndex = function () {
        console.log("attempting data.service.ts return");
        console.log(this.httpClient.get(this.tournamentsIndexURL));
        return this.httpClient.get(this.tournamentsIndexURL);
        //return this.httpClient.get<Object[]>(this.tournamentsIndexURL);
    };
    DataService.prototype.doLogin = function (username, password) {
        //let httpParams = [username,password];
        //return this.httpClient.post(this.loginURL,httpParams);
        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.httpClient.post(this.loginURL, formData);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.loginURL = 'http://34.239.48.216:8085/MavenProjectPipeline/aether/login';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    LoginService.prototype.doLogin = function (username, password) {
        //let httpParams = [username,password];
        //return this.httpClient.post(this.loginURL,httpParams);
        var _this = this;
        /*
        let formData:FormData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
        return this.httpClient.post(this.loginURL,formData);
        */
        return this.httpClient.post(this.loginURL, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    display:block;\n    text-align:center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService
    //private formBuilder: FormBuilder
    ) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });*/
    };
    //get f() { return this.loginForm.controls; }
    /*
    onSubmit(){
      this.username = this.f.username.value;
      this.password = this.f.password.value;
      console.log("Username: "+this.username);
      console.log("Password: "+this.password);
      this.doLogin(this.username,this.password);
    }*/
    LoginComponent.prototype.doLogin = function (username, password) {
        var _this = this;
        return this.loginService.doLogin(username, password).subscribe(function (data) { return _this.userObject = data; });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-display/main-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-display/main-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\n    text-align: center;\n}\n\nimg{\n    width:30px;\n    height:30px;\n}\n\n#rankings{\n    border-radius:10px;\n    background-color: rgb(90, 90, 90);\n}\n\ntable{\n    text-align:center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1kaXNwbGF5L21haW4tZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWRpc3BsYXkvbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZ3tcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xufVxuXG4jcmFua2luZ3N7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxudGFibGV7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/main-display/main-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-display/main-display.component.ts ***!
  \********************************************************/
/*! exports provided: MainDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDisplayComponent", function() { return MainDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var MainDisplayComponent = /** @class */ (function () {
    function MainDisplayComponent(dataService) {
        this.dataService = dataService;
        this.tournamentComplete = [];
    }
    MainDisplayComponent.prototype.ngOnInit = function () {
        //this.getUsers();
        this.getTournamentsIndex();
        console.log("user$: " + this.users$);
        console.log("tournaments$: " + this.tournaments$);
        return;
    };
    MainDisplayComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked invoked");
        this.tournamentArray = JSON.stringify(this.tournaments$);
        console.log(this.tournaments$[0]);
        for (var i = 0; i < this.tournaments$.length; i++) {
            if (this.tournaments$[i].tournament.completed_at == null) {
                this.tournamentComplete[i] = "In Progress";
            }
            else {
                this.tournamentComplete[i] = "Complete";
            }
            console.log(this.tournamentComplete[i]);
        }
        console.log(this.tournamentComplete);
    };
    /*
    getUsers(){
      return this.dataService.getUsers().subscribe(data => this.users$ = data);
    }
    */
    MainDisplayComponent.prototype.getTournamentsIndex = function () {
        var _this = this;
        return this.dataService.getTournamentsIndex().subscribe(function (data) { return _this.tournaments$ = data; });
    };
    MainDisplayComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    MainDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-display',
            template: __webpack_require__(/*! raw-loader!./main-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-display/main-display.component.html"),
            styles: [__webpack_require__(/*! ./main-display.component.css */ "./src/app/main-display/main-display.component.css")]
        })
    ], MainDisplayComponent);
    return MainDisplayComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/view-tourney/view-tourney.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-tourney/view-tourney.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    font-size: 20px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy10b3VybmV5L3ZpZXctdG91cm5leS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3LXRvdXJuZXkvdmlldy10b3VybmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-tourney/view-tourney.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-tourney/view-tourney.component.ts ***!
  \********************************************************/
/*! exports provided: ViewTourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTourneyComponent", function() { return ViewTourneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var ViewTourneyComponent = /** @class */ (function () {
    function ViewTourneyComponent(router, sanitizer, dataService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.dataService = dataService;
    }
    ViewTourneyComponent.prototype.ngOnInit = function () {
        // Grabs the URL id and sets up the resource URL for challonge embed
        this.id = this.router.url.slice(14);
        this.completeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://challonge.com/" + this.id + "/module");
        console.log("The Id is: " + this.id);
        // Populates tournaments$ so info can be grabbed in ngDoCheck()
        this.getTournamentsIndex();
    };
    ViewTourneyComponent.prototype.ngDoCheck = function () {
        // Sets an index and name for the currently selected tournament
        // after tournaments$ is populated
        if (this.tournaments$ != undefined) {
            for (var i = 0; i < this.tournaments$.length; i++) {
                if (this.tournaments$[i].tournament.url == this.id) {
                    this.tournamentIndex = i;
                }
            }
            console.log(this.tournamentIndex);
            this.tournamentName = this.tournaments$[this.tournamentIndex].tournament.name;
            console.log(this.tournamentName);
        }
    };
    ViewTourneyComponent.prototype.getTournamentsIndex = function () {
        var _this = this;
        return this.dataService.getTournamentsIndex().subscribe(function (data) { return _this.tournaments$ = data; });
    };
    ViewTourneyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    ViewTourneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-tourney',
            template: __webpack_require__(/*! raw-loader!./view-tourney.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-tourney/view-tourney.component.html"),
            styles: [__webpack_require__(/*! ./view-tourney.component.css */ "./src/app/view-tourney/view-tourney.component.css")]
        })
    ], ViewTourneyComponent);
    return ViewTourneyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/syednewaz/LoganPipeline/Project2v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map