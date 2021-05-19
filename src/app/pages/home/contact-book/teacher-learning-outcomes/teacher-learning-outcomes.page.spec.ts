import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherLearningOutcomesPage } from './teacher-learning-outcomes.page';

describe('TeacherLearningOutcomesPage', () => {
  let component: TeacherLearningOutcomesPage;
  let fixture: ComponentFixture<TeacherLearningOutcomesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLearningOutcomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherLearningOutcomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
