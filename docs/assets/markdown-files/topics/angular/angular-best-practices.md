# Angular Best Practices

## Table of Contents

1. [Single Responsibility Principle](#Single-Responsibility-Principle)
2. [style guide](#style-guide)
3. [Strict Mode](#Strict-Mode)
4. [Use Angular CLI](#Use-Angular-CLI)
5. [Use State Management](#Use-State-Management)
6. [Use Environment Variables](#Use-Environment-Variables)
7. [Divide Imports](#Divide-Imports)
8. [Prefer Observables Over Promises](#Prefer-Observables-Over-Promises)
9. [Component Properties and Methods Order](#Component-Properties-and-Methods-Order)
10. [Lifecycle Hooks Interfaces and Order](#Lifecycle-Hooks-Interfaces-and-Order)
11. [Write Logic Outside Lifecycle Hook](#Write-Logic-Outside-Lifecycle-Hook)
12. [Rules for Writing HTML Tags](#Rules-for-Writing-HTML-Tags)
13. [Wrap Pipes Within Parenthesis](#Wrap-Pipes-Within-Parenthesis)
14. [Avoid Logic in Templates](#Avoid-Logic-in-Templates)
15. [Prevent Memory Leaks](#Prevent-Memory-Leaks)
16. [Subscribe in Template Using async Pipe](#Subscribe-in-Template-Using-async-Pipe)
17. [Use Change Detection OnPush](#Use-Change-Detection-OnPush)
18. [Avoid Having Subscriptions Inside Subscriptions](#Avoid-Having-Subscriptions-Inside-Subscriptions)
19. [Use trackBy Along With ngFor](#Use-trackBy-Along-With-ngFor)
20. [Strings Should Be Safe](#Strings-Should-Be-Safe)
21. [Avoid any Type](#Avoid-any-Type)
22. [Do Not Pass Streams to Components Directly](#Do-Not-Pass-Streams-to-Components-Directly)
23. [Do Not Pass Streams to Services](#Do-Not-Pass-Streams-to-Services)
24. [Do Not Expose Subjects](#Do-Not-Expose-Subjects)
25. [Handle RxJS Errors](#Handle-RxJS-Errors)
26. [Avoid Changing the DOM Directly](#Avoid-Changing-the-DOM-Directly)
27. [Avoid Computing Values in the Template](#Avoid-Computing-Values-in-the-Template)
28. [Use Immutability](#Use-Immutability)
29. [Safe Navigation Operator in HTML Template](#Safe-Navigation-Operator-in-HTML-Template)
30. [Sanitize Untrusted Values](#Sanitize-Untrusted-Values)
31. [Use InjectionToken for Dependency Injection](#Use-InjectionToken-for-Dependency-Injection)
32. [Prevent Importing Module in Feature Modules](#Prevent-Importing-Module-in-Feature-Modules)
33. [Break Down Into Small Reusable Components](#Break-Down-Into-Small-Reusable-Components)
34. [Use Smart and Dumb Components](#Use-Smart-and-Dumb-Components)
35. [Use Lazy Loading](#Use-Lazy-Loading)
36. [Use index ts](#Use-index-ts)
37. [Isolate API Hacks](#Isolate-API-Hacks)
38. [Cache API Calls](#Cache-API-Calls)
39. [Provide Private Services](#Provide-Private-Services)
40. [Lack of Meaningful Unit Tests](#Lack-of-Meaningful-Unit-Tests)
41. [Avoid Useless Code Comments](#Avoid-Useless-Code-Comments)
42. [Remove Unused Code](#Remove-Unused-Code)
43. [Avoid Using Third-Party Libraries](#Avoid-Using-Third-Party-Libraries)
44. [Base Component Classes](#Base-Component-Classes)
45. [Do Not Remove View Encapsulation](#Do-Not-Remove-View-Encapsulation)
46. [Analyze the Bundle Size](#Analyze-the-Bundle-Size)
47. [Use ECMAScript Features](#Use-ECMAScript-Features)
48. [Use Reactive Forms](#Use-Reactive-Forms)
49. [Use CDK Virtual Scroll](#Use-CDK-Virtual-Scroll)
50. [Use Angular Service Workers and PWA](#Use-Angular-Service-Workers-and-PWA)
51. [Use Angular Universal](#Use-Angular-Universal)
52. [Use Lint Rules](#Use-Lint-Rules)
53. [Use Angular DevTools Chrome Extension](#Use-Angular-DevTools-Chrome-Extension)
54. [Use Storybook](#Use-Storybook)

## Single Responsibility Principle

every file should be responsible for single functionality.

**[Back To Top](#table-of-contents)**

## Style guide

[angular coding style guide](https://angular.io/guide/styleguide)

**[Back To Top](#table-of-contents)**

## Strict Mode

**[Back To Top](#table-of-contents)**

## Use Angular CLI

**[Back To Top](#table-of-contents)**

## Use State Management

there are several state management libraries

* NGRX
* NGXS
* Akita

Some benefits of using state management.

* It enables sharing data between different components
* centralized control
* The code will be clean and more readable
* Makes it easy to debug when something goes wrong
* Dev tools are available for tracing and debugging state management libraries

**[Back To Top](#table-of-contents)**

## Use Environment Variables

Angular provides environment configurations

**[Back To Top](#table-of-contents)**

## Divide Imports

* Angular imports always go at the top
* RxJS imports
* Third parties (non-core)
* Local/Project imports at the end

**[Back To Top](#table-of-contents)**

## Prefer Observables Over Promises

* Both are meant to handle asynchronous code
*  Observables can do so much more than Promises
*  Observables can resolve to more than just one value

**[Back To Top](#table-of-contents)**

## Component Properties and Methods Order

* Add public and private properties above the constructor
* Add public and private methods right below the constructor or if you have life cycle hooks so after them

**[Back To Top](#table-of-contents)**

## Lifecycle Hooks Interfaces and Order

``` 
 class MyComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {}

  ngDoCheck(): void {}

  ngAfterContentInit(): void {}

  ngAfterContentChecked(): void {}

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {}

  ngOnDestroy(): void {}	
}
 
 
 ```

**[Back To Top](#table-of-contents)**

## Write Logic Outside Lifecycle Hook

```   
export class MyComponent implements OnInit {
  ngOnInit(): void {
    this.init();
  }
  
  private init(): void {
   // ...
  }
}

```

**[Back To Top](#table-of-contents)**


## Rules for Writing HTML Tags

* When an element has two or more attributes, write one attribute per line
* Attributes have to be written in a specific order
* Unless using a single attribute, the closing tag has to be written on the next line
* Add structural directives only to ng-container elements

Attributes order:

* Structural directives (*ngIf, *ngFor, *ngSwitch)
* Animations (@myAnimation)
* Template variables (#myElement)
* Static properties (id, class, aria-label)
* Dynamic properties ([id], [class], [attr.aria-label])
* Events ((click), (myEvent))
* Two-way binding ([(value)])

**Before**

``` 
<input #myElement (input)="onInputChanged($event)" [(value)]="myModel" *ngIf="canEdit" class="form-control" [attr.placeholder]="placeholder" @fadeIn type="text" />
```

**After**

``` 
<ng-container *ngIf="canEdit"> 
  <input
    @fadeIn
    #myElement
    type="text"
    class="form-control"
    [attr.placeholder]="placeholder"
    (input)="onInputChanged($event)"
    [(value)]="myModel"
  />
</ng-container>

```

**[Back To Top](#table-of-contents)**

## Wrap Pipes Within Parenthesis



``` 
<ng-container *ngIf="(movies$ | async) as movies">
  <!-- ... -->
</ng-container>

<input 
 [value]="(value$ | async | uppercase | trim)"
/>

```
**[Back To Top](#table-of-contents)**

## Avoid Logic in Templates

**Before**

``` 
<p *ngIf="role === 'developer'">Status: Developer</p>
@Input() role?: Role;

```

**After**

``` 
isDeveloper: boolean;

@Input()
set role(role: Role) {
  this.isDeveloper = role === 'developer';
}

```

**[Back To Top](#table-of-contents)**


## Prevent Memory Leaks

* Use of takeUntil Operator
* Use of async Pipe
* Use of take(1)

**[Back To Top](#table-of-contents)**

## Subscribe in Template Using async Pipe


**[Back To Top](#table-of-contents)**

## Use Change Detection OnPush

Use the OnPush change detection strategy to tell Angular there have been no changes. This lets you skip the entire change detection step. This change detection works by detecting if some new data has been explicitly pushed into the component, either via a component input or an Observable subscribed to using the async pipe.

**[Back To Top](#table-of-contents)**

## Avoid Having Subscriptions Inside Subscriptions

Some chaining operators are

* withLatestFrom
* combineLatest

**Before**

``` 
firstObservable$.pipe(
    take(1)
  )
  .subscribe(firstValue => {
    secondObservable$.pipe(
        take(1)
      )
      .subscribe(secondValue => {
        console.log(`Combined values are: ${firstValue} & ${secondValue}`);
      });
  });

```

**After**

``` 
firstObservable$.pipe(
    withLatestFrom(secondObservable$),
    first()
  )
  .subscribe(([firstValue, secondValue]) => {
      console.log(`Combined values are: ${firstValue} & ${secondValue}`);
  });

```

**[Back To Top](#table-of-contents)**

## Use trackBy Along With ngFor

rerender dom by unique identifier

**Before**

``` 
<li *ngFor="let movie of movies">{{ movie.title }}</li>

```

**After**

``` 
<li *ngFor="let movie of movies; trackBy: trackByFn">{{ movie.title }}</li>

trackByFn(index, movie: Movie): string {
  return movie.id;
}
```

**[Back To Top](#table-of-contents)**


## Strings Should Be Safe

``` 

export class ButtonComponent {
  @Input() type: string;
}
```

``` 
export class ButtonComponent {
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
}

```
**[Back To Top](#table-of-contents)**

## Avoid any Type

**[Back To Top](#table-of-contents)**

## Do Not Pass Streams to Components Directly

**[Back To Top](#table-of-contents)**

## Do Not Pass Streams to Services

**[Back To Top](#table-of-contents)**

## Do Not Expose Subjects

``` 

export class CartService {
  private selectedItem: BehaviorSubject<CartItem | null> = new BehaviorSubject<CartItem | null>(null);

  readonly selectedItem$: Observable<CartItem | null> = this.selectedItem.asObservable();

  updateSelectedItem(item: CartItem): void {
    this.selectedItem.next(item);
  }
}
```

**[Back To Top](#table-of-contents)**

## Handle RxJS Errors

**[Back To Top](#table-of-contents)**

## Avoid Changing the DOM Directly

**[Back To Top](#table-of-contents)**

## Avoid Computing Values in the Template

**[Back To Top](#table-of-contents)**

## Use Immutability

Objects and arrays are the reference types in javascript. If we want to copy them into another object or an array and to modify them, the best practice is to do that in an immutable way using spread operator … this will prevent from changing the original object or array.

In Angular, it's very critical since we can modify the original array or object in the service or component and get unexpected behavior.

```
// Somewhere in the code we have list of movies...
const movies = [
  {
    title: 'Avengers',
    year: 2012
  },
];

// And in other place we get the movies list...
const updatedMovies = [...movies]; // Update with spread operator...
```

spread operator is copy only one level

``` 
const updatedMovies = JSON.parse(JSON.stringify(movies));
```
**[Back To Top](#table-of-contents)**

## Safe Navigation Operator in HTML Template

save navigation (?)

**[Back To Top](#table-of-contents)**


## Sanitize Untrusted Values

use DomSanitizer.sanitize

**[Back To Top](#table-of-contents)**

## Use InjectionToken for Dependency Injection

**Before**

``` 
@NgModule({
  providers: [
    {
      provide: 'TITLE',
      useValue: 'My Site',
    },
  ],
})
export class SomeModule {}

```

**After**

``` 
@NgModule({
  providers: [
    {
      provide: TITLE_TOKEN,
      useValue: 'My Site',
    },
  ],
})
export class SomeModule {}

```

``` 
@Injectable({
  provided: 'root',
})
export class SomeService {
  constructor(@Inject(TITLE_TOKEN) private readonly title: string) {}
}

```

**[Back To Top](#table-of-contents)**

## Prevent Importing Module in Feature Modules

``` 
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  AUTH_CONFIG_TOKEN,
  AuthConfig,
  authConfigDefault,
  AuthService,
} from './auth';

@NgModule()
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule?: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: Partial<AuthConfig> = {}
  ): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        {
          provide: AUTH_CONFIG_TOKEN,
          useValue: {
            ...authConfigDefault,
            ...config,
          },
        },
      ],
    };
  }
}

```

**[Back To Top](#table-of-contents)**

## Break Down Into Small Reusable Components

break it down into more reusable smaller components to reduce duplication of the code

``` 

--ParentComponent
----TitleComponent
----BodyComponent
----ListComponent
------ItemComponent
----FooterComponent
```

**[Back To Top](#table-of-contents)**


## Use Smart and Dumb Components

* This pattern helps to use OnPush change detection strategy to tell Angular there have been no changes in the dumb components.
* Smart components are used in manipulating data, calling the APIs, focussing more on functionalities, and managing states. While dumb components are all about cosmetics, they focus more on how they look.


**[Back To Top](#table-of-contents)**


## Use Lazy Loading


**[Back To Top](#table-of-contents)**

**Before**

``` 
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
```

**After**

``` 
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
];

```

**[Back To Top](#table-of-contents)**


## Use index ts

**[Back To Top](#table-of-contents)**


## Isolate API Hacks


**[Back To Top](#table-of-contents)**

## Cache API Calls

* shareReplay

**[Back To Top](#table-of-contents)**

## Provide Private Services

**[Back To Top](#table-of-contents)**

## Lack of Meaningful Unit Tests

**[Back To Top](#table-of-contents)**

## Avoid Useless Code Comments

**[Back To Top](#table-of-contents)**

## Remove Unused Code

**[Back To Top](#table-of-contents)**

## Avoid Using Third-Party Libraries

**[Back To Top](#table-of-contents)**

## Base Component Classes

**[Back To Top](#table-of-contents)**

## Do Not Remove View Encapsulation

**[Back To Top](#table-of-contents)**

## Analyze the Bundle Size

* [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

``
  npm i -D webpack-bundle-analyzer
  ng build --stats-json # Build angular with stats JSON file
  webpack-bundle-analyzer dist/my-app/stats.json
``

**[Back To Top](#table-of-contents)**

## Use ECMAScript Features

**[Back To Top](#table-of-contents)**


## Use Reactive Forms

**[Back To Top](#table-of-contents)**


## Use CDK Virtual Scroll

**[Back To Top](#table-of-contents)**


## Use Angular Service Workers and PWA

**[Back To Top](#table-of-contents)**


## Use Angular Universal

[ssr](https://angular.io/guide/ssr)

**[Back To Top](#table-of-contents)**


## Use Lint Rules

* [Eslint](https://github.com/eslint/eslint)
* [Stylelint](https://github.com/stylelint/stylelint)
* [prettier](https://prettier.io/)

**[Back To Top](#table-of-contents)**


## Use Angular DevTools Chrome Extension

* Understand the structure of your application
* Preview the state of the directive and the component instances
* See change detection cycles, what triggered them, and how much time Angular spent in them

- dev tools
- extension

**[Back To Top](#table-of-contents)**


## Use Storybook

[Storybook](https://storybook.js.org/)

**[Back To Top](#table-of-contents)**

[learn more](https://github.com/avivharuzi/angular-best-practices)
