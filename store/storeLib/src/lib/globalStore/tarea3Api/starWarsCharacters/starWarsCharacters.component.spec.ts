import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsCharactersComponent } from './starWarsCharacters.component';

describe('StarWarsCharactersComponent', () => {
  let component: StarWarsCharactersComponent;
  let fixture: ComponentFixture<StarWarsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarsCharactersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarWarsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
