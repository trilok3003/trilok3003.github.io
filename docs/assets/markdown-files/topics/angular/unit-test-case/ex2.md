import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestLearnComponent } from './unit-test-learn.component';

describe('UnitTestLearnComponent', () => {
  let component: UnitTestLearnComponent;
  let fixture: ComponentFixture<UnitTestLearnComponent>;
  let compiled;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    expect(compiled.querySelector('.content span').textContent).toContain('Unit testing app is running!')
  })
  it('should have title as  Unit testing', () => {
    expect(component.title).toEqual('Unit testing')
  })
  /**
   * How to write test cases to
   */
  // 1. How to check the value of variable state value is ‘state value’.
  it('Variable stateValue should be state value ', () => {
    expect(component.stateValue).toBe('state value')
  });
  // 2. How to check the value of variable state value should not be other than state value.
  it('Variable stateValue should not be  state value ', () => {
    expect(component.stateValue).not.toBe('state value1')
  });
  // 3. How to check the variable state value should start with ‘state.’
  it('Variable stateValue should  be start with  state ', () => {
    expect(component.stateValue).toMatch('state')
  });
  // 4. How to call the method and match with the result of that method?
  it('getName method should return Welcome trilok', () => {
    const name = component.getName('trilok');
    expect(name).toBe('Welcome trilok')
  });
  // 5. How to check the value of the array?
  it('arrayList  should contain last name', () => {
    const names = component.arrayList();
    expect(names).toContain('last name')
  });
  // 6. How to write the test cases for the scenario like Variable value should be changed if a particular method is called.
  it('value of welcome variable should be a once ngOnInit method have been called', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(component.isLoggedIn)
  });
  // 7. If the array has only value, then how to check if the array is the same or not?
  it('should have only 1 value which is a  in isLoggedInArrary', () => {
    const isLoggedInArrary = component.isLoggedInArrary;
    expect(isLoggedInArrary).toEqual(['a']);
  });
  // 8. How to check that 2 objects are the same or not in terms of key and value?
  it('Object1 and Object2 should have the equal value.', () => {
    expect(component.Object1).toEqual(component.Object2);
  });
  // 9. How to check the variable is null or not?
  it('stateValueNull should be null initially.', () => {
    expect(component.stateValueNull).toBeNull();
  });
  // 10. How to check the variable is undefined or not?
  it('stateValueUndefine should be null initially undefined', () => {
    expect(component.stateValueUndefine).toBeUndefined();
  });
  // check comparison for the numbers
  it('toBeNaN variable should not be a number.', () => {
    var toBeNaNValue = component.toBeNaN;
    expect(toBeNaNValue).toBeNaN();
  });
  // How to check that array contains the desired value or not.
  it("Should contain 'first name' in an array which return by ArrayList method.", () => {
    const name = component.arrayList();
    expect(name).toContain('first name');
  });
  // How to check that array value should be equal.
  it("arrayList method return array value Should equal to mockArray value.", () => {
    const name = component.arrayList();
    const mockArray = ['first name','last name', 'middle name'];
    expect(name).toEqual(mockArray);
  });
  // How to check that variable value is less than or not.
  it('Value of toBeLessThanValue variable should be less than 10.', () => {
    const percent = component.toBeLessThanValue;
    expect(percent).toBeLessThan(10);
    // toBeLessThanOrEqual()
    // tobe greater than()
    // toBeGreaterThanOrEqual()
  });

  //  EventEmitter
  it('Should emit the value once emitToParent method calling.', () => {
    spyOn(component.data, 'emit');
    component.emitToParent();
    expect(component.data.emit).toHaveBeenCalledWith(true);
  });
  // How to run a single test case [ it() --> fit()]
  // How to run a single spec file [describe() ---> fdescribe()]
  //  How to skip a single test case [it() --> xit()]
  //  How to skip a single spec file [describe() --> xdescribe()]
});
