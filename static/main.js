(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/tPW":
/*!**************************************************!*\
  !*** ./src/app/schedules/schedules.component.ts ***!
  \**************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _schedules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../schedules.service */ "ekzQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../courses.service */ "VWlB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SchedulesComponent_li_3_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to Delete this schedule?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_3_span_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const schedule_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteSchedule(schedule_r2.scheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_3_span_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.confirmDelete = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulesComponent_li_3_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_3_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.confirmDelete = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchedulesComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const schedule_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSelect(schedule_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SchedulesComponent_li_3_span_6_Template, 7, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SchedulesComponent_li_3_button_7_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const schedule_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editButtonClick(schedule_r2.scheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schedule_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.schedules === ctx_r0.selectedSchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/schedule-detail/", schedule_r2.scheduleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", schedule_r2.scheduleName, " - ", schedule_r2.subject_schedule.length, " Course(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", schedule_r2.subject_schedule, " ", schedule_r2.scheduleDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.confirmDelete);
} }
function SchedulesComponent_div_8_div_12_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Class Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Requisites and Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].class_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].ssr_component);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].class_nbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].facility_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].descr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].enrl_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.course_info[0].campus);
} }
function SchedulesComponent_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchedulesComponent_div_8_div_12_table_1_Template, 41, 9, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.indexArray.indexOf(i_r16) > -1);
} }
function SchedulesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Courses:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SchedulesComponent_div_8_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Schecule '", ctx_r1.selectedSchedule.scheduleName, "'' Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedSchedule.scheduleDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedSchedule.subject_schedule, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.courses);
} }
class SchedulesComponent {
    constructor(scheduleService, router, courseService) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.courseService = courseService;
        this.matchArray = [];
        this.schedules = [];
        this.schedules_fixed = [];
        this.confirmDelete = false;
        this.indexArray = [];
    }
    ngOnInit() {
        this.getAllCourses();
        this.getAllSchedules();
    }
    getAllSchedules() {
        this.scheduleService.getAllSchedules().subscribe(scheds => {
            this.schedules = scheds;
            const combineItem = (arr, result = []) => {
                if (arr.length === 0) {
                    return result;
                }
                result.push(arr.slice(0, 2).join(' '));
                return combineItem(arr.slice(2), result);
            };
            this.schedules_fixed = this.schedules.map((x) => (Object.assign(Object.assign({}, x), { subject_schedule: combineItem(x.subject_schedule) })));
            console.log(this.schedules);
            console.log(this.schedules_fixed);
        });
    }
    editButtonClick(scheduleName) {
        this.router.navigate(['/editSchedule', scheduleName,]);
    }
    deleteSchedule(name) {
        console.log(name);
        this.scheduleService.deleteSchedule(name).subscribe(data => {
            this.getAllSchedules();
        });
    }
    deleteAll() {
        this.scheduleService.deleteAllSchedules().subscribe(data => this.getAllSchedules());
    }
    getAllCourses() {
        this.courseService.getAllCourses().subscribe(courses => {
            this.courses = courses;
            for (let i = 0; i < this.courses.length; i++) {
                this.matchArray.push(this.courses[i].subject + " " + this.courses[i].catalog_nbr);
            }
            console.log(this.matchArray);
        });
    }
    onSelect(schedule) {
        this.selectedSchedule = (schedule);
        console.log(this.selectedSchedule['subject_schedule']);
        this.myConcatenation = this.selectedSchedule['subject_schedule'][0];
        console.log(this.myConcatenation);
        this.matchIndex = (this.matchArray.indexOf(this.myConcatenation));
        this.indexArray = (this.selectedSchedule['subject_schedule']).map(v => this.matchArray.indexOf(v));
        console.log(this.indexArray);
    }
}
SchedulesComponent.ɵfac = function SchedulesComponent_Factory(t) { return new (t || SchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_schedules_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"])); };
SchedulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulesComponent, selectors: [["app-schedules"]], decls: 9, vars: 2, consts: [[1, "schedules"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["id", "deleteAll", 3, "click"], ["id", "selectedSchedule", 4, "ngIf"], [3, "click"], [3, "routerLink"], [1, "badge"], ["id", "deleteButtonDiv"], [4, "ngIf"], ["class", "delete", "title", "Delete Schedule", 3, "click", 4, "ngIf"], [1, "editBadge"], ["id", "editButton", 3, "click"], ["title", "Delete Schedule", 1, "delete", 3, "click"], ["id", "selectedSchedule"], [4, "ngFor", "ngForOf"]], template: function SchedulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchedulesComponent_li_3_Template, 11, 9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_Template_button_click_6_listener() { return ctx.deleteAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete All Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SchedulesComponent_div_8_Template, 13, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedules_fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSchedule);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".schedules[_ngcontent-%COMP%] {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    width:900px;\r\n    height:90px;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: large;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 80px;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n    width:90px;\r\n  }\r\n  .editBadge[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: white;\r\n    float: right;\r\n    padding-right: 15px;\r\n  }\r\n  #editButton[_ngcontent-%COMP%]{\r\n    background-color: #f79220;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  .delete[_ngcontent-%COMP%]{\r\n    background-color:#c92222;\r\n    color: white;\r\n  }\r\n  #deleteButtonDiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n  }\r\n  #deleteAll[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n}\r\n  h2[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n  #selectedSchedule[_ngcontent-%COMP%]{\r\n  background: linear-gradient(to right, #8f94fb, #4e54c8);\r\n  padding: 10px;\r\n  margin: 10px;\r\n  width: 40%;\r\n  height: 80%;\r\n}\r\n  table[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\nmargin-bottom: 20px;\r\nborder: 2px solid #000000;\r\nbackground-color: transparent;\r\nborder-collapse: collapse;\r\n}\r\n  tr[_ngcontent-%COMP%] {\r\ndisplay: table-row;\r\nvertical-align: inherit;\r\nborder-color: inherit;\r\n}\r\n  th[_ngcontent-%COMP%] {\r\nbackground-color: #d9d9d9;\r\nborder: 2px solid #474747;\r\nfont-size: 13px;\r\nvertical-align: bottom;\r\n}\r\n  tbody[_ngcontent-%COMP%] {\r\ndisplay: table-row-group;\r\nvertical-align: middle;\r\nborder: 1px solid black;\r\n}\r\n  td[_ngcontent-%COMP%] {\r\nbackground-color: #dbdbdb;\r\npadding: 8px;\r\nline-height: 20px;\r\ntext-align: center;\r\nvertical-align: top;\r\nborder-top: 1px solid #dddddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFFRjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0VBRUE7RUFDRSwwQkFBMEI7QUFDNUI7RUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0FBQ2I7RUFFQTtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7RUFFQTtBQUNBLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0VBRUE7QUFDQSx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZixzQkFBc0I7QUFDdEI7RUFFQTtBQUNBLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCO0VBRUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlcy9zY2hlZHVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZXMge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG4gIC5zY2hlZHVsZXMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6OTAwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICB9XHJcbiAgLnNjaGVkdWxlcyBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAuc2NoZWR1bGVzIGxpLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zY2hlZHVsZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNjaGVkdWxlcyAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgd2lkdGg6OTBweDtcclxuICB9XHJcblxyXG4gIC5lZGl0QmFkZ2V7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gICNlZGl0QnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTIyMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5kZWxldGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOTIyMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAjZGVsZXRlQnV0dG9uRGl2e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiNkZWxldGVBbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmgye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jc2VsZWN0ZWRTY2hlZHVsZXtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4Zjk0ZmIsICM0ZTU0YzgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRyIHtcclxuZGlzcGxheTogdGFibGUtcm93O1xyXG52ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcclxuYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG50aCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbmJvcmRlcjogMnB4IHNvbGlkICM0NzQ3NDc7XHJcbmZvbnQtc2l6ZTogMTNweDtcclxudmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxudGJvZHkge1xyXG5kaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50ZCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbnBhZGRpbmc6IDhweDtcclxubGluZS1oZWlnaHQ6IDIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IHRvcDtcclxuYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedules',
                templateUrl: './schedules.component.html',
                styleUrls: ['./schedules.component.css']
            }]
    }], function () { return [{ type: _schedules_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mayan\OneDrive\Documents\GitHub\se3316-msood-lab5\se3316-msood-lab5\src\main.ts */"zUnb");


/***/ }),

/***/ "0riC":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ChangePasswordComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.getUserProfile();
    }
    getUserProfile() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.currentUser = data;
            this.username = this.currentUser.user.username;
        });
    }
    submitPasswordForm(form) {
        const newPasswordData = { password: form.value.password };
        console.log(form.value.password);
        console.log(form.value.password2);
        if (form.value.password == "") {
            alert("Please enter your email address");
        }
        else if (form.value.password2 == "") {
            alert("Please confirm your new password.");
        }
        else if (form.value.password !== form.value.password2) {
            alert("Your passwords do not match!");
        }
        else {
            console.log("Hello, from the else block");
            this.authService.changePassword(this.username, newPasswordData).subscribe(data => {
                console.log(data);
                alert("Your password was successfully changed!");
            });
        }
        form.reset();
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 21, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "change-password-form"], [3, "submit"], ["changePasswordForm", "ngForm"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter New Password", "required", "", "ngModel", ""], ["type", "password", "name", "password2", "id", "password2", "placeholder", "Confirm New Password", "required", "", "ngModel", ""], [1, "changePasswordButton"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChangePasswordComponent_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.submitPasswordForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding:0;\r\n    background-size: cover;\r\n  }\r\n  \r\n  .change-password-form[_ngcontent-%COMP%]{\r\n    width: 750px;\r\n    height: 400px;\r\n    box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);\r\n    background: #fff;\r\n    padding:20px;\r\n    margin: 8% auto 0;\r\n    text-align: center;\r\n    background: linear-gradient(to right, #b8c6db, #f5f7fa);\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n  padding:10px;\r\n  margin: 10px 0;\r\n  width: 90%;\r\n  border-radius: 20px;\r\n  border: 1px solid #999;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    width: 50%;\r\n    padding:10px;\r\n    border-radius: 10px;\r\n    font-size: 15px;\r\n    margin: 10px 0;\r\n    border:none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: #1c8adb;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdURBQXVEO0VBQ3pEOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7RUFDQSxZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2UtcGFzc3dvcmQtZm9ybXtcclxuICAgIHdpZHRoOiA3NTBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIG1hcmdpbjogOCUgYXV0byAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjhjNmRiLCAjZjVmN2ZhKTtcclxuICB9XHJcbiAgXHJcbiAgaHJ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXR7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gIH1cclxuICBcclxuICBidXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4YWRiO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class RegistrationComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
    }
    ngOnInit() {
    }
    google() {
        window.location.href = 'https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    }
    addnewUser(createBody) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.post(this.SERVER_URL + '/register', createBody, { headers: httpHeaders });
    }
    submitRegistrationForm(form) {
        const newFormData = { name: form.value.name, username: form.value.username, email: form.value.email, password: form.value.password };
        if (form.value.name == "") {
            alert("Please enter your full name");
        }
        else if (form.value.name.length <= 5) {
            alert("Please enter a name greather than 5 characters.");
        }
        else if (form.value.password == "") {
            alert("Please enter a password");
        }
        else if (form.value.password.length <= 6) {
            alert("Please enter a password greater than 6 characters.");
        }
        else if (form.value.username == "" || form.value.username.length == 0 || form.value.username == null) {
            alert("Please enter a username");
        }
        else if (form.value.email == "") {
            alert("Please enter a email address");
        }
        else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email))) {
            alert("Invalid Email Address");
        }
        else {
            this.addnewUser(newFormData).subscribe(data => {
                this.response = data;
                if (this.response.message == "An account with this email already exists!") {
                    alert(this.response.message);
                }
                else {
                    alert("Your account was successfuly created. Please verify your email address to log in!");
                    this.router.navigate(['/login']);
                }
            });
            form.reset();
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 35, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "sign-up-form"], [3, "submit"], ["registerForm", "ngForm"], ["type", "text", "name", "name", "id", "name", "placeholder", "Enter Full Name", "required", "", "ngModel", ""], ["type", "text", "name", "username", "id", "username", "placeholder", "Enter Username", "required", "", "ngModel", ""], ["type", "text", "name", "email", "id", "email", "placeholder", "Enter Email Address", "required", "", "ngModel", ""], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter Password", "required", "", "ngModel", ""], [1, "registerButton"], [3, "click"], ["routerLink", "/login"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign-Up Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return ctx.submitRegistrationForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_29_listener() { return ctx.google(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Sign Up With Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Already have an Account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding:0;\r\n  background-size: cover;\r\n}\r\n\r\n.sign-up-form[_ngcontent-%COMP%]{\r\n  width: 750px;\r\n  height: 600px;\r\n  box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);\r\n  background: #fff;\r\n  padding:20px;\r\n  margin: 8% auto 0;\r\n  text-align: center;\r\n  background: linear-gradient(to right, #b8c6db, #f5f7fa);\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n  color: #000000;\r\n  margin-top: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\npadding:10px;\r\nmargin: 10px 0;\r\nwidth: 90%;\r\nborder-radius: 20px;\r\nborder: 1px solid #999;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  width: 50%;\r\n  padding:10px;\r\n  border-radius: 10px;\r\n  font-size: 15px;\r\n  margin: 10px 0;\r\n  border:none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background-color: #1c8adb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osY0FBYztBQUNkLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zaWduLXVwLWZvcm17XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBtYXJnaW46IDglIGF1dG8gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjhjNmRiLCAjZjVmN2ZhKTtcclxufVxyXG5cclxuaHJ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXR7XHJcbnBhZGRpbmc6MTBweDtcclxubWFyZ2luOiAxMHB4IDA7XHJcbndpZHRoOiA5MCU7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4YWRiO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SERVER_URL: ' http://localhost:3000/api'
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

/***/ "C7aP":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../courses.service */ "VWlB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ "ccyI");





function CoursesComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.btnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register a New Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.btnClick2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_div_50_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title: ", review_r16.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", review_r16.rating, " Stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comments: ", review_r16.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Submitted By: ", review_r16.createdBy, " on ", review_r16.createdAt, "");
} }
function CoursesComponent_div_50_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesComponent_div_50_div_11_div_1_Template, 10, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.myConcatenation == review_r16.courseId);
} }
function CoursesComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reviews for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CoursesComponent_div_50_div_11_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r4.selectedCourse.subject, " ", ctx_r4.selectedCourse.catalog_nbr, " - ", ctx_r4.selectedCourse.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedCourse.catalog_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.myConcatenation, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.allReviews);
} }
function CoursesComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Class Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Requisites and Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r5.keywords.subject, " ", ctx_r5.keywords.catalog_nbr, " - ", ctx_r5.keywords.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.catalog_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].class_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].ssr_component);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].class_nbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].facility_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].descr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].enrl_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.keywords.course_info[0].campus);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function CoursesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_52_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const course_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onSelect(course_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Class Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Requisites and Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r19 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r6.colorComponent(course_r19.course_info[0].ssr_component)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", course_r19.subject, " ", course_r19.catalog_nbr, " - ", course_r19.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.catalog_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", course_r19 === ctx_r6.selectedCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].class_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].ssr_component);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].class_nbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].facility_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].descr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].enrl_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.course_info[0].campus);
} }
const _c1 = function (a0, a1) { return { catalog_nbr: a0, className: a1 }; };
class CoursesComponent {
    constructor(courseService, router, authService) {
        this.courseService = courseService;
        this.router = router;
        this.authService = authService;
        this.key = false;
    }
    ngOnInit() {
        this.getAllCourses();
        this.isLoggedIn();
        this.getAllReviews();
        this.getUserProfile();
    }
    getAllCourses() {
        this.courseService.getAllCourses().subscribe(courses => {
            this.courses = courses;
        });
    }
    getCourseIds() {
        this.courseService.getCourseIds().subscribe(ids => {
            this.courseIds = ids;
        });
    }
    getAllReviews() {
        this.courseService.getAllReviews().subscribe(reviews => {
            this.allReviews = reviews;
            console.log(reviews);
            console.log(this.allReviews);
        });
    }
    getKeywords() {
        this.courseService.getKeywords(this.keyword2).subscribe(keywords => {
            this.keywords = keywords;
            console.log(this.keywords);
            this.key = true;
            this.courses = [];
        });
    }
    getUserProfile() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.currentUser = data;
            this.username = this.currentUser.user.username;
        });
    }
    isLoggedIn() {
        this.loginCheck = this.authService.isLoggedIn();
    }
    onSelect(course) {
        this.selectedCourse = course;
        this.myConcatenation = `${this.selectedCourse.subject} ${this.selectedCourse.catalog_nbr}`;
        console.log(this.selectedCourse);
    }
    colorComponent(ssrComponent) {
        switch (ssrComponent) {
            case 'TUT':
                return 'red';
            case 'LAB':
                return 'blue';
        }
    }
    btnClick() {
        this.router.navigate(['/register']);
    }
    btnClick2() {
        this.router.navigate(['/login']);
    }
    viewPublicSchedules() {
        this.router.navigate(['publicSchedules']);
    }
    logoutUser() {
        this.authService.deleteToken();
        this.router.navigate(['/login']);
    }
    changePassword() {
        this.router.navigate([`/changePassword/${this.username}`]);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 57, vars: 27, consts: [["id", "mainTitle"], ["id", "aboutDiv"], ["id", "registerButton", 3, "click", 4, "ngIf"], ["id", "loginButton", 3, "click", 4, "ngIf"], ["id", "publicSchedules", 3, "click"], ["id", "logoutButton", 3, "click", 4, "ngIf"], ["id", "changePassword", 3, "click", 4, "ngIf"], ["id", "searchDiv"], ["id", "subHeading"], ["for", "subjectSearch"], ["type", "text", "id", "subjectSearch", "placeholder", "Search By Subject", "name", "subjectSearch", 3, "ngModel", "ngModelChange"], ["for", "courseNumberSearch"], ["type", "text", "id", "courseNumberSearch", "placeholder", "Search By CourseNumber", "name", "courseNumberSearch", 3, "ngModel", "ngModelChange"], ["for", "keywordSearch"], ["type", "text", "id", "keywordSearch", "placeholder", "Search By Class Name", "name", "keywordSearch", 3, "ngModel", "ngModelChange"], ["for", "courseComponent", "id", "componentLabel"], ["placeholder", "Select Component", "name", "courseComponent", "id", "courseComponent", 3, "ngModel", "ngModelChange"], ["value", "ALL"], ["value", "LEC"], ["value", "TUT"], ["value", "LAB"], ["for", "keywordSearch2", "id", "label2"], ["type", "text", "id", "keywordSearch2", "placeholder", "Search By Keyword", "name", "keywordSearch2", 3, "ngModel", "ngModelChange"], ["id", "keyButton", 3, "click"], ["class", "selectedDiv", 4, "ngIf"], [4, "ngIf"], ["class", "courses", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["id", "registerButton", 3, "click"], ["id", "loginButton", 3, "click"], ["id", "logoutButton", 3, "click"], ["id", "changePassword", 3, "click"], [1, "selectedDiv"], ["id", "selectedHeading"], [4, "ngFor", "ngForOf"], [1, "courses", 3, "ngStyle", "click"], ["id", "coursesTable"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Western University Timetable Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About the App:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to Western University's 2020 Timetable Application. Here you have to the ability to search for any course Western offers using the search boxes below. You can also register an account if you are a new user or login if you have an existing account. Users with an account have the ability to create up to 20 schedules that contains a list of their courses. They can edit these lists, delete them and make them public/private.They also have the ability to add a review for a course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CoursesComponent_button_7_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CoursesComponent_button_8_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_Template_button_click_9_listener() { return ctx.viewPublicSchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Public Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CoursesComponent_button_11_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CoursesComponent_button_12_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Search by Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search by Course Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_input_ngModelChange_23_listener($event) { return ctx.courseNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search by Class Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_input_ngModelChange_28_listener($event) { return ctx.keyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search by Course Component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_select_ngModelChange_33_listener($event) { return ctx.courseComponent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Laborotory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Search by Keyword:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_input_ngModelChange_46_listener($event) { return ctx.keyword2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_Template_button_click_47_listener() { return ctx.getKeywords(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Search By Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CoursesComponent_div_50_Template, 12, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CoursesComponent_div_51_Template, 48, 13, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CoursesComponent_div_52_Template, 48, 18, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "keywordFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "courseComponentFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "courseNumberFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "subjectFilter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.courseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.courseComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](56, 21, ctx.courses, ctx.subject), ctx.courseNumber), ctx.courseComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, ctx.keyword, ctx.keyword)));
    } }, styles: ["#mainTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    text-decoration: underline;\r\n    color: blueviolet;\r\n}\r\n\r\n#aboutDiv[_ngcontent-%COMP%]{\r\n    border: 1.5px solid black;\r\n    background-color: #D1ECF1;\r\n    padding: 10px;\r\n}\r\n\r\n#buttonDiv[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\r\n\r\n#registerButton[_ngcontent-%COMP%], #loginButton[_ngcontent-%COMP%], #publicSchedules[_ngcontent-%COMP%], #logoutButton[_ngcontent-%COMP%], #changePassword[_ngcontent-%COMP%]{\r\n \r\n  background-color: #4CAF50; \r\n  color: white;\r\n  padding: 16px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-left: 5px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    border: 2px solid #000000;\r\n    background-color: transparent;\r\n    border-collapse: collapse;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #d9d9d9;\r\n    border: 2px solid #474747;\r\n    font-size: 13px;\r\n    vertical-align: bottom;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border: 1px solid black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    background-color: #dbdbdb;\r\n    padding: 8px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    border-top: 1px solid #dddddd;\r\n}\r\n\r\n.courses[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]:hover {\r\n    color: #0da2ec;\r\n    background-color: rgb(199, 0, 0);\r\n    left: .1em;\r\n  }\r\n\r\n.courses[_ngcontent-%COMP%]   table.selected[_ngcontent-%COMP%] {\r\n    background-color: #000000;\r\n    color: rgb(170, 0, 0);\r\n  }\r\n\r\n.coursess[_ngcontent-%COMP%]   table.selected[_ngcontent-%COMP%]:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n\r\n.selectedDiv[_ngcontent-%COMP%]{\r\n      background-color: #000000;\r\n      padding: 10px;\r\n      margin: 10px;\r\n  }\r\n\r\n.selectedDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      color:white;\r\n  }\r\n\r\n.selectedDiv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\n#selectedHeading[_ngcontent-%COMP%]{\r\n      text-decoration: underline;\r\n      color: #f7fa64;\r\n  }\r\n\r\n#searchDiv[_ngcontent-%COMP%]{\r\n      margin: 0 auto;\r\n      text-align: center;\r\n  }\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n      font-size: 20px;\r\n      font-weight: 600;\r\n  }\r\n\r\n#componentLabel[_ngcontent-%COMP%]{\r\n      margin-right: 140px;\r\n  }\r\n\r\n#subHeading[_ngcontent-%COMP%]{\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-size: 30px;\r\n      text-decoration: underline;\r\n  }\r\n\r\n#subjectSearch[_ngcontent-%COMP%]{\r\n      margin-left: 180px;\r\n  }\r\n\r\n#keywordSearch[_ngcontent-%COMP%]{\r\n      margin-left: 155px;\r\n  }\r\n\r\n#keywordSearch2[_ngcontent-%COMP%]{\r\n    margin-left: 80px;\r\n}\r\n\r\n#label2[_ngcontent-%COMP%]{\r\n    margin-left: 50px;\r\n}\r\n\r\n#keyButton[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n#courseNumberSearch[_ngcontent-%COMP%]{\r\n      margin-left: 110px;\r\n  }\r\n\r\n#courseComponent[_ngcontent-%COMP%]{\r\n      margin-left: 10px;\r\n  }\r\n\r\nhr[_ngcontent-%COMP%]{\r\n      color: #FFFFFF;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLFVBQVU7RUFDWjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVBO01BQ0kseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixZQUFZO0VBQ2hCOztBQUVBO01BQ0ksV0FBVztFQUNmOztBQUVBO0lBQ0UsV0FBVztBQUNmOztBQUVFO01BQ0ksMEJBQTBCO01BQzFCLGNBQWM7RUFDbEI7O0FBRUE7TUFDSSxjQUFjO01BQ2Qsa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjs7QUFFQTtNQUNJLG1CQUFtQjtFQUN2Qjs7QUFFQTtNQUNJLHlDQUF5QztNQUN6QyxlQUFlO01BQ2YsMEJBQTBCO0VBQzlCOztBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVFO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksY0FBYztFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5UaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuXHJcbiNhYm91dERpdntcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFFQ0YxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2J1dHRvbkRpdntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jcmVnaXN0ZXJCdXR0b24sICNsb2dpbkJ1dHRvbiwgI3B1YmxpY1NjaGVkdWxlcywgI2xvZ291dEJ1dHRvbiwgI2NoYW5nZVBhc3N3b3Jke1xyXG4gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHIge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDc0NzQ3O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbi5jb3Vyc2VzIHRhYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGRhMmVjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMCwgMCk7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAuY291cnNlcyB0YWJsZS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xyXG4gIH1cclxuICAuY291cnNlc3MgdGFibGUuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZERpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkRGl2IHB7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkRGl2IGg0e1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiAgI3NlbGVjdGVkSGVhZGluZ3tcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGNvbG9yOiAjZjdmYTY0O1xyXG4gIH1cclxuXHJcbiAgI3NlYXJjaERpdntcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAjY29tcG9uZW50TGFiZWx7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTQwcHg7XHJcbiAgfVxyXG5cclxuICAjc3ViSGVhZGluZ3tcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAjc3ViamVjdFNlYXJjaHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG4gIH1cclxuXHJcbiAgI2tleXdvcmRTZWFyY2h7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTVweDtcclxuICB9XHJcblxyXG4gICNrZXl3b3JkU2VhcmNoMntcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4jbGFiZWwye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbiNrZXlCdXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuICAjY291cnNlTnVtYmVyU2VhcmNoe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgfVxyXG5cclxuICAjY291cnNlQ29tcG9uZW50e1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIGhye1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.css']
            }]
    }], function () { return [{ type: _courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "FMEJ":
/*!************************************************!*\
  !*** ./src/app/courses/subject-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: SubjectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectFilterPipe", function() { return SubjectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubjectFilterPipe {
    transform(courses, subject) {
        if (!courses || !subject) {
            return courses;
        }
        return courses.filter(course => course.subject.toUpperCase() === subject.toUpperCase());
    }
}
SubjectFilterPipe.ɵfac = function SubjectFilterPipe_Factory(t) { return new (t || SubjectFilterPipe)(); };
SubjectFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "subjectFilter", type: SubjectFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'subjectFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "FoSU":
/*!****************************************************************************!*\
  !*** ./src/app/edit-review-visibility/edit-review-visibility.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditReviewVisibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReviewVisibilityComponent", function() { return EditReviewVisibilityComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../review.service */ "aFrL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EditReviewVisibilityComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You are not an Administrator! You do not have access to this route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditReviewVisibilityComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit Review Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "If a review is selected to be hidden or infringing, it will be hidden from the public. Only courses where both the \"hidden\" property and \"infringing\" property is set to false will be visible for the public to view.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditReviewVisibilityComponent_div_1_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.submitEditedReviewVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Hide Review:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Infringing Material in this Review:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Submit Updated Review Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.reviewForm);
} }
class EditReviewVisibilityComponent {
    constructor(fb, route, reviewService, authService) {
        this.fb = fb;
        this.route = route;
        this.reviewService = reviewService;
        this.authService = authService;
    }
    ngOnInit() {
        this.reviewForm = this.fb.group({
            hidden: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            infringing: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.route.paramMap.subscribe(params => {
            const title = params.get('title');
            if (title) {
                this.getReview(title);
            }
        });
        this.checkAdmin();
    }
    checkAdmin() {
        this.admin = this.authService.checkAdmin();
    }
    getReview(title) {
        this.reviewService.getReview(title).subscribe(review => {
            this.existingReview = review;
        });
    }
    submitEditedReviewVisibility() {
        const editReviewData = { hidden: this.reviewForm.value.hidden, infringing: this.reviewForm.value.infringing };
        this.reviewService.editReview(this.existingReview.title, editReviewData).subscribe(data => {
            console.log(data);
            this.reviewForm.reset();
        });
    }
}
EditReviewVisibilityComponent.ɵfac = function EditReviewVisibilityComponent_Factory(t) { return new (t || EditReviewVisibilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
EditReviewVisibilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditReviewVisibilityComponent, selectors: [["app-edit-review-visibility"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "editReviewForm"], ["id", "editTitle"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "hidden"], ["id", "true", "type", "radio", "value", "true", "name", "hidden", "formControlName", "hidden"], ["for", "true"], ["id", "false", "type", "radio", "value", "false", "name", "hidden", "formControlName", "hidden"], ["for", "false"], ["for", "infringing"], ["id", "true_i", "type", "radio", "value", "true", "name", "infringing", "formControlName", "infringing"], ["for", "true_i"], ["id", "false_i", "type", "radio", "value", "false", "name", "infringing", "formControlName", "infringing"], ["for", "false_i"], ["type", "submit", "id", "submitEditedReviewVisibility"]], template: function EditReviewVisibilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditReviewVisibilityComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditReviewVisibilityComponent_div_1_Template, 37, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcmV2aWV3LXZpc2liaWxpdHkvZWRpdC1yZXZpZXctdmlzaWJpbGl0eS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditReviewVisibilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-review-visibility',
                templateUrl: './edit-review-visibility.component.html',
                styleUrls: ['./edit-review-visibility.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "HsDD":
/*!***********************************!*\
  !*** ./src/app/policy.service.ts ***!
  \***********************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class PolicyService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    getPolicies() {
        return this.http.get(this.SERVER_URL + '/policy');
    }
    addPolicies(data) {
        return this.http.post(this.SERVER_URL + '/policy', data);
    }
    updatePolicy(id, data) {
        return this.http.put(this.SERVER_URL + '/policy/' + id, data);
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "LBR5":
/*!**********************************************************!*\
  !*** ./src/app/view-policies/view-policies.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPolicyComponent", function() { return ViewPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../policy.service */ "HsDD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ViewPolicyComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Security & Privacy:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DMCA Notice & TakeDown Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acceptable Use Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.policyOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.policyTwo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.policyThree);
} }
function ViewPolicyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewPolicyComponent_div_2_div_1_Template, 13, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.policies);
} }
class ViewPolicyComponent {
    constructor(route, policyService) {
        this.route = route;
        this.policyService = policyService;
    }
    ngOnInit() {
        this.getDmca();
    }
    getDmca() {
        this.policyService.getPolicies().subscribe(data => {
            console.log(data);
            this.policies = data;
        });
    }
}
ViewPolicyComponent.ɵfac = function ViewPolicyComponent_Factory(t) { return new (t || ViewPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"])); };
ViewPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPolicyComponent, selectors: [["app-view-policies"]], decls: 24, vars: 1, consts: [[4, "ngIf"], ["id", "contactDiv"], ["href", "https://www.termsfeed.com/blog/sample-privacy-policy-template/"], ["href", "https://creativecommons.org/dmca/"], ["href", "https://www.privacypolicies.com/blog/acceptable-use-policy-template/"], [4, "ngFor", "ngForOf"]], template: function ViewPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewPolicyComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact for Notices of Infringement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "msood@uwo.ca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " for any notices of infringement provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Source for Security and Privacy Policy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "https://www.termsfeed.com/blog/sample-privacy-policy-template/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Source for DMCA Policy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "https://creativecommons.org/dmca/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Source for Acceptable Use Policy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "https://www.privacypolicies.com/blog/acceptable-use-policy-template/.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.policies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    margin-left: 10px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n#contactDiv[_ngcontent-%COMP%]{\r\n    background-color: #eeeeee;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    width: 30%;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    color:#138dff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wb2xpY2llcy92aWV3LXBvbGljaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3LXBvbGljaWVzL3ZpZXctcG9saWNpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jY29udGFjdERpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBjb2xvcjojMTM4ZGZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-policies',
                templateUrl: './view-policies.component.html',
                styleUrls: ['./view-policies.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"] }]; }, null); })();


/***/ }),

/***/ "MnUH":
/*!****************************************************************!*\
  !*** ./src/app/public-schedules/public-schedules.component.ts ***!
  \****************************************************************/
/*! exports provided: PublicSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicSchedulesComponent", function() { return PublicSchedulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _schedules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../schedules.service */ "ekzQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../courses.service */ "VWlB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PublicSchedulesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicSchedulesComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const schedule_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(schedule_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schedule_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.schedules === ctx_r0.selectedPublicSchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/schedule-detail/", schedule_r2.scheduleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", schedule_r2.scheduleName, " - ", schedule_r2.subject_schedule.length, " Course(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Date Modified: ", schedule_r2.updatedAt, " , Created By: ", schedule_r2.createdBy, "\n");
} }
function PublicSchedulesComponent_div_8_div_12_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Class Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Requisites and Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].class_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].ssr_component);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].class_nbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].facility_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].descr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].enrl_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.course_info[0].campus);
} }
function PublicSchedulesComponent_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicSchedulesComponent_div_8_div_12_table_1_Template, 41, 9, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indexArray.indexOf(i_r7) > -1);
} }
function PublicSchedulesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Courses:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PublicSchedulesComponent_div_8_div_12_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Schecule '", ctx_r1.selectedPublicSchedule.scheduleName, "'' Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedPublicSchedule.scheduleDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedPublicSchedule.subject_schedule, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.courses);
} }
class PublicSchedulesComponent {
    constructor(scheduleService, router, courseService) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.courseService = courseService;
        this.schedules = [];
        this.schedules_fixed = [];
        this.matchArray = [];
        this.indexArray = [];
        this.showMyContainer = false;
    }
    ngOnInit() {
        this.getAllCourses();
        this.getPublicSchedules();
        this.getCourseIds();
    }
    getPublicSchedules() {
        this.scheduleService.getPublicSchedules().subscribe(scheds => {
            this.schedules = scheds;
            const combineItem = (arr, result = []) => {
                if (arr.length === 0) {
                    return result;
                }
                result.push(arr.slice(0, 2).join(' '));
                return combineItem(arr.slice(2), result);
            };
            this.schedules_fixed = this.schedules.map((x) => (Object.assign(Object.assign({}, x), { subject_schedule: combineItem(x.subject_schedule) })));
        });
    }
    onSelect(publicSchedule) {
        this.selectedPublicSchedule = (publicSchedule);
        console.log(this.selectedPublicSchedule['subject_schedule']);
        this.myConcatenation = this.selectedPublicSchedule['subject_schedule'][0];
        console.log(this.myConcatenation);
        this.matchIndex = (this.matchArray.indexOf(this.myConcatenation));
        this.indexArray = (this.selectedPublicSchedule['subject_schedule']).map(v => this.matchArray.indexOf(v));
        console.log(this.indexArray);
    }
    getAllCourses() {
        this.courseService.getAllCourses().subscribe(courses => {
            this.courses = courses;
            for (let i = 0; i < this.courses.length; i++) {
                this.matchArray.push(this.courses[i].subject + " " + this.courses[i].catalog_nbr);
            }
            console.log(this.matchArray);
        });
    }
    getCourseIds() {
        this.courseService.getCourseIds().subscribe(data => {
            this.courseIds = data;
            //console.log(data);
        });
    }
}
PublicSchedulesComponent.ɵfac = function PublicSchedulesComponent_Factory(t) { return new (t || PublicSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_schedules_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"])); };
PublicSchedulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicSchedulesComponent, selectors: [["app-public-schedules"]], decls: 9, vars: 2, consts: [[1, "schedules"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["id", "selectedPublicSchedule", 4, "ngIf"], [3, "click"], [3, "routerLink"], [1, "badge"], ["id", "selectedPublicSchedule"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function PublicSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Public Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click on the schedule to view more details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicSchedulesComponent_li_5_Template, 5, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PublicSchedulesComponent_div_8_Template, 13, 4, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedules_fixed.slice(0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPublicSchedule);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".schedules[_ngcontent-%COMP%] {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    width:900px;\r\n    height:90px;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n  .schedules[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: large;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 80px;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n    width:150px;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n  }\r\n  #selectedPublicSchedule[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to right, #8f94fb, #4e54c8);\r\n    padding: 10px;\r\n    margin: 10px;\r\n    width: 40%;\r\n    height: 80%;\r\n}\r\n  table[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  border: 2px solid #000000;\r\n  background-color: transparent;\r\n  border-collapse: collapse;\r\n}\r\n  tr[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n  vertical-align: inherit;\r\n  border-color: inherit;\r\n}\r\n  th[_ngcontent-%COMP%] {\r\n  background-color: #d9d9d9;\r\n  border: 2px solid #474747;\r\n  font-size: 13px;\r\n  vertical-align: bottom;\r\n}\r\n  tbody[_ngcontent-%COMP%] {\r\n  display: table-row-group;\r\n  vertical-align: middle;\r\n  border: 1px solid black;\r\n}\r\n  td[_ngcontent-%COMP%] {\r\n  background-color: #dbdbdb;\r\n  padding: 8px;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dddddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLXNjaGVkdWxlcy9wdWJsaWMtc2NoZWR1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFdBQVc7RUFDYjtFQUVGO0lBQ0ksMEJBQTBCO0VBQzVCO0VBRUY7SUFDSSx1REFBdUQ7SUFDdkQsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmO0VBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0VBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtc2NoZWR1bGVzL3B1YmxpYy1zY2hlZHVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZXMge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG4gIC5zY2hlZHVsZXMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6OTAwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICB9XHJcbiAgLnNjaGVkdWxlcyBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAuc2NoZWR1bGVzIGxpLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zY2hlZHVsZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNjaGVkdWxlcyAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgfVxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4jc2VsZWN0ZWRQdWJsaWNTY2hlZHVsZXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhmOTRmYiwgIzRlNTRjOCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NzQ3NDc7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicSchedulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-schedules',
                templateUrl: './public-schedules.component.html',
                styleUrls: ['./public-schedules.component.css']
            }]
    }], function () { return [{ type: _schedules_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"] }]; }, null); })();


/***/ }),

/***/ "OOuX":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UserProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (this.authService.isLoggedIn() == false) {
            this.router.navigateByUrl('/login');
        }
        this.getUserProfile();
    }
    onLogout() {
        this.authService.deleteToken();
        this.router.navigate(['/login']);
    }
    viewPublicSchedules() {
        this.router.navigate(['publicSchedules']);
    }
    getUserProfile() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.currentUser = data;
            this.name = this.currentUser.user.name;
            this.username = this.currentUser.user.username;
        });
    }
    changePassword() {
        this.router.navigate([`/changePassword/${this.username}`]);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-detail"]], decls: 15, vars: 2, consts: [["id", "mainTitle"], ["id", "aboutDiv"], ["id", "welcome"], ["id", "publicSchedules", 3, "click"], ["id", "logOutButton", 3, "click"], ["id", "changePassword", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Western University Timetable Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About the App:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to Western University's 2020 Timetable Application. Here you have to the ability to search for any course Western offers using the search boxes below. You have the ability to create up to 20 schedules that contains a list of your courses. You can also edit these lists, delete them and make them public/private. You also have the ability to add a review for a course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_9_listener() { return ctx.viewPublicSchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Public Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_11_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_13_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Welcome ", ctx.name, " (", ctx.username, ")");
    } }, styles: ["#mainTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    text-decoration: underline;\r\n    color: blueviolet;\r\n}\r\n\r\n#aboutDiv[_ngcontent-%COMP%]{\r\n    border: 1.5px solid black;\r\n    background-color: #D1ECF1;\r\n    padding: 10px;\r\n}\r\n\r\n#buttonDiv[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\r\n\r\n#logOutButton[_ngcontent-%COMP%], #publicSchedules[_ngcontent-%COMP%], #changePassword[_ngcontent-%COMP%]{\r\n \r\n  background-color: #4CAF50; \r\n  color: white;\r\n  padding: 16px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#welcome[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    text-decoration: underline;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix5Q0FBeUM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5UaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuXHJcbiNhYm91dERpdntcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFFQ0YxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2J1dHRvbkRpdntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jbG9nT3V0QnV0dG9uLCAjcHVibGljU2NoZWR1bGVzLCAjY2hhbmdlUGFzc3dvcmR7XHJcbiBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI3dlbGNvbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-detail',
                templateUrl: './user-detail.component.html',
                styleUrls: ['./user-detail.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.canActivate();
    }
    canActivate() {
        if (!this.authService.isLoggedIn()) {
            alert("You are not logged in! Please log in to access this feature.");
            this.router.navigate['/login'];
            this.authService.deleteToken();
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "S4ft":
/*!**************************************************************!*\
  !*** ./src/app/manage-policies/manage-policies.component.ts ***!
  \**************************************************************/
/*! exports provided: ManagePoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePoliciesComponent", function() { return ManagePoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../policy.service */ "HsDD");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ManagePoliciesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are not an Administrator! You do not have access to this route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagePoliciesComponent_div_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Security & Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DMCA Notice & Takedown Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Acceptable Use Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePoliciesComponent_div_1_ul_3_li_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const pol_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.edit(pol_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pol_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pol_r6.policyOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pol_r6.policyTwo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pol_r6.policyThree);
} }
function ManagePoliciesComponent_div_1_ul_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Security & Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_ul_3_div_2_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.polOne = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DMCA Notice & Takedown Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_ul_3_div_2_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.polTwo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Acceptable Use Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_ul_3_div_2_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.polThree = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePoliciesComponent_div_1_ul_3_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.postChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.polOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.polTwo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.polThree);
} }
function ManagePoliciesComponent_div_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagePoliciesComponent_div_1_ul_3_li_1_Template, 18, 3, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagePoliciesComponent_div_1_ul_3_div_2_Template, 14, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dmca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display);
} }
function ManagePoliciesComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Security & Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_div_7_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.polOne = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DMCA Notice & Takedown Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_div_7_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.polTwo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Acceptable Use Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePoliciesComponent_div_1_div_7_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.polThree = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePoliciesComponent_div_1_div_7_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.newPolicy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.polOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.polTwo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.polThree);
} }
function ManagePoliciesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Western Timetable Application Policies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagePoliciesComponent_div_1_ul_3_Template, 3, 2, "ul", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePoliciesComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create New Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManagePoliciesComponent_div_1_div_7_Template, 12, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dmca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.obs);
} }
class ManagePoliciesComponent {
    constructor(route, policyService, authService) {
        this.route = route;
        this.policyService = policyService;
        this.authService = authService;
        this.polOne = "";
        this.polTwo = "";
        this.polThree = "";
        this.display = false;
        this.obs = false;
    }
    ngOnInit() {
        this.getPolicies();
        this.checkAdmin();
    }
    getPolicies() {
        this.policyService.getPolicies().subscribe(data => {
            this.dmca = data;
        });
    }
    edit(id) {
        this.id = id;
        this.display = true;
    }
    addNew() {
        this.obs = true;
    }
    newPolicy() {
        let newPol = {
            policyOne: this.polOne,
            policyTwo: this.polTwo,
            policyThree: this.polThree
        };
        this.policyService.addPolicies(newPol).subscribe(data => {
            window.location.reload();
        });
    }
    postChanges() {
        let changes = {
            policyOne: this.polOne,
            policyTwo: this.polTwo,
            policyThree: this.polThree
        };
        this.policyService.updatePolicy(this.id, changes).subscribe(data => {
            window.location.reload();
        });
    }
    checkAdmin() {
        this.admin = this.authService.checkAdmin();
    }
}
ManagePoliciesComponent.ɵfac = function ManagePoliciesComponent_Factory(t) { return new (t || ManagePoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ManagePoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagePoliciesComponent, selectors: [["app-manage-policies"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "newPolicy", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click"], ["rows", "10", "cols", "180", 3, "ngModel", "ngModelChange"]], template: function ManagePoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManagePoliciesComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagePoliciesComponent_div_1_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    margin-left: 30px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background-color: rgb(133, 201, 201);\r\n    color: rgb(0, 0, 0);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n  }\r\n\r\n#newPolicy[_ngcontent-%COMP%]{\r\n      margin-left: 35px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXBvbGljaWVzL21hbmFnZS1wb2xpY2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBRUE7TUFDSSxpQkFBaUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtcG9saWNpZXMvbWFuYWdlLXBvbGljaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDIwMSwgMjAxKTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAjbmV3UG9saWN5e1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePoliciesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-policies',
                templateUrl: './manage-policies.component.html',
                styleUrls: ['./manage-policies.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Schedules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add a New Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add a Review for a Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administrator Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create/Edit Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Takedowns/Requests/Disputes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'SE 3316 Lab 5';
    }
    ngOnInit() {
        this.isLoggedIn();
        this.isAdmin();
    }
    isLoggedIn() {
        this.loginCheck = this.authService.isLoggedIn();
    }
    isAdmin() {
        this.adminCheck = this.authService.checkAdmin();
        console.log(this.adminCheck);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 6, consts: [["routerLink", "/courses"], ["routerLink", "/viewPolicy"], ["routerLink", "/schedules", 4, "ngIf"], ["routerLink", "/createSchedule", 4, "ngIf"], ["routerLink", "/addReview", 4, "ngIf"], ["routerLink", "/admin", 4, "ngIf"], ["routerLink", "/createPolicy", 4, "ngIf"], ["routerLink", "/logRequests", 4, "ngIf"], ["routerLink", "/schedules"], ["routerLink", "/createSchedule"], ["routerLink", "/addReview"], ["routerLink", "/admin"], ["routerLink", "/createPolicy"], ["routerLink", "/logRequests"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View All Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_a_13_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_a_15_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminCheck == true && ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminCheck == true && ctx.loginCheck == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminCheck == true && ctx.loginCheck == true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n    text-decoration: underline;\r\n  }\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n    color: #334953;\r\n  }\r\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\n  nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    color: #039be5;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIG5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgICBjb2xvcjogIzMzNDk1MztcclxuICB9XHJcbiAgbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG4gIH1cclxuICBuYXYgYS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "VWlB":
/*!************************************!*\
  !*** ./src/app/courses.service.ts ***!
  \************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CoursesService {
    constructor(http) {
        this.http = http;
        this.SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    getAllCourses() {
        return this.http.get(this.SERVER_URL + '/open/courses', this.noAuthHeader);
    }
    getCourseIds() {
        return this.http.get(this.SERVER_URL + '/open/courseId', this.noAuthHeader);
    }
    getAllReviews() {
        return this.http.get(this.SERVER_URL + '/open/allReviews', this.noAuthHeader);
    }
    getKeywords(id) {
        return this.http.get(this.SERVER_URL + `/open/course/keywords/${id}`, this.noAuthHeader);
    }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "OOuX");
/* harmony import */ var _courses_keyword_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses/keyword-filter.pipe */ "xg2n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _courses_subject_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses/subject-filter.pipe */ "FMEJ");
/* harmony import */ var _courses_courseNumber_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courseNumber-filter.pipe */ "kmjQ");
/* harmony import */ var _courses_courseComponent_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses/courseComponent-filter.pipe */ "j7Yw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./schedules/schedules.component */ "/tPW");
/* harmony import */ var _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-schedules/create-schedules.component */ "daQj");
/* harmony import */ var _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-schedule/edit-schedule.component */ "sf7m");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _auth_auth_inceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth-inceptor */ "zzmY");
/* harmony import */ var _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./public-schedules/public-schedules.component */ "MnUH");
/* harmony import */ var _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./administrator/administrator.component */ "uUZd");
/* harmony import */ var _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses-review/courses-review.component */ "h+PD");
/* harmony import */ var _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-user-privileges/edit-user-privileges.component */ "c4rC");
/* harmony import */ var _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-review-visibility/edit-review-visibility.component */ "FoSU");
/* harmony import */ var _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manage-policies/manage-policies.component */ "S4ft");
/* harmony import */ var _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-policies/view-policies.component */ "LBR5");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./change-password/change-password.component */ "0riC");
/* harmony import */ var _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-log/admin-log.component */ "yIut");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "tyNb");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_inceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
            multi: true
        },
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"],
        _courses_subject_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SubjectFilterPipe"],
        _courses_courseNumber_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["CourseNumberFilterPipe"],
        _courses_courseComponent_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CourseComponentFilterPipe"],
        _courses_keyword_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["KeywordFilterPipe"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_14__["SchedulesComponent"],
        _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_15__["CreateSchedulesComponent"],
        _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_16__["EditScheduleComponent"],
        _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"],
        _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_19__["PublicSchedulesComponent"],
        _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_20__["AdministratorComponent"],
        _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_21__["CoursesReviewComponent"],
        _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_22__["EditUserPrivilegesComponent"],
        _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_23__["EditReviewVisibilityComponent"],
        _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_25__["ViewPolicyComponent"],
        _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_24__["ManagePoliciesComponent"],
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"],
        _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_27__["AdminLogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"],
                    _courses_subject_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SubjectFilterPipe"],
                    _courses_courseNumber_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["CourseNumberFilterPipe"],
                    _courses_courseComponent_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CourseComponentFilterPipe"],
                    _courses_keyword_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["KeywordFilterPipe"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_14__["SchedulesComponent"],
                    _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_15__["CreateSchedulesComponent"],
                    _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_16__["EditScheduleComponent"],
                    _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"],
                    _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_19__["PublicSchedulesComponent"],
                    _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_20__["AdministratorComponent"],
                    _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_21__["CoursesReviewComponent"],
                    _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_22__["EditUserPrivilegesComponent"],
                    _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_23__["EditReviewVisibilityComponent"],
                    _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_25__["ViewPolicyComponent"],
                    _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_24__["ManagePoliciesComponent"],
                    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"],
                    _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_27__["AdminLogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_inceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                        multi: true
                    },
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_28__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"],
    _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
    _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_14__["SchedulesComponent"],
    _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_15__["CreateSchedulesComponent"],
    _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_16__["EditScheduleComponent"],
    _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"],
    _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_19__["PublicSchedulesComponent"],
    _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_20__["AdministratorComponent"],
    _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_21__["CoursesReviewComponent"],
    _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_22__["EditUserPrivilegesComponent"],
    _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_23__["EditReviewVisibilityComponent"],
    _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_25__["ViewPolicyComponent"],
    _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_24__["ManagePoliciesComponent"],
    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"],
    _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_27__["AdminLogComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_28__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["KeyValuePipe"], _courses_subject_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SubjectFilterPipe"],
    _courses_courseNumber_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["CourseNumberFilterPipe"],
    _courses_courseComponent_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CourseComponentFilterPipe"],
    _courses_keyword_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["KeywordFilterPipe"]]);


/***/ }),

/***/ "aFrL":
/*!***********************************!*\
  !*** ./src/app/review.service.ts ***!
  \***********************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ReviewService {
    constructor(http) {
        this.http = http;
        this.SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    addNewReview(createBody) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.post(this.SERVER_URL + '/secure/review', createBody);
    }
    getAllReviews() {
        return this.http.get(this.SERVER_URL + '/secure/reviews');
    }
    getReview(title) {
        const url = `${this.SERVER_URL}/secure/review/${title}`;
        return this.http.get(url);
    }
    editReview(title, updatedBody) {
        const url = `${this.SERVER_URL}/secure/review/${title}`;
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.put(url, updatedBody);
    }
}
ReviewService.ɵfac = function ReviewService_Factory(t) { return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewService, factory: ReviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "c4rC":
/*!************************************************************************!*\
  !*** ./src/app/edit-user-privileges/edit-user-privileges.component.ts ***!
  \************************************************************************/
/*! exports provided: EditUserPrivilegesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPrivilegesComponent", function() { return EditUserPrivilegesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditUserPrivilegesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are not an Administrator! You do not have access to this route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserPrivilegesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit User Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserPrivilegesComponent_div_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submitEditedUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Admin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deactivate Account:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit Edited User Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
} }
class EditUserPrivilegesComponent {
    constructor(fb, route, authService) {
        this.fb = fb;
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            admin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            deactive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.route.paramMap.subscribe(params => {
            const username = params.get('username');
            if (username) {
                this.getUser(username);
            }
        });
        this.checkAdmin();
    }
    checkAdmin() {
        this.admin = this.authService.checkAdmin();
    }
    getUser(username) {
        this.authService.getUser(username).subscribe(user => {
            this.editUser(user);
            this.existingUser = user;
        });
    }
    editUser(user) {
        console.log(user);
    }
    submitEditedUser() {
        const editUserData = { admin: this.userForm.value.admin, deactive: this.userForm.value.deactive };
        this.authService.editUser(this.existingUser.username, editUserData).subscribe(data => {
            console.log(data);
            this.userForm.reset();
        });
    }
}
EditUserPrivilegesComponent.ɵfac = function EditUserPrivilegesComponent_Factory(t) { return new (t || EditUserPrivilegesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
EditUserPrivilegesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserPrivilegesComponent, selectors: [["app-edit-user-privileges"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "editUserForm"], ["id", "editTitle"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "admin"], ["id", "true", "type", "radio", "value", "true", "name", "admin", "formControlName", "admin"], ["for", "true"], ["id", "false", "type", "radio", "value", "false", "name", "admin", "formControlName", "admin"], ["for", "false"], ["for", "deactive"], ["id", "d_true", "type", "radio", "value", "true", "name", "deactive", "formControlName", "deactive"], ["for", "d_true"], ["id", "d_false", "type", "radio", "value", "false", "name", "deactive", "formControlName", "deactive"], ["for", "d_false"], ["type", "submit", "id", "submitEditedUser"]], template: function EditUserPrivilegesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditUserPrivilegesComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserPrivilegesComponent_div_1_Template, 34, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci1wcml2aWxlZ2VzL2VkaXQtdXNlci1wcml2aWxlZ2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserPrivilegesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user-privileges',
                templateUrl: './edit-user-privileges.component.html',
                styleUrls: ['./edit-user-privileges.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    loginUser(createBody) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.post(this.SERVER_URL + '/login', createBody, this.noAuthHeader);
    }
    getUserProfile() {
        return this.http.get(this.SERVER_URL + '/secure/user-detail');
    }
    setAdmin(check) {
        localStorage.setItem('admin', check);
    }
    getAdmin() {
        return localStorage.getItem('admin');
    }
    checkAdmin() {
        let admin = this.getAdmin();
        if (admin == "true") {
            return true;
        }
        return false;
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        let token = this.getToken();
        if (token) {
            let userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        let userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    getAllUsers() {
        return this.http.get(this.SERVER_URL + '/secure/users');
    }
    getUser(username) {
        const url = `${this.SERVER_URL}/secure/user/${username}`;
        return this.http.get(url);
    }
    editUser(username, updatedBody) {
        const url = `${this.SERVER_URL}/secure/user/${username}`;
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.put(url, updatedBody);
    }
    changePassword(username, editBody) {
        const url = `${this.SERVER_URL}/secure/changePassword/${username}`;
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.put(url, editBody);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "daQj":
/*!****************************************************************!*\
  !*** ./src/app/create-schedules/create-schedules.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSchedulesComponent", function() { return CreateSchedulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../schedules.service */ "ekzQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CreateSchedulesComponent_div_23_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSchedulesComponent_div_23_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeCourseButtonClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSchedulesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateSchedulesComponent_div_23_button_8_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "subject" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Enter Subject " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "subject" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleForm.get("subject_schedule").length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "courseNumber" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Enter Course Code " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "courseNumber" + i_r2);
} }
class CreateSchedulesComponent {
    constructor(scheduleService, fb, route, authService) {
        this.scheduleService = scheduleService;
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.scheduleCourses = [];
    }
    ngOnInit() {
        this.scheduleForm = this.fb.group({
            visibility: [''],
            scheduleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            scheduleDescription: [''],
            subject_schedule: this.fb.array([this.addCoursesFormGroup()])
        });
        this.getUserProfile();
    }
    addCoursesFormGroup() {
        return this.fb.group({
            subject: [''],
            courseCode: ['']
        });
    }
    addAnotherCourse() {
        this.scheduleForm.get('subject_schedule').push(this.addCoursesFormGroup());
        console.log(this.scheduleForm.value);
    }
    getUserProfile() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.currentUser = data;
            this.name = this.currentUser.user.name;
            this.username = this.currentUser.user.username;
        });
    }
    submitSchedule() {
        this.scheduleCourses = this.scheduleForm.value.subject_schedule.flatMap((item) => Object.values(item));
        const newFormData = { visibility: this.scheduleForm.value.visibility, scheduleName: this.scheduleForm.value.scheduleName, scheduleDescription: this.scheduleForm.value.scheduleDescription, subject_schedule: this.scheduleCourses, createdBy: this.username };
        console.log(newFormData);
        if (this.scheduleForm.value.visibility == "") {
            alert("Please select the visibility of this schedule.");
        }
        else if (this.scheduleForm.value.scheduleName == "") {
            alert("Please enter a schedule name");
        }
        else if (this.scheduleForm.value.scheduleName.length >= 20) {
            alert("Please enter a shorter schedule name");
        }
        else {
            this.scheduleService.addNewSchedule(newFormData).subscribe(data => console.log(data));
            this.scheduleForm.reset();
        }
    }
    removeCourseButtonClick(courseIndex) {
        this.scheduleForm.get('subject_schedule').removeAt(courseIndex);
    }
}
CreateSchedulesComponent.ɵfac = function CreateSchedulesComponent_Factory(t) { return new (t || CreateSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_schedules_service__WEBPACK_IMPORTED_MODULE_2__["SchedulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CreateSchedulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSchedulesComponent, selectors: [["app-create-schedules"]], decls: 32, vars: 2, consts: [["id", "addScheduleForm"], ["id", "addTitle"], [3, "formGroup", "ngSubmit"], ["type", "radio", "id", "public", "formControlName", "visibility", "value", "public", 1, "radioVisibility"], ["for", "public", 1, "radioVisibilityL"], ["type", "radio", "id", "private", "formControlName", "visibility", "value", "private", "checked", "", 1, "radioVisibility"], ["for", "private", 1, "radioVisibilityL"], ["for", "scheduleName"], ["type", "text", "formControlName", "scheduleName", "placeholder", "Schedule Name", "required", "", "id", "scheduleNameInput"], ["for", "scheduleDescription", "id", "textareaLabel"], ["formControlName", "scheduleDescription", "rows", "4", "cols", "84", "placeholder", "Enter Schedule Description Here... (Optional)", "id", "textarea"], ["formArrayName", "subject_schedule", 4, "ngFor", "ngForOf"], ["type", "button", "id", "addAnotherCourse", 3, "click"], ["type", "submit", "id", "submitSchedule"], ["formArrayName", "subject_schedule"], [3, "formGroupName"], [3, "for"], ["type", "text", "formControlName", "subject", "placeholder", "Enter Subject", 1, "subjectInputs", 3, "id"], ["title", "Delete Course", "id", "deleteCourseButton", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "courseCode", "placeholder", "Enter Course Code", 1, "courseNumberInputs", 3, "id"], ["title", "Delete Course", "id", "deleteCourseButton", 3, "click"]], template: function CreateSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSchedulesComponent_Template_form_ngSubmit_3_listener() { return ctx.submitSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter Schedule Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Schedule Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateSchedulesComponent_div_23_Template, 14, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSchedulesComponent_Template_button_click_24_listener() { return ctx.addAnotherCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Another Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.scheduleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheduleForm.get("subject_schedule")["controls"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".editBadge[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: white;\r\n    float: right;\r\n    padding-right: 15px;\r\n  }\r\n\r\n  #editButton[_ngcontent-%COMP%]{\r\n    background-color: #f79220;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .delete[_ngcontent-%COMP%]{\r\n    background-color:#c92222;\r\n    color: white;\r\n  }\r\n\r\n  #deleteButtonDiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n  }\r\n\r\n  #deleteAll[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n}\r\n\r\n  h2[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n\r\n  #addScheduleForm[_ngcontent-%COMP%]{\r\n  background-color: #f2f2f2;\r\n  width: 50%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n  #addTitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n  label[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n\r\n  input[type=text][_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n  #scheduleNameInput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n  .subjectInputs[_ngcontent-%COMP%]{\r\n  margin-left: 55px;\r\n}\r\n\r\n  .courseNumberInputs[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n}\r\n\r\n  #submitSchedule[_ngcontent-%COMP%], #addAnotherCourse[_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n  #addAnotherCourse[_ngcontent-%COMP%]{\r\n  background-color: rgb(123, 212, 241);\r\n}\r\n\r\n  #deleteCourseButton[_ngcontent-%COMP%]{\r\n  background-color: #c92222;\r\n  color: white;\r\n  border: 1px solid black;\r\n  border-radius: 15%;\r\n  width: 40px;\r\n  height: 25px;\r\n  font-size: larger;\r\n  margin-left: 900px;\r\n}\r\n\r\n  #textarea[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n  .radioVisibility[_ngcontent-%COMP%] {\r\n width: 15px;\r\n margin-left: 170px;\r\n}\r\n\r\n  .radioVisibilityL[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXNjaGVkdWxlcy9jcmVhdGUtc2NoZWR1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVGO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0VBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztFQUdBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1zY2hlZHVsZXMvY3JlYXRlLXNjaGVkdWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRCYWRnZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2VkaXRCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MjIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2M5MjIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICNkZWxldGVCdXR0b25EaXZ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuI2RlbGV0ZUFsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNhZGRTY2hlZHVsZUZvcm17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNhZGRUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNzY2hlZHVsZU5hbWVJbnB1dHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnN1YmplY3RJbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbn1cclxuXHJcbi5jb3Vyc2VOdW1iZXJJbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNzdWJtaXRTY2hlZHVsZSwgI2FkZEFub3RoZXJDb3Vyc2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNhZGRBbm90aGVyQ291cnNle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMsIDIxMiwgMjQxKTtcclxufVxyXG5cclxuI2RlbGV0ZUNvdXJzZUJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkyMjIyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbi1sZWZ0OiA5MDBweDtcclxufVxyXG5cclxuI3RleHRhcmVhe1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucmFkaW9WaXNpYmlsaXR5IHtcclxuIHdpZHRoOiAxNXB4O1xyXG4gbWFyZ2luLWxlZnQ6IDE3MHB4O1xyXG59XHJcblxyXG5cclxuLnJhZGlvVmlzaWJpbGl0eUwge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSchedulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-schedules',
                templateUrl: './create-schedules.component.html',
                styleUrls: ['./create-schedules.component.css']
            }]
    }], function () { return [{ type: _schedules_service__WEBPACK_IMPORTED_MODULE_2__["SchedulesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ekzQ":
/*!**************************************!*\
  !*** ./src/app/schedules.service.ts ***!
  \**************************************/
/*! exports provided: SchedulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesService", function() { return SchedulesService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SchedulesService {
    constructor(http) {
        this.http = http;
        this.SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    getAllSchedules() {
        return this.http.get(this.SERVER_URL + '/secure/schedule');
    }
    getPublicSchedules() {
        return this.http.get(this.SERVER_URL + '/open/publicSchedules', this.noAuthHeader);
    }
    getSchedule(name) {
        const url = `${this.SERVER_URL}/secure/schedule/${name}`;
        return this.http.get(url);
    }
    addNewSchedule(createBody) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.post(this.SERVER_URL + '/secure/schedule', createBody);
    }
    editSchedule(name, updatedBody) {
        const url = `${this.SERVER_URL}/secure/schedule/${name}`;
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders.append('content-type', 'application/json');
        return this.http.put(url, updatedBody);
    }
    deleteSchedule(name) {
        const url = `${this.SERVER_URL}/secure/schedule/${name}`;
        return this.http.delete(url);
    }
    deleteAllSchedules() {
        return this.http.delete(this.SERVER_URL + '/secure/schedule');
    }
}
SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SchedulesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SchedulesService, factory: SchedulesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SchedulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "h+PD":
/*!************************************************************!*\
  !*** ./src/app/courses-review/courses-review.component.ts ***!
  \************************************************************/
/*! exports provided: CoursesReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesReviewComponent", function() { return CoursesReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../review.service */ "aFrL");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../courses.service */ "VWlB");








class CoursesReviewComponent {
    constructor(fb, route, authService, reviewService, courseService, router) {
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.reviewService = reviewService;
        this.courseService = courseService;
        this.router = router;
    }
    ngOnInit() {
        this.reviewForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.getCourseIds();
        this.getUserProfile();
    }
    getCourseIds() {
        this.courseService.getCourseIds().subscribe(data => {
            this.courseIds = data;
            console.log(this.courseIds);
        });
    }
    checkCourseIds() {
        console.log(this.courseIds.length);
        for (let i = 0; i < this.courseIds.length; i++) {
            if (this.courseIds[i] == this.reviewForm.value.courseId) {
                return true;
            }
        }
        return false;
    }
    getUserProfile() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.currentUser = data;
            this.username = this.currentUser.user.username;
        });
    }
    submitReview() {
        this.checkCourseIds();
        const reviewFormData = { title: this.reviewForm.value.title, courseId: this.reviewForm.value.courseId, rating: this.reviewForm.value.rating, comment: this.reviewForm.value.comment, createdBy: this.username };
        if (this.reviewForm.value.title == null || this.reviewForm.value.title == "") {
            alert("Please enter a title for the course Review");
        }
        else if (this.reviewForm.value.courseId == null || this.reviewForm.value.courseId == "") {
            alert("Please enter the subject and course number for the course you want to review");
        }
        else if (this.checkCourseIds() == false) {
            alert("Invalid Course. This course is not offered at Western University.");
        }
        else if (this.reviewForm.value.rating == null || this.reviewForm.value.rating == "") {
            alert("Please enter a rating for the course.");
        }
        else if (this.reviewForm.value.comment == null || this.reviewForm.value.comment == "") {
            alert("Please enter some comments for the course.");
        }
        else {
            this.reviewService.addNewReview(reviewFormData).subscribe(data => console.log(data));
            this.reviewForm.reset();
            alert(`Your review was successfully submitted.`);
            this.router.navigate(['/courses']);
        }
    }
}
CoursesReviewComponent.ɵfac = function CoursesReviewComponent_Factory(t) { return new (t || CoursesReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_5__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CoursesReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesReviewComponent, selectors: [["app-courses-review"]], decls: 28, vars: 1, consts: [["id", "addReviewForm"], ["id", "addTitle"], [3, "formGroup", "ngSubmit"], ["for", "reviewTitle"], ["type", "text", "formControlName", "title", "placeholder", "Review Title", "required", "", "id", "reviewTitleInput"], ["for", "courseId"], ["type", "text", "formControlName", "courseId", "placeholder", "Enter Course Id", "required", "", "id", "courseIdInput"], ["type", "text", "formControlName", "rating", "placeholder", "Rating Number", "required", "", "id", "ratingNumberInput"], ["for", "reviewComment", "id", "textareaLabel"], ["formControlName", "comment", "rows", "4", "cols", "84", "placeholder", "Enter Comments about the course here...", "id", "textarea", "required", ""], ["type", "submit", "id", "submitReview"]], template: function CoursesReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add a Review for a Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CoursesReviewComponent_Template_form_ngSubmit_3_listener() { return ctx.submitReview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Review Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter Course Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter Course Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reviewForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  #addReviewForm[_ngcontent-%COMP%]{\r\n    background-color: #f2f2f2;\r\n    width: 50%;\r\n    margin-bottom: 50px;\r\n  }\r\n  \r\n  #addTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    padding: 12px 20px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  #textarea[_ngcontent-%COMP%]{\r\n    margin-left: 95px;\r\n  }\r\n  \r\n  #reviewTitleInput[_ngcontent-%COMP%]{\r\n      margin-left: 50px;\r\n  }\r\n  \r\n  #courseIdInput[_ngcontent-%COMP%]{\r\n    margin-left: 70px;\r\n  }\r\n  \r\n  #ratingNumberInput[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-left: 180px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1yZXZpZXcvY291cnNlcy1yZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxpQkFBaUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1yZXZpZXcvY291cnNlcy1yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNhZGRSZXZpZXdGb3Jte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAjYWRkVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICN0ZXh0YXJlYXtcclxuICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xyXG4gIH1cclxuXHJcbiAgI3Jldmlld1RpdGxlSW5wdXR7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI2NvdXJzZUlkSW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcblxyXG4gICNyYXRpbmdOdW1iZXJJbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses-review',
                templateUrl: './courses-review.component.html',
                styleUrls: ['./courses-review.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"] }, { type: _courses_service__WEBPACK_IMPORTED_MODULE_5__["CoursesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "j7Yw":
/*!********************************************************!*\
  !*** ./src/app/courses/courseComponent-filter.pipe.ts ***!
  \********************************************************/
/*! exports provided: CourseComponentFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponentFilterPipe", function() { return CourseComponentFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseComponentFilterPipe {
    transform(courses, courseComponent) {
        if (!courses || !courseComponent) {
            return courses;
        }
        if (courseComponent == "ALL") {
            return courses;
        }
        return courses.filter(course => course.course_info[0].ssr_component.toUpperCase() === courseComponent.toUpperCase());
    }
}
CourseComponentFilterPipe.ɵfac = function CourseComponentFilterPipe_Factory(t) { return new (t || CourseComponentFilterPipe)(); };
CourseComponentFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "courseComponentFilter", type: CourseComponentFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponentFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'courseComponentFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "kmjQ":
/*!*****************************************************!*\
  !*** ./src/app/courses/courseNumber-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CourseNumberFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNumberFilterPipe", function() { return CourseNumberFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseNumberFilterPipe {
    transform(courses, courseNumber) {
        if (!courses || !courseNumber) {
            return courses;
        }
        return courses.filter(course => course.catalog_nbr.toString().toUpperCase() == courseNumber.toString().toUpperCase());
    }
}
CourseNumberFilterPipe.ɵfac = function CourseNumberFilterPipe_Factory(t) { return new (t || CourseNumberFilterPipe)(); };
CourseNumberFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "courseNumberFilter", type: CourseNumberFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseNumberFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'courseNumberFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "sf7m":
/*!**********************************************************!*\
  !*** ./src/app/edit-schedule/edit-schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: EditScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditScheduleComponent", function() { return EditScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../schedules.service */ "ekzQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditScheduleComponent_div_23_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditScheduleComponent_div_23_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeCourseButtonClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditScheduleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditScheduleComponent_div_23_button_8_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "subject" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Enter Subject " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "subject" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleForm.get("subject_schedule").length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "courseNumber" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Enter Course Code " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "courseNumber" + i_r2);
} }
class EditScheduleComponent {
    constructor(scheduleService, fb, route) {
        this.scheduleService = scheduleService;
        this.fb = fb;
        this.route = route;
        this.scheduleCourses = [];
    }
    ngOnInit() {
        this.scheduleForm = this.fb.group({
            visibility: [''],
            scheduleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            scheduleDescription: [''],
            subject_schedule: this.fb.array([this.addCoursesFormGroup()])
        });
        this.route.paramMap.subscribe(params => {
            const scheduleName = params.get('name');
            if (scheduleName) {
                this.getSchedule(scheduleName);
            }
        });
    }
    getSchedule(schedName) {
        this.scheduleService.getSchedule(schedName).subscribe(schedule => {
            this.editSchedule(schedule);
        });
    }
    editSchedule(schedule) {
        console.log(schedule);
        this.scheduleForm.patchValue({
            scheduleName: schedule.scheduleName,
            scheduleDescription: schedule.scheduleDescription
        });
        this.scheduleForm.setControl('subject_schedule', this.setExistingCourses(schedule.subject_schedule));
    }
    setExistingCourses(courseSets) {
        const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        console.log(courseSets);
        for (let i = 0; i < courseSets.length; i++) {
            formArray.push(this.fb.group({
                subject: courseSets[i],
                courseCode: courseSets[i + 1]
            }));
            i++;
        }
        console.log(formArray.value);
        return formArray;
    }
    addCoursesFormGroup() {
        return this.fb.group({
            subject: [''],
            courseCode: ['']
        });
    }
    addAnotherCourse() {
        this.scheduleForm.get('subject_schedule').push(this.addCoursesFormGroup());
        console.log(this.scheduleForm.value);
    }
    submitEditedSchedule() {
        this.scheduleCourses = this.scheduleForm.value.subject_schedule.flatMap((item) => Object.values(item));
        console.log(this.scheduleCourses);
        const editFormData = { visibility: this.scheduleForm.value.visibility, scheduleName: this.scheduleForm.value.scheduleName, scheduleDescription: this.scheduleForm.value.scheduleDescription, subject_schedule: this.scheduleCourses };
        if (this.scheduleForm.value.visibility == "") {
            alert("Please select the visibility of this schedule.");
        }
        else if (this.scheduleForm.value.scheduleName == "") {
            alert("Please enter a schedule name");
        }
        else if (this.scheduleForm.value.scheduleName.length >= 20) {
            alert("Please enter a shorter schedule name");
        }
        else {
            this.scheduleService.editSchedule(this.scheduleForm.value.scheduleName, editFormData).subscribe(data => console.log(data));
            this.scheduleForm.reset();
        }
    }
    removeCourseButtonClick(courseIndex) {
        this.scheduleForm.get('subject_schedule').removeAt(courseIndex);
    }
}
EditScheduleComponent.ɵfac = function EditScheduleComponent_Factory(t) { return new (t || EditScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_schedules_service__WEBPACK_IMPORTED_MODULE_2__["SchedulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
EditScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditScheduleComponent, selectors: [["app-edit-schedule"]], decls: 32, vars: 2, consts: [["id", "editScheduleForm"], ["id", "editTitle"], [3, "formGroup", "ngSubmit"], ["type", "radio", "id", "public", "formControlName", "visibility", "value", "public", 1, "radioVisibility"], ["for", "public", 1, "radioVisibilityL"], ["type", "radio", "id", "private", "formControlName", "visibility", "value", "private", "checked", "", 1, "radioVisibility"], ["for", "private", 1, "radioVisibilityL"], ["for", "scheduleName"], ["type", "text", "formControlName", "scheduleName", "placeholder", "Schedule Name", "required", "", "onkeydown", "return /\\p{L}/u.test(event.key)", "id", "scheduleNameInput"], ["for", "scheduleDescription"], ["formControlName", "scheduleDescription", "rows", "4", "cols", "84", "placeholder", "Enter Schedule Description Here... (Optional)", "id", "textarea"], ["formArrayName", "subject_schedule", 4, "ngFor", "ngForOf"], ["type", "button", "id", "addAnotherCourse", 3, "click"], ["type", "submit", "id", "submitEditedSchedule"], ["formArrayName", "subject_schedule"], [3, "formGroupName"], [3, "for"], ["type", "text", "formControlName", "subject", "placeholder", "Enter Subject", "onkeydown", "return /[\\p{L}\\p{N}]/u.test(event.key)", 1, "subjectInputs", 3, "id"], ["title", "Delete Course", "id", "deleteCourseButton", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "courseCode", "placeholder", "Enter Course Code", "onkeydown", "return /[\\p{L}\\p{N}]/u.test(event.key)", 1, "courseNumberInputs", 3, "id"], ["title", "Delete Course", "id", "deleteCourseButton", 3, "click"]], template: function EditScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditScheduleComponent_Template_form_ngSubmit_3_listener() { return ctx.submitEditedSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter Schedule Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Schedule Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditScheduleComponent_div_23_Template, 14, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditScheduleComponent_Template_button_click_24_listener() { return ctx.addAnotherCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Another Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit Edited Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.scheduleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheduleForm.get("subject_schedule")["controls"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".editBadge[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: white;\r\n    float: right;\r\n    padding-right: 15px;\r\n  }\r\n\r\n  #editButton[_ngcontent-%COMP%]{\r\n    background-color: #f79220;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .delete[_ngcontent-%COMP%]{\r\n    background-color:#c92222;\r\n    color: white;\r\n  }\r\n\r\n  #deleteButtonDiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n  }\r\n\r\n  #deleteAll[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n}\r\n\r\n  h2[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n\r\n  #editScheduleForm[_ngcontent-%COMP%]{\r\n  background-color: #f2f2f2;\r\n  width: 50%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n  #editTitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n  label[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n\r\n  input[type=text][_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n  #scheduleNameInput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n  .subjectInputs[_ngcontent-%COMP%]{\r\n  margin-left: 55px;\r\n}\r\n\r\n  .courseNumberInputs[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n}\r\n\r\n  #submitEditedSchedule[_ngcontent-%COMP%], #addAnotherCourse[_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n  #addAnotherCourse[_ngcontent-%COMP%]{\r\n  background-color: rgb(123, 212, 241);\r\n}\r\n\r\n  #deleteCourseButton[_ngcontent-%COMP%]{\r\n  background-color: #c92222;\r\n  color: white;\r\n  border: 1px solid black;\r\n  border-radius: 15%;\r\n  width: 40px;\r\n  height: 25px;\r\n  font-size: larger;\r\n  margin-left: 900px;\r\n}\r\n\r\n  #textarea[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n  .radioVisibility[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  margin-left: 170px;\r\n }\r\n\r\n  .radioVisibilityL[_ngcontent-%COMP%] {\r\n   display: inline;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zY2hlZHVsZS9lZGl0LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVGO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0VBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0NBQ25COztFQUVBO0dBQ0UsZUFBZTtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc2NoZWR1bGUvZWRpdC1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRCYWRnZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2VkaXRCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MjIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2M5MjIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICNkZWxldGVCdXR0b25EaXZ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuI2RlbGV0ZUFsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNlZGl0U2NoZWR1bGVGb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4jZWRpdFRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3NjaGVkdWxlTmFtZUlucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uc3ViamVjdElucHV0c3tcclxuICBtYXJnaW4tbGVmdDogNTVweDtcclxufVxyXG5cclxuLmNvdXJzZU51bWJlcklucHV0c3tcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuI3N1Ym1pdEVkaXRlZFNjaGVkdWxlLCAjYWRkQW5vdGhlckNvdXJzZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2FkZEFub3RoZXJDb3Vyc2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMywgMjEyLCAyNDEpO1xyXG59XHJcblxyXG4jZGVsZXRlQ291cnNlQnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOTIyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwMHB4O1xyXG59XHJcblxyXG4jdGV4dGFyZWF7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yYWRpb1Zpc2liaWxpdHkge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNzBweDtcclxuIH1cclxuIFxyXG4gLnJhZGlvVmlzaWJpbGl0eUwge1xyXG4gICBkaXNwbGF5OiBpbmxpbmU7XHJcbiB9XHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-schedule',
                templateUrl: './edit-schedule.component.html',
                styleUrls: ['./edit-schedule.component.css']
            }]
    }], function () { return [{ type: _schedules_service__WEBPACK_IMPORTED_MODULE_2__["SchedulesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "uUZd":
/*!**********************************************************!*\
  !*** ./src/app/administrator/administrator.component.ts ***!
  \**********************************************************/
/*! exports provided: AdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorComponent", function() { return AdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../review.service */ "aFrL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdministratorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are not an Administrator! You do not have access to this route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_div_1_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_div_1_ul_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const user_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.editButtonClick(user_r4.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit User Privileges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", user_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username: ", user_r4.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Admin: ", user_r4.admin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deactive: ", user_r4.deactive, "");
} }
function AdministratorComponent_div_1_ul_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_div_1_ul_8_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const review_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.editReviewVisibility(review_r7.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit Review Visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title: ", review_r7.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Course: ", review_r7.courseId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", review_r7.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comment(s): ", review_r7.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hidden: ", review_r7.hidden, " ");
} }
function AdministratorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome Administrator!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Users:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdministratorComponent_div_1_ul_5_Template, 15, 4, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All Reviews:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdministratorComponent_div_1_ul_8_Template, 18, 5, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.createPolicy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create/Edit Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logRequests(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Send Takedown Requests, Notices and Dispute Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reviews);
} }
class AdministratorComponent {
    constructor(authService, router, reviewService) {
        this.authService = authService;
        this.router = router;
        this.reviewService = reviewService;
    }
    ngOnInit() {
        this.checkAdmin();
        this.getAllUsers();
        this.getAllReviews();
    }
    checkAdmin() {
        this.admin = this.authService.checkAdmin();
    }
    getAllUsers() {
        this.authService.getAllUsers().subscribe(data => {
            this.message = data;
            if (this.message.message == "You are not an administrator!") {
                alert("You are not an admin!");
                this.router.navigate[('/login')];
            }
            else {
                console.log(data);
                this.users = data;
            }
        });
    }
    editButtonClick(username) {
        this.router.navigate(['/editUserPrivilege', username,]);
    }
    getAllReviews() {
        this.reviewService.getAllReviews().subscribe(data => {
            if (this.message.message == "You are not an administrator!") {
                this.router.navigate[('/login')];
            }
            else {
                console.log(data);
                this.reviews = data;
            }
        });
    }
    editReviewVisibility(title) {
        this.router.navigate(['/editReviewVisibility', title,]);
    }
    createPolicy() {
        this.router.navigate(['/createPolicy']);
    }
    logRequests() {
        this.router.navigate(['/logRequests']);
    }
}
AdministratorComponent.ɵfac = function AdministratorComponent_Factory(t) { return new (t || AdministratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"])); };
AdministratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministratorComponent, selectors: [["app-administrator"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "users", 4, "ngFor", "ngForOf"], ["class", "reviews", 4, "ngFor", "ngForOf"], ["id", "policyButton", 3, "click"], ["id", "logButton", 3, "click"], [1, "users"], [1, "badge"], [1, "editBadge"], ["id", "editButton", 3, "click"], [1, "reviews"], ["id", "editButton2", 3, "click"]], template: function AdministratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdministratorComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdministratorComponent_div_1_Template, 16, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".users[_ngcontent-%COMP%], .reviews[_ngcontent-%COMP%] {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #5c82ff;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    width:1200px;\r\n    height:90px;\r\n  }\r\n  .reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    background-color: #26a742;\r\n  }\r\n  .users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: #000000;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .users[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .reviews[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: large;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#cc0a0a;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 80px;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n    width:170px;\r\n  }\r\n  .reviews[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{\r\n  background-color: #000000;\r\n  }\r\n  .editBadge[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: white;\r\n    float: right;\r\n    padding-right: 15px;\r\n  }\r\n  #editButton[_ngcontent-%COMP%], #editButton2[_ngcontent-%COMP%], #policyButton[_ngcontent-%COMP%], #logButton[_ngcontent-%COMP%]{\r\n    background-color: #f79220;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  #editButton2[_ngcontent-%COMP%]{\r\n    background-color: #ff0000;\r\n  }\r\n  #policyButton[_ngcontent-%COMP%]{\r\n    background-color: #06695a;\r\n  }\r\n  #logButton[_ngcontent-%COMP%]{\r\n    background-color: #1e79c9;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYXRvci9hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsV0FBVztFQUNiO0VBRUE7RUFDQSx5QkFBeUI7RUFDekI7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYXRvci9hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMsIC5yZXZpZXdzIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG4gIH1cclxuICAudXNlcnMgbGksIC5yZXZpZXdzIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM4MmZmO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOjEyMDBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJldmlld3MgbGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNzQyO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJzIGxpOmhvdmVyLCAucmV2aWV3cyBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJzIC5iYWRnZSwgLnJldmlld3MgLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2MwYTBhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIHdpZHRoOjE3MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJldmlld3MgLmJhZGdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAuZWRpdEJhZGdle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjZWRpdEJ1dHRvbiwgI2VkaXRCdXR0b24yLCAjcG9saWN5QnV0dG9uLCAjbG9nQnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTIyMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICNlZGl0QnV0dG9uMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgfVxyXG5cclxuICAjcG9saWN5QnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2Njk1YTtcclxuICB9XHJcblxyXG4gICNsb2dCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3OWM5O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-administrator',
                templateUrl: './administrator.component.html',
                styleUrls: ['./administrator.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] }]; }, null); })();


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
/* harmony import */ var _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-log/admin-log.component */ "yIut");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ "0riC");
/* harmony import */ var _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-policies/manage-policies.component */ "S4ft");
/* harmony import */ var _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-policies/view-policies.component */ "LBR5");
/* harmony import */ var _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user-privileges/edit-user-privileges.component */ "c4rC");
/* harmony import */ var _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrator/administrator.component */ "uUZd");
/* harmony import */ var _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses-review/courses-review.component */ "h+PD");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "OOuX");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schedules/schedules.component */ "/tPW");
/* harmony import */ var _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-schedules/create-schedules.component */ "daQj");
/* harmony import */ var _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-schedule/edit-schedule.component */ "sf7m");
/* harmony import */ var _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public-schedules/public-schedules.component */ "MnUH");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-review-visibility/edit-review-visibility.component */ "FoSU");





















const routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_12__["CoursesComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'publicSchedules', component: _public_schedules_public_schedules_component__WEBPACK_IMPORTED_MODULE_16__["PublicSchedulesComponent"] },
    { path: 'user-detail', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'schedules', component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_13__["SchedulesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'createSchedule', component: _create_schedules_create_schedules_component__WEBPACK_IMPORTED_MODULE_14__["CreateSchedulesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'editSchedule/:name', component: _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_15__["EditScheduleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'addReview', component: _courses_review_courses_review_component__WEBPACK_IMPORTED_MODULE_6__["CoursesReviewComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'admin', component: _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_5__["AdministratorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'editUserPrivilege/:username', component: _edit_user_privileges_edit_user_privileges_component__WEBPACK_IMPORTED_MODULE_4__["EditUserPrivilegesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'editReviewVisibility/:title', component: _edit_review_visibility_edit_review_visibility_component__WEBPACK_IMPORTED_MODULE_18__["EditReviewVisibilityComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'viewPolicy', component: _view_policies_view_policies_component__WEBPACK_IMPORTED_MODULE_3__["ViewPolicyComponent"] },
    { path: 'createPolicy', component: _manage_policies_manage_policies_component__WEBPACK_IMPORTED_MODULE_2__["ManagePoliciesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'changePassword/:username', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'logRequests', component: _admin_log_admin_log_component__WEBPACK_IMPORTED_MODULE_0__["AdminLogComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    google() {
        window.location.href = 'https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    }
    submitLoginForm(form) {
        const newFormData = { email: form.value.email, password: form.value.password };
        console.log(form.value.email);
        console.log(form.value.password);
        if (form.value.email == "") {
            alert("Please enter a email address");
        }
        else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email))) {
            alert("Invalid Email Address.");
        }
        else if (form.value.password == "") {
            alert("Please enter a password");
        }
        else if (form.value.password == "" && form.value.email == "") {
            alert("Please fill out your email address and password to login.");
        }
        else {
            this.authService.loginUser(newFormData).subscribe(data => {
                this.response = data;
                if (this.response.message == "User disabled") {
                    alert("Your account has been disabled by an admin. Please contact msood@uwo.ca to gain access!");
                }
                else if (this.response.message == "Email does not exist!") {
                    alert("Email does not exist! Please register an account before logging in");
                }
                else if (this.response.message == "Incorrect password. Please try again!") {
                    alert("Incorrect Password! Please try again.");
                }
                else if (this.response.message == "The account is not yet verified!") {
                    alert(this.response.message);
                }
                else {
                    console.log(data);
                    console.log(data['admin']);
                    this.authService.setAdmin(data['admin']);
                    this.token = data;
                    console.log(this.token.token);
                    this.username = this.token.username;
                    console.log(this.username);
                    this.authService.setToken(data['token']);
                    console.log(this.authService);
                    this.admin = this.token.admin;
                    if (this.admin == true) {
                        this.router.navigate(['/admin']);
                    }
                    else {
                        this.router.navigate(['/user-detail']);
                    }
                }
            });
        }
        form.reset();
    }
    getUsername() {
        return this.username;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "login-form"], [3, "submit"], ["loginForm", "ngForm"], ["type", "text", "name", "email", "id", "email", "placeholder", "Enter Email", "required", "", "ngModel", ""], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter Password", "required", "", "ngModel", ""], [1, "loginButton"], [3, "click"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LogIn Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.submitLoginForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.google(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Log in With Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Don't have an Account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding:0;\r\n    background-size: cover;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]{\r\n    width: 750px;\r\n    height: 600px;\r\n    box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);\r\n    background: #fff;\r\n    padding:20px;\r\n    margin: 8% auto 0;\r\n    text-align: center;\r\n    background: linear-gradient(to right, #b8c6db, #f5f7fa);\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n  padding:10px;\r\n  margin: 10px 0;\r\n  width: 90%;\r\n  border-radius: 20px;\r\n  border: 1px solid #999;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    width: 50%;\r\n    padding:10px;\r\n    border-radius: 10px;\r\n    font-size: 15px;\r\n    margin: 10px 0;\r\n    border:none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: #1c8adb;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVEQUF1RDtFQUN6RDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0VBQ0EsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm17XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBtYXJnaW46IDglIGF1dG8gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I4YzZkYiwgI2Y1ZjdmYSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhye1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0e1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOGFkYjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "wM/Q":
/*!*****************************************!*\
  !*** ./src/app/log-services.service.ts ***!
  \*****************************************/
/*! exports provided: LogServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogServicesService", function() { return LogServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class LogServicesService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    logRequests(data) {
        return this.http.post(this.SERVER_URL + '/secure/logRequests', data);
    }
}
LogServicesService.ɵfac = function LogServicesService_Factory(t) { return new (t || LogServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LogServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogServicesService, factory: LogServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "xg2n":
/*!************************************************!*\
  !*** ./src/app/courses/keyword-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: KeywordFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordFilterPipe", function() { return KeywordFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KeywordFilterPipe {
    transform(items, filter, defaultFilter) {
        if (!filter) {
            console.log(items);
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    }
}
KeywordFilterPipe.ɵfac = function KeywordFilterPipe_Factory(t) { return new (t || KeywordFilterPipe)(); };
KeywordFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keywordFilter", type: KeywordFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeywordFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'keywordFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "yIut":
/*!**************************************************!*\
  !*** ./src/app/admin-log/admin-log.component.ts ***!
  \**************************************************/
/*! exports provided: AdminLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLogComponent", function() { return AdminLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _log_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../log-services.service */ "wM/Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminLogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are not an Administrator! You do not have access to this route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log Requests/Notices/Disputes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Instructions For Using the Tools Provided for Implementing DMCA Takedown Requests, Infringment Notices and Dispute Claims:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Carefully Review any DMCA Takedown Requests/Infringment Notices or Claim Disputes sent by a 3rd party website and closely inspect if the specified review is a violation of the Digital Millennium Copyright Act of 1998.Then log any of this information by providing the review title and type of thing being logged. The date of this log will automatically be saved. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You can view all of the reviews on the admin panel page (where all the users and reviews are displayed). To visit the admin panel page, press the \"Admin Panel\" button below:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "From that page, you can disable the review that violates the copyright policy by selecting either \"hidden\" to \"true\" or \"infringing\" to true. That review will no longer be accessible on this website. If you accept the claimant's dispute, you can restore the contested review by simply updating your selections to \"False\".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLogComponent_div_1_Template_form_ngSubmit_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logRequests(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Takedown Notice Pursuant to the Digital Millennium Copyright Act of 1998");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To Whom It May Concern,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This is a notice in accordance with the Digital Millennium Copyright Act of 1998 (DMCA) requesting that you immediately cease to provide access to copyrighted material. I wish to report an instance of Copyright Infringement, whereby the infringing material appears on a website for which you are the host.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The infringing material, which I contend belongs to me, is the following:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "The original material is located on my website at the following URLs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " sampleurl.com\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The infringing material is located at the following URLs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " sampleurl.com/content\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "My contact information is:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "I have a good faith belief that the use of the described material in the manner complained of is not authorized by the copyright owner, its agent, or by operation of law.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "The information in this notice is accurate, and I am either the copyright owner or I am authorized to act on behalf of the copyright owner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I declare under the perjury laws of the United States of America that this notification is true and correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.logForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mailing address: ", ctx_r1.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Telephone number: ", ctx_r1.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Signed: ", ctx_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", ctx_r1.createdAt, "");
} }
class AdminLogComponent {
    constructor(authService, fb, logService) {
        this.authService = authService;
        this.fb = fb;
        this.logService = logService;
    }
    ngOnInit() {
        this.checkAdmin();
        this.title = "My First Review";
        this.name = "Administrator Admin";
        this.address = "100 Web Application Street, London ON";
        this.phoneNumber = "519-555-5421";
        this.createdAt = '2020-12-02';
        this.logForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    checkAdmin() {
        this.admin = this.authService.checkAdmin();
    }
    logRequests() {
        const logData = { title: this.logForm.value.title, type: this.logForm.value.type };
        console.log(logData);
        console.log(this.logForm.value.title);
        console.log(this.logForm.value.type);
        this.logService.logRequests(logData).subscribe(data => {
            console.log(data);
            this.message = data;
            if (this.message.message = "Your from was successfully logged.") {
                alert(this.message.message);
            }
            this.logForm.reset();
        });
    }
}
AdminLogComponent.ɵfac = function AdminLogComponent_Factory(t) { return new (t || AdminLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_log_services_service__WEBPACK_IMPORTED_MODULE_3__["LogServicesService"])); };
AdminLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLogComponent, selectors: [["app-admin-log"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "instructions"], [3, "formGroup", "ngSubmit"], ["type", "text", "name", "title", "id", "reviewTitle", "formControlName", "title", "placeholder", "Review Title"], ["type", "text", "name", "type", "id", "type", "formControlName", "type", "placeholder", "Takedown/Notice/Dispute"], ["type", "submit", "id", "logButton"], ["id", "dmcaLetter"]], template: function AdminLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminLogComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLogComponent_div_1_Template, 75, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["#dmcaLetter[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    margin:10px auto;\r\n    padding: 10px;\r\n    background-color: #c3c3c3;\r\n}\r\n\r\n#instructions[_ngcontent-%COMP%]{\r\n    margin:10px auto;\r\n    background-color: #e0e0e0;\r\n    width:40%;\r\n    padding:10px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    width: 20%;\r\n    padding:10px;\r\n    border-radius: 10px;\r\n    font-size: 15px;\r\n    margin: 10px 0;\r\n    border:none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: #1c8adb;\r\n    margin-left: 470px;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n    border-radius: 4px;\r\n    margin-left: 520px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbG9nL2FkbWluLWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsNENBQTRDO0FBQ2hEOztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbG9nL2FkbWluLWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RtY2FMZXR0ZXJ7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XHJcbn1cclxuXHJcbiNpbnN0cnVjdGlvbnN7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4YWRiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ3MHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTIwcHg7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-log',
                templateUrl: './admin-log.component.html',
                styleUrls: ['./admin-log.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _log_services_service__WEBPACK_IMPORTED_MODULE_3__["LogServicesService"] }]; }, null); })();


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

/***/ }),

/***/ "zzmY":
/*!***************************************!*\
  !*** ./src/app/auth/auth-inceptor.ts ***!
  \***************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.authService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    this.router.navigate[('/login')];
                }
            }));
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map