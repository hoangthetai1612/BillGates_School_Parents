import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TimeTableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-teacher-note-lesson',
  templateUrl: './teacher-note-lesson.component.html',
  styleUrls: ['./teacher-note-lesson.component.scss'],
})
export class TeacherNoteLessonComponent implements OnInit {
  @Input() id;
  @Input() note: string;
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
  noteControl = new FormControl({ value: '' , disabled: true });
  constructor(private timetableService: TimeTableService, private modalController: ModalController) {}

  ngOnInit() {
    this.noteControl.setValue(this.note)
  }
  noteKeyUp() {
    this.showSaveBtn = true;
  }
  editNote(ev) {
    this.noteControl.enable();
  }
  saveNote() {
    this.timetableService.update(this.noteControl.value, this.id).subscribe(()=>{
      this.modalController.dismiss();
    });
  }
}
