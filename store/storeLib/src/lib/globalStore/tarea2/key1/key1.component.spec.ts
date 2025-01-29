import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Key1Component } from './key1.component';

describe('Key1Component', () => {
  let component: Key1Component;
  let fixture: ComponentFixture<Key1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Key1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Key1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
