webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectPage = /** @class */ (function () {
    function ProjectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectData = navParams.get("projectData");
    }
    ProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectPage');
    };
    ProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/project/project.html"*/'<!--\n  Generated template for the ProjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.projectData.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-card>\n        <ion-grid>\n          <ion-row align-items-center>\n            <ion-col col-5>\n              <img src={{this.projectData.img}} />\n            </ion-col>\n            <ion-col></ion-col>\n            <ion-col col-5 text-center>\n              <ion-label><h2>Description</h2></ion-label>\n              <h3>{{this.projectData.description}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row></ion-row>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col col-3>\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col text-center>\n                <ion-label><h2>Work Type</h2></ion-label>\n                  <p>{{this.projectData.type}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col col-3>\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col text-center>\n                <ion-label><h2>Duration</h2></ion-label>\n                  <p>{{this.projectData.duration}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col col-3>\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col text-center>\n                <ion-label><h2>Commitment</h2></ion-label>\n                  <p>{{this.projectData.time}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row></ion-row>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col col-4>\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col text-center>\n                <ion-label><h2>Experience</h2></ion-label>\n                  <p>{{this.projectData.level}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col col-4>\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col text-center>\n                <ion-label><h2>Skills</h2></ion-label>\n                  <p *ngFor="let skill of this.projectData.skills">{{skill}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/project/project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProjectPage);
    return ProjectPage;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProjectPage = /** @class */ (function () {
    function NewProjectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newProject = { "title": "", "description": "", "type": "", "skills": "",
            "duration": "", "time": "", "level": "",
            "img": "" };
        this.work = {};
        this.work["types"] = ["Mobile Development", "Desktop Development",
            "Web Development", "Game Development", "QA/Testing", "WordPress",
            "Ecommerce", "Other"];
        this.work["skills"] = ["Ionic Framework", "React Framework", "jQuery",
            "JavaScript", "HTML", "CSS", "I don’t know"];
        this.work["durations"] = ["More than 6 months", "3 to 6 months",
            "1 to 3 months", "Less than 1 month", "Less than 1 week"];
        this.work["times"] = ["More than 30 hrs/week", "20-30 hrs/week",
            "10-20 hrs/week", "0-10 hrs/week"];
        this.work["levels"] = ["Entry level", "Intermediate", "Expert"];
    }
    NewProjectPage.prototype.newProjectForm = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            addedProject: this.newProject,
        });
    };
    NewProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-project',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/new-project/new-project.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>New Project</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <h3>Project Information</h3>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col col-8>\n        <form (ngSubmit)="newProjectForm()">\n          <ion-item>\n            <ion-label>Project Title</ion-label>\n            <ion-input type="text" [(ngModel)]="newProject.title" name="title"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Description</ion-label>\n            <ion-textarea [(ngModel)]="newProject.description" name="description"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label>Type of Work</ion-label>\n            <ion-select [(ngModel)]="newProject.type" name="type">\n              <ion-option *ngFor="let type of work.types">{{type}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Required Skills</ion-label>\n            <ion-select [(ngModel)]="newProject.skills" name="skills" multiple>\n              <ion-option *ngFor="let skill of work.skills">{{skill}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Project Duration</ion-label>\n            <ion-select [(ngModel)]="newProject.duration" name="duration">\n              <ion-option *ngFor="let duration of work.durations">{{duration}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Time Commitment</ion-label>\n            <ion-select [(ngModel)]="newProject.time" name="time">\n              <ion-option *ngFor="let time of work.times">{{time}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Experience Required</ion-label>\n            <ion-select [(ngModel)]="newProject.level" name="level">\n              <ion-option *ngFor="let level of work.levels">{{level}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <button ion-button type="submit" block>Post Project</button>\n        </form>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/new-project/new-project.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewProjectPage);
    return NewProjectPage;
}());

//# sourceMappingURL=new-project.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_project_new_project__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_project_project__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_project_new_project__["a" /* NewProjectPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_project_project__["a" /* ProjectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_project_new_project__["a" /* NewProjectPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_project_project__["a" /* ProjectPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_project_new_project__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Posted Projects', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'New Project', component: __WEBPACK_IMPORTED_MODULE_5__pages_new_project_new_project__["a" /* NewProjectPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/HiredSpear/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>HireSpear</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/HiredSpear/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addedProject = null;
        this.addedProject = navParams.get("addedProject");
        // FOR Testing
        //this.addedProject = {};
        //this.openProject("mobile_project");
    }
    HomePage.prototype.openProject = function (projectName) {
        this.addedProject["description"] = "Mobile application to give customers access to our rewards system";
        this.addedProject["title"] = "Customer Rewards App";
        this.addedProject["type"] = "Mobile Development";
        this.addedProject["skills"] = ["JavaScript", "HTML", "CSS"];
        this.addedProject["duration"] = "1 to 3 months";
        this.addedProject["time"] = "20-30 hrs/week";
        this.addedProject["level"] = "Intermediate";
        this.addedProject["img"] = "../../assets/imgs/mobile_project.jpg";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_project__["a" /* ProjectPage */], {
            projectData: this.addedProject,
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Posted Projects</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="../../assets/imgs/ecommerce.jpg"/>\n          <ion-card-content>\n            <ion-card-title>\n              Shopping Website\n              </ion-card-title>\n            <p>\n              Website to enable customers to purchase our goods\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col (click)=\'openProject("mobile")\'>\n        <ion-card *ngIf="this.addedProject">\n          <img src="../../assets/imgs/mobile_project.jpg"/>\n          <ion-card-content>\n            <ion-card-title>\n              Customer Rewards App\n              </ion-card-title>\n            <p>\n              Mobile application to give customers access to our rewards system\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/HiredSpear/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map