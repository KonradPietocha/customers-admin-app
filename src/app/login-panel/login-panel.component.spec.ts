import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanelComponent } from './login-panel.component';

describe('LoginPanelComponent', () => {
  let component: LoginPanelComponent;
  let fixture: ComponentFixture<LoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'Panel logowania'`, () => {
    const fixture = TestBed.createComponent(LoginPanelComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Panel logowania');
  });

  it(`should have object 'userData' for data from inputs`, () => {
    const fixture = TestBed.createComponent(LoginPanelComponent);
    const app = fixture.componentInstance;
    expect(app.userData);
  });

  it(`should have boolean 'isLogin' for check if data from inputs is accepted`, () => {
    const fixture = TestBed.createComponent(LoginPanelComponent);
    const app = fixture.componentInstance;
    expect(app.isLogin);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginPanelComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Panel logowania');
  });

  it('should render form', () => {
    const fixture = TestBed.createComponent(LoginPanelComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toContain(compiled.querySelector('input'));
  });
});
