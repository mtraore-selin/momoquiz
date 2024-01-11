(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GIY":
/*!********************************************************************************!*\
  !*** ./src/app/pages/challenge/challenge-report/challenge-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChallengeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeReportComponent", function() { return ChallengeReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a1) { return ["/challenge", a1, "reports", "summary"]; };
const _c1 = function (a1) { return ["/challenge", a1, "reports", "playerlist"]; };
const _c2 = function (a1) { return ["/challenge", a1, "reports", ""]; };
class ChallengeReportComponent {
    constructor(_bgColorService, _authService, _router, reportsservice, _Activatedroute) {
        this._bgColorService = _bgColorService;
        this._authService = _authService;
        this._router = _router;
        this.reportsservice = reportsservice;
        this._Activatedroute = _Activatedroute;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue-light');
        this.challengeId = this._Activatedroute.snapshot.paramMap.get("id");
        this.reportsservice.getChallengeReport(this.challengeId).subscribe((res) => {
            console.log("Challnge reports: success");
            console.log(res);
            this.challengeData = res['data'];
        }, (error) => {
            console.log("Challnge reports: Error");
            console.log(error);
        });
    }
    logout() {
        console.log("in logout");
        this._authService.logOut();
        this._router.navigate(['/login']);
    }
}
ChallengeReportComponent.ɵfac = function ChallengeReportComponent_Factory(t) { return new (t || ChallengeReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ChallengeReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeReportComponent, selectors: [["app-challenge-report"]], decls: 61, vars: 21, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col-0", "col-md"], [1, "col-12", "col-sm-12", "col-md-11"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], ["routerLink", "/", 1, "text-white", 2, "cursor", "pointer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "navbar-default", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "/teacherdashboard/quiztable", 1, "nav-link"], ["routerLink", "/teacherdashboard/challengetable", 1, "nav-link"], ["routerLink", "/quiz/create", 1, "nav-link"], [1, "btn", "qz-btn", "qz-bg-white", 3, "click"], [1, "row", "qz-bg-exomind", "text-white"], [1, "col"], [1, "col-12", "col-sm-6", "mt-4", "mb-0"], [1, "qz-text-white-light"], [1, "my-3"], [1, "mt-5", "mb-0"], [1, "sub-nav"], [1, "sub-nav-item", "mx-1", "p-2", 3, "routerLink"], ["routerLink", "challenge/reports/summary", 1, "d-inline"], [1, "d-inline"], [1, "col-12", "col-sm-4", "mx-4", "my-2"], [1, "qz-text-white-light", "qz-text-weight-light", "challenge-meta-data"], [1, "my-1"], [1, "fas", "fa-trophy", "text-warning"], [1, "qz-bg-white-light"]], template: function ChallengeReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeReportComponent_Template_button_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Challenge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challengeData.challenge_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.challengeId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.challengeId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Players(", (ctx.challengeData == null ? null : ctx.challengeData.numberOfPlayers) || 0, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.challengeId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Questions(", ctx.challengeData.numberOfQuestions || 0, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 9, ctx.challengeData.start_date, "MMM d, y, h:mm:ss a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 12, ctx.challengeData.end_date, "MMM d, y, h:mm:ss a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hosted by ", ctx.challengeData.hosted_by, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n\n.challenge-meta-data[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul.sub-nav[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: pointer;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #115FBA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYWxsZW5nZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFGSTtFQUNFLHlCQUFBO0FBSU4iLCJmaWxlIjoiY2hhbGxlbmdlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgd2lkdGg6IDEwMCU7XG59XG5uYXYgdWwgbGkgYXtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG5uYXYgdWwgbGkgYS5hY3RpdmUsXG5uYXYgdWwgbGkgYTpob3ZlcntcbiAgY29sb3I6ICMxMTE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4gIFxuLmNoYWxsZW5nZS1tZXRhLWRhdGEge1xuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbn1cblxudWwuc3ViLW5hdntcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgbGkuc3ViLW5hdi1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTVGQkFcbiAgICB9XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-report',
                templateUrl: './challenge-report.component.html',
                styleUrls: ['./challenge-report.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohamed/Documents/HomeWork/MEAN/Quizzards/client/src/main.ts */"zUnb");


/***/ }),

/***/ "0pRE":
/*!*************************************************************!*\
  !*** ./src/app/pages/quiz/host-quiz/host-quiz.component.ts ***!
  \*************************************************************/
/*! exports provided: HostQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostQuizComponent", function() { return HostQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-datetimepicker */ "7I+D");









function HostQuizComponent_div_16_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Challenge title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HostQuizComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostQuizComponent_div_16_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors == null ? null : ctx_r0.title.errors.required);
} }
function HostQuizComponent_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Challenge start date & time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HostQuizComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostQuizComponent_div_29_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.startDatetime.errors == null ? null : ctx_r1.startDatetime.errors.required);
} }
function HostQuizComponent_div_40_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Challenge end date & time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HostQuizComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostQuizComponent_div_40_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.endDatetime.errors == null ? null : ctx_r2.endDatetime.errors.required);
} }
function HostQuizComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostQuizComponent_div_61_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.dismissErrorAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
} }
function HostQuizComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quiz hosted successfully! You will automatically get redirected...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HostQuizComponent {
    constructor(_Activatedroute, formBuilder, challengeservice, _bgColorService, _router) {
        this._Activatedroute = _Activatedroute;
        this.formBuilder = formBuilder;
        this.challengeservice = challengeservice;
        this._bgColorService = _bgColorService;
        this._router = _router;
        // visual feedback related
        this.isError = false;
        this.isSuccess = false;
        this.errorMessage = '';
        this.showEndDateTimePicker = false;
        this.showStartDateTimePicker = false;
        this.hostQuizForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', []],
            startDatetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endDatetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            settings: this.formBuilder.group({
                isTimeOn: [true],
                isRandomQuestionsOn: [false],
                isRandomOptionsOn: [false]
            })
        });
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass("qz-bg-blue");
        this.quizId = this._Activatedroute.snapshot.paramMap.get("quiz_id");
        // $('#datetimepicker').datetimepicker();
    }
    onSubmit() {
    }
    showEndDateTimePickerFn() {
        this.showEndDateTimePicker = true;
    }
    onClickSave() {
        var challengeData = {
            title: this.hostQuizForm.value.title,
            description: this.hostQuizForm.value.description,
            startDatetime: this.hostQuizForm.value.startDatetime,
            endDatetime: this.hostQuizForm.value.endDatetime
        };
        this.challengeservice.createChallenge(challengeData, this.quizId).subscribe((response) => {
            console.log(response);
            if (response['success']) {
                this.isSuccess = true;
                // this will redirect to summary page after 3 seconds
                setTimeout(() => {
                    this._router.navigate(['/teacherdashboard/challengetable']);
                }, 3000);
            }
        }, (error) => {
            var _a, _b;
            console.log(error);
            this.isError = true;
            this.errorMessage = (_b = (_a = error.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (error.error instanceof ErrorEvent) {
                // client-side error
                this.errorMessage = `${error.error.message}`;
            }
            if (!this.errorMessage) {
                //console.log(err.status);
                if (error.status == 0 || error.status == 500) {
                    this.errorMessage = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.errorMessage) {
                    this.errorMessage = error.message;
                }
            }
        });
    }
    dismissErrorAlert() {
        this.isError = false;
    }
    get title() {
        return this.hostQuizForm.get('title');
    }
    get startDatetime() {
        return this.hostQuizForm.get('startDatetime');
    }
    get endDatetime() {
        return this.hostQuizForm.get('endDatetime');
    }
    get description() {
        return this.hostQuizForm.get('description');
    }
    get isTimeOn() {
        return this.hostQuizForm.get('isTimeOn');
    }
}
HostQuizComponent.ɵfac = function HostQuizComponent_Factory(t) { return new (t || HostQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HostQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostQuizComponent, selectors: [["app-host-quiz"]], decls: 63, vars: 31, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "col-11", "col-sm-11", "col-md-9", "col-lg-7", "col-xl-6"], ["routerLink", "/login", 1, "display-4", "text-white", "font-weight-bold", "text-center", "m-3", 2, "cursor", "pointer"], [1, "card", "qz-card", "qz-card-rounded", "qz-card-shadow", "mt-2", "p-5"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "inputTitle", 1, "qz-form-label"], ["type", "text", "formControlName", "title", "id", "inputTitle", "placeholder", "Enter title for challenge..", 1, "form-control", "qz-text-input"], [4, "ngIf"], ["for", "inputDesc", 1, "qz-form-label"], ["type", "text", "formControlName", "description", "id", "inputDesc", "placeholder", "Enter desciption for challenge..", 1, "form-control", "qz-text-input"], ["for", "inputEndDateNTime", 1, "qz-form-label"], [1, "input-group", "mb-3"], ["formControlName", "startDatetime", "type", "text", 1, "form-control", "qz-text-input", 3, "value"], [1, "input-group-append"], [1, "input-group-text", "qz-border", 3, "click"], [1, "fas", "fa-calendar-alt"], ["startView", "day", "maxView", "year", "minView", "minute", "minuteStep", "5", "formControlName", "startDatetime"], ["formControlName", "endDatetime", "type", "text", 1, "form-control", "qz-text-input", 3, "value"], ["startView", "day", "maxView", "year", "minView", "minute", "minuteStep", "5", "formControlName", "endDatetime"], ["formGroupName", "settings"], [1, "custom-control", "custom-switch"], ["formControlName", "isTimeOn", "type", "checkbox", "id", "isTimerOnSwitch", 1, "custom-control-input"], ["for", "isTimerOnSwitch", 1, "custom-control-label", "qz-form-label"], ["formControlName", "isRandomQuestionsOn", "type", "checkbox", "id", "isRandomQuestionsOnSwitch", 1, "custom-control-input"], ["for", "isRandomQuestionsOnSwitch", 1, "custom-control-label", "qz-form-label"], ["formControlName", "isRandomOptionsOn", "type", "checkbox", "id", "isRandomOptionsOnSwitch", 1, "custom-control-input"], ["for", "isRandomOptionsOnSwitch", 1, "custom-control-label", "qz-form-label"], ["type", "submit", 1, "btn", "btn-secondary", "mt-5", "btn-block", "qz-btn", "qz-bg-blue", 3, "disabled", "click"], ["class", "alert alert-danger alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], ["class", "text-danger mx-2", 4, "ngIf"], [1, "text-danger", "mx-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"]], template: function HostQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Host Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "After hosting a quiz, It will be referred as challenge..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HostQuizComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HostQuizComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Desciption:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Date & Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostQuizComponent_Template_div_click_27_listener() { return ctx.showStartDateTimePicker = !ctx.showStartDateTimePicker; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HostQuizComponent_div_29_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "dl-date-time-picker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "End Date & Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostQuizComponent_Template_div_click_38_listener() { return ctx.showEndDateTimePicker = !ctx.showEndDateTimePicker; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HostQuizComponent_div_40_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "dl-date-time-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Challenge Settings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Question Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Randomize Question Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Randomize Option Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostQuizComponent_Template_button_click_58_listener() { return ctx.onClickSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Host ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HostQuizComponent_div_61_Template, 8, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HostQuizComponent_div_62_Template, 8, 0, "div", 32);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hostQuizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.title.invalid && ctx.title.touched)("is-valid", ctx.title.valid && ctx.title.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title.invalid && ctx.title.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.description.valid && ctx.description.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.startDatetime.invalid && ctx.startDatetime.touched)("is-valid", ctx.startDatetime.valid && ctx.startDatetime.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.hostQuizForm.value.startDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startDatetime.invalid && ctx.startDatetime.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-block", ctx.showStartDateTimePicker)("d-none", !ctx.showStartDateTimePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.endDatetime.invalid && ctx.endDatetime.touched)("is-valid", ctx.endDatetime.valid && ctx.endDatetime.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.hostQuizForm.value.endDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endDatetime.invalid && ctx.endDatetime.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-block", ctx.showEndDateTimePicker)("d-none", !ctx.showEndDateTimePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.hostQuizForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccess);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_6__["DlDateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3N0LXF1aXouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-host-quiz',
                templateUrl: './host-quiz.component.html',
                styleUrls: ['./host-quiz.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor(_bgColorService) {
        this._bgColorService = _bgColorService;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-white');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 74, vars: 0, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col"], [1, "col-10"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], [1, "text-white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "navbar-default", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "/challenge/join-challenge", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], ["href", "/quiz-info", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["routerLink", "/login", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], ["routerLink", "/register", 1, "btn", "qz-btn", "qz-bg-white"], [1, "row"], [1, "col-xl-1"], [1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], [1, "my-5", "py-5", "px-4"], [1, "mt-5", "qz-text-blue", "font-weight-bold"], [1, "mb-5"], ["href", "#", "routerLink", "/register", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], [1, "d-none", "d-sm-none", "d-md-none", "d-lg-block", "col-md-6", "col-xl-4", "my-4", "py-4"], [1, "hero-img", 2, "align-items", "center"], ["src", "../../../assets/svg/undraw_Questions_re_1fy7.svg", "alt", "", 1, "img-fluid", 2, "width", "90%"], [1, "row", "qz-bg-blue-light"], [1, "text-center", "my-5", "qz-text-blue"], [1, "col-md-12", "col-lg-4", "my-5"], ["src", "../../../assets/svg/undraw_building_blocks_n0nc.svg", "alt", "", 1, "illustrations"], [1, "py-3", "qz-text-blue", "text-center"], [1, "mx-4", "px-4", "py-0", "text-center"], [1, "col-md-12", "col-lg-4", "my-2"], ["src", "../../../assets/svg/undraw_going_up_ttm5.svg", "alt", "", 1, "illustrations"], ["src", "../../../assets/svg/undraw_press_play_bx2d.svg", "alt", "", 1, "illustrations"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GMDT Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Discover an exciting and innovative approach to share and create quizzes - a new and fun way to engage with knowledge! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Additionally, you can keep track of participants' results, allowing you to monitor their progress and performance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "How does GMDT Quiz work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Crafting a learning game or trivia quiz on any subject is a matter of minutes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Host and share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Host an engaging challenge with Quiz questions and effortlessly share the game with remote players. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Let the games begin! Participate in a challenge by entering the PIN provided by the host and start answering questions on your device. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n\n.illustrations[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiB1bCBsaSBhe1xuICBjb2xvcjogI2YyZjJmMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbn1cbm5hdiB1bCBsaSBhLmFjdGl2ZSxcbm5hdiB1bCBsaSBhOmhvdmVye1xuICBjb2xvcjogIzExMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmlsbHVzdHJhdGlvbnN7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "6eWk":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/challenge/challenge-report/challenge-report-summary/challenge-report-summary.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ChallengeReportSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeReportSummaryComponent", function() { return ChallengeReportSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ChallengeReportSummaryComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Overall Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "canvas", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Difficulty level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "canvas", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeReportSummaryComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scores of Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Analysis of Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "canvas", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengeReportSummaryComponent {
    constructor(_Activatedroute, reportsservice, challengeservice) {
        this._Activatedroute = _Activatedroute;
        this.reportsservice = reportsservice;
        this.challengeservice = challengeservice;
        this.NamesData = [];
        this.scoreChartData = [];
        this.correctanswers = [];
        this.wronganswers = [];
        this.val1 = '11%';
        this.data1 = [];
    }
    ngOnInit() {
        //getting challenge id
        this.challengeId = this._Activatedroute.parent.snapshot.paramMap.get('id');
        this.reportsservice.getChallengeReport(this.challengeId).subscribe((res) => {
            console.log('Challnge reports: success');
            console.log(res);
            this.challengeData = res['data'];
            this.gameURL = `${window.location.origin}/challenge/play/${this.challengeData.game_pin}`;
            this.numberOfPlayer = this.challengeData['numberOfPlayers'];
        }, (error) => {
            console.log('Challnge reports: Error');
            console.log(error);
        });
        //getting feedback data
        this.reportsservice.getfeedbackdata(this.challengeId).subscribe((res) => {
            let temptotalfeedbacks;
            let tempdifficultyLevel;
            let tempoverallExperience;
            let tempquestionQuality;
            this.feedbackinfo = JSON.parse(JSON.stringify(res));
            console.log('Printing feedback data');
            console.log(this.feedbackinfo.data.fetchedData);
            temptotalfeedbacks = this.feedbackinfo.data.fetchedData.totalFeedbacks;
            tempdifficultyLevel =
                this.feedbackinfo.data.fetchedData.totalRatings.difficultyLevel;
            tempoverallExperience =
                this.feedbackinfo.data.fetchedData.totalRatings.overallExperience;
            tempquestionQuality =
                this.feedbackinfo.data.fetchedData.totalRatings.questionQuality;
            this.totalfeedbacks = temptotalfeedbacks;
            this.difficultyLevel = tempdifficultyLevel;
            this.overallExperience = tempoverallExperience;
            this.questionQuality = tempquestionQuality;
        }, (error) => {
            console.log('Feedback Data: Error');
            console.log(error);
        });
        //getting the playerlist
        this.reportsservice.getPlayers(this.challengeId).subscribe((res) => {
            //console.log("display : success");
            this.info = JSON.parse(JSON.stringify(res));
            console.log('This is info', this.info);
            let chartdata = [];
            let scoredata = [];
            let correctansdata = [];
            let wrongansdata = [];
            this.info.forEach(function (obj) {
                chartdata.push(obj.data.player_name);
                scoredata.push(obj.data.score);
                correctansdata.push(obj.data.correct_answers);
                wrongansdata.push(obj.data.wrong_answers);
            });
            for (let i = 0; i < chartdata.length; i++) {
                this.NamesData.push(chartdata[i]);
                this.scoreChartData.push(scoredata[i]);
                this.correctanswers.push(correctansdata[i]);
                this.wronganswers.push(wrongansdata[i]);
            }
            this.generatebargraph();
            this.generatelinegraph();
            this.calculateaveragedata();
            this.generatequestionqualitycharts();
            this.generateoverallexperiencecharts();
            this.generatedifficultylevelchart();
            console.log('barchart', this.NamesData);
            console.log('scorechart', this.scoreChartData);
        }, (err) => {
            var _a, _b;
            console.log('display : Failed');
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message =
                        'Something wrong at server side. Sorry for inconvenience!';
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    generatebargraph() {
        //bar chart
        this.barchart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('bar', {
            type: 'bar',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Bar Chart',
                },
            },
            data: {
                labels: this.NamesData,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Points scored',
                        data: this.scoreChartData,
                        backgroundColor: '#3e95cd',
                        // backgroundColor: 'rgba(51,204,255,1)',
                        borderColor: 'rgba(255,0,255,0.4)',
                        fill: false,
                    },
                ],
            },
        });
    }
    generatelinegraph() {
        this.linechart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('line', {
            type: 'line',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Line Chart',
                },
            },
            data: {
                labels: this.NamesData,
                datasets: [
                    {
                        data: this.correctanswers,
                        label: 'Correct answers',
                        borderColor: '#3cba9f',
                        fill: false,
                    },
                    {
                        data: this.wronganswers,
                        label: 'Wrong answers ',
                        borderColor: '#c45850',
                        fill: false,
                    },
                ],
            },
        });
    }
    calculateaveragedata() {
        var no = this.NamesData.length;
        var tempcorrectsum = 0;
        var tempwrongsum = 0;
        for (var i = 0; i < this.correctanswers.length; i++) {
            tempcorrectsum = tempcorrectsum + this.correctanswers[i];
        }
        for (var j = 0; j < this.wronganswers.length; j++) {
            tempwrongsum = tempwrongsum + this.wronganswers[j];
        }
        this.avgcorrectans = tempcorrectsum / no;
        this.avgwrongans = tempwrongsum / no;
        // console.log(this.avgcorrectans);
        // console.log(this.avgwrongans);
    }
    generatequestionqualitycharts() {
        let no = Math.floor((this.questionQuality / this.totalfeedbacks / 5) * 100);
        let val2 = no + '%';
        let val3 = Math.floor(this.questionQuality / this.totalfeedbacks) + '/5';
        this.doughnutchart1 = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('doughnut1', {
            type: 'doughnut',
            plugins: [
                {
                    beforeDraw: function (chart) {
                        var width = chart.width, height = chart.height, ctx = chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 114).toFixed(2);
                        ctx.font = fontSize + 'em sans-serif';
                        ctx.textBaseline = 'middle';
                        var text = val3, textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2;
                        ctx.fillStyle = '#fff';
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    },
                },
            ],
            options: {
                responsive: true,
                cutoutPercentage: 80,
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
            data: {
                // labels: ["percentage"],
                datasets: [
                    {
                        // label: "feedback",
                        backgroundColor: ['rgb(252, 248, 6)', '#115FBA'],
                        borderColor: ['rgb(252, 248, 6)', '#115FBA'],
                        data: [
                            this.questionQuality / this.totalfeedbacks,
                            5 - this.questionQuality / this.totalfeedbacks,
                        ],
                    },
                ],
            },
        });
    }
    generateoverallexperiencecharts() {
        let no = Math.floor((this.overallExperience / this.totalfeedbacks / 5) * 100);
        let val2 = no + '%';
        let val3 = Math.floor(this.overallExperience / this.totalfeedbacks) + '/5';
        this.doughnutchart2 = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('doughnut2', {
            type: 'doughnut',
            plugins: [
                {
                    beforeDraw: function (chart) {
                        var width = chart.width, height = chart.height, ctx = chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 114).toFixed(2);
                        ctx.font = fontSize + 'em sans-serif';
                        ctx.textBaseline = 'middle';
                        var text = val3, textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2;
                        ctx.fillStyle = '#fff';
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    },
                },
            ],
            options: {
                responsive: true,
                cutoutPercentage: 80,
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
            data: {
                // labels: ["percentage"],
                datasets: [
                    {
                        // label: "feedback",
                        backgroundColor: ['rgb(252, 248, 6)', '#115FBA'],
                        borderColor: ['rgb(252, 248, 6)', '#115FBA'],
                        data: [
                            this.overallExperience / this.totalfeedbacks,
                            5 - this.overallExperience / this.totalfeedbacks,
                        ],
                    },
                ],
            },
        });
    }
    generatedifficultylevelchart() {
        let no = Math.floor((this.difficultyLevel / this.totalfeedbacks / 5) * 100);
        let val2 = no + '%';
        let val3 = Math.floor(this.difficultyLevel / this.totalfeedbacks) + '/5';
        this.doughnutchart3 = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('doughnut3', {
            type: 'doughnut',
            plugins: [
                {
                    beforeDraw: function (chart) {
                        var width = chart.width, height = chart.height, ctx = chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 114).toFixed(2);
                        ctx.font = fontSize + 'em sans-serif';
                        ctx.textBaseline = 'middle';
                        var text = val3, textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2;
                        ctx.fillStyle = '#fff';
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    },
                },
            ],
            options: {
                responsive: true,
                cutoutPercentage: 80,
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    onComplete: function () { },
                },
            },
            data: {
                // labels: ["percentage"],
                datasets: [
                    {
                        // label: "feedback",
                        backgroundColor: ['rgb(252, 248, 6)', '#115FBA'],
                        borderColor: ['rgb(252, 248, 6)', '#115FBA'],
                        data: [
                            this.difficultyLevel / this.totalfeedbacks,
                            5 - this.difficultyLevel / this.totalfeedbacks,
                        ],
                    },
                ],
            },
        });
    }
    endChallenge() {
        this.challengeservice.endNowChallenge(this.challengeId).subscribe((res) => {
            console.log('Challnge reports: success');
            console.log(res);
            //this.challengeData = res['data'];
        }, (error) => {
            console.log('Challnge reports: Error');
            console.log(error);
        });
    }
    // TODO : implement <<Change Deadline>>button
    /* To copy Text from Textbox */
    copyInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }
}
ChallengeReportSummaryComponent.ɵfac = function ChallengeReportSummaryComponent_Factory(t) { return new (t || ChallengeReportSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_4__["ChallengeService"])); };
ChallengeReportSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeReportSummaryComponent, selectors: [["app-challenge-report-summary"]], decls: 37, vars: 5, consts: [[1, "row", "qz-bg-blue"], [1, "col"], [1, "col-12", "col-md-6", "m-md-4"], [1, "card", "qz-card-shadow", "qz-border", "qz-rounded-corner-light", "text-black", "my-3"], [1, "row", "py-3", "px-2"], [1, "col-12", "col-sm-3", "ml-3", "p-3", "d-flex", "align-items-center"], [1, "circle-div", "mx-auto", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "col-12", "col-sm"], [1, "form-group"], ["type", "text", "name", "gameURL", "id", "gameURL", 1, "qz-text-input", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["gameUrl", ""], [1, "qz-btn", "qz-bg-blue", "text-white", "mx-3", 3, "click"], [1, "col-12", "col-md-4", "m-md-4"], [1, "card", "qz-card-shadow", "qz-border", "qz-rounded-corner-light", "qz-bg-blue-light", "my-3"], [1, "m-5", "d-flex", "flex-row", "align-items-center", "justify-content-around"], [1, "qz-btn", "qz-bg-exomind", "text-white", "mx-3"], [1, "qz-btn", 3, "click"], ["class", "row qz-bg-blue", 4, "ngIf"], ["class", "row qz-bg-exomind", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-3", "mt-4", "ml-md-5"], [1, "ml-md-5"], [1, "chart-container", 2, "text-align", "center"], [2, "color", "white"], ["id", "can1", "id", "doughnut1", 1, "mt-1", 2, "margin-left", "8px", "width", "100px", "height", "100px"], ["id", "doughnut2", 1, "mt-1", 2, "margin-left", "8px", "width", "100px", "height", "100px"], ["id", "doughnut3", 1, "mt-1", 2, "margin-left", "8px", "width", "100px", "height", "100px"], [1, "row", "qz-bg-exomind"], [1, "col-12", "col-md-5", "m-md-4"], [1, "card", "qz-card-shadow", "qz-border", "qz-rounded-corner-light", 2, "width", "100%", "height", "48vh"], [2, "text-align", "left"], [1, "mt-2", "ml-2"], [1, "chart-container", "ml-3"], ["id", "bar"], ["id", "line"]], template: function ChallengeReportSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invite more players!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Invite players by sharing the URL or game PIN. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Players can join this challenge up until the deadline. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChallengeReportSummaryComponent_Template_input_ngModelChange_20_listener($event) { return ctx.gameURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeReportSummaryComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.copyInputMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Copy URL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Game PIN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Change Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeReportSummaryComponent_Template_button_click_32_listener() { return ctx.endChallenge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "End Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChallengeReportSummaryComponent_div_35_Template, 22, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ChallengeReportSummaryComponent_div_36_Template, 17, 0, "div", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challengeData == null ? null : ctx.challengeData.numberOfPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challengeData == null ? null : ctx.challengeData.game_pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfPlayer > 0 && ctx.totalfeedbacks > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfPlayer > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".chart-container[_ngcontent-%COMP%] {\n  width: 95% !important;\n  height: 40vh !important;\n}\n\n.demo-charts[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.display-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NoYWxsZW5nZS1yZXBvcnQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUdZLG1CQUFBO0FBQ1o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiY2hhbGxlbmdlLXJlcG9ydC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ4LCA2KTtcbn1cbi5kZW1vLWNoYXJ0cyB7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4uZGlzcGxheS1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXktaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeReportSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-report-summary',
                templateUrl: './challenge-report-summary.component.html',
                styleUrls: ['./challenge-report-summary.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"] }, { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_4__["ChallengeService"] }]; }, null); })();


/***/ }),

/***/ "87Vd":
/*!************************************!*\
  !*** ./src/app/models/Question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Question {
    constructor(uuid) {
        this.answers = [];
        this.temp_id = uuid;
        this.timeLimit = 20;
        this.maxCreditPoint = 100;
        this.title = '';
        this.questionType = '';
        this.options = {
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        };
        this.answers = [];
    }
}


/***/ }),

/***/ "AaeB":
/*!****************************************************************************!*\
  !*** ./src/app/pages/challenge/join-challenge/join-challenge.component.ts ***!
  \****************************************************************************/
/*! exports provided: JoinChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinChallengeComponent", function() { return JoinChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");







class JoinChallengeComponent {
    constructor(formBuilder, challengeService, _router, _bgColorService) {
        this.formBuilder = formBuilder;
        this.challengeService = challengeService;
        this._router = _router;
        this._bgColorService = _bgColorService;
        this.joinChallengeForm = this.formBuilder.group({
            gamePin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue');
    }
    get gamePin() {
        return this.joinChallengeForm.get('gamePin');
    }
    onSubmit() {
        console.log(this.joinChallengeForm.value);
        this._router.navigate([
            '/challenge/play/' + this.joinChallengeForm.value.gamePin,
        ]);
    }
}
JoinChallengeComponent.ɵfac = function JoinChallengeComponent_Factory(t) { return new (t || JoinChallengeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"])); };
JoinChallengeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinChallengeComponent, selectors: [["app-join-challenge"]], decls: 21, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "col-sm-4"], ["routerLink", "/login", 1, "display-4", "text-white", "font-weight-bold", "text-center", "mt-5", 2, "cursor", "pointer"], [1, "card", "qz-card", "qz-card-rounded", "qz-card-shadow", "mt-5", "mx-4", "p-5"], [1, "mb-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "gamePin", 1, "qz-form-label"], ["type", "text", "formControlName", "gamePin", "id", "gamePin", "aria-describedby", "gamePin", "placeholder", "Enter Game pin here", 1, "form-control", "qz-text-input"], ["type", "submit", 1, "btn", "btn-primary", "mt-5", "btn-block", "qz-btn", "qz-bg-blue", 3, "disabled"], ["routerLink", "/login", 1, "btn", "btn-primary", "mt-3", "btn-block", "qz-btn", "qz-bg-white-light", "text-black"]], template: function JoinChallengeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join Challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter game Pin to continue...!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JoinChallengeComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Game Pin:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Let's go! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.joinChallengeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.joinChallengeForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinChallengeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-challenge',
                templateUrl: './join-challenge.component.html',
                styleUrls: ['./join-challenge.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiUrl: 'http://localhost:5000',
};


/***/ }),

/***/ "C6wm":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error_message);
} }
function LoginComponent_div_17_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail ID is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid E-mail ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_17_small_2_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors.email);
} }
function LoginComponent_div_22_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_22_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_22_small_1_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_22_small_2_Template, 2, 0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password.errors == null ? null : ctx_r2.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password.errors == null ? null : ctx_r2.password.errors.minlength);
} }
class LoginComponent {
    constructor(formBuilder, _authService, _router, _bgColorService) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._bgColorService = _bgColorService;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        });
    }
    ngOnInit() {
        // Change page color dynamically
        this._bgColorService.updateBodyClass('qz-bg-blue');
        // Check if user already logged in, redirect them based on roles
        try {
            if (this._authService.isLoggedIn()) {
                let userData = this._authService.getUserData();
                if (userData['role'] == "teacher")
                    this._router.navigate(['/teacherdashboard/quiztable']);
                else
                    this._router.navigate(['/studentdashboard/studentchallengetable']);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // tslint:disable-next-line: typedef
    get email() {
        return this.loginForm.get('email');
    }
    // tslint:disable-next-line: typedef
    get password() {
        return this.loginForm.get('password');
    }
    onSubmit() {
        console.log(this.loginForm.value);
        this._authService.login(this.loginForm.value)
            .subscribe((res) => {
            console.log("LOGIN : success");
            console.log(res);
            // for accessing data passed in json 
            this.role = JSON.parse(JSON.stringify(res));
            // console.log(this.role.data.user.role);
            const myRole = this.role.data.user.role;
            // redirection based on role
            if (myRole == "teacher")
                this._router.navigate(['/teacherdashboard/quiztable']);
            else
                this._router.navigate(['/studentdashboard/studentchallengetable']);
        }, (err) => {
            var _a, _b;
            console.log("LOGIN : Failed");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "col-12", "col-sm-9", "col-md-7", "col-lg-5", "col-xl-4"], ["routerLink", "/", 1, "display-4", "text-white", "font-weight-bold", "text-center", "mt-5", 2, "cursor", "pointer"], ["class", "alert alert-danger alert-dismissible fade show mx-4 qz-border qz-rounded-corner qz-card-shadow", "role", "alert", 4, "ngIf"], [1, "card", "qz-card", "qz-card-rounded", "qz-card-shadow", "mt-2", "mx-4", "p-5"], [1, "mb-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "qz-form-label"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "name@domain.com", 1, "form-control", "qz-text-input"], [4, "ngIf"], ["for", "exampleInputPassword1", 1, "qz-form-label"], ["type", "password", "formControlName", "password", "id", "exampleInputPassword1", "placeholder", "at least 8 characters", 1, "form-control", "qz-text-input"], [1, "mt-3", "float-right"], ["routerLink", "/register", 1, "font-weight-bold"], ["type", "submit", 1, "btn", "btn-primary", "mt-5", "btn-block", "qz-btn", "qz-bg-blue"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mx-4", "qz-border", "qz-rounded-corner", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["class", "text-danger mx-2", 4, "ngIf"], [1, "text-danger", "mx-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 8, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hello there! login to continue...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Your e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Not registered yet?\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error_message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.email.invalid && ctx.email.touched)("is-valid", ctx.email.valid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.password.invalid && ctx.password.touched)("is-valid", ctx.password.valid && ctx.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && ctx.password.touched);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "DO8d":
/*!**********************************************!*\
  !*** ./src/app/services/bg-color.service.ts ***!
  \**********************************************/
/*! exports provided: BgColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgColorService", function() { return BgColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BgColorService {
    constructor() {
        this._htmlElement = document.getElementsByTagName('html')[0];
        this._bodyElement = document.getElementsByTagName('body')[0];
    }
    updateBodyClass(customBodyClass) {
        this._htmlElement.className = customBodyClass;
        this._bodyElement.className = customBodyClass;
    }
}
BgColorService.ɵfac = function BgColorService_Factory(t) { return new (t || BgColorService)(); };
BgColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BgColorService, factory: BgColorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BgColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KY19":
/*!*********************************************!*\
  !*** ./src/app/services/reports.service.ts ***!
  \*********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ReportsService {
    constructor(_http) {
        this._http = _http;
        this.API_URL = "http://localhost:3000";
        this.challengeReportURL = this.API_URL + "/api/v1/reports/viewReport/";
        this.feedbackdataURL = this.API_URL + "/api/v1/challenge/fetchFeedback/";
    }
    /*getplayerlist():Observable<any>{
      return this._http.get(this.playerlisturl);
    }*/
    getPlayers(challengeId) {
        return this._http.get(this.challengeReportURL + challengeId + "/players");
    }
    getChallengeReport(challengeId) {
        return this._http.get(this.challengeReportURL + challengeId);
    }
    getfeedbackdata(challengeId) {
        return this._http.post(this.feedbackdataURL + challengeId, {});
    }
    getChallengeReportPlayer(challengeId) {
        return this._http.get(this.challengeReportURL + challengeId + "/player");
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NMU8":
/*!***********************************************!*\
  !*** ./src/app/services/challenge.service.ts ***!
  \***********************************************/
/*! exports provided: ChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChallengeService {
    constructor(_http) {
        this._http = _http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.createChallengeURL = this.API_URL + '/api/v1/challenge/createChallenge/';
        this.DisplayChallengeURL = this.API_URL + '/api/v1/reports/viewReport';
        this.JoinChallengeURL = this.API_URL + '/api/v1/challenge/joinChallenge';
        this.playChallengeURL = this.API_URL + '/api/v1/challenge/playChallenge';
        this.submitChallengeURL = this.API_URL + '/api/v1/challenge/submitChallenge/';
        this.submitFeedbackURL = this.API_URL + '/api/v1/challenge/insertFeedback/';
        this.DisplayStudentChallengeURL = this.API_URL + '/api/v1/reports/viewReport/student';
        this.EndChallengeURL = this.API_URL + '/api/v1/challenge/endChallenge/';
        this.ChangeChallengeURL = this.API_URL + '/api/v1/challenge/changeChallenge/';
    }
    createChallenge(challenge, quiz_id) {
        return this._http.post(this.createChallengeURL + quiz_id, challenge);
    }
    displayChallenges() {
        return this._http.get(this.DisplayChallengeURL);
    }
    displayChallengesStudent() {
        return this._http.get(this.DisplayStudentChallengeURL);
    }
    joinChallenge(game_pin) {
        return this._http.post(this.JoinChallengeURL, { gamePin: game_pin });
    }
    playChallenge(game_pin) {
        console.log('GAME PIN', game_pin);
        return this._http.post(this.playChallengeURL, { gamePin: game_pin });
    }
    submitChallenge(data, challenge_ID) {
        console.log('DATA Submit', data);
        this.challenge_id = challenge_ID;
        console.log('CHALLENGE ID IN SERVICE', challenge_ID);
        return this._http.post(this.submitChallengeURL + challenge_ID, data);
    }
    submitFeedback(data) {
        console.log('DATA Submit', data);
        console.log('CHALLENGE ID IN SUBMIT FEEDBACK SERVICE', this.challenge_id);
        console.log(this.challenge_id);
        if (!this.challenge_id)
            throw Error('Challenge id not defined');
        return this._http.post(this.submitFeedbackURL + this.challenge_id, data);
    }
    endNowChallenge(challengeId) {
        this.challenge_id = challengeId;
        console.log(this.EndChallengeURL + this.challenge_id);
        return this._http.post(this.EndChallengeURL + this.challenge_id, '');
    }
    changeChallenge(challengeId) {
        this.challenge_id = challengeId;
        console.log(this.ChangeChallengeURL + this.challenge_id);
        return this._http.post(this.ChangeChallengeURL + this.challenge_id, '');
    }
}
ChallengeService.ɵfac = function ChallengeService_Factory(t) { return new (t || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChallengeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChallengeService, factory: ChallengeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NxgW":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");



class TokenInterceptorService {
    constructor(_authService) {
        this._authService = _authService;
    }
    intercept(request, next) {
        if (this._authService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._authService.getJWTToken()}`
                }
            });
        }
        return next.handle(request);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "OOmA":
/*!************************************************************************!*\
  !*** ./src/app/teacher/teacherdashboard/teacherdashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: TeacherDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDashboardComponent", function() { return TeacherDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TeacherDashboardComponent {
    constructor(_bgColorService, _authService, _router) {
        this._bgColorService = _bgColorService;
        this._authService = _authService;
        this._router = _router;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue-light');
    }
    logout() {
        console.log("in logout");
        this._authService.logOut();
        this._router.navigate(['/']);
    }
}
TeacherDashboardComponent.ɵfac = function TeacherDashboardComponent_Factory(t) { return new (t || TeacherDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TeacherDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherDashboardComponent, selectors: [["app-teacherdashboard"]], decls: 30, vars: 0, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col"], [1, "col-10"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], ["routerLink", "/", 1, "text-white", 2, "cursor", "pointer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "navbar-default", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "quiztable", 1, "nav-link"], ["routerLink", "challengetable", 1, "nav-link"], ["routerLink", "/quiz/create", 1, "nav-link"], [1, "btn", "qz-btn", "qz-bg-white", 3, "click"], [1, "row"], [1, "col-sm-9"]], template: function TeacherDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherDashboardComponent_Template_button_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n\n.illustrations[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RlYWNoZXJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0FBQUY7O0FBaUJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWhCRjs7QUFrQkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZkYiLCJmaWxlIjoidGVhY2hlcmRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLy8gcGFkZGluZzogMCA1MHB4IDAgMTAwcHg7XG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcbn1cbi8vIG5hdiAubG9nb3tcbi8vICAgY29sb3I6ICNmZmY7XG4vLyB9XG4vLyBuYXYgdWx7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vIH1cbi8vIG5hdiB1bCBsaXtcbi8vICAgLy8gbWFyZ2luOiAwIDVweDtcbi8vIH1cbm5hdiB1bCBsaSBhe1xuICBjb2xvcjogI2YyZjJmMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8vIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG5uYXYgdWwgbGkgYS5hY3RpdmUsXG5uYXYgdWwgbGkgYTpob3ZlcntcbiAgY29sb3I6ICMxMTE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbGx1c3RyYXRpb25ze1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacherdashboard',
                templateUrl: './teacherdashboard.component.html',
                styleUrls: ['./teacherdashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "OYXF":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/student/student-report/studentchallenge-report-summary/studentchallenge-report-summary.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StudentchallengeReportSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentchallengeReportSummaryComponent", function() { return StudentchallengeReportSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function StudentchallengeReportSummaryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No. of correct answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No. of wrong answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.challengeData.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.challengeData.correct_answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.challengeData.wrong_answers);
} }
function StudentchallengeReportSummaryComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey Sorry!! Come back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See you when the challenge ends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentchallengeReportSummaryComponent {
    constructor(_Activatedroute, reportsservice) {
        this._Activatedroute = _Activatedroute;
        this.reportsservice = reportsservice;
    }
    ngOnInit() {
        this.challengeId = this._Activatedroute.parent.snapshot.paramMap.get("id");
        this.reportsservice.getChallengeReportPlayer(this.challengeId).subscribe((res) => {
            console.log("Challnge reports: success");
            console.log(res);
            this.challengeData = res['data'];
            this.a = new Date(this.challengeData.end_date);
            this.endDate = this.a.getTime();
            console.log("END DATE " + this.a);
            console.log(this.endDate);
            const date = new Date();
            this.currentDate = date.getTime();
            console.log(this.currentDate);
        }, (error) => {
            console.log("Challnge reports: Error");
            console.log(error);
        });
    }
}
StudentchallengeReportSummaryComponent.ɵfac = function StudentchallengeReportSummaryComponent_Factory(t) { return new (t || StudentchallengeReportSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"])); };
StudentchallengeReportSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentchallengeReportSummaryComponent, selectors: [["app-studentchallenge-report-summary"]], decls: 9, vars: 3, consts: [[1, "row", "qz-bg-blue"], [1, "col"], [1, "col-9", "m-4"], [1, "text-white"], ["class", "row py-3 px-2 justify-content-center", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "row", "py-3", "px-2", "justify-content-center"], [1, "col-12", "col-md-4", "m-2", "p-3", "d-flex", "align-items-center"], [1, "card", "qz-border", "qz-rounded-corner-light", "text-black", "my-3", "p-4", "data-card"], [1, "text-center"]], template: function StudentchallengeReportSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentchallengeReportSummaryComponent_div_5_Template, 19, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentchallengeReportSummaryComponent_ng_template_6_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.challengeData.player_name, " !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endDate < ctx.currentDate)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".circle-div[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n  border: 10px solid blue;\n}\n\n.table-box[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 330px;\n  overflow-y: scroll;\n  background: #fff;\n  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.3);\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nthead[_ngcontent-%COMP%] {\n  color: #030303;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0dWRlbnRjaGFsbGVuZ2UtcmVwb3J0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBQ0U7RUFFRSxrQkFBQTtBQUNKOztBQUNFO0VBRUUsY0FBQTtBQUNKOztBQUdFO0VBQ0UsV0FBQTtBQUFKIiwiZmlsZSI6InN0dWRlbnRjaGFsbGVuZ2UtcmVwb3J0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlLWRpdntcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgYmx1ZTtcbn1cblxuLnRhYmxlLWJveHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwMHB4IHJnYmEoMCwwLDAsMC4zKTtcblxuICB9XG4gIHRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRhYmxlLHRoLHRke1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDUyNzc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRoZWFke1xuICAgIC8vIGJhY2tncm91bmQ6ICNkN2Q4ZDg7XG4gICAgY29sb3I6IHJnYigzLCAzLCAzKTtcbiAgICBcbiAgfSBcblxuICAuZGF0YS1jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentchallengeReportSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentchallenge-report-summary',
                templateUrl: './studentchallenge-report-summary.component.html',
                styleUrls: ['./studentchallenge-report-summary.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }]; }, null); })();


/***/ }),

/***/ "OqH8":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/quiz/create-quiz/question-card/question-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: QuestionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCardComponent", function() { return QuestionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class QuestionCardComponent {
    constructor() {
        this.deleteQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faTrashAlt = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
    }
    ngOnInit() {
    }
    onDelete() {
        console.log("IN Q-card");
        this.deleteQuestion.emit(this.question.temp_id);
    }
    checkOptionMarkedAsAnswer(optionNo) {
        //console.log(this.question.answers)
        if (this.question.answers.indexOf(optionNo) !== -1) {
            return 'visible';
        }
        else {
            return 'hidden';
        }
    }
}
QuestionCardComponent.ɵfac = function QuestionCardComponent_Factory(t) { return new (t || QuestionCardComponent)(); };
QuestionCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionCardComponent, selectors: [["app-question-card"]], inputs: { question: "question", index: "index" }, outputs: { deleteQuestion: "deleteQuestion" }, decls: 27, vars: 8, consts: [[1, "question-card", "p-3"], [1, "row"], [1, "col-1", "mx-0", "pl-2"], [1, "d-flex", "align-items-end", 2, "height", "100%"], [3, "icon", "click"], [1, "col-10"], [1, "text-left", "font-weight-bold"], [1, "svg-container"], ["width", "95%", "height", "7rem", "xmlns", "http://www.w3.org/2000/svg"], ["width", "100%", "height", "100%", "fill", "#E5E5E5"], ["x", "50%", "y", "15%", "width", "100%", "dominant-baseline", "middle", "text-anchor", "middle", 2, "font-size", "1rem", "text-align", "center", "width", "100%"], ["cx", "15%", "cy", "40%", "r", "8%", "fill", "#C4C4C4", "visibility", "visible"], ["x", "15%", "y", "40%", "width", "100%", "dominant-baseline", "middle", "text-anchor", "middle", 2, "font-size", "0.8em", "text-align", "center", "width", "100%"], ["x", "5%", "y", "65%", "width", "43%", "height", "10%", "fill", "#C4C4C4"], ["cx", "43%", "cy", "70%", "r", "2%", "fill", "#0FA81A"], ["x", "52%", "y", "65%", "width", "43%", "height", "10%", "fill", "#C4C4C4"], ["cx", "90%", "cy", "70%", "r", "2%", "fill", "#0FA81A"], ["x", "5%", "y", "80%", "width", "43%", "height", "10%", "fill", "#C4C4C4"], ["cx", "43%", "cy", "85%", "r", "2%", "fill", "#0FA81A"], ["x", "52%", "y", "80%", "width", "43%", "height", "10%", "fill", "#C4C4C4"], ["cx", "90%", "cy", "85%", "r", "2%", "fill", "#0FA81A"]], template: function QuestionCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionCardComponent_Template_fa_icon_click_4_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "text", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTrashAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.index + 1, " Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question.title || "Enter question..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question.timeLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("visibility", ctx.checkOptionMarkedAsAnswer("option1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("visibility", ctx.checkOptionMarkedAsAnswer("option2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("visibility", ctx.checkOptionMarkedAsAnswer("option3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("visibility", ctx.checkOptionMarkedAsAnswer("option4"));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".question-card[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  margin-bottom: 1px;\n  background: white;\n  text-align: right;\n  height: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJxdWVzdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-card',
                templateUrl: './question-card.component.html',
                styleUrls: ['./question-card.component.scss']
            }]
    }], function () { return []; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "QJVI":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quiz/display-quiz/display-quiz.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayQuizComponent", function() { return DisplayQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/quiz.service */ "ofzi");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DisplayQuizComponent_ng_container_45_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.options.option1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.options.option2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.options.option3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.options.option4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.answers);
} }
function DisplayQuizComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayQuizComponent_ng_container_45_ng_container_1_Template, 16, 7, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.questions);
} }
class DisplayQuizComponent {
    constructor(quizServe, _authService, _router, _bgColorService) {
        this.quizServe = quizServe;
        this._authService = _authService;
        this._router = _router;
        this._bgColorService = _bgColorService;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue-light');
        this.quizServe.getQuizData()
            .subscribe((res) => {
            console.log("display : success");
            this.info = JSON.parse(JSON.stringify(res));
            // console.log("INFO.DATA", this.info.data.quiz);
            this.quiz_info = this.info.data.quiz;
            this.title = this.quiz_info[0].title;
        }, (err) => {
            var _a, _b;
            console.log("display : Failed");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    logout() {
        console.log("in logout");
        this._authService.logOut();
        this._router.navigate(['/']);
    }
}
DisplayQuizComponent.ɵfac = function DisplayQuizComponent_Factory(t) { return new (t || DisplayQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"])); };
DisplayQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayQuizComponent, selectors: [["app-display-quiz"]], decls: 46, vars: 2, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col-10"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], ["routerLink", "/", 1, "text-white", 2, "cursor", "pointer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "navbar-default", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "/teacherdashboard/quiztable", 1, "nav-link"], ["routerLink", "/teacherdashboard/challengetable", 1, "nav-link"], ["routerLink", "/quiz/create", 1, "nav-link"], [1, "btn", "qz-btn", "qz-bg-white", 3, "click"], [2, "margin-top", "70px"], [1, "table-box", "qz-card", 2, "margin-top", "30px"], ["cellpadding", "10 "], [1, "qz-bg-blue", "text-white"], [4, "ngFor", "ngForOf"]], template: function DisplayQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayQuizComponent_Template_button_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sr.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Correct Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DisplayQuizComponent_ng_container_45_Template, 2, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quiz_info);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n\n.table-box[_ngcontent-%COMP%] {\n  height: 330px;\n  overflow-y: scroll;\n  background: #fff;\n  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.3);\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nthead[_ngcontent-%COMP%] {\n  color: #030303;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Rpc3BsYXktcXVpei5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBREE7OztFQUdFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0YiLCJmaWxlIjoiZGlzcGxheS1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xufVxubmF2IHVsIGxpIGEuYWN0aXZlLFxubmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzExMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRhYmxlLWJveCB7XG4gIC8vIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMzMwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSxcbnRoLFxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50aGVhZCB7XG4gIGNvbG9yOiByZ2IoMywgMywgMyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-quiz',
                templateUrl: './display-quiz.component.html',
                styleUrls: ['./display-quiz.component.scss']
            }]
    }], function () { return [{ type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "RFeY":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/quiz/create-quiz/edit-question/edit-question.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuestionComponent", function() { return EditQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class EditQuestionComponent {
    constructor() { }
    ngOnInit() {
        this.activeQuestion.subscribe((question) => {
            //console.log("in Edit QU")
            this._activeQuestion = question;
            this._activeQuestion.questionType = "singleselect";
            //console.log(this._activeQuestion);
        });
    }
    selectAnswer(event) {
        let value = event.target.value;
        let isChecked = event.target.checked;
        isChecked ? this._activeQuestion.answers.push(value) : this._activeQuestion.answers.splice(this._activeQuestion.answers.indexOf(value), 1);
        if (this._activeQuestion.answers.length > 1) {
            this._activeQuestion.questionType = "multiselect";
        }
        else {
            this._activeQuestion.questionType = "singleselect";
        }
        // console.log(this._activeQuestion.answers)
    }
    isOptionSelectedAsAnswer(optionNo) {
        if (this._activeQuestion.answers.indexOf(optionNo) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
}
EditQuestionComponent.ɵfac = function EditQuestionComponent_Factory(t) { return new (t || EditQuestionComponent)(); };
EditQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditQuestionComponent, selectors: [["app-edit-question"]], inputs: { activeQuestion: "activeQuestion" }, decls: 71, vars: 12, consts: [[1, "d-flex", "flex-column", "justify-content-between", "wrapper"], [1, "row"], [1, "col"], ["id", "questioninput", "type", "text", "placeholder", "Your question here", 1, "qz-border", "m-3", "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "p-3", "justify-content-center"], [1, "col-md-4", "mt-3"], [1, "dropdown-div"], ["for", "answer-mode"], ["name", "answer-mode", 1, "mx-2", "qz-border", "form-select", 2, "border-radius", "5px", 3, "ngModel", "ngModelChange"], ["value", "singleselect"], ["value", "multiselect"], ["for", "timer"], ["name", "timer", 1, "mx-2", "qz-border", "form-select", 2, "border-radius", "5px", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "60"], ["value", "90"], ["value", "120"], ["value", "180"], ["value", "240"], ["for", "points"], ["name", "points", 1, "mx-2", "qz-border", "form-select", 2, "border-radius", "5px", 3, "ngModel", "ngModelChange"], ["value", "100"], ["value", "200"], ["value", "300"], ["value", "400"], [1, "col-md-6"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Add Answer 1", "aria-label", "Text input with checkbox", 1, "form-control", "options-input", "px-4", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["value", "option1", "type", "checkbox", "aria-label", "Checkbox for following text input", 3, "checked", "change"], ["type", "text", "placeholder", "Add Answer 3(Optional)", "aria-label", "Text input with checkbox", 1, "form-control", "options-input", "px-4", 3, "ngModel", "ngModelChange"], ["value", "option3", "type", "checkbox", "aria-label", "Checkbox for following text input", 3, "checked", "change"], ["type", "text", "placeholder", "Add Answer 2", "aria-label", "Text input with checkbox", 1, "form-control", "options-input", "px-4", 3, "ngModel", "ngModelChange"], ["value", "option2", "type", "checkbox", "aria-label", "Checkbox for following text input", 3, "checked", "change"], ["type", "text", "placeholder", "Add Answer 4(Optional)", "aria-label", "Text input with checkbox", 1, "form-control", "options-input", "px-4", 3, "ngModel", "ngModelChange"], ["value", "option4", "type", "checkbox", "aria-label", "Checkbox for following text input", 3, "checked", "change"]], template: function EditQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_input_ngModelChange_3_listener($event) { return ctx._activeQuestion.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Answer mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_select_ngModelChange_9_listener($event) { return ctx._activeQuestion.questionType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Single select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Multi select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select time (seconds):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_select_ngModelChange_18_listener($event) { return ctx._activeQuestion.timeLimit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "180");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "240");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select points:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_select_ngModelChange_39_listener($event) { return ctx._activeQuestion.maxCreditPoint = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_input_ngModelChange_51_listener($event) { return ctx._activeQuestion.options.option1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditQuestionComponent_Template_input_change_54_listener($event) { return ctx.selectAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_input_ngModelChange_56_listener($event) { return ctx._activeQuestion.options.option3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditQuestionComponent_Template_input_change_59_listener($event) { return ctx.selectAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_input_ngModelChange_62_listener($event) { return ctx._activeQuestion.options.option2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditQuestionComponent_Template_input_change_65_listener($event) { return ctx.selectAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditQuestionComponent_Template_input_ngModelChange_67_listener($event) { return ctx._activeQuestion.options.option4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditQuestionComponent_Template_input_change_70_listener($event) { return ctx.selectAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.questionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.timeLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.maxCreditPoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.options.option1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isOptionSelectedAsAnswer("option1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.options.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isOptionSelectedAsAnswer("option3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.options.option2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isOptionSelectedAsAnswer("option2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._activeQuestion.options.option4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isOptionSelectedAsAnswer("option4"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 93vh;\n  max-height: 93vh;\n  height: 93vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n#questioninput[_ngcontent-%COMP%] {\n  object-position: center;\n  height: 3.5em;\n  width: 95%;\n  font-size: 2em;\n  text-align: center;\n  border-radius: 0.75em;\n  outline: none;\n}\n\n.dropdown-div[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.options-input[_ngcontent-%COMP%] {\n  object-position: center;\n  height: 5rem;\n  width: 90%;\n  font-size: 1.5em;\n  text-align: left;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VkaXQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJlZGl0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gICAgbWluLWhlaWdodDogOTN2aDtcbiAgICBtYXgtaGVpZ2h0OiA5M3ZoO1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbn1cbiNxdWVzdGlvbmlucHV0e1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZHJvcGRvd24tZGl2e1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi8vIC5vcHRpb25zLWRpdiB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMC42ZW07XG4vLyB9XG5cbi5vcHRpb25zLWlucHV0e1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC8vYm9yZGVyLXJhZGl1czogMC42ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-question',
                templateUrl: './edit-question.component.html',
                styleUrls: ['./edit-question.component.scss']
            }]
    }], function () { return []; }, { activeQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RWkO":
/*!************************************************************************!*\
  !*** ./src/app/student/studentdashboard/studentdashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentdashboardComponent", function() { return StudentdashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class StudentdashboardComponent {
    constructor(_bgColorService, _authService, _router) {
        this._bgColorService = _bgColorService;
        this._authService = _authService;
        this._router = _router;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass("qz-bg-blue-light");
    }
    logout() {
        console.log("in logout");
        this._authService.logOut();
        this._router.navigate(['/']);
    }
}
StudentdashboardComponent.ɵfac = function StudentdashboardComponent_Factory(t) { return new (t || StudentdashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StudentdashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentdashboardComponent, selectors: [["app-studentdashboard"]], decls: 27, vars: 0, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col"], [1, "col-10"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], ["routerLink", "/", 1, "text-white", 2, "cursor", "pointer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "/challenge/join-challenge", 1, "nav-link"], ["routerLink", "studentchallengetable", 1, "nav-link"], [1, "btn", "qz-btn", "qz-bg-white", 3, "click"], [1, "row"], [1, "col-sm-9"]], template: function StudentdashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentdashboardComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0dWRlbnRkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0FBQUY7O0FBaUJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWhCRjs7QUFrQkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FBZkYiLCJmaWxlIjoic3R1ZGVudGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLy8gcGFkZGluZzogMCA1MHB4IDAgMTAwcHg7XG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcbn1cbi8vIG5hdiAubG9nb3tcbi8vICAgY29sb3I6ICNmZmY7XG4vLyB9XG4vLyBuYXYgdWx7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vIH1cbi8vIG5hdiB1bCBsaXtcbi8vICAgLy8gbWFyZ2luOiAwIDVweDtcbi8vIH1cbm5hdiB1bCBsaSBhe1xuICBjb2xvcjogI2YyZjJmMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8vIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG5uYXYgdWwgbGkgYS5hY3RpdmUsXG5uYXYgdWwgbGkgYTpob3ZlcntcbiAgY29sb3I6ICMxMTE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentdashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentdashboard',
                templateUrl: './studentdashboard.component.html',
                styleUrls: ['./studentdashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Rb8g":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quiz/create-quiz/create-quiz.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizComponent", function() { return CreateQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Question */ "87Vd");
/* harmony import */ var src_app_models_Quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Quiz */ "rfKV");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/quiz.service */ "ofzi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sidebar_questions_sidebar_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-questions/sidebar-questions.component */ "sbA5");
/* harmony import */ var _edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-question/edit-question.component */ "RFeY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function CreateQuizComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateQuizComponent_div_67_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.dismissErrorAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function CreateQuizComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quiz created successfully! You will automatically get redirected...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class CreateQuizComponent {
    constructor(_bgColorService, _quizService, _router) {
        this._bgColorService = _bgColorService;
        this._quizService = _quizService;
        this._router = _router;
        // Observable Question sources
        this.activeQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Observable string streams
        this.activeQuestion$ = this.activeQuestion.asObservable();
        this.quiz = new src_app_models_Quiz__WEBPACK_IMPORTED_MODULE_3__["Quiz"]();
        this.questions = [];
        // visual feedback related
        this.isError = false;
        this.isSuccess = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue');
        this.addQuestion();
        document.getElementById('quizSettingsBtn').click();
    }
    onAddQuestion() {
        this.addQuestion();
    }
    onDeleteQuestion(questionTempId) {
        this.deleteQuestion(questionTempId);
    }
    setActiveQuestion(question) {
        this.activeQuestion.next(question);
    }
    onClickSave() {
        this.saveQuiz();
    }
    dismissErrorAlert() {
        this.isError = false;
    }
    saveQuiz() {
        this.isError = false;
        console.log('in saveQuiz');
        if (this.validateQuiz()) {
            this.quiz.questions = this.questions;
            console.log(this.quiz);
            this._quizService.createQuiz(this.quiz).subscribe((response) => {
                console.log(response);
                this.isSuccess = true;
                // this will redirect to login after 3 seconds
                setTimeout(() => {
                    this._router.navigate(['/teacherdashboard/quiztable']);
                }, 3000);
            }, (error) => {
                var _a, _b;
                console.log(error);
                this.isError = true;
                this.errorMessage = (_b = (_a = error.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    this.errorMessage = `${error.error.message}`;
                }
                if (!this.errorMessage) {
                    //console.log(err.status);
                    if (error.status == 0 || error.status == 500) {
                        this.errorMessage =
                            'Something wrong at server side. Sorry for inconvenience!';
                    }
                    if (!this.errorMessage) {
                        this.errorMessage = error.message;
                    }
                }
            });
        }
        else {
            // not need to set error message. Because appropriate error message will set in validation function.
            this.isError = true;
            console.log(this.isError);
        }
    }
    getAllValuesFromObjects(_object) {
        return Object.keys(_object).map((k) => _object[k]);
    }
    validateAllQuestions() {
        let invalidQuestionsCount = 0;
        for (let i = 0; i < this.questions.length; i++) {
            let _question = this.questions[i];
            let isInvalidQuestion = false;
            console.log(_question.options);
            if (_question.title == '') {
                isInvalidQuestion = true;
            }
            else if ([...new Set(this.getAllValuesFromObjects(_question.options))].length < 3) {
                isInvalidQuestion = true;
            }
            else if (_question.answers.length < 1) {
                isInvalidQuestion = true;
            }
            if (isInvalidQuestion) {
                invalidQuestionsCount++;
            }
        }
        return invalidQuestionsCount > 0 ? false : true;
    }
    validateQuiz() {
        let isQuizInvalid = false;
        if (!this.validateAllQuestions()) {
            isQuizInvalid = true;
            this.errorMessage =
                'Some questions are invalid ! Please check the questions...';
        }
        else if (this.quiz.title == '') {
            isQuizInvalid = true;
            this.errorMessage = 'You must enter Quiz title !';
        }
        return !isQuizInvalid;
    }
    addQuestion() {
        let newQuestion = new src_app_models_Question__WEBPACK_IMPORTED_MODULE_2__["Question"](Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])());
        this.questions.push(newQuestion);
        this.setActiveQuestion(newQuestion);
    }
    deleteQuestion(questionTempId) {
        const toDelete = new Set([questionTempId]);
        this.questions = this.questions.filter((obj) => !toDelete.has(obj.temp_id));
    }
}
CreateQuizComponent.ɵfac = function CreateQuizComponent_Factory(t) { return new (t || CreateQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CreateQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateQuizComponent, selectors: [["app-create-quiz"]], decls: 69, vars: 10, consts: [[1, "container-fluid", "main-container"], [1, "row"], [1, "col-md-2", "col-12"], ["routerLink", "/", 1, "text-white", "my-2", "mx-3", "font-weight-bold"], [1, "col-md-4", "col-12", "my-2"], [1, "form-inline", "m-0", "p-0"], ["type", "text", "id", "quiz-title", "placeholder", "Enter title for quiz", 1, "form-control", "qz-border", 2, "border-radius", "8px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "quizSettingsBtn", "data-toggle", "modal", "data-target", "#saveQuizModal", 1, "qz-btn", "qz-bg-purple-light", "text-black", "mx-3", "my-0", 2, "color", "black"], [1, "fas", "fa-edit"], [1, "col-md"], [1, "col-md-3", "col-12"], [1, "float-md-right", "float-left"], ["routerLink", "/teacherdashboard/quiztable", 1, "qz-btn", "qz-bg-exomind", "text-white", "mx-3", "my-2"], ["id", "saveQuizBtn", 1, "qz-btn", "qz-bg-exomind", "text-white", "mr-4", "my-2", 3, "click"], [1, "row", "flex-sm-column-reverse", "flex-md-row"], [1, "col-md-2", "col-12", "px-0", 2, "height", "100%"], [3, "questions", "addQuestion", "setActiveQuestion", "deleteQuestion"], [1, "col-12", "col-sm-10", "col-md-9", "col-lg-10", "col-xl-10", "px-5", "qz-bg-blue-light"], [3, "activeQuestion"], ["id", "saveQuizModal", "tabindex", "-1", "aria-labelledby", "saveQuizModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "qz-card", "qz-card-shadow"], [1, "modal-header"], ["id", "saveQuizModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "quiz-title", 1, "col-form-label", "qz-form-label"], ["type", "text", "id", "quiz-title", "placeholder", "Enter title for quiz...", 1, "form-control", "qz-text-input", 3, "ngModel", "ngModelChange"], ["for", "quiz-category", 1, "col-form-label", "qz-form-label"], ["name", "quiz-category", 1, "mx-2", "qz-border", "qz-text-input", 2, "width", "95%", "height", "40px", "border-radius", "8px", 3, "ngModel", "ngModelChange"], ["value", "Default"], ["value", "History"], ["value", "Technology"], ["value", "Mathematics"], ["value", "Science"], ["value", "General Knowledge"], ["value", "Sports"], ["value", "Other"], ["for", "quiz-description", 1, "col-form-label", "qz-form-label"], ["id", "quiz-description", "placeholder", "Enter description for quiz...", 1, "form-control", "qz-text-input", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "qz-btn", "qz-bg-exomind", "text-white"], ["class", "alert alert-danger alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"]], template: function CreateQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateQuizComponent_Template_input_ngModelChange_7_listener($event) { return ctx.quiz.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u270E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Exit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateQuizComponent_Template_button_click_16_listener() { return ctx.onClickSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-sidebar-questions", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addQuestion", function CreateQuizComponent_Template_app_sidebar_questions_addQuestion_20_listener() { return ctx.onAddQuestion(); })("setActiveQuestion", function CreateQuizComponent_Template_app_sidebar_questions_setActiveQuestion_20_listener($event) { return ctx.setActiveQuestion($event); })("deleteQuestion", function CreateQuizComponent_Template_app_sidebar_questions_deleteQuestion_20_listener($event) { return ctx.onDeleteQuestion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-edit-question", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateQuizComponent_Template_input_ngModelChange_36_listener($event) { return ctx.quiz.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateQuizComponent_Template_select_ngModelChange_41_listener($event) { return ctx.quiz.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "General Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateQuizComponent_Template_textarea_ngModelChange_61_listener($event) { return ctx.quiz.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CreateQuizComponent_div_67_Template, 8, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CreateQuizComponent_div_68_Template, 8, 0, "div", 45);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quiz.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeQuestion", ctx.activeQuestion$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quiz.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quiz.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quiz.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccess);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _sidebar_questions_sidebar_questions_component__WEBPACK_IMPORTED_MODULE_9__["SidebarQuestionsComponent"], _edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_10__["EditQuestionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NyZWF0ZS1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImNyZWF0ZS1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-quiz',
                templateUrl: './create-quiz.component.html',
                styleUrls: ['./create-quiz.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__["BgColorService"] }, { type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__["QuizService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chatbot/chatbot.component */ "riFY");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chatbot");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _pages_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__["ChatbotComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Xk4m":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/challenge/post-challenge-feedback/post-challenge-feedback.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PostChallengeFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostChallengeFeedbackComponent", function() { return PostChallengeFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating/rating.component */ "fS3j");







function PostChallengeFeedbackComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-rating", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingClick", function PostChallengeFeedbackComponent_tr_22_Template_app_rating_ratingClick_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.ratingComponentClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.parameter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", item_r2.rating)("itemId", item_r2.id);
} }
function PostChallengeFeedbackComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostChallengeFeedbackComponent_div_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dismissErrorAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error_message);
} }
class PostChallengeFeedbackComponent {
    constructor(_Activatedroute, _challengeServe, _router, location, _bgColorService) {
        this._Activatedroute = _Activatedroute;
        this._challengeServe = _challengeServe;
        this._router = _router;
        this.location = location;
        this._bgColorService = _bgColorService;
        this.items = [
            { 'id': 0, 'rating': 0, 'parameter': 'Question Quality' },
            { 'id': 1, 'rating': 0, 'parameter': 'Overall Experience' },
            { 'id': 2, 'rating': 0, 'parameter': 'Difficulty Level' }
        ];
        history.pushState(null, null, window.location.href);
        this.location.onPopState(() => {
            history.pushState(null, null, window.location.href);
        });
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue');
        this.challengeId = this._Activatedroute.snapshot.paramMap.get("id");
        console.log("challengeId:" + this.challengeId);
    }
    dismissErrorAlert() {
        this.isError = false;
    }
    ratingComponentClick(clickObj) {
        this.item = this.items.find(((i) => i.id === clickObj.itemId));
        if (!!this.item) {
            this.item.rating = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = this.item.parameter;
        }
        console.log("RATING FOR PARAM :", this.items);
    }
    submitFeedback() {
        // console.log("Subm")
        this._challengeServe.submitFeedback(this.items)
            .subscribe((res) => {
            console.log("Submit : success");
            console.log(res);
            this._router.navigate(['/studentdashboard/studentchallengetable']);
        }, (err) => {
            var _a, _b;
            this.isError = true;
            console.log("Submit : Failed");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    skipFeedback() {
        this._router.navigate(['/studentdashboard/studentchallengetable']);
    }
}
PostChallengeFeedbackComponent.ɵfac = function PostChallengeFeedbackComponent_Factory(t) { return new (t || PostChallengeFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"])); };
PostChallengeFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostChallengeFeedbackComponent, selectors: [["app-post-challenge-feedback"]], decls: 33, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "mt-5"], [1, "mt-3"], [1, "row", "mt-3"], [1, "col-12", "col-md-6"], [1, "panel", "panel-primary"], [1, "table-responsive"], [1, "table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-purple-light", 3, "click"], ["type", "button", 1, "btn", "qz-btn", "float-md-right", "qz-bg-white", "mt-md-0", 3, "click"], ["class", "alert alert-danger alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], [3, "rating", "itemId", "ratingClick"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function PostChallengeFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Successfully Submitted Quiz !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Feedback Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Parameter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostChallengeFeedbackComponent_tr_22_Template, 5, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostChallengeFeedbackComponent_Template_button_click_27_listener() { return ctx.skipFeedback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Skip Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostChallengeFeedbackComponent_Template_button_click_29_listener() { return ctx.submitFeedback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Submit Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PostChallengeFeedbackComponent_div_32_Template, 8, 1, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  color: azure;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: greenyellow;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Bvc3QtY2hhbGxlbmdlLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwiZmlsZSI6InBvc3QtY2hhbGxlbmdlLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBjb2xvcjogYXp1cmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgLy8gcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbn1cblxuaDEge1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgLy8gcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbn1cblxuLnRhYmxlIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostChallengeFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-challenge-feedback',
                templateUrl: './post-challenge-feedback.component.html',
                styleUrls: ['./post-challenge-feedback.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/registration/registration.component */ "n1O7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _teacher_teacherdashboard_teacherdashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/teacherdashboard/teacherdashboard.component */ "OOmA");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/token-interceptor.service */ "NxgW");
/* harmony import */ var _pages_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/quiz/create-quiz/create-quiz.component */ "Rb8g");
/* harmony import */ var _pages_quiz_create_quiz_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/quiz/create-quiz/edit-question/edit-question.component */ "RFeY");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_quiz_create_quiz_sidebar_questions_sidebar_questions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/quiz/create-quiz/sidebar-questions/sidebar-questions.component */ "sbA5");
/* harmony import */ var _pages_quiz_create_quiz_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quiz/create-quiz/question-card/question-card.component */ "OqH8");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pages_challenge_challenge_report_challenge_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/challenge/challenge-report/challenge-report.component */ "+GIY");
/* harmony import */ var _pages_challenge_challenge_report_challenge_report_summary_challenge_report_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/challenge/challenge-report/challenge-report-summary/challenge-report-summary.component */ "6eWk");
/* harmony import */ var _pages_quiz_play_quiz_play_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/quiz/play-quiz/play-quiz.component */ "rT/M");
/* harmony import */ var _pages_quiz_host_quiz_host_quiz_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/quiz/host-quiz/host-quiz.component */ "0pRE");
/* harmony import */ var angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-bootstrap-datetimepicker */ "7I+D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _teacher_quiztable_quiztable_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teacher/quiztable/quiztable.component */ "vW7s");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _teacher_challengetable_challengetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teacher/challengetable/challengetable.component */ "xEKz");
/* harmony import */ var _pages_quiz_display_quiz_display_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/quiz/display-quiz/display-quiz.component */ "QJVI");
/* harmony import */ var _pages_challenge_challenge_report_playerlist_playerlist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/challenge/challenge-report/playerlist/playerlist.component */ "t1uh");
/* harmony import */ var _pages_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/chatbot/chatbot.component */ "riFY");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _student_studentdashboard_studentdashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./student/studentdashboard/studentdashboard.component */ "RWkO");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./student/student.component */ "hLTS");
/* harmony import */ var _student_studentchallangetable_studentchallangetable_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./student/studentchallangetable/studentchallangetable.component */ "vlVf");
/* harmony import */ var _pages_challenge_post_challenge_feedback_post_challenge_feedback_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/challenge/post-challenge-feedback/post-challenge-feedback.component */ "Xk4m");
/* harmony import */ var _pages_challenge_join_challenge_join_challenge_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/challenge/join-challenge/join-challenge.component */ "AaeB");
/* harmony import */ var _pages_challenge_post_challenge_feedback_rating_rating_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/challenge/post-challenge-feedback/rating/rating.component */ "fS3j");
/* harmony import */ var _student_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./student/student-report/student-report.component */ "iY1d");
/* harmony import */ var _student_student_report_studentchallenge_report_summary_studentchallenge_report_summary_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./student/student-report/studentchallenge-report-summary/studentchallenge-report-summary.component */ "OYXF");
/* harmony import */ var _pages_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/quiz-info/quiz-info.component */ "eah6");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimeDateModule"],
            angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimePickerModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
        _teacher_teacherdashboard_teacherdashboard_component__WEBPACK_IMPORTED_MODULE_8__["TeacherDashboardComponent"],
        _pages_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_10__["CreateQuizComponent"],
        _pages_quiz_create_quiz_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__["EditQuestionComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _pages_quiz_create_quiz_sidebar_questions_sidebar_questions_component__WEBPACK_IMPORTED_MODULE_13__["SidebarQuestionsComponent"],
        _pages_quiz_create_quiz_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_14__["QuestionCardComponent"],
        _pages_challenge_challenge_report_challenge_report_component__WEBPACK_IMPORTED_MODULE_16__["ChallengeReportComponent"],
        _pages_challenge_challenge_report_challenge_report_summary_challenge_report_summary_component__WEBPACK_IMPORTED_MODULE_17__["ChallengeReportSummaryComponent"],
        _teacher_quiztable_quiztable_component__WEBPACK_IMPORTED_MODULE_22__["QuiztableComponent"],
        _pages_quiz_play_quiz_play_quiz_component__WEBPACK_IMPORTED_MODULE_18__["PlayQuizComponent"],
        _pages_quiz_host_quiz_host_quiz_component__WEBPACK_IMPORTED_MODULE_19__["HostQuizComponent"],
        _pages_challenge_challenge_report_playerlist_playerlist_component__WEBPACK_IMPORTED_MODULE_26__["PlayerlistComponent"],
        _pages_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_27__["ChatbotComponent"],
        _student_studentdashboard_studentdashboard_component__WEBPACK_IMPORTED_MODULE_29__["StudentdashboardComponent"],
        _student_student_component__WEBPACK_IMPORTED_MODULE_30__["StudentComponent"],
        _student_studentchallangetable_studentchallangetable_component__WEBPACK_IMPORTED_MODULE_31__["StudentchallangetableComponent"],
        _teacher_challengetable_challengetable_component__WEBPACK_IMPORTED_MODULE_24__["ChallengetableComponent"],
        _pages_quiz_display_quiz_display_quiz_component__WEBPACK_IMPORTED_MODULE_25__["DisplayQuizComponent"],
        _pages_challenge_post_challenge_feedback_post_challenge_feedback_component__WEBPACK_IMPORTED_MODULE_32__["PostChallengeFeedbackComponent"],
        _pages_challenge_join_challenge_join_challenge_component__WEBPACK_IMPORTED_MODULE_33__["JoinChallengeComponent"],
        _pages_challenge_post_challenge_feedback_rating_rating_component__WEBPACK_IMPORTED_MODULE_34__["RatingComponent"],
        _student_student_report_studentchallenge_report_summary_studentchallenge_report_summary_component__WEBPACK_IMPORTED_MODULE_36__["StudentchallengeReportSummaryComponent"],
        _student_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_35__["StudentReportComponent"],
        _pages_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_37__["QuizInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
        angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimeDateModule"],
        angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimePickerModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                    _teacher_teacherdashboard_teacherdashboard_component__WEBPACK_IMPORTED_MODULE_8__["TeacherDashboardComponent"],
                    _pages_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_10__["CreateQuizComponent"],
                    _pages_quiz_create_quiz_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__["EditQuestionComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _pages_quiz_create_quiz_sidebar_questions_sidebar_questions_component__WEBPACK_IMPORTED_MODULE_13__["SidebarQuestionsComponent"],
                    _pages_quiz_create_quiz_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_14__["QuestionCardComponent"],
                    _pages_challenge_challenge_report_challenge_report_component__WEBPACK_IMPORTED_MODULE_16__["ChallengeReportComponent"],
                    _pages_challenge_challenge_report_challenge_report_summary_challenge_report_summary_component__WEBPACK_IMPORTED_MODULE_17__["ChallengeReportSummaryComponent"],
                    _teacher_quiztable_quiztable_component__WEBPACK_IMPORTED_MODULE_22__["QuiztableComponent"],
                    _pages_quiz_play_quiz_play_quiz_component__WEBPACK_IMPORTED_MODULE_18__["PlayQuizComponent"],
                    _pages_quiz_host_quiz_host_quiz_component__WEBPACK_IMPORTED_MODULE_19__["HostQuizComponent"],
                    _pages_challenge_challenge_report_playerlist_playerlist_component__WEBPACK_IMPORTED_MODULE_26__["PlayerlistComponent"],
                    _pages_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_27__["ChatbotComponent"],
                    _student_studentdashboard_studentdashboard_component__WEBPACK_IMPORTED_MODULE_29__["StudentdashboardComponent"],
                    _student_student_component__WEBPACK_IMPORTED_MODULE_30__["StudentComponent"],
                    _student_studentchallangetable_studentchallangetable_component__WEBPACK_IMPORTED_MODULE_31__["StudentchallangetableComponent"],
                    _teacher_challengetable_challengetable_component__WEBPACK_IMPORTED_MODULE_24__["ChallengetableComponent"],
                    _pages_quiz_display_quiz_display_quiz_component__WEBPACK_IMPORTED_MODULE_25__["DisplayQuizComponent"],
                    _pages_challenge_post_challenge_feedback_post_challenge_feedback_component__WEBPACK_IMPORTED_MODULE_32__["PostChallengeFeedbackComponent"],
                    _pages_challenge_join_challenge_join_challenge_component__WEBPACK_IMPORTED_MODULE_33__["JoinChallengeComponent"],
                    _pages_challenge_post_challenge_feedback_rating_rating_component__WEBPACK_IMPORTED_MODULE_34__["RatingComponent"],
                    _student_student_report_studentchallenge_report_summary_studentchallenge_report_summary_component__WEBPACK_IMPORTED_MODULE_36__["StudentchallengeReportSummaryComponent"],
                    _student_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_35__["StudentReportComponent"],
                    _pages_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_37__["QuizInfoComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
                    angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimeDateModule"],
                    angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_20__["DlDateTimePickerModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "eah6":
/*!********************************************************!*\
  !*** ./src/app/pages/quiz-info/quiz-info.component.ts ***!
  \********************************************************/
/*! exports provided: QuizInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizInfoComponent", function() { return QuizInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class QuizInfoComponent {
}
QuizInfoComponent.ɵfac = function QuizInfoComponent_Factory(t) { return new (t || QuizInfoComponent)(); };
QuizInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizInfoComponent, selectors: [["app-quiz-info"]], decls: 48, vars: 0, consts: [[1, "row", "qz-bg-blue-light"], [1, "col"], [1, "col-10"], ["routerLink", "/", 1, "text-center", "my-5", "qz-text-blue"], [1, "row"], [1, "col-md-12", "col-lg-4", "my-5"], ["src", "../../../assets/svg/undraw_building_blocks_n0nc.svg", "alt", "", 1, "illustrations"], [1, "py-3", "qz-text-blue", "text-center"], [1, "mx-4", "px-4", "py-0", "text-center"], [1, "col-md-12", "col-lg-4", "my-2"], ["src", "../../../assets/svg/undraw_going_up_ttm5.svg", "alt", "", 1, "illustrations"], ["src", "../../../assets/svg/undraw_press_play_bx2d.svg", "alt", "", 1, "illustrations"]], template: function QuizInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " How does GMDT Quiz work? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1. Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Users can effortlessly create a quiz or learning game on any subject. The process is quick, taking only a few minutes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2. Host a Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Once the quiz is prepared, hosts can initiate a challenge with Quiz questions and share it with remote players. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3. Join with PIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Participants can join the challenge by entering the unique PIN provided by the host. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 4. Answer on Your Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Using their own devices, players can respond to the quiz questions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 5. Track Participants' Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " GMDT Quiz offers the ability to track participants' results, enabling hosts to monitor their progress and performance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".illustrations[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n  margin: 0 auto;\n}\n\n\n\nh1[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3F1aXotaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQSx3QkFBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoicXVpei1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlsbHVzdHJhdGlvbnMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi8qIEN1cnNvciBob3ZlciBlZmZlY3QgKi9cbmgxOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-info',
                templateUrl: './quiz-info.component.html',
                styleUrls: ['./quiz-info.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "fS3j":
/*!************************************************************************************!*\
  !*** ./src/app/pages/challenge/post-challenge-feedback/rating/rating.component.ts ***!
  \************************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RatingComponent {
    constructor() {
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.inputName = this.itemId + '_rating';
    }
    onClick(rating) {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { rating: "rating", itemId: "itemId" }, outputs: { ratingClick: "ratingClick" }, decls: 16, vars: 10, consts: [[1, "rating"], ["type", "radio", "value", "5", 3, "name", "checked"], ["title", "Rocks!", 3, "click"], ["type", "radio", "value", "4", 3, "name", "checked"], ["title", "Pretty good", 3, "click"], ["type", "radio", "value", "3", 3, "name", "checked"], ["title", "Meh", 3, "click"], ["type", "radio", "value", "2", 3, "name", "checked"], ["title", "Kinda bad", 3, "click"], ["type", "radio", "value", "1", 3, "name", "checked"], ["title", "Sucks big time", 3, "click"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_label_click_2_listener() { return ctx.onClick(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "5 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_label_click_5_listener() { return ctx.onClick(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_label_click_8_listener() { return ctx.onClick(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_label_click_11_listener() { return ctx.onClick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_label_click_14_listener() { return ctx.onClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1 star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.inputName)("checked", ctx.rating === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.inputName)("checked", ctx.rating === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.inputName)("checked", ctx.rating === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.inputName)("checked", ctx.rating === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.inputName)("checked", ctx.rating === 1);
    } }, styles: ["@charset \"UTF-8\";\n.rating[_ngcontent-%COMP%] {\n  float: left;\n}\n.rating[_ngcontent-%COMP%]:not(:checked)    > input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n  clip: rect(0, 0, 0, 0);\n}\n.rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%] {\n  float: right;\n  width: 1em;\n  padding: 0.1em;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 200%;\n  line-height: 1.2;\n  color: #ddd;\n}\n.rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:before {\n  content: \"\u2605 \";\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #f70;\n}\n.rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  color: gold;\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #ea0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7QUFFRjtBQUNBOztFQUVFLFdBQUE7QUFFRjtBQUNBOzs7RUFHRSxXQUFBO0FBRUYiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xufVxuXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDFlbTtcbiAgcGFkZGluZzogMC4xZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogI2RkZDtcbn1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIUgXCI7XG59XG5cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogI2Y3MDtcbn1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogI2VhMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.scss']
            }]
    }], function () { return []; }, { rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratingClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "hLTS":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StudentComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(); };
StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["app-student"]], decls: 0, vars: 0, template: function StudentComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student',
                templateUrl: './student.component.html',
                styleUrls: ['./student.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iY1d":
/*!********************************************************************!*\
  !*** ./src/app/student/student-report/student-report.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReportComponent", function() { return StudentReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class StudentReportComponent {
    constructor(_bgColorService, _authService, _router, reportsservice, _Activatedroute) {
        this._bgColorService = _bgColorService;
        this._authService = _authService;
        this._router = _router;
        this.reportsservice = reportsservice;
        this._Activatedroute = _Activatedroute;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue-light');
        this.challengeId = this._Activatedroute.snapshot.paramMap.get('id');
        this.reportsservice.getChallengeReport(this.challengeId).subscribe((res) => {
            var _a, _b;
            console.log('Challnge reports: success');
            console.log(res);
            this.challengeData = res['data'];
            this.endDate = (_b = (_a = this.challengeData) === null || _a === void 0 ? void 0 : _a.end_time) === null || _b === void 0 ? void 0 : _b.getTime();
            this.currentDate = new Date().getTime();
        }, (error) => {
            console.log('Challnge reports: Error');
            console.log(error);
        });
    }
    logout() {
        console.log('in logout');
        this._authService.logOut();
        this._router.navigate(['/login']);
    }
}
StudentReportComponent.ɵfac = function StudentReportComponent_Factory(t) { return new (t || StudentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
StudentReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentReportComponent, selectors: [["app-student-report"]], decls: 47, vars: 10, consts: [[1, "container-fluid"], [1, "row", "qz-bg-blue"], [1, "col-0", "col-md"], [1, "col-12", "col-sm-12", "col-md-11"], [1, "navbar", "navbar-dark", "navbar-expand-lg"], [1, "navbar-brand"], ["routerLink", "/", 1, "text-white", 2, "cursor", "pointer"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "text-white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "navbar-default", "float-right"], [1, "navbar-nav", "ml-auto", "topnav", "text-white"], [1, "nav-item", "px-2"], ["routerLink", "/challenge/join-challenge", 1, "nav-link"], ["routerLink", "/studentdashboard/studentchallengetable", 1, "nav-link"], [1, "btn", "qz-btn", "qz-bg-white", 3, "click"], [1, "row", "qz-bg-blue-dark", "text-white"], [1, "col"], [1, "col-12", "col-md-6", "mt-4", "mb-0"], [1, "qz-text-white-light"], [1, "my-3"], [1, "col-12", "col-md-4", "m-2"], [1, "qz-text-white-light", "qz-text-weight-light", "challenge-meta-data"], [1, "my-1"], [1, "fas", "fa-trophy", "text-warning"], [1, "qz-bg-white-light"]], template: function StudentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Challenge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challengeData.challenge_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 4, ctx.challengeData.start_date, "MMM d, y, h:mm:ss a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 7, ctx.challengeData.end_date, "MMM d, y, h:mm:ss a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hosted by ", ctx.challengeData.hosted_by, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  text-decoration: none;\n  font-size: 18px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.1s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #fff;\n}\n\n.challenge-meta-data[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul.sub-nav[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: pointer;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #115FBA;\n}\n\nul.sub-nav[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: pointer;\n}\n\nul.sub-nav[_ngcontent-%COMP%]   li.sub-nav-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #115FBA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0dWRlbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBR0o7O0FBRkk7RUFDRSx5QkFBQTtBQUlOOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFDSTtFQUNFLHlCQUFBO0FBQ04iLCJmaWxlIjoic3R1ZGVudC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IHVsIGxpIGF7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xufVxubmF2IHVsIGxpIGEuYWN0aXZlLFxubmF2IHVsIGxpIGE6aG92ZXJ7XG4gIGNvbG9yOiAjMTExO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuICBcbi5jaGFsbGVuZ2UtbWV0YS1kYXRhIHtcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG59XG5cbnVsLnN1Yi1uYXZ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGxpLnN1Yi1uYXYtaXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1RkJBXG4gICAgfVxuICB9XG59XG5cblxuXG51bC5zdWItbmF2e1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBsaS5zdWItbmF2LWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExNUZCQVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-report',
                templateUrl: './student-report.component.html',
                styleUrls: ['./student-report.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_1__["BgColorService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(_http) {
        this._http = _http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.registerURL = this.API_URL + '/api/v1/user/register';
        this.loginURL = this.API_URL + '/api/v1/user/login';
    }
    register(userData) {
        return this._http.post(this.registerURL, userData);
    }
    login(data) {
        return this._http.post(this.loginURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response['success']) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', response['data']['token']);
                this.saveUserData(JSON.stringify(response['data']['user']));
                return response;
            }
        }));
    }
    saveUserData(user) {
        localStorage.setItem('userData', user);
    }
    getUserData() {
        return JSON.parse(localStorage.getItem('userData'));
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getJWTToken() {
        return localStorage.getItem('token');
    }
    logOut() {
        localStorage.removeItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "n1O7":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/confirm-password.validator */ "z2D1");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegistrationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error_message);
} }
function RegistrationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to quizzards!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You will be automatically redirected to login page...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_10_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail ID is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid E-mail ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_8_div_10_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_8_div_10_small_2_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.email.errors == null ? null : ctx_r3.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.email.errors == null ? null : ctx_r3.email.errors.email);
} }
function RegistrationComponent_div_8_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_8_div_15_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.username.errors == null ? null : ctx_r4.username.errors.required);
} }
function RegistrationComponent_div_8_div_20_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_20_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_8_div_20_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_8_div_20_small_2_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password.errors == null ? null : ctx_r5.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password.errors == null ? null : ctx_r5.password.errors.minlength);
} }
function RegistrationComponent_div_8_div_25_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_25_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_8_div_25_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_8_div_25_small_2_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmPassword.errors == null ? null : ctx_r6.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmPassword.errors == null ? null : ctx_r6.confirmPassword.errors.minlength);
} }
function RegistrationComponent_div_8_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must select role.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello there! register to continue...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_div_8_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegistrationComponent_div_8_div_10_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_div_8_div_15_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationComponent_div_8_div_20_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_div_8_div_25_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationComponent_div_8_small_26_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "I am a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegistrationComponent_div_8_small_40_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Already Registered?\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Go to Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.registrationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.email.invalid && ctx_r2.email.touched)("is-valid", ctx_r2.email.valid && ctx_r2.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.invalid && ctx_r2.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.username.invalid && ctx_r2.username.touched)("is-valid", ctx_r2.username.valid && ctx_r2.username.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.username.invalid && ctx_r2.username.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.password.invalid && ctx_r2.password.touched)("is-valid", ctx_r2.password.valid && ctx_r2.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password.invalid && ctx_r2.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.confirmPassword.invalid && ctx_r2.confirmPassword.touched || (ctx_r2.registrationForm.errors == null ? null : ctx_r2.registrationForm.errors.passwordMismatch))("is-valid", ctx_r2.confirmPassword.valid && ctx_r2.confirmPassword.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.confirmPassword.invalid && ctx_r2.confirmPassword.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registrationForm.errors == null ? null : ctx_r2.registrationForm.errors.passwordMismatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.role.invalid && ctx_r2.role.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.role.invalid && ctx_r2.role.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.role.errors == null ? null : ctx_r2.role.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.registrationForm.valid);
} }
class RegistrationComponent {
    constructor(formBuilder, _authService, _router, _bgColorService) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._bgColorService = _bgColorService;
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validators: _shared_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"] });
    }
    ngOnInit() {
        // Change page color dynamically
        this._bgColorService.updateBodyClass('qz-bg-blue');
        // Check if user already logged in, redirect them based on roles
        try {
            if (this._authService.isLoggedIn()) {
                let userData = this._authService.getUserData();
                if (userData['role'] == "teacher")
                    this._router.navigate(['/teacherdashboard/quiztable']);
                else
                    this._router.navigate(['/studentdashboard/challengetable']);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // tslint:disable-next-line: typedef
    get username() {
        return this.registrationForm.get('username');
    }
    // tslint:disable-next-line: typedef
    get email() {
        return this.registrationForm.get('email');
    }
    // tslint:disable-next-line: typedef
    get password() {
        return this.registrationForm.get('password');
    }
    // tslint:disable-next-line: typedef
    get confirmPassword() {
        return this.registrationForm.get('confirmPassword');
    }
    // tslint:disable-next-line: typedef
    get role() {
        return this.registrationForm.get('role');
    }
    onSubmit() {
        console.log(this.registrationForm.value);
        var userData = {
            email: this.registrationForm.value.email,
            username: this.registrationForm.value.username,
            password: this.registrationForm.value.password,
            role: this.registrationForm.value.role
        };
        this._authService.register(userData).subscribe((res) => {
            console.log("sucsess");
            console.log(res);
            this.registration_successful = true;
            this.error_message = null;
            // this will redirect to login after 3 seconds
            setTimeout(() => {
                this._router.navigate(['/login']);
            }, 3000);
        }, (err) => {
            var _a, _b;
            console.log("Error");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__["BgColorService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "col-12", "col-sm-11", "col-md-9", "col-lg-7", "col-xl-6"], ["routerLink", "/", 1, "display-4", "text-white", "font-weight-bold", "text-center", "mt-3", 2, "cursor", "pointer"], ["class", "alert alert-danger alert-dismissible fade show mx-4 qz-border qz-rounded-corner qz-card-shadow", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show mx-4 qz-border qz-rounded-corner qz-card-shadow", "role", "alert", 4, "ngIf"], ["class", "card qz-card qz-card-rounded qz-card-shadow my-4 mx-4 p-5", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mx-4", "qz-border", "qz-rounded-corner", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mx-4", "qz-border", "qz-rounded-corner", "qz-card-shadow"], [1, "card", "qz-card", "qz-card-rounded", "qz-card-shadow", "my-4", "mx-4", "p-5"], [1, "mb-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "inputEmail", 1, "qz-form-label"], ["type", "email", "formControlName", "email", "id", "inputEmail", "placeholder", "name@domain.com", 1, "form-control", "qz-text-input"], [4, "ngIf"], ["for", "inputUsername", 1, "qz-form-label"], ["type", "text", "formControlName", "username", "id", "inputUsername", "placeholder", "Your username", 1, "form-control", "qz-text-input"], ["for", "inputPassword", 1, "qz-form-label"], ["type", "password", "formControlName", "password", "id", "inputPassword", "placeholder", "at least 8 characters", 1, "form-control", "qz-text-input"], ["for", "inputConfirmPassword", 1, "qz-form-label"], ["type", "password", "formControlName", "confirmPassword", "id", "inputConfirmPassword", "placeholder", "at least 8 characters", 1, "form-control", "qz-text-input"], ["class", "text-danger mx-2", 4, "ngIf"], [1, "qz-form-label"], [1, "px-4"], [1, "form-check", "form-check-inline", "mr-5"], ["type", "radio", "name", "role", "id", "studentRadio", "formControlName", "role", "value", "student", 1, "form-check-input"], ["for", "studentRadio", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "role", "id", "teacherRadio", "formControlName", "role", "value", "teacher", 1, "form-check-input"], ["for", "teacherRadio", 1, "form-check-label"], [1, "mt-3", "float-right"], ["routerLink", "/login", 1, "font-weight-bold"], ["type", "submit", 1, "btn", "btn-primary", "mt-4", "btn-block", "qz-btn", "qz-bg-blue", 3, "disabled"], [1, "text-danger", "mx-2"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " GMDT Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegistrationComponent_div_6_Template, 8, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationComponent_div_7_Template, 10, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegistrationComponent_div_8_Template, 48, 28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error_message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registration_successful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registration_successful);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_5__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "ofzi":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class QuizService {
    constructor(_http) {
        this._http = _http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.createQuizURL = this.API_URL + '/api/v1/quiz/createquiz';
        this.DisplayQuizURL = this.API_URL + '/api/v1/teacher/profile/myQuizzes';
        this.quizData = null;
    }
    createQuiz(quiz) {
        return this._http.post(this.createQuizURL, quiz);
    }
    displayQuizzes() {
        return this._http.get(this.DisplayQuizURL);
    }
    setDisplayQuizById(val) {
        this.quizData = val;
    }
    getQuizData() {
        console.log('ID', this.quizData);
        return this._http.get(this.API_URL +
            '/api/v1/teacher/profile/myQuizzById' +
            '/:' +
            this.quizData);
    }
}
QuizService.ɵfac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizService, factory: QuizService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rT/M":
/*!*************************************************************!*\
  !*** ./src/app/pages/quiz/play-quiz/play-quiz.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayQuizComponent", function() { return PlayQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PlayQuizComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Time: ", ctx_r3.ellapsedTime, " / ", ctx_r3.duration, " ");
} }
function PlayQuizComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_9_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSelectFromMultiSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_9_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onSelectFromMultiSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_9_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onSelectFromMultiSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_9_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onSelectFromMultiSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option4, "");
} }
function PlayQuizComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_10_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onSelectFromSingleSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_10_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onSelectFromSingleSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_10_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onSelectFromSingleSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlayQuizComponent_div_4_div_10_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSelectFromSingleSelectQuestion(question_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r2.options.option4, "");
} }
function PlayQuizComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayQuizComponent_div_4_div_3_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PlayQuizComponent_div_4_div_9_Template, 17, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlayQuizComponent_div_4_div_10_Template, 17, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayQuizComponent_div_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.goTo(ctx_r26.pager.index + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Next Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayQuizComponent_div_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.config.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.pager.index + 1, ". ", question_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", question_r2.questionType == "multiselect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", question_r2.questionType == "singleselect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r0.isCurrentQuestionLastQuestion());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Question ", ctx_r0.pager.index + 1, " of ", ctx_r0.pager.count, "");
} }
function PlayQuizComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayQuizComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.dismissErrorAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error_message);
} }
class PlayQuizComponent {
    constructor(challengeServe, _router, _Activatedroute, _bgColorService) {
        this.challengeServe = challengeServe;
        this._router = _router;
        this._Activatedroute = _Activatedroute;
        this._bgColorService = _bgColorService;
        this.answers = [];
        this.answersToSend = [];
        this.pager = {
            index: 0,
            size: 1,
            count: 1,
        };
        this.config = {
            allowBack: true,
            allowReview: true,
            autoMove: false,
            duration: 300,
            pageSize: 1,
            requiredAll: false,
            richText: false,
            shuffleQuestions: false,
            shuffleOptions: false,
            showClock: false,
            showPager: true,
            theme: 'none',
        };
        this.timer = null;
        this.ellapsedTime = '00:00';
        this.duration = '';
        this.error_message = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._bgColorService.updateBodyClass('qz-bg-blue-light');
            this.gamePin = this._Activatedroute.snapshot.paramMap.get('gamePIN');
            let isJoinedChallege = false;
            yield this.challengeServe
                .joinChallenge(this.gamePin)
                .toPromise()
                .then((res) => {
                console.log('Join : success');
                console.log(res);
                if (res['success']) {
                    isJoinedChallege = true;
                }
            })
                .catch((err) => {
                var _a, _b;
                console.log('Join : Failed');
                console.log(err);
                this.isError = true;
                this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
                if (err.error instanceof ErrorEvent) {
                    // client-side error
                    this.error_message = `${err.error.message}`;
                }
                if (!this.error_message) {
                    if (err.status == 0 || err.status == 500) {
                        this.error_message =
                            'Something wrong at server side. Sorry for inconvenience!';
                    }
                    if (!this.error_message) {
                        this.error_message = err.message;
                    }
                }
                if (this.error_message == 'Already Submitted!') {
                    this.error_message =
                        'Already Submitted! You will automatically redirected...';
                    // this will redirect to dashboard after 3 seconds
                    setTimeout(() => {
                        // usign /login route because, login route will decide where to redirect based on roles, if user already logged in.
                        this._router.navigate(['/login']);
                    }, 3000);
                }
            });
            if (isJoinedChallege) {
                this.challengeServe.playChallenge(this.gamePin).subscribe((res) => {
                    //console.log("display : success");
                    this.info = JSON.parse(JSON.stringify(res));
                    console.log('INFO.DATA', this.info);
                    this.quiz_info = this.info.data.quiz.questions;
                    this.pager.count = this.info.data.question_length;
                    this.challengeID = this.info.data.Challenge_ID;
                    this.goTo(0);
                }, (err) => {
                    var _a, _b;
                    console.log('display : Failed');
                    console.log(err);
                    this.isError = true;
                    this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
                    if (err.error instanceof ErrorEvent) {
                        // client-side error
                        this.error_message = `${err.error.message}`;
                    }
                    if (!this.error_message) {
                        //console.log(err.status);
                        if (err.status == 0 || err.status == 500) {
                            this.error_message =
                                'Something wrong at server side. Sorry for inconvenience!';
                        }
                        if (!this.error_message) {
                            this.error_message = err.message;
                        }
                    }
                    //console.log(this.error_message)
                });
            }
            // this.initializeTimer();
        });
    }
    isCurrentQuestionLastQuestion() {
        return this.pager.index == this.pager.count - 1;
    }
    initializeTimer(duration) {
        this.config.duration = duration;
        this.startTime = new Date();
        this.ellapsedTime = '00:00';
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
        this.duration = this.parseTime(this.config.duration);
    }
    dismissErrorAlert() {
        this.isError = false;
    }
    tick() {
        if (!this.isSubmitted) {
            const now = new Date();
            const diff = (now.getTime() - this.startTime.getTime()) / 1000;
            if (diff >= this.config.duration) {
                if (!this.isCurrentQuestionLastQuestion()) {
                    this.goTo(this.pager.index + 1);
                }
                else {
                    this.onSubmit();
                    this.isSubmitted = true;
                }
            }
            this.ellapsedTime = this.parseTime(diff);
        }
    }
    parseTime(totalSeconds) {
        let mins = Math.floor(totalSeconds / 60);
        let secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return `${mins}:${secs}`;
    }
    get filteredQuestions() {
        return this.quiz_info
            ? this.quiz_info.slice(this.pager.index, this.pager.index + this.pager.size)
            : [];
    }
    onSelectFromMultiSelectQuestion(question, event) {
        console.log('question and answer by user', question._id, event.target.value);
        let value = event.target.value;
        let isChecked = event.target.checked;
        let pageIndex = this.pager.index;
        //var questionID = question._id;
        isChecked
            ? this.answers[pageIndex].answer.push(value)
            : this.answers[pageIndex].answer.splice(this.answers.indexOf(value), 1);
        console.log('USER ANSWERS', this.answers);
    }
    onSelectFromSingleSelectQuestion(question, event) {
        console.log('Single select question and answer by user', question._id, event.target.value);
        let value = event.target.value;
        let isChecked = event.target.checked;
        let pageIndex = this.pager.index;
        //var questionID = question._id;
        isChecked
            ? (this.answers[pageIndex].answer = [value])
            : this.answers[pageIndex].answer.splice(this.answers.indexOf(value), 1);
        console.log('USER ANSWERS', this.answers);
    }
    goTo(index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            console.log(this.filteredQuestions);
            this.answers.push({
                question_id: this.filteredQuestions[0]._id,
                answer: [],
            });
            this.initializeTimer(this.filteredQuestions[0]['timeLimit']);
        }
    }
    onSubmit() {
        console.log('Quiz Submitted');
        this.challengeServe
            .submitChallenge(this.answers, this.challengeID)
            .subscribe((res) => {
            console.log('Submit : success');
            console.log(res);
            this._router.navigate([`challenge/${this.challengeID}/feedback`]);
        }, (err) => {
            var _a, _b;
            console.log('Submit : Failed');
            console.log(err);
            this.isError = true;
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message =
                        'Something wrong at server side. Sorry for inconvenience!';
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
}
PlayQuizComponent.ɵfac = function PlayQuizComponent_Factory(t) { return new (t || PlayQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"])); };
PlayQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayQuizComponent, selectors: [["app-play-quiz"]], decls: 6, vars: 2, consts: [[1, "container-fluid", "text-center", "qz-bg-blue"], [1, "heading_text"], ["class", "container-fluid", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger alert-dismissible mt-alerts fade show mx-4 qz-border qz-card-shadow", "role", "alert", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-2"], ["class", "badge badge-info float-right", 4, "ngIf"], [1, "col-sm-8", "text-center"], [1, "font-weight-normal"], [4, "ngIf"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-purple", "float-right", "text-white", 3, "click"], ["for", "question_number", 1, "question_number", "float-center"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-red", "text-white", 2, "width", "70%", 3, "click"], [1, "badge", "badge-info", "float-right"], [1, "card", "cd", "text-left"], ["type", "checkbox", "name", "optradio", "value", "option1", "id", "1", 3, "change"], ["type", "checkbox", "name", "optradio", "value", "option2", "id", "2", 3, "change"], ["type", "checkbox", "name", "optradio", "value", "option3", "id", "3", 3, "change"], ["type", "checkbox", "name", "optradio", "value", "option4", "id", "4", 3, "change"], ["type", "radio", "name", "optradio", "value", "option1", "id", "1", 3, "change"], ["type", "radio", "name", "optradio", "value", "option2", "id", "2", 3, "change"], ["type", "radio", "name", "optradio", "value", "option3", "id", "3", 3, "change"], ["type", "radio", "name", "optradio", "value", "option4", "id", "4", 3, "change"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mt-alerts", "fade", "show", "mx-4", "qz-border", "qz-card-shadow"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function PlayQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GMDT Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlayQuizComponent_div_4_Template, 21, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlayQuizComponent_div_5_Template, 8, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.heading_text[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 18px;\n  color: white;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 100%;\n  \n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  display: grid;\n  height: 100vh;\n  place-items: center;\n  background-color: #EFE3FC;\n  height: 100%;\n}\n\n.align_btns[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.align_clear[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.question_number[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 50px;\n  transition: 0.5s;\n  color: #2F0859;\n  border: 2px solid #2F0859;\n}\n\n.cd[_ngcontent-%COMP%] {\n  padding: 12px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-bottom: 15px;\n}\n\n.cd[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n\n\n.base-timer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 300px;\n}\n\n.base-timer__svg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.base-timer__circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: none;\n}\n\n.base-timer__path-elapsed[_ngcontent-%COMP%] {\n  stroke-width: 7px;\n  stroke: grey;\n}\n\n.base-timer__path-remaining[_ngcontent-%COMP%] {\n  stroke-width: 7px;\n  stroke-linecap: round;\n  transform: rotate(90deg);\n  transform-origin: center;\n  transition: 1s linear all;\n  fill-rule: nonzero;\n  stroke: currentColor;\n}\n\n.base-timer__path-remaining.green[_ngcontent-%COMP%] {\n  color: #41b883;\n}\n\n.base-timer__path-remaining.orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.base-timer__path-remaining.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.base-timer__label[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXktcXVpei5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQUFBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBREU7RUFDRSwyQ0FBQTtBQUlKOztBQU9FLHNHQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUpKOztBQU9FO0VBQ0UscUJBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBSko7O0FBT0U7RUFDRSxjQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0FBSko7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUpKIiwiZmlsZSI6InBsYXktcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGluZ190ZXh0e1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cbn1cbmJvZHl7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRUZFM0ZDO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXJ7XG4gICBcbn1cbi5hbGlnbl9idG5ze1xuICAgIHdpZHRoOjUwcHg7XG59XG4uYWxpZ25fY2xlYXJ7XG4gICAgd2lkdGg6NDBweDtcbn1cblxuLnF1ZXN0aW9uX251bWJlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBjb2xvcjogICMyRjA4NTk7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJGMDg1OTtcbiAgfVxuICAuY2R7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmNkOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIH1cblxuICAvLyAuYnRuLXF1aXp7XG4gIC8vICAgaGVpZ2h0OjM1cHg7XG4gIC8vICAgd2lkdGg6MTUwcHg7XG4gIC8vICAgYm9yZGVyOiMyRjA4NTk7XG4gIC8vICAgbWFyZ2luOiA1cHg7XG4gIC8vIH1cblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNsb2NrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLmJhc2UtdGltZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3N2ZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fY2lyY2xlIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogbm9uZTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtZWxhcHNlZCB7XG4gICAgc3Ryb2tlLXdpZHRoOiA3cHg7XG4gICAgc3Ryb2tlOiBncmV5O1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmcge1xuICAgIHN0cm9rZS13aWR0aDogN3B4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDFzIGxpbmVhciBhbGw7XG4gICAgZmlsbC1ydWxlOiBub256ZXJvO1xuICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmcuZ3JlZW4ge1xuICAgIGNvbG9yOiByZ2IoNjUsIDE4NCwgMTMxKTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtcmVtYWluaW5nLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtcmVtYWluaW5nLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-play-quiz',
                templateUrl: './play-quiz.component.html',
                styleUrls: ['./play-quiz.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_4__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "rfKV":
/*!********************************!*\
  !*** ./src/app/models/Quiz.ts ***!
  \********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
class Quiz {
    constructor() {
        this.questions = [];
        this.title = '';
        this.description = '';
        this.category = 'Default';
        this.questions = [];
    }
}


/***/ }),

/***/ "riFY":
/*!****************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.component.ts ***!
  \****************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChatbotComponent {
    constructor() { }
    ngOnInit() {
        //----------- chatbot's code --------------//
        (function (d, m) {
            var kommunicateSettings = {
                appId: '31470b39e48fc04110f34ecfa5a83ce67',
                popupWidget: true,
                automaticChatOpenOnNavigation: true,
            };
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
            var h = document.getElementsByTagName('head')[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        //----------- chatbot's code end --------------//
    }
}
ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) { return new (t || ChatbotComponent)(); };
ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotComponent, selectors: [["app-chatbot"]], decls: 0, vars: 0, template: function ChatbotComponent_Template(rf, ctx) { }, styles: [".open-button[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n}\n.closePopUp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 389px;\n  right: 35px;\n  border-radius: 4px;\n  z-index: 99;\n  width: 325px;\n  height: 58px;\n  background-color: transparent;\n}\n\n.chat-popup[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n  height: 450px;\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXRib3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJLHVDQUFBO0FBQ0E7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJjaGF0Ym90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY2hhdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xuLm9wZW4tYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gICAgLmNsb3NlUG9wVXB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTozODlweDtcbiAgICByaWdodDogMzVweDtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgd2lkdGg6MzI1cHg7XG4gICAgaGVpZ2h0OjU4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ly8jNTU1M2I4O1xuICAgIH1cbiAgICAvKiBUaGUgcG9wdXAgY2hhdCAtIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgLmNoYXQtcG9wdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgIHotaW5kZXg6IDk7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbot',
                templateUrl: './chatbot.component.html',
                styleUrls: ['./chatbot.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sbA5":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/quiz/create-quiz/sidebar-questions/sidebar-questions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SidebarQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarQuestionsComponent", function() { return SidebarQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _question_card_question_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question-card/question-card.component */ "OqH8");




function SidebarQuestionsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarQuestionsComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const question_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClickQuestionCard(question_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-question-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteQuestion", function SidebarQuestionsComponent_div_2_Template_app_question_card_deleteQuestion_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDeleteQuestion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r2)("question", question_r1);
} }
class SidebarQuestionsComponent {
    constructor() {
        this.addQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setActiveQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.questions);
    }
    onAddQuestion() {
        this.addQuestion.emit();
    }
    onDeleteQuestion(questionTempId) {
        console.log('IN side-que', questionTempId);
        this.deleteQuestion.emit(questionTempId);
    }
    onClickQuestionCard(question) {
        this.setActiveQuestion.emit(question);
    }
}
SidebarQuestionsComponent.ɵfac = function SidebarQuestionsComponent_Factory(t) { return new (t || SidebarQuestionsComponent)(); };
SidebarQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarQuestionsComponent, selectors: [["app-sidebar-questions"]], inputs: { questions: "questions" }, outputs: { addQuestion: "addQuestion", deleteQuestion: "deleteQuestion", setActiveQuestion: "setActiveQuestion" }, decls: 6, vars: 1, consts: [[1, "side-div"], [1, "questions-container"], ["class", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "qz-btn", "text-white", "m-3", "qz-bg-blue", 2, "width", "84%", "height", "2em", 3, "click"], [1, "row", 3, "click"], [1, "col", "px-3"], [3, "index", "question", "deleteQuestion"]], template: function SidebarQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarQuestionsComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarQuestionsComponent_Template_button_click_4_listener() { return ctx.onAddQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _question_card_question_card_component__WEBPACK_IMPORTED_MODULE_2__["QuestionCardComponent"]], styles: [".side-div[_ngcontent-%COMP%] {\n  background-color: #e4e4e4;\n  min-height: 93vh;\n  max-height: 93vh;\n  height: 93vh;\n}\n\n.questions-container[_ngcontent-%COMP%] {\n  min-height: 80%;\n  max-height: 80%;\n  height: 80%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NpZGViYXItcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzaWRlYmFyLXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIG1pbi1oZWlnaHQ6IDkzdmg7XG4gIG1heC1oZWlnaHQ6IDkzdmg7XG4gIGhlaWdodDogOTN2aDtcbn1cbi5xdWVzdGlvbnMtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogODAlO1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar-questions',
                templateUrl: './sidebar-questions.component.html',
                styleUrls: ['./sidebar-questions.component.scss'],
            }]
    }], function () { return []; }, { questions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setActiveQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "t1uh":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/challenge/challenge-report/playerlist/playerlist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PlayerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerlistComponent", function() { return PlayerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








function PlayerlistComponent_tr_19_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.goldMedalIcon);
} }
function PlayerlistComponent_tr_19_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.bronzeMedalIcon);
} }
function PlayerlistComponent_tr_19_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.silverMedalIcon);
} }
function PlayerlistComponent_tr_19_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function PlayerlistComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerlistComponent_tr_19_ng_container_13_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerlistComponent_tr_19_ng_container_14_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayerlistComponent_tr_19_ng_container_15_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerlistComponent_tr_19_ng_container_16_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "canvas", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.data.player_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.data.correct_answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.data.wrong_answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.data.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx_r0.doughnutChartData[i_r2 * 2], ctx_r0.doughnutChartData[i_r2 * 2 + 1]))("chartType", ctx_r0.doughnutChartType)("colors", ctx_r0.doughnutColors);
} }
class PlayerlistComponent {
    constructor(reportsservice, _Activatedroute) {
        this.reportsservice = reportsservice;
        this._Activatedroute = _Activatedroute;
        this.players = [];
        this.doughnutChartLabels = ['Wrong answers', 'Correct answers'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.doughnutColors = [{ backgroundColor: ['#8B0000', '#006400'] }];
        this.goldMedalIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMedal"];
        this.silverMedalIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMedal"];
        this.bronzeMedalIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMedal"];
    }
    ngOnInit() {
        this.challengeId = this._Activatedroute.parent.snapshot.paramMap.get('id');
        //console.log(this.challengeId)
        this.reportsservice.getPlayers(this.challengeId).subscribe((res) => {
            //console.log("display : success");
            this.info = JSON.parse(JSON.stringify(res));
            let chartdata = [];
            this.info.forEach(function (obj) {
                chartdata.push(obj.data.wrong_answers);
                chartdata.push(obj.data.correct_answers);
            });
            this.doughnutChartData = chartdata;
            //console.log("INFO.DATA", this.info);
        }, (err) => {
            var _a, _b;
            console.log('display : Failed');
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message =
                        'Something wrong at server side. Sorry for inconvenience!';
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
}
PlayerlistComponent.ɵfac = function PlayerlistComponent_Factory(t) { return new (t || PlayerlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PlayerlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerlistComponent, selectors: [["app-playerlist"]], decls: 20, vars: 1, consts: [[1, "row", "m-5"], [1, "col"], [1, "qz-card", "table-box", "qz-rounded-corner-light"], [1, "qz-bg-blue", "text-white"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [2, "display", "block", "height", "75px", "width", "75px"], [4, "ngIf"], ["baseChart", "", "width", "1", "height", "1", 3, "data", "chartType", "colors"], [1, "gold-medal", 3, "icon"], [1, "bronze-medal", 3, "icon"], [1, "silver-medal", 3, "icon"]], template: function PlayerlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Correct Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wrong Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Final Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medal/Answer statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlayerlistComponent_tr_19_Template, 19, 15, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: [".table-box[_ngcontent-%COMP%] {\n  width: 90%;\n  background: #fff;\n  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.3);\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nthead[_ngcontent-%COMP%] {\n  color: #030303;\n}\n\n.labelCorrectAns[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 30px;\n  background-color: #006400;\n  float: right;\n}\n\n.labelWrongAns[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 30px;\n  background-color: #8b0000;\n  float: right;\n}\n\n.gold-medal[_ngcontent-%COMP%] {\n  color: gold;\n  font-size: 1.5rem;\n}\n\n.silver-medal[_ngcontent-%COMP%] {\n  color: silver;\n  font-size: 1.5rem;\n}\n\n.bronze-medal[_ngcontent-%COMP%] {\n  color: #cd7f32;\n  \n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BsYXllcmxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBR0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUVBOzs7RUFJRSxrQkFBQTtBQUFGOztBQUVBO0VBRUUsY0FBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUFnQixpQkFBQTtFQUNoQixpQkFBQTtBQUlGIiwiZmlsZSI6InBsYXllcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtYm94IHtcbiAgd2lkdGg6IDkwJTtcbiAgLy8gaGVpZ2h0OiAzMzBweDtcbiAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlLFxudGgsXG50ZCB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDUyNzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRoZWFkIHtcbiAgLy8gYmFja2dyb3VuZDogI2Q3ZDhkODtcbiAgY29sb3I6IHJnYigzLCAzLCAzKTtcbn1cbi5sYWJlbENvcnJlY3RBbnMge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDAwO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubGFiZWxXcm9uZ0FucyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5nb2xkLW1lZGFsIHtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc2lsdmVyLW1lZGFsIHtcbiAgY29sb3I6IHNpbHZlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5icm9uemUtbWVkYWwge1xuICBjb2xvcjogI2NkN2YzMjsgLyogYnJvbnplIGNvbG9yICovXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playerlist',
                templateUrl: './playerlist.component.html',
                styleUrls: ['./playerlist.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vW7s":
/*!**********************************************************!*\
  !*** ./src/app/teacher/quiztable/quiztable.component.ts ***!
  \**********************************************************/
/*! exports provided: QuiztableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuiztableComponent", function() { return QuiztableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/quiz.service */ "ofzi");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







const _c0 = function (a1) { return ["/quiz/host/", a1]; };
function QuiztableComponent_div_13_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Host ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuiztableComponent_div_13_tr_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.QuizByID(item_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, item_r4.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.questions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r4._id));
} }
function QuiztableComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No. of Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Host challenge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuiztableComponent_div_13_tr_16_Template, 16, 9, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pagination-controls", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function QuiztableComponent_div_13_Template_pagination_controls_pageChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 1, ctx_r0.quiz_info, ctx_r0.config));
} }
function QuiztableComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It seems you haven't created quiz yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Why don't you create one? Click on 'Create Quiz' Button.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuiztableComponent {
    constructor(_quizService, challengeservice) {
        this._quizService = _quizService;
        this.challengeservice = challengeservice;
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.total,
        };
    }
    ngOnInit() {
        this._quizService.displayQuizzes().subscribe((res) => {
            console.log('display : success');
            this.info = JSON.parse(JSON.stringify(res));
            console.log('INFO.DATA', this.info.data);
            this.quiz_info = this.info.data.quiz;
            this.total = this.quiz_info.length;
        }, (err) => {
            var _a, _b;
            console.log('display : Failed');
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                if (err.status == 0 || err.status == 500) {
                    this.error_message =
                        'Something wrong at server side. Sorry for inconvenience!';
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    QuizByID(quiz_id) {
        this._quizService.setDisplayQuizById(quiz_id);
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
}
QuiztableComponent.ɵfac = function QuiztableComponent_Factory(t) { return new (t || QuiztableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"])); };
QuiztableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuiztableComponent, selectors: [["app-quiztable"]], decls: 17, vars: 2, consts: [[1, "row"], [1, "col-sm-8"], [1, "col"], [1, "col-sm-2", "my-3", "float-right"], ["routerLink", "/quiz/create", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], ["class", "qz-card table-box qz-rounded-corner-light", 4, "ngIf", "ngIfElse"], [1, "m-5"], ["elseBlock", ""], [1, "qz-card", "table-box", "qz-rounded-corner-light"], ["cellpadding", "12"], [1, "qz-bg-blue", "text-white"], ["class", "thin-down-border", 4, "ngFor", "ngForOf"], ["maxSize", "9", "directionLinks", "true", "responsive", "true", 3, "pageChange"], [1, "thin-down-border"], [3, "routerLink"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], ["routerLink", "/quiz/displayQuiz"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-blue", "text-white", 3, "click"]], template: function QuiztableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Quizzes are like question banks. You can create once and host multiple times! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Create Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuiztableComponent_div_13_Template, 19, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuiztableComponent_ng_template_15_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quiz_info && ctx.quiz_info.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".table-box[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #005277;\n  text-align: center;\n}\n\n.thin-down-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3F1aXp0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7OztFQUdFLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0YiLCJmaWxlIjoicXVpenRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWJveCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlLFxudGgsXG50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUyNzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aGluLWRvd24tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuiztableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiztable',
                templateUrl: './quiztable.component.html',
                styleUrls: ['./quiztable.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }, { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_challenge_challenge_report_playerlist_playerlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/challenge/challenge-report/playerlist/playerlist.component */ "t1uh");
/* harmony import */ var _teacher_teacherprofile_teacherprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher/teacherprofile/teacherprofile.component */ "wUtR");
/* harmony import */ var _teacher_challengetable_challengetable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher/challengetable/challengetable.component */ "xEKz");
/* harmony import */ var _teacher_quiztable_quiztable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher/quiztable/quiztable.component */ "vW7s");
/* harmony import */ var _teacher_teacherdashboard_teacherdashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher/teacherdashboard/teacherdashboard.component */ "OOmA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/registration/registration.component */ "n1O7");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/auth.guard */ "C6wm");
/* harmony import */ var _pages_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/quiz/create-quiz/create-quiz.component */ "Rb8g");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_challenge_challenge_report_challenge_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/challenge/challenge-report/challenge-report.component */ "+GIY");
/* harmony import */ var _pages_challenge_challenge_report_challenge_report_summary_challenge_report_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/challenge/challenge-report/challenge-report-summary/challenge-report-summary.component */ "6eWk");
/* harmony import */ var _pages_quiz_play_quiz_play_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quiz/play-quiz/play-quiz.component */ "rT/M");
/* harmony import */ var _pages_quiz_host_quiz_host_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/quiz/host-quiz/host-quiz.component */ "0pRE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_quiz_display_quiz_display_quiz_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/quiz/display-quiz/display-quiz.component */ "QJVI");
/* harmony import */ var _student_studentdashboard_studentdashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student/studentdashboard/studentdashboard.component */ "RWkO");
/* harmony import */ var _pages_challenge_join_challenge_join_challenge_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/challenge/join-challenge/join-challenge.component */ "AaeB");
/* harmony import */ var _pages_challenge_post_challenge_feedback_post_challenge_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/challenge/post-challenge-feedback/post-challenge-feedback.component */ "Xk4m");
/* harmony import */ var _student_studentchallangetable_studentchallangetable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./student/studentchallangetable/studentchallangetable.component */ "vlVf");
/* harmony import */ var _student_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./student/student-report/student-report.component */ "iY1d");
/* harmony import */ var _student_student_report_studentchallenge_report_summary_studentchallenge_report_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-report/studentchallenge-report-summary/studentchallenge-report-summary.component */ "OYXF");
/* harmony import */ var _pages_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/quiz-info/quiz-info.component */ "eah6");



























const routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    {
        path: 'quiz/create',
        component: _pages_quiz_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_10__["CreateQuizComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    { path: 'quiz-info', component: _pages_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_24__["QuizInfoComponent"] },
    {
        path: 'teacherdashboard',
        component: _teacher_teacherdashboard_teacherdashboard_component__WEBPACK_IMPORTED_MODULE_4__["TeacherDashboardComponent"],
        children: [
            { path: 'quiztable', component: _teacher_quiztable_quiztable_component__WEBPACK_IMPORTED_MODULE_3__["QuiztableComponent"] },
            { path: 'challengetable', component: _teacher_challengetable_challengetable_component__WEBPACK_IMPORTED_MODULE_2__["ChallengetableComponent"] },
            { path: 'teacherprofile', component: _teacher_teacherprofile_teacherprofile_component__WEBPACK_IMPORTED_MODULE_1__["TeacherprofileComponent"] },
        ],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'studentdashboard',
        component: _student_studentdashboard_studentdashboard_component__WEBPACK_IMPORTED_MODULE_18__["StudentdashboardComponent"],
        children: [
            {
                path: 'studentchallengetable',
                component: _student_studentchallangetable_studentchallangetable_component__WEBPACK_IMPORTED_MODULE_21__["StudentchallangetableComponent"],
            },
        ],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'quiz/host/:quiz_id',
        component: _pages_quiz_host_quiz_host_quiz_component__WEBPACK_IMPORTED_MODULE_15__["HostQuizComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'quiz/displayQuiz',
        component: _pages_quiz_display_quiz_display_quiz_component__WEBPACK_IMPORTED_MODULE_17__["DisplayQuizComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'challenge/:id/reports',
        component: _pages_challenge_challenge_report_challenge_report_component__WEBPACK_IMPORTED_MODULE_12__["ChallengeReportComponent"],
        children: [
            { path: 'summary', component: _pages_challenge_challenge_report_challenge_report_summary_challenge_report_summary_component__WEBPACK_IMPORTED_MODULE_13__["ChallengeReportSummaryComponent"] },
            { path: 'playerlist', component: _pages_challenge_challenge_report_playerlist_playerlist_component__WEBPACK_IMPORTED_MODULE_0__["PlayerlistComponent"] },
        ],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'challenge/:id/reports/student',
        component: _student_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_22__["StudentReportComponent"],
        children: [
            { path: 'summary', component: _student_student_report_studentchallenge_report_summary_studentchallenge_report_summary_component__WEBPACK_IMPORTED_MODULE_23__["StudentchallengeReportSummaryComponent"] },
        ],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'challenge/join-challenge',
        component: _pages_challenge_join_challenge_join_challenge_component__WEBPACK_IMPORTED_MODULE_19__["JoinChallengeComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'challenge/:id/feedback',
        component: _pages_challenge_post_challenge_feedback_post_challenge_feedback_component__WEBPACK_IMPORTED_MODULE_20__["PostChallengeFeedbackComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'challenge/play/:gamePIN',
        component: _pages_quiz_play_quiz_play_quiz_component__WEBPACK_IMPORTED_MODULE_14__["PlayQuizComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vlVf":
/*!**********************************************************************************!*\
  !*** ./src/app/student/studentchallangetable/studentchallangetable.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentchallangetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentchallangetableComponent", function() { return StudentchallangetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bg-color.service */ "DO8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function StudentchallangetableComponent_div_9_tr_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentchallangetableComponent_div_9_tr_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/challenge", a1, "reports", "student", "summary"]; };
function StudentchallangetableComponent_div_9_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudentchallangetableComponent_div_9_tr_14_div_4_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentchallangetableComponent_div_9_tr_14_ng_template_8_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.data.challenge_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, item_r4.data.end_date, "dd/MM/yyyy") < _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r3.currentDate, "dd/MM/yyyy"))("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 12, item_r4.data.end_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.data == null ? null : item_r4.data.numberOfPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, item_r4.data.challenge_id));
} }
function StudentchallangetableComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Challenge Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No. of Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentchallangetableComponent_div_9_tr_14_Template, 18, 17, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hosted_quiz_info);
} }
function StudentchallangetableComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It seems you have not played any challenge!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentchallangetableComponent {
    constructor(_challengeService, reportservice, _bgColorService) {
        this._challengeService = _challengeService;
        this.reportservice = reportservice;
        this._bgColorService = _bgColorService;
        this.oneDay = 24 * 60 * 60 * 1000;
    }
    ngOnInit() {
        this._bgColorService.updateBodyClass('qz-bg-blue-light');
        this._challengeService.displayChallengesStudent()
            .subscribe((res) => {
            console.log("display : success");
            this.challenge_info = JSON.parse(JSON.stringify(res));
            console.log("INFO.DATA", this.challenge_info[0].data);
            this.hosted_quiz_info = this.challenge_info;
            const date = new Date();
            this.currentDate = date;
            console.log("currentdate" + this.currentDate);
            console.log("end date" + this.hosted_quiz_info[0].data.end_date);
        }, (err) => {
            var _a, _b;
            console.log("display : Failed");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    ChallengeByID(c_id) {
        this.challengeid = c_id;
        console.log("HERE" + this.challengeid);
        //this.reportservice.setdisplayChallenegeById(this.challengeid);
    }
}
StudentchallangetableComponent.ɵfac = function StudentchallangetableComponent_Factory(t) { return new (t || StudentchallangetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_3__["BgColorService"])); };
StudentchallangetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentchallangetableComponent, selectors: [["app-studentchallangetable"]], decls: 13, vars: 2, consts: [[1, "row", "m-5"], [1, "col"], [1, "row"], ["class", "qz-card qz-rounded-corner-light", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "qz-card", "qz-rounded-corner-light"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "qz-bg-blue", "text-white"], ["class", "thin-down-border", 4, "ngFor", "ngForOf"], [1, "thin-down-border"], [4, "ngIf", "ngIfElse"], [3, "routerLink"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], [1, "challengeStatusExp"], [1, "challengeStatusLive"]], template: function StudentchallangetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Challenge are like matches. Player can join challenge and play challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentchallangetableComponent_div_9_Template, 15, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentchallangetableComponent_ng_template_11_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hosted_quiz_info && ctx.hosted_quiz_info.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nthead[_ngcontent-%COMP%] {\n  color: #030303;\n}\n\n.challengeStatusExp[_ngcontent-%COMP%] {\n  color: red;\n  font-size: medium;\n  font-style: italic;\n  border: 2px solid red;\n  padding: 10px;\n  border-radius: 25px;\n}\n\n.challengeStatusLive[_ngcontent-%COMP%] {\n  color: green;\n  font-size: medium;\n  font-style: italic;\n  border: 2px solid green;\n  padding: 10px;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0dWRlbnRjaGFsbGFuZ2V0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLFdBQUE7QUFOSjs7QUFRRTtFQUVFLGtCQUFBO0FBTko7O0FBUUU7RUFFRSxjQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBVUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUEoiLCJmaWxlIjoic3R1ZGVudGNoYWxsYW5nZXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnRhYmxlLWJveHtcbi8vICAgICB3aWR0aDogODUlO1xuLy8gICAgIGhlaWdodDogMzUwcHg7XG4vLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyAgICAgYm94LXNoYWRvdzogMCAxMHB4IDEwMHB4IHJnYmEoMCwwLDAsMC4zKTtcbi8vICAgfVxuICB0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB0YWJsZSx0aCx0ZHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDA1Mjc3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICB0aGVhZHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuICAgIGNvbG9yOiByZ2IoMywgMywgMyk7XG4gICAgXG4gIH1cbiAgLmNoYWxsZW5nZVN0YXR1c0V4cHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgfVxuXG4gIC5jaGFsbGVuZ2VTdGF0dXNMaXZle1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXNpemU6bWVkaXVtO1xuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentchallangetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentchallangetable',
                templateUrl: './studentchallangetable.component.html',
                styleUrls: ['./studentchallangetable.component.scss']
            }]
    }], function () { return [{ type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }, { type: src_app_services_bg_color_service__WEBPACK_IMPORTED_MODULE_3__["BgColorService"] }]; }, null); })();


/***/ }),

/***/ "wUtR":
/*!********************************************************************!*\
  !*** ./src/app/teacher/teacherprofile/teacherprofile.component.ts ***!
  \********************************************************************/
/*! exports provided: TeacherprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherprofileComponent", function() { return TeacherprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TeacherprofileComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeacherprofileComponent.ɵfac = function TeacherprofileComponent_Factory(t) { return new (t || TeacherprofileComponent)(); };
TeacherprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherprofileComponent, selectors: [["app-teacherprofile"]], decls: 41, vars: 0, consts: [[1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-10", "mt-5", "pt-5"], [1, "row", "z-depth-3"], [1, "col-sm-4", "qz-bg-purple", "rounded-left"], [1, "card-block", "text-center", "text-white"], [1, "fas", "fa-user-tie", "fa-7x", "mt-5"], [1, "font-weight-bold", "mt-4"], [1, "far", "fa-edit", "fa-2x", "mb-4"], [1, "col-sm-8", "bg-white", "rounded-right"], [1, "mt-3", "text-center"], [1, "badge-primary", "mt-0", "w-25"], [1, "row"], [1, "col-sm-6"], [1, "font-weight-bold"], [1, "text-muted"], [1, "mt-3"], [1, "bg-primary"]], template: function TeacherprofileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ABC University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "abcd@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1234567890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Some Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Field1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "abcd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Field 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "abcdef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVycHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherprofileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacherprofile',
                templateUrl: './teacherprofile.component.html',
                styleUrls: ['./teacherprofile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xEKz":
/*!********************************************************************!*\
  !*** ./src/app/teacher/challengetable/challengetable.component.ts ***!
  \********************************************************************/
/*! exports provided: ChallengetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengetableComponent", function() { return ChallengetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/challenge.service */ "NMU8");
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reports.service */ "KY19");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function ChallengetableComponent_div_9_tr_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengetableComponent_div_9_tr_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/challenge", a1, "reports", "summary"]; };
function ChallengetableComponent_div_9_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChallengetableComponent_div_9_tr_13_div_4_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChallengetableComponent_div_9_tr_13_ng_template_6_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.data.challenge_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.data.is_expired)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, item_r4.data.end_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.data == null ? null : item_r4.data.numberOfPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r4.data.challenge_id));
} }
function ChallengetableComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Challenge Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No. of Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChallengetableComponent_div_9_tr_13_Template, 16, 11, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination-controls", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ChallengetableComponent_div_9_Template_pagination_controls_pageChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 1, ctx_r0.hosted_quiz_info, ctx_r0.config));
} }
function ChallengetableComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It seems you don't have any challenge hosted!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Why don't you host one? Go to 'Quizzes' tab, Select quiz and press 'Host' button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengetableComponent {
    constructor(_challengeService, reportservice) {
        this._challengeService = _challengeService;
        this.reportservice = reportservice;
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.total
        };
    }
    ngOnInit() {
        this._challengeService.displayChallenges()
            .subscribe((res) => {
            console.log("display : success");
            this.challenge_info = JSON.parse(JSON.stringify(res));
            console.log("INFO.DATA", this.challenge_info[0].data);
            this.hosted_quiz_info = this.challenge_info;
            this.total = this.hosted_quiz_info.length;
            const date = new Date();
            this.currentDate = date;
        }, (err) => {
            var _a, _b;
            console.log("display : Failed");
            console.log(err);
            this.error_message = (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
            if (err.error instanceof ErrorEvent) {
                // client-side error
                this.error_message = `${err.error.message}`;
            }
            if (!this.error_message) {
                //console.log(err.status);
                if (err.status == 0 || err.status == 500) {
                    this.error_message = "Something wrong at server side. Sorry for inconvenience!";
                }
                if (!this.error_message) {
                    this.error_message = err.message;
                }
            }
        });
    }
    ChallengeByID(c_id) {
        this.challengeid = c_id;
        console.log("HERE" + this.challengeid);
        //this.reportservice.setdisplayChallenegeById(this.challengeid);
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
}
ChallengetableComponent.ɵfac = function ChallengetableComponent_Factory(t) { return new (t || ChallengetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"])); };
ChallengetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengetableComponent, selectors: [["app-challengetable"]], decls: 13, vars: 2, consts: [[1, "row"], [1, "col"], ["class", "qz-card qz-rounded-corner-light", 4, "ngIf", "ngIfElse"], [1, "m-5"], ["elseBlock", ""], [1, "qz-card", "qz-rounded-corner-light"], ["cellpadding", "10 ", 1, "qz-rounded-corner-light"], [1, "qz-bg-blue", "text-white"], ["class", "thin-down-border", 4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "thin-down-border"], [4, "ngIf", "ngIfElse"], [3, "routerLink"], ["type", "button", 1, "btn", "qz-btn", "qz-bg-blue", "text-white"], [1, "challengeStatusExp"], [1, "challengeStatusLive"]], template: function ChallengetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Challenge are like matches. Player can join challenge and play challenge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChallengetableComponent_div_9_Template, 16, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChallengetableComponent_ng_template_11_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hosted_quiz_info && ctx.hosted_quiz_info.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.thin-down-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n\n.challengeStatusExp[_ngcontent-%COMP%] {\n  color: red;\n  font-size: medium;\n  font-style: italic;\n  border: 2px solid red;\n  padding: 10px;\n  border-radius: 25px;\n}\n\n.challengeStatusLive[_ngcontent-%COMP%] {\n  color: green;\n  font-size: medium;\n  font-style: italic;\n  border: 2px solid green;\n  padding: 10px;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYWxsZW5nZXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBQTtBQU5GOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLDhCQUFBO0FBTEY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEYiLCJmaWxlIjoiY2hhbGxlbmdldGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudGFibGUtYm94e1xuLy8gICB3aWR0aDogODUlO1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBvdmVyZmxvdy15OiBzY3JvbGw7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyAgIGJveC1zaGFkb3c6IDAgMTBweCAxMDBweCByZ2JhKDAsMCwwLDAuMyk7XG4vLyB9XG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSx0aCx0ZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGhpbi1kb3duLWJvcmRlcntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmNoYWxsZW5nZVN0YXR1c0V4cHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbn1cblxuLmNoYWxsZW5nZVN0YXR1c0xpdmV7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOm1lZGl1bTtcbiAgZm9udC1zdHlsZTppdGFsaWM7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challengetable',
                templateUrl: './challengetable.component.html',
                styleUrls: ['./challengetable.component.scss']
            }]
    }], function () { return [{ type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"] }, { type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }]; }, null); })();


/***/ }),

/***/ "z2D1":
/*!******************************************************!*\
  !*** ./src/app/shared/confirm-password.validator.ts ***!
  \******************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
function ConfirmPasswordValidator(control) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value
        ? { passwordMismatch: true }
        : null;
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map