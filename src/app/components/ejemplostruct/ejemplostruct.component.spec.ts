import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplostructComponent } from './ejemplostruct.component';

describe('EjemplostructComponent', () => {
  let component: EjemplostructComponent;
  let fixture: ComponentFixture<EjemplostructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemplostructComponent]
    });
    fixture = TestBed.createComponent(EjemplostructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
