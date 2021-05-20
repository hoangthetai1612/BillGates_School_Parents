import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher-note-lesson',
  templateUrl: './teacher-note-lesson.component.html',
  styleUrls: ['./teacher-note-lesson.component.scss'],
})
export class TeacherNoteLessonComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: '',
    iconRight: 'assets/icon/edit-icon.svg',
    iconCenter: {
      text: 'Thông báo',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  checkEdit: boolean;
  showSaveBtn: boolean = false;
  note = new FormControl({ value: '', disabled: true });
  constructor() {}

  ngOnInit() {}
  noteKeyUp() {
    this.showSaveBtn = true;
  }
  editNote(ev) {
    this.note.enable();
  }
}
