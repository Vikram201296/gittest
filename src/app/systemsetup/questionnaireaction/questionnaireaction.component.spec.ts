import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireactionComponent } from './questionnaireaction.component';

describe('QuestionnaireactionComponent', () => {
  let component: QuestionnaireactionComponent;
  let fixture: ComponentFixture<QuestionnaireactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
