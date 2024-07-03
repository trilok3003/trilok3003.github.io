# Angular Features

## Table of Contents

1. [What is Angular](#What-is-Angular)
2. [Angular CLI](#Angular-CLI)

## What is Angular

* web framework used for building web, server side rendering, cross-platform, pwa 
* developed by google
* witten in typescript
* used ts, rxjs, Signals, build cli, modules, components, services, directives, pipes, router, forms, http client, testing framework.

##  Angular CLI

* install using `npm i -g @angular/cli`
* create app `ng new <APP-NAME>`
* Modules `ng g module <PATH>`
* Components `ng g component <PATH>`
* Interfaces `ng g interface <PATH>`
* Interceptors `ng g interceptor <PATH>`
* Directives `ng g directive <PATH>`
* Pipes `ng g pipe <PATH>`
* Services `ng g service <PATH>`

* ng add  `@angular/material` (finds a compatible)(ex: ssr, pwa, ngrx)
* dry run ` ng g ... -dry-run`
* ng update
* ng build --configuration production
* ng serve

## Angular JSON

* sourceRoot
* prefix
* outputPath
* index
* main
* tsConfig
* assets
* styles
* scripts

## Modules

* In Angular, everything starts with a module.  It’s a key configuration file that groups together components, directives, services, and other modules.
* NgModules decorator that contains metadata.
* HttpClientModule - use HttpCient in App
* BrowserModule - to setup applications for Web 
* ServerModule - to setup applications for server side
* CommonModule - Subset of BrowserModule that contains Angular’s built-in directives and pipes
* Routing Module - contains all routes

## Components

Components are reusable building blocks that contain business parts and create UIs.

component consists four file

* Template (HTML)
* Styles (CSS/SCSS)
* Component (TypeScript)
* Spec (TypeScript Test file)

Every Component is tied to a Module (unless it’s standalone).

Two main types of components:

* Smart (business logic parts)
* Pure (Presentational) (UI)

## Template Bindings & Interpolation

to display variables from components in the template

* string Interpolation `<h1>{{ title }}</h1>` (text to string)
* Property Bindings

static
 ```
<div id="justString">Title</div>
```

dynamic

``` 
<div [id]="justString">Title</div>

```

* Event Binding `<button (click)="onButtonClick()">Click me</button>`
* Two-way binding
  FormsModule (ngModel)
  () - banana
  [] - box
  [()] - 

## Sharing Data between Components

In Angular components can share data in a number of ways - 

* from parent to child 
* from child to parent
* shared service
* router

as-

* Input ` @Input()`
* Output with Event Emitter
 ```
<app-child (messageFromChild)="handleMessage($event)"></app-child>

  handleMessage(message: string) {
    console.log('message from child :>> ', message);
  }

```

``` 
  @Output()  messageFromChild = new EventEmitter<string>();

  handleClick() {
    this.messageFromChild.emit('Geetings from Child component');
  }

```

* View Child with AfterViewInit Hook
* Shared Service
* Activated Route

##  Directives

add new or modify the existing behavior of the elements in the template.

Three types of Directives:

* Component
* Structural (`ngIf, ngFor, ngSwitch`)
* Attribute (`ngClass, ngStyle, ngModel`)


Other types of directives include:

* ng-content

This directive is used when you want to pass HTML content or a component as a child from parent to child component (similar to `props.children` in React).

* ng-Container

The container is used as a content wrapper similar to the <div> tag, with one exception — it is not rendered in the browser.

* ng-Template

Like Ng-Container, Ng-Template wraps the content, but the content is not visible by default.
It is only visible if some template condition becomes truthy

* Host & Host-Context

These are CSS directives that are used to change the CSS of related components

## Custom Directives

we can build custom directive too.

```

@Directive({
  selector: '[appLeetWrite]'
})
export class LeetWriteDirective {

  constructor(public ef: ElementRef) { }

  // listens to input event on the target HTML input element
  // and calls inputListener() function
  @HostListener('input', ['$event.target.value'])
  inputListener(value: string): void {
    const val = this.toReplace(value);
    this.ef.nativeElement.value = val;
  }

  private toReplace(text: string) {
    return text
    .replace(/a/gi, '4') // A => 4
    .replace(/e/gi, '3') // E => 3
    .replace(/i/gi, '1') // I => 1
    .replace(/o/gi, '0') // O => 0
    .replace(/t/gi, '7') // T => 7
  }

}

use: 

<input type="text" appLeetWrite />
```

## Pipes

pipes are functions used in template that takes data as input and transform it into an output

angular comes with in built in pipes such as 

* json pipe
* date pipe
* number pipe
* percentage
* currency
* slice 

Two types of Pipes:

* Pure
* Impure (re-renders on any state detection of the property consumed by the pipe. which is good for tracking changes and bad for performance)

Angular allows us to create our own pipes. every pipe must have a `transform()` function.

``` 
@Pipe({
  name: 'leetSpeak'
})
export class LeetSpeakPipe implements PipeTransform {

  transform(value: string): string {

    const changedValue = this.toReplace(value);
    return changedValue;
  }

  private toReplace(text: string) {
    return text
    .replace(/a/gi, '4') // A => 4
    .replace(/e/gi, '3') // E => 3
    .replace(/i/gi, '1') // I => 1
    .replace(/o/gi, '0') // O => 0
    .replace(/t/gi, '7') // T => 7
  }

}

<p>{{ title | leetSpeak }}
```

## Services

Services are Typescript classes marked with the injectable decorator
Their purpose is to handle business logic parts
Services are most commonly used to connect components to APIs and share data between components.

## Dependency Injection

One of the most powerful features of Angular is a Dependency Injection

Dependency injection is a technique in which a class receives its dependencies from external sources rather than creating itself

What this means is rather than creating our own dependencies like new instances:

``` 
// creating instances manually
  service = new TodosService();
 
```

#### This has a number of benefits:

* The component using the dependencies does not care where the dependencies are coming from
* If the dependency we’re instantiating also depends on something, we need to provide an instance of that as well: `const service = new HTTPService(new HTTPClient(new SomethingElse()))`
* It’s easier to test because when we’re using the new keyword we are creating instances of actual services. However, with DI, the dependency is configured inside a Module, meaning we can swap the original service with the test service without breaking the component

#### Injecting Dependencies

There are two ways to inject dependencies in Angular:

* Constructor (in class-based files)
* Inject (in functions and class-based files)

#### The default approach is to use a constructor.

``` 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly todosService: TodosService) {}
}

```

#### The second way is to use a newly introduced inject() function

This can benefit you in guards, resolvers, and any other component.

``` 
export class AppComponent {

  private readonly todosService: TodosService = inject(TodosService)

  doStuff() {
    this.todosService.doSomething();
  }
}

```

####  Providers

Every injected dependency needs to be inside a provider.
Components can have their own providers:


``` 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodosService]
})
export class AppComponent {

  constructor(private readonly todosService: TodosService) {}
}

```


But dependencies can also be configured in the module. Once provided in the module, the dependency can be used in any component/directive/pipe within the module.


``` 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TodosService, OtherService],
  bootstrap: [AppComponent]
})

```


Alternatively, you can use the providedIn property in the Angular service.
If your service has a providedIn flag within the injectable decorator, then you do not need to worry about providers and injectors.


``` 
@Injectable({
  providedIn: 'root' // variations: root, any, platform
})
export class TodosService { }

```

#### other

* Injectors
* Injection Tokens
* Overriding dependencies (useClass, useValue, useFactory)
* Components relationship (@self , @skipSelf , @host , @optional)


##  Async Pipe

The Async Pipe is a special built-in pipe that is used to subscribe to an observable or resolve a promise directly in the template.

``` 
this.promiseTitle = Promise.resolve('Hello Promise!');
this.observableTitle$ = of('Hello Observable!');


<p>{{ promiseTitle | async }}</p>
<p>{{ observableTitle$ | async }}</p>
```

#### features

* don't need to subscribe 
* Async Pipe is also capable of unsubscribing automatically.


##  Interceptors

Angular comes with a powerful and easy-to-use HTTP Interceptor that intercepts and transforms API calls.
HTTP interceptor is triggered automatically upon sending any request or receiving a response.

#### It’s commonly used to:

* prepend the correct base URL for APIs
* perform logging
* send headers to the backend (authorization)
* cache response


## Template-Driven Forms

There are two types of forms in Angular:

* Template Driven forms
* Model Driven (Reactive) forms

With Template Driven forms the setup and validations are done entirely within the template.
To start, import FormsModule in the module where you’re making a form.

``` 
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
  <div>
    <label>
      Email:
      <input ngModel #email="ngModel" required name="email" placeholder="Email" />
      <div *ngIf="email.invalid && email.touched" style="color: red;">Email is required!</div>
    </label>
  </div>
  <div>
    <label>
      Message:
      <input ngModel #message="ngModel" maxlength="300" name="message" placeholder="message" />
    </label>
  </div>
  <div></div>
  <button type="submit">Send</button>
</form> 

  onSubmit(formValues: object) {
    console.log('formValues :>> ', formValues);
  }


```

## Reactive Forms

Angular Reactive Forms is a feature provided by the Angular framework that allows you to create and manage complex forms in a reactive and flexible manner.

You start by importing ReactiveFormsModule in your component module:

####  you can also create custom controls for your components  (ControlValueAccessor)

## Angular Router

The Angular Router is a built-in module in Angular that provides navigation and routing functionality for Angular applications. It allows you to define routes and navigate between different pages (components).

Everything starts with AppRoutingModule which is configured with the AppModule.

#### Angular contains a variety of routing options, such as:

* Static routes
* Dynamic parameter routes
* Child routes
* Auxiliary routes
* Redirects
* 404 page
* Guards
* Resolvers
* Eager and Lazy-loaded routes


## Lazy and Eager Loading

With `Eager loading`, all the necessary modules and components are loaded when the application is initialized

with `Lazy loading` is a technique where modules and components are loaded and rendered on-demand when the user navigates to a specific route.

## Route Guards & Resolvers

A route guard is a service that controls the accessibility of a route based on the conditions provided. Guards are classes (functions, as of v16) that contain logic that checks whether a user has access to content or not.

#### There are five types of guards in Angular:

* Can Activate

The CanActivate guard blocks access to routes for users who are not authorized to access. This is a useful feature to block off routes that require login.

* Can Deactivate

  This type of guard is used to prevent users from exiting the page. An example of this can be a form that throws a warning pop-up for a user who is attempting to leave with unsaved changes.

* Can Load

CanLoad guard prevents child modules to be loaded until criteria guarding is satisfied.

* Can Activate Child
  Similar to the ones above, this guard prevents access to child routes.
* Route Resolver

This type of guard does not protect anything but rather allows you to complete a task before landing on a route. That can be an action dispatch, subscription to a service, or passing data to a component. Resolver sits in front of the route and is executed before the component on that route loads.


```
@Injectable({
  providedIn: 'root',
})
export class AuthorizerGuard implements CanActivate {
  constructor(
    private readonly service: UsersService, 
    private readonly router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (this.service.isLoggedIn()) {
      return Promise.resolve(true);
    }
    return this.router.navigate(['/home'])
  }
}

```

but In Angular v16  the guards changed from being classes to functions and we can make use of inject() function to inject dependencies without a constructor.

``` 
export const authorizerGuard = (): CanActivateFn => {
  const service = inject(UsersService)
  const router = inject(Router)

  if (service.isLoggedIn()) {
    return Promise.resolve(true)
  }

  return router.navigate(['/home'])
}


{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthorizerGuard]
}
```

``` 
{
  path: 'users/:id',
  component: UsersComponent,
  canActivate: [AuthorizerGuard, OtherGuard],
  canActivateChild: [ChildRoutesGuard],
  resolve: [UsersResolver]
  children: [
    {path: '', redirectTo: 'hobbies'},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'friends', component: FriendsComponent},
  ],
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**', // if route is not defined
    redirectTo: 'not-found'
  }
}


```


##  Reactive Framework (Rx.js)

Being a Reactive Framework

* Services
* Guards
* Forms
* NGRX
* custom solutions

## Element Reference & Document Interface

`<input type="text" #myInput />`

``` 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  // myInput => #myInput
  @ViewChild('myInput') inputElementRef: ElementRef<HTMLInputElement>
  
  
   ngAfterViewInit() {
    console.log(this.inputElementRef); // <input>
    console.log(this.inputElementRef.nativeElement); // target element
    console.log(this.inputElementRef.nativeElement.value); // input value
  }
}
```

``` 
constructor(private renderer: Renderer2) {}

```

``` 
// set HTML attribute
this.renderer.setAttribute(
  this.inputElementRef.nativeElement, 'id', 'component-id'
);

// set custom class
this.renderer.addClass(
  this.inputElementRef.nativeElement, 'active'
);

// set custom styles
this.renderer.setStyle(
  this.inputElementRef.nativeElement, 'background', '#310594'
);
```

old Document interface from vanilla JavaScript,

`import { DOCUMENT } from '@angular/common';`

`constructor(@Inject(DOCUMENT) private doc: Document) {}`

## Lifecycle Hooks

Every component in Angular goes through a lifecycle. The Lifecycle Hooks are various methods that are invoked at different phases of the lifecycle of a component.

* OnChanges-    Called when the component receives props
* OnInit — Called when the component initializes
* DoCheck — Called on every Change Detection
* OnDestroy — Called before the component is destroyed
* AfterContentInit — Called when the component’s content is initialized
* AfterContentChecked — Called when the component’s content is updated or checked for updates
* AfterViewInit — Called when the component’s projected view has been initialized
* AfterViewChecked — Called after the projected view has been checked
* DoBootstrap — Called upon bootstrapping an application in App Module

##  NgZone (Zone.js)

NgZone​ is an Angular wrapper for the Zone.js library that is in charge of tracking asynchronous operations, such as API calls, timers, and mouse and keyboard events.

By default, Angular runs change detection after every asynchronous task completes. This ensures that the application’s UI stays in sync with the underlying data.

NgZone is directly connected to the Change Detection mechanism. Every time new API data arrives, NgZone causes components to rerender.

For the most part, we do not need to care how all of it works under the hood. Should you need to, you can use NgZone to interact with other browser libraries (such as Jquery) that do not have anything to do with Angular.

Using NgZone you can also execute code outside your Angular application.


``` 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck  {

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      // whatever happens in here won't trigger Angular change detection
    });
  }
    ngDoCheck() {
    // ...
  }

}
```

If you call API outside Angular it won’t trigger the Change Detection mechanism nor rerender the component.

You can track changes in Angular applications using the ngDoCheck hook.

##  Change Detection Variations

how your component re-renders

there are two strategies

* By Default
* OnPush 

in OnPush

* When new Input (props) is received by component
* When a new event is triggered in the component
* When an Observable you’re component is subscribed to receives a new value

``` 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // that's it
})
export class AppComponent implements OnInit { }

```

#### Expression Changed After It Has Been Checked Error

This is a common error that occurs in Angular apps that is directly connected to the change detection mechanism.

Common causes:

* The property is been updated after the change detection process has finished
* The property is repeatedly updated in the template
* The child component is updating a property in the parent after change detection has already ran in the parent component

How to avoid:

* Use pipes/directives as opposed to functions in the template
* Change properties from parent to child using a proper lifecycle hook
* Use ChangeDetctionRef.markForCheck() to manually inform change detection of any updates in the template
* Use shared service/state to share the data between components
* Update properties within timeouts (if there is no other way)


## SEO Optimizations

Angular  SEO optimizations features like:

* Title service (This built-in service is used to get and set the title of a current HTML document.)
* Meta service (The Meta service is used to manage HTML meta tags.)
* Component Hydration

Another SEO trick is the isPlatformBrowser function from the angular/common package that is used to verify if code is executing on the server or on the client.

``` 
import { Inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

private isBrowser: boolean;
constructor(@Inject(PLATFORM_ID) platformId: InjectionToken<Object>) {
   this.isBrowser = isPlatformBrowser(platformId);
  }
}
```

For more complex solutions there is the [Angular Universal](https://angular.io/guide/universal) framework that improves server-side-rendering for Angular by using Express.js as the backbone for server-side work.
As of recently, there is also an Angular Meta framework called [Analog](https://www.npmjs.com/package/create-analog).

#### Component Hydration

New with Angular 16 is the Non-Destructive [Hydration](https://next.angular.io/guide/hydration) for components. Angular can reuse existing DOM structures on the client that were rendered by the server without having to destroy and re-render all of them, as well as cache requests made on the server to avoid re-fetching that same data again on the client.

``` 
import {provideClientHydration} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideClientHydration()], // and that's it
})
export class AppModule {}

```

To skip hydration over components or certain parts of the template you can use the `ngSkipHydration` directive. [Learn more ](https://angular.io/guide/hydration)

## Angular Animations

Another out-of-the-box feature in Angular is Angular Animations. Angular animations are built on top of CSS animations that allow you to create and manage animations for various UI elements in components.

To hit the ground running, you need to import the `BrowserAnimationsModule` to the module where you want to use the animations. [Learn More](https://angular.io/guide/animations)

##  Multiple Compilation Modes

Angular has two different compilation modes:

* Just-In-Time (JIT)
* Ahead-Of-Time (AOT)

During development, Angular compiles the templates, components, and other resources of the application in the browser’s memory when the application is loaded
JIT compilation provides a faster development workflow because changes made to the code are immediately reflected without the need for a separate build step.

AOT compilation is ais used for production builds. With AOT, the Angular application is compiled before it is deployed to the browser. This eliminates the need for the browser to perform the compilation step at runtime, resulting in faster application startup time and improved performance.

The two work hand-in-hand with Angular’s new engine — Ivy.
Ivy is the next-generation rendering engine in Angular that enhances performance, smaller bundle sizes, improves debugging, and better template type checking.


## Testing Frameworks

Angular out of the box brings built-in test runners to the table:

* Jasmine & Karma for Unit testing
* Protractor for End to End testing

On the E2E side, Protractor is a Selenium-based testing tool but is a bit outdated compared to modern frameworks. That’s why the Angular team shifted focus from Protractor to Cypress.

As of version 16, Jest became a supported test runner in Angular.


## Standalone Components

Angular v15 introduced Standalone Components as an easy way to build module-less applications. This means that components marked as standalone can be wired up without needing to use NgModule.

`ng g c blog --standalone`

## Rich Ecosystem

Although Angular delivers a plateau of tools from the get-go, should feel the need to expand, there is a rich ecosystem of tools to help you build:

* Monorepos ([Nx](https://nx.dev/))
* Progressive Web Apps ([Angular PWA](https://angular.io/guide/service-worker-getting-started))
* Server-Side Rendered Apps ([Angular Universal ](https://angular.io/guide/universal)/ [Analog](https://www.npmjs.com/package/create-analog))
* State Management (NGRX / NGXS / RxAngular)
* Beautiful UIs (Angular Material)
* Integration with Firebase ([Angular Firebase](https://www.npmjs.com/package/@angular/fire))
* Mobile apps ([NativeScript](https://nativescript.org/), [Ionic](https://ionicframework.com/))
* Backend Services ([Nest.js](https://nestjs.com/))
* Documentation ([NgDoc](https://medium.com/@askoropad/ngdoc-documentation-for-angular-projects-3f6ea8fc22b0))
* Localization ([Angular Localize](https://angular.io/api/localize))
* Browser extension for debugging and profiling ([Augury](https://augury.rangle.io/))

## Security

* XSS Protection `<div [innerHtml]="HTML Content"></div>`
* DomSantizier helps to  prevent Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts
* HTTP Client
* CSRF protection
* Angular Guards

## Share Components between Frameworks

[Angular Elements](https://angular.io/guide/elements) is a feature of the Angular framework that allows you to package Angular components as web components that can be used across different frameworks (React, Vue) and even without any framework.

Start by installing the package:

`npm install @angular/elements`

Then update the app.module. I’ve created a simple component called GreetingComponent. Now all I have to do is tell Angular to bootstrap it instead of AppComponent.


``` 

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [GreetingComponent], // instead of AppComponent
})
export class AppModule implements DoBootstrap {

  constructor(private readonly injector: Injector) { }

  ngDoBootstrap(): void {
    const customComponent = createCustomElement(GreetingComponent, { injector: this.injector });
    customElements.define('name-your-component', customComponent);
  }

}
```


And in the ngDoBootstrap method, we create a custom element using the previously imported GreetingComponent and give this web component a name.


` ng build --configuration production --output-hashing none`

learn more [Angular elements](https://javascript.plainenglish.io/creating-a-custom-element-in-angular-aa2a794fd041)

## Signals

One of the biggest new features of Angular v16 is Signals. Angular Signals is a new way to handle reactivity (alongside Rx.js) by granularly tracking how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

What this means in English is that Signals do not rely on Zone.js to track changes in the components.
Meaning that when changes occur in Signals, Angular does not need to traverse the whole component tree to see what changed (Zone.js way), but rather it looks at the signal within the component — making rerendering Angular components much faster than before.

#### Three new primitives:

* writeable signals
* computed signals
* effects

#### Writable Signals

These types of signals are used to set values that can change over time.

``` 
  export class AppComponent {
    title = signal<string>('Angular Signals')
    year = signal<number>(2023)
    features = signal<string[]>([
      'Components', 
      'Directives', 
      'Services', 
      'Pipes'
    ]);
}
```

``` 

<p>{{ title() }}</p>
<p>{{ year() }}</p>
<p>{{ features() | json }}</p>
```

In addition to this, you can use the set, update and mutate functions to change the value of the signal.

``` 
export class AppComponent {
  title = signal<string>('Angular Signals')
  year = signal<number>(2023)
  features = signal<string[]>([
    'Components', 
    'Directives', 
    'Services', 
    'Pipes'
  ]);

  onButtonClick() {
    // changes year from 2023 to 1444
    this.year.set(1444);

    // appends new item to the features array
    this.features.update(
      existingFeatures => [...existingFeatures, 'Signals']
    )
  }
}
```


#### Computed Signals

These types of signals are used when you want to create a signal based on the value of another signal.

``` 
isOddYear = computed(() => this.year() % 2 !== 0 ) // true
```

#### Effects

Signals are useful because they can notify interested consumers when the signals. An effect is an operation that runs at least once and whenever one or more signal values change.


```
export class AppComponent {
  year = signal<number>(2023)

  // this effect is called twice
  // once for year 2023
  // then for 1444
  myEffect = effect(() => {
    console.log(`The current count is: ${this.year()}`);
  });

  onButtonClick() {
    this.year.set(1444);
  }
}

```

In this example, the console.log() function is called every time the signal changes. This is similar to the useEffect() hook in React.

## Consistency

Angular is complex, but Angular is also Consistent. Once you grasp the basic concepts and rules like, how to:

* Create layouts and bind events (components, directives, pipes, services)
* Wire up dependencies (Dependency Injection)
* Create forms (Template Driven or Reactive)
* Add routing
* Manage asynchronous data (Rx.js), etc.


### Learn more about angular

* [features](https://mirzaleka.medium.com/35-features-that-make-angular-stand-out-from-the-crowd-293375c368b8#b84b) 
* [angular docs](https://angular.io/docs)
* [angular university](https://angular-university.io/)
* [angular 16 fearures](https://blog.ninja-squad.com/2023/05/03/what-is-new-angular-16.0/)
* [know angular](https://blog.ninja-squad.com/tags.html#Angular-ref)
* [angular docs](https://next.angular.io/docs)
* https://stackoverflow.com/users/2610061/carsten-massmann

