import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Key3Component } from './key3.component';

describe('Key3Component', () => {
  let component: Key3Component;
  let fixture: ComponentFixture<Key3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Key3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Key3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
