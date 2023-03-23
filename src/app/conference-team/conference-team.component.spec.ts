import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceTeamComponent } from './conference-team.component';

describe('ConferenceTeamComponent', () => {
  let component: ConferenceTeamComponent;
  let fixture: ComponentFixture<ConferenceTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
