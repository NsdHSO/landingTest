import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from "@angular/platform-browser";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should title About be in dom', () => {
    component.links = [ {
      name: 'About', childrean: [
        {
          path: 'learn-more',
          label: 'Learn More'
        }, ]
    } ];
    const element = fixture.debugElement.query(By.css('.ft-title-name')) ;
    fixture.detectChanges();
    expect(element.nativeElement.innerText).toEqual('About');
  });
  it('should title not be About in dom', () => {
    component.links = [];
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.ft-title-name')) ;
    expect(element?.nativeElement.innerText).not.toEqual('About');
  });
});
