import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestingComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //1. How to check the value of variable   // String should be same
  it('variable value should be trilok', () => {
    expect(component.value).toBe('trilok');
  })
  //2. How to check the value of variable should not be value // String should not be same
  it('variable value should not be trilok', () => {
    expect(component.value).not.toBe('trilok1');
  })
  //3. How to check the value of variable should be start with
  it('variable value should  be start with trilok', () => {
    const startWith = "trilok"
    expect(component.value).toMatch(startWith);
  })
  //4. How to check the method should be return value
  it('getName method should be return as per the parameter passed', () => {
    const name = component.getName("trilok");
    expect(name).toBe('welcome trilok!');
  })
  //5.  How to check the value of the array
  it('array should be contain value',  () => {
    const arr = component.arr;
    expect(arr).toContain('rohan');
  });
  //6. How to check two variables while particular  method is  called
  it('value of welcome variable should be  isLoggedIn variable after ngOnInit method is called ', function () {
    component.ngOnInit();
    expect(component.welcome).toContain(component.isLoggedIn);
  });
  //7. how to check array only value
  it('should heck array only value ',  () =>{
    const arr = ["hello"];
    expect(arr).toEqual(["hello"])
  });
  //8.How to check that 2 objects are the same or not
  it('should check that 2 objects are the same or not', function () {
    expect(component.Object1).toEqual(component.Object2);
  });
  //9.  How to check the variable is null or not
  it('variable should be null', function () {
    const name: string = null;
    expect(name).toBeNull();
  });
  //10.  How to check the variable is undefined or not
  it('variable should be undefined', function () {
    expect(component.undefinedVariable).toBeUndefined();
  });
  //11. How to write test cases to check comparison for the numbers
  it('toBeNaN should not be number', function () {
    const toBeNaN = component.toBeNaN;
    expect(toBeNaN).toBeNaN();
  });
  //12.  How to check that array contains the desired value or not.
  it('array should be have value ', function () {
    let arr = component.arr;
    expect(arr).toContain("trilok");
  });
  //13. How to check that array value should be equal.
  it('arrays value should be equal ', function () {
    let mockArr = ["trilok", "arun", "rohan"]
    let arr = component.arr;
    expect(arr).toEqual(mockArr);
  });
  //14.  How to check that variable value is less than or not.
  it('variable value should be less than or not ', function () {
    expect(component.toBeLessThanValue).toBeLessThan(10);
    // expect(component.toBeLessThanValue).toBeLessThanOrEqual(10);
    // expect(component.toBeLessThanValue).toBeGreaterThan(10);
    // expect(component.toBeLessThanValue).toBeGreaterThanOrEqual(10);
  });
  it('toBeDefined', () => {
    expect(component.value).toBeDefined();
  });
  //15. How to write test cases for EventEmitter
  it('Should emit the value once emitToParent method calling.', () => {
    spyOn(component.data, 'emit');
    component.emitToParent();
    expect(component.data.emit).toHaveBeenCalledWith(true);
  });
  /**
   * 13. How to run a single test case
   * fit()
   */
  /**
   * 14. How to run a single spec file
   * fdescribe()
   */
  /**
   * 15. How to skip a single test case
   *  xit()
   */
  /**
   * 16. How to skip a single spec file
   *  xdescribe()
   */
  /**
   * 17. How to run the test cases in Firefox
   * step1: npm install karma-firefox-launcher –save-dev
   * step2:  karma.conf.js --> require(‘karma-chrome-launcher’) ---> browsers: ['Chrome', 'Firefox']
   */
  it('says hello', () => {
    expect(component.helloWorld())
      .toEqual('Hello world!');
  });
  /**
   * describe() --> Test Suite
   * it() --> Test Spec
   * expect() --> Matcher
   */
  /**
   * pre-built matchers like so
   * expect(array).toContain(member);
   * expect(fn).toThrow(string);
   * expect(fn).toThrowError(string);
   * expect(instance).toBe(instance);
   * expect(mixed).toBeDefined();
   * expect(mixed).toBeFalsy();
   * expect(mixed).toBeNull();
   * expect(mixed).toBeTruthy();
   * expect(mixed).toBeUndefined();
   * expect(mixed).toEqual(mixed);
   * expect(mixed).toMatch(pattern);
   * expect(number).toBeCloseTo(number, decimalPlaces);
   * expect(number).toBeGreaterThan(number);
   * expect(number).toBeLessThan(number);
   * expect(number).toBeNaN();
   * expect(spy).toHaveBeenCalled();
   * expect(spy).toHaveBeenCalledTimes(number);
   * expect(spy).toHaveBeenCalledWith(...arguments);
   */
  /**
   * functions--->
   * beforeAll
   * This function is called once, before all the specs in a test suite (describe function) are run.
   *
   * afterAll
   * This function is called once after all the specs in a test suite are finished.
   *
   * beforeEach
   * This function is called before each test specification (it function) is run.
   *
   * afterEach
   * This function is called after each test specification is run.
   */
  let expected = "";

  beforeEach(() => {
    expected = "Hello World";
  });

  afterEach(() => {
    expected = "";
  });
  /**
   * Disabled and Focused Tests
   * xdescribe, xit --> Disabled
   * fdescribe, fiy --> focus
   */
  /**
   * jasmine
   * Jasmine is a testing framework that supports Behavior-Driven Development
   */
  describe("greet", () => {
    it("should greet by name & surname", () => {
      expect(component.greet("Lorem", "Ipsum")).toEqual("Hello Lorem Ipsum!");
    });
  });
  it(`should have as title 'angular-component-testing'`, () => {
    expect(component.title).toEqual('angular-component-testing');
  });
});
