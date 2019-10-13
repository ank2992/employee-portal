/**
 * Unit testing of Header component
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    let compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('a.tittle').textContent).toContain("Employee Portal");
  });

  it('should display the user name', () => {
    let compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('a.dropdown-toggle').textContent).toContain("Admin");
  });
});
