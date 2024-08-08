# unit test case for Service

```
import { TestBed } from '@angular/core/testing';
import { MyService } from './my.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });
});
```


# unit test case for Component

```
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message', () => {
    const element = fixture.nativeElement.querySelector('p');
    expect(element.textContent).toContain('Hello, Angular!');
  });
});
```
# unit test case for Rxjs selector

```
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, select } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import { MyService } from './my.service';
import { MyActions } from './my.actions';
import { myReducer, MyState } from './my.reducer';
import { getMyData } from './my.selectors';

describe('MyService', () => {
  let service: MyService;
  let store: Store<MyState>;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ my: myReducer }),
      ],
      providers: [
        MyService,
        provideMockActions(() => actions$),
      ],
    });

    service = TestBed.inject(MyService);
    store = TestBed.inject(Store);
  });

  it('should dispatch the correct actions', () => {
    const data = { id: 1, name: 'John Doe' };

    spyOn(store, 'dispatch').and.callThrough();

    service.getData();

    expect(store.dispatch).toHaveBeenCalledWith(MyActions.loadMyData());

    actions$ = of(MyActions.myDataLoaded({ data }));

    expect(store.dispatch).toHaveBeenCalledWith(MyActions.myDataLoaded({ data }));
  });

  it('should select the correct data', () => {
    const data = { id: 1, name: 'John Doe' };

    store.dispatch(MyActions.myDataLoaded({ data }));

    const expected = cold('(a|)', { a: data });
    const actual = store.pipe(select(getMyData));

    expect(actual).toBeObservable(expected);
  });
});

```