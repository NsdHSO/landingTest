import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PeopleComponent } from './people.component';
import { PeopleService } from "../../services/people.service";
import { BehaviorSubject } from "rxjs";
import { By } from "@angular/platform-browser";

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let peopleMockService: jasmine.SpyObj<PeopleService>;
  const peopleSendData = new BehaviorSubject([]);
  beforeEach(waitForAsync(() => {

    peopleMockService = jasmine.createSpyObj('PeopleService', {
      getPeople: peopleSendData.asObservable()
    });

    TestBed.configureTestingModule({
      declarations: [ PeopleComponent ],
      providers: [
        {
          provide: PeopleService,
          useValue: peopleMockService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    peopleSendData.next([ {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '22',
      workTitle: 'Signer'
    },
    ]);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.table-active__last-name'));
    expect(element.nativeElement.innerText).toEqual('Doe');
  });

  it('should assert loding state', () => {
    peopleSendData.next(null);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.loading-state'));
    expect(element?.nativeElement.innerText).toEqual('loading');
  });
});
