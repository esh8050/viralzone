import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusContentComponent } from './focus-content.component';

describe('FocusContentComponent', () => {
  let component: FocusContentComponent;
  let fixture: ComponentFixture<FocusContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
