import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];


  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  public getStudent() {
    this.studentService.getStudent().subscribe(students => {
      this.students = students;
    });
  }
}
