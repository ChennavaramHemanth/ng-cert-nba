import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsTeamComponent } from './divisions-team.component';

describe('DivisionsTeamComponent', () => {
  let component: DivisionsTeamComponent;
  let fixture: ComponentFixture<DivisionsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
