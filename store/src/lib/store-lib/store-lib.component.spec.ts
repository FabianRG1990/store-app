import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreLibComponent } from './store-lib.component';

describe('StoreLibComponent', () => {
  let component: StoreLibComponent;
  let fixture: ComponentFixture<StoreLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
