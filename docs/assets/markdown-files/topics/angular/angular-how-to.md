# Angular Solutions

## Table of Contents

1. [binding-css-variables-in-angular](#binding-css-variables-in-angular)

## binding-css-variables-in-angular

* using the style property

``` 
    <h1 [style.--color]="color">CSS vars works!</h1>
```

``` 
  h1 {
        color: var(--color);
      }
```

* using HostBinding

``` 
    :host {
        color: var(--color);
      }

```

``` 
 @HostBinding("style.--color")
  @Input()
  color: string;

```

* styling pseudo-elements

``` 
 <button *ngFor="let item of items; index as index"
            [style.--animation-delay]="index * 0.2 + 's'">
      {{ item }}
    </button>

```

``` 
 :button {
        animation-delay: var(--animation-delay);
      }

```

* using directive

``` 
@Directive({ selector: "[bindCssVariable]" })
export class BindCssVariableDirective {
  @Input("bindCssVariable") variable: string;
  @Input("bindCssVariableValue") value: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnChanges(changes) {
    const value = changes.value.currentValue;
    this.host.nativeElement.style.setProperty(`--${this.variable}`, value);
  }
}

```

## How to Update the Angular version on your machine

#### Setup Angular for the first time

* install nodejs
* Install Angular ` npm i -g @angular/cli

#### Semantic Versioning

` npm i -g @angular/cli@15.1.2`

Where `major.minor.patch`


## window.location

```
//     console.log('URL:' + window.location.href);
// console.log('Path:' + window.location.pathname);
// console.log('Host:' + window.location.host);
// console.log('Hostname:' + window.location.hostname);
// console.log('Origin:' + window.location.origin);
// console.log('Port:' + window.location.port);
// console.log('Search String:' + window.location.search);

```

## NavigationEnd

```
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = event.url;
        this.title = this.title.replace('/', '');
      }
    });
```

## variable

```
$primary: #328CC1;
$secondary: #0B3C5D;
$gold: #D9B310;
$light-grey: #efefef;
$grey: darken($light-grey, 30%);
$black: #1D2731;
$white:  #FFFFFF;
*{
  color: $primary;
}

```

## skip tests

```
 "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": true
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
        "@schematics/angular:directive": {
          "skipTests": true
        },
        "@schematics/angular:guard": {
          "skipTests": true
        },
        "@schematics/angular:module": {
          "skipTests": true
        },
        "@schematics/angular:pipe": {
          "skipTests": true
        },
        "@schematics/angular:service": {
          "skipTests": true
        }
     }
```

## Prevent Memory Leaks

```
➡ Use of async pipe

➡ Use of take(1)

info$.pipe(take(1)).subscribe((response)=>console.log(response))

➡ Use of takeUntil


export class DemoApp implements OnInit, OnDestroy {
  constructor(private route: ActiveRoute,
              private http: Http) {
  }
  ngOnInit() {
    this.route.params
      .takeUntil(destroyedComp(this))
      .subscribe(param => {
        // write code here...
      });
    this.http.get("/loading")
      .takeUntil(destroyedComp(this))
      .subscribe(res => {
        // write code here...
      });
  }
  ngOnDestroy() {
    // empty
  }
}
```

## Use of Lazy Loading

```
Lazy Loading is one of the best practices in angular. The use of Lazy Loading can help you increase the performance and productivity of your application. Lazy Loading is a built-in feature that allows Javascript to load the component asynchronously whenever that particular route hits. it divides the entire app into various bundles to manage its speed. So, all the components related to the active route will be loaded.
Lazy Loading in Angular is used only at the start of the application. Once the application begins and the user starts navigating, it will load immediately.

(1) In your app routing file, use loadchildren rather than a component.
const routing: Routes = [
     {
      path: 'items',
       loadChildren: () => import('./data/data.module').
               then(d => d.DemoModule)
        }
     ];
     
     Now, add the route of that particular component in the routing module for the Lazy Loaded module.

const routing: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];
```

## Make Use of trackBy

```
@Component({
  selector: 'demo-app',
  template: `
    
      {{item.id}}
    
    
Click to Refresh
  `,
})
export class DemoApp {
 
  constructor() {
    this.items = [{id: 10}, {id: 20}, {id: 30}];
  }
  
  getAllItems() {
    this.items = this.getAllItemsFromServer();
  }
  
  getAllItemsFromServer() {
    return [{id: 10}, {id: 20}, {id: 30}, {id: 40}];
  }
  
  trackByFunc(i, item) {
    return item.id;  // or i
  }
}
```

## How to scroll to top on every page
```
RouterModule.forRoot(routes, {
scrollOffset: [0, 0],
scrollPositionRestoration: 'top',
});
```

## How to use enum in HTML?
```
export enum OrderStatus {
  Ordered,
  Processed,
  Shipped,
  Delivered,
}
  OrderStatus = OrderStatus;
```

## console.log vs console.dir

`console.log	console.dir
Displays object in its string representation	Displays a hierarchical, expandable view of the object`

## How to compare the performance of different functions
`console.time, console.timeEnd`


## Use Angular CLI

```
ng new- To create a new and fully functional Angular app
ng create- To use test shells for developing components, services, pipes, and routes
ng serve- To test and find errors from the locally developed application in its development phase
ng test- To run local unit tests and end-to-end testing
ng lint- To check the code quality of your application
```



## Try Avoiding the Use of Logic in the Component

## Declaring Variable Types Rather Than Using any

```

let a = 10;

let b = 'xyz';

let c = a + b;

console.log(`Value of c: ${z}`

// Output

Value of c: 10xyz



In the above code, the output will be as expected.

But, if you have code like this –

let p: number = 10;
let q: number = 'xyz';
let r: number = a + b;

// compile error

Type '"xyz"' is not assignable to type 'number'.
let s: number
```

## Use Index.ts


```


For example, we have demo/index.ts as

export * from './demo.model';
export * from './demo.service';
export { DemoComponent } from './demo.component';
We can further import all of them in the source file as shown below

import { Demo, DemoService } from '../demo; // 

```


## Angular Coding Practices

```

Here are some coding standards you can keep in your mind –

Every single file should have code lines within 400.
Every single function should have the code lines within 75.
For different slider components, use a custom prefix.
Utilize const if the values are constant throughout the file.
Names of functions should be meaningful and in the lower camel case.
Import third-party dependencies/modules before application modules. And leave a line between these imports.
```


## Angular Project Structure


```
Creating an Angular Project structure is again a simple but important thing to follow. It helps to have a clear idea of the components in the application. If you have not correctly structured your project, then you can be in trouble for managing the whole application. Irrespective of the size of projects, you should always try to have the habit of structuring your project.

```


## Angular State Management Best practice: Utilize Central State Management (Redux/Ngrx)


```

State management is manageable when you are dealing with small or medium-sized Angular applications, but as the size of the application grows, the process becomes quite tricky and hectic. There are so many components having their local states, and you need to have smooth communication between these components. It is advisable to follow Angular State Management best practice, i.e., utilizing central state management. Now you might be wondering what central state management is?

Here is the answer – Central State Management means having all the states of the components in one place, with no need of dividing it among various small components unless there’s a requirement for it. As the state of the entire application is managed in one place, it makes the communication between components a lot easy.

Advantages of Central State Management –

No need to search the component tree, as the state is managed in one place
It makes the transfer of data easy
The main issue of communication between the component to component is solved if your application has a centralized state
It makes debugging less time taking
You have two great options for centralizing your Angular State Management – Redux and Ngrx.
The answer to which one you should prefer altogether depends on your project’s requirement, size of the application, project structure, and technology stack. If you are dealing with large applications where you have hundreds of components to deal with, then redux is the best for you. But, if you are dealing with small or medium-sized applications, Redux should be prevented. Considering redux for such applications can indeed cause performance issues and further complicates the code.
```

## Responsive Design Workflow: Tips and Tricks for

```
1. Start with a Plan
2. Use a Style Guide
3. Design for Mobile First
4. Use a Grid System
5. Test Your Design on Multiple Devices
6. Use Responsive Images
7. Optimize for Load Time
```

## Maximizing Performance with Angular HTTP Requests: The Do’s and Don’ts

``` 
The Do’s--------
1. Use Angular’s HttpClient
2. Utilize Observables
getData(): Observable<any> {
  return this.http.get('https://example.com/api/data');
}
3. Handle Errors Properly

The Don’ts---------
1. Making Too Many Requests
To optimize performance, consider batching multiple requests into a single request using techniques like GraphQL or data aggregation on the server side
 Additionally, utilize local caching and lazy loading to avoid unnecessary requests for data that has already been fetched
 
 2. Ignoring HTTP Caching
 3. Not Optimizing Payload Size


```

## 10 Essential Angular CLI Commands for Efficient Frontend Development

``` 
1. ng new:
2. ng serve:
3. ng generate:
4. ng build:
5. ng test:
6. ng lint:
7. ng serve — prod:
8. ng update:
9. ng add:
10. ng e2e:

```

## Learn How to Create Scalable Angular Applications That Perform
    https://blog.josematos.work/learn-how-to-create-scalable-angular-applications-that-perform-39ce3d5e2e5
1. Use Lazy Loading
2. Optimize Change Detection
3. Implement Server-side Rendering (SSR)
4. Apply Performance Optimization Techniques
1. Minification and Compression
2. Lazy Loading Images:
3. Caching
4. Code Splitting
5. Avoid Excessive DOM Manipulations (Minimize DOM manipulations and use Angular features like the trackBy function in ngFor directives to optimize rendering.)
5. Optimize Network Requests
   i. Bundling and Tree-Shaking
   ii. HTTP Caching
   iii. Code Splitting
   iv. Gzip Compression
   v. Use HTTP Interceptors:

## Understanding Angular Template Syntax
``` 
Interpolation
<p>{{ message }}</p>
Property binding
<img [src]="logoUrl" alt="Logo" />
<p [style.color]="color">{{ message }}</p>
<div [class.highlight]="isHighlighted">{{ content }}</div>
Event binding
<button (click)="onClick()">Click Me</button>
<input (input)="onInput($event)">
Two-way binding
<input [(ngModel)]="firstName">
Directives
<div *ngIf="show">{{ message }}</div>
<div [ngClass]="{ 'highlight': isHighlighted }">{{ content }}</div>
Pipes 
DatePipe
UpperCasePipe
LowerCasePipe
CurrencyPipe
DecimalPipe
PercentPipe
<p>Today is {{ today | date:'yyyy-MM-dd' }}</p>
<p>{{ message | uppercase }}</p>
<p>{{ price | currency:'USD':'symbol':'1.2-2' }}</p>
```

## 5 Essential Frontend Development Best Practices Every Developer Should Know

```  
1. Write Clean and Maintainable Code
2. Optimize Your Code for Performance
(Minimize HTTP requests , Optimize images, Use CSS and JavaScript minifiers , Use lazy loading
3. Use Responsive Web Design
(you need to use CSS media queries, flexible grids, and images that scale with the screen size.)
4. Write Accessible Code
(
Use semantic HTML 
Use ARIA attributes 
Provide alternative text for images 
Ensure keyboard accessibility
)
5. Test Your Code Thoroughly
(
Unit tests — test individual functions to ensure that they work as expected.
Integration tests — test the interaction between different parts of your code to ensure that they work together correctly.
Functional tests — test the functionality of your website as a whole to ensure that it works as intended.
User acceptance tests — test the website’s user experience to ensure that it meets the requirements and expectations of users.
)
```

## What is Angular Routing?

```
Routing in Angular refers to the process of navigating between different views or pages within an application without having to reload the entire page. It allows users to seamlessly switch between different parts of the application, making the user experience more fluid and interactive.
```
## codes
````

import { NavigationStart, Router } from '@angular/router';
import { filter, first, takeUntil } from 'rxjs/operators';

// Use this to abort things like HTTP requests when navigating to another route.
// Example: cancel polling an API when the user navigates to another route.
destroyIfNavigatingToAnotherRoute(currentRoute: string) {
  return takeUntil<any>(
    this.router.events.pipe(
      filter((routerEvent) => routerEvent instanceof NavigationStart && !routerEvent.url.startsWith(currentRoute)),
      first()
    )
  );
}
````

```
<input type="text" [(ngModel)]="searchText" (change)="searchByText()" />

<br />

<button *ngIf="pageNumber != 0" (click)="goToPreviousPage()">previous</button>
<button (click)="goToNextPage()">next</button>
<br />
<br />

<div *ngFor="let result of results">
  <div>
    <img [src]="result?.picture?.thumbnail" alt="" />
  </div>

  <div>
    {{ result?.name?.title }} {{ result?.name?.first }} {{ result?.name?.last }}
  </div>
</div>
```
```
import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageNumber = 0;
  results: any;
  searchText: string;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get('https://randomuser.me/api/?page=' + this.pageNumber + '&results=10')
      .subscribe((result: any) => {
        this.results = result?.results;
      });
  }

  goToPreviousPage() {
    --this.pageNumber;
    this.getData();
  }

  goToNextPage() {
    ++this.pageNumber;
    this.getData();
  }

  searchByText() {
    this.results = this.results.filter(result => result?.name?.first === this.searchText)
  }
}

```

