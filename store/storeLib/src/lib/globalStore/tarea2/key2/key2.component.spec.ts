import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Key2Component } from './key2.component';

describe('Key2Component', () => {
  let component: Key2Component;
  let fixture: ComponentFixture<Key2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Key2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Key2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
