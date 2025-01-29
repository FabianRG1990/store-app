import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyAllComponent } from './keyAll.component';

describe('KeyAllComponent', () => {
  let component: KeyAllComponent;
  let fixture: ComponentFixture<KeyAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
