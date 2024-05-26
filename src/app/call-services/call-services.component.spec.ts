import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallServicesComponent } from './call-services.component';

describe('CallServicesComponent', () => {
  let component: CallServicesComponent;
  let fixture: ComponentFixture<CallServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
