import { CoursesComponent } from './courses.component';
import { Courses } from './../Courses';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'courseComponentFilter'
})

export class CourseComponentFilterPipe implements PipeTransform{
    transform(courses:Courses[], courseComponent:string): Courses[]{
        if(!courses || !courseComponent){
            return courses;
        }

        if(courseComponent=="ALL"){
            return courses;
        }
        
        return courses.filter(course=> course.course_info[0].ssr_component.toUpperCase() === courseComponent.toUpperCase())
    }
}
