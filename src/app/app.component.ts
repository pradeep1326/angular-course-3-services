import { CoursesService } from './services/courses.service';
import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// We have a buitl-in service and we want to use the service, so to make use of it
// we need to inject into a component via constructor.

courses$: Observable<Course[]>;



  constructor(
              private coursesServices: CoursesService) {

  }

  ngOnInit() {

    this.courses$ = this.coursesServices.loadCourses();
        // .subscribe(
        //    courses => this.courses = courses
        // );
  }



}
