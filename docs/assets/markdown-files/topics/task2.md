[//]: # (https://stackblitz.com/@saksham-malhotra)

# over right  bootstrap variable
$primary: orange;
@import '~bootstrap/scss/bootstrap'
# compodoc
## npm i -g @compodoc/compodoc
## compodoc -p tsconfig.json
# description developing code
@param, @returns, @link, @ignore and @example
# Ref
https://georgemartsoukos.com/

# How to register service
1. providers: [ProductService]
2. providers :[{ provide: ProductService, useClass: ProductService }] // where Provide holds the Token or DI Token

[//]: # (https://www.concretepage.com/angular/)
[//]: # (https://www.w3schools.io/file/markdown-table/)
[//]: # (https://www.ganatan.com/tutorials/en)

accordion, tabs, grid or table, tile, panel
# css ref
https://css-tricks.com/

# page speed
https://pagespeed.web.dev/
https://lighthouse-metrics.com/lighthouse/checks
https://www.freecodecamp.org/news/tag/css/
# ng-content
`
<ng-content select="[header]"></ng-content>
<ng-content select="[slot=start]"></ng-content>
<ng-content select="div[role=header]"></ng-content>
<ng-content select="app-child-header"></ng-content>
`
# template
`
<app-child
[templateHeader]="header"
[templateContent]="content">
</app-child>

<ng-template #header
let-data="data"> < -- how you get dynamic data
what ever you would like the header to say
{{data}}
</ng-template>

<ng-template #content>
what ever you would like the content to say or any other component
</ng-template>


@Input() templateHeader: TemplateRef<any>;
@Input() templateContent: TemplateRef<any>;

<div class="header-css-class">
    <ng-container
        *ngTemplateOutlet="
        templateHeader;
        context: {   , < -- if you want to pass data to your template
            data: data
        }">
    </ng-container>
</div>
<div class="content-css-class">
    <ng-container *ngTemplateOutlet="templateContent">
    </ng-container>
</div>
`

# dynamic component
## Ng-template
<ng-template #theTruth>
<h4>Real Madrid - best football club ever</h4>
</ng-template>

<ng-container *ngTemplateOutlet="title"></ng-container>
<heading [title]="theTruth"> </heading>
## ng-content

<ng-content></ng-content>
<heading>
<h4>Real Madrid - best football club ever</h4>
</heading>

### expend component

` @Input() content: TemplateRef<any>;

<div class="header" (click)="toggleExpand()">
    {{heading}}
    <i *ngIf="!expanded" class="fas fa-chevron-down"></i>
    <i *ngIf="expanded" class="fas fa-chevron-up"></i>
</div>
<div class="content" *ngIf="expanded">
    <ng-container [ngTemplateOutlet]="content"></ng-container>
</div>

<expander heading="Expand to see the current time" [content]="content">
</expander>

<ng-template #content>
<clock></clock>
</ng-template>

or

<expander>
<ng-template>
<clock></clock>
</ng-template>
</expander>

<>Copy
@Input() content: TemplatRef<any>;
// becomes
@ContentChild(TemplateRef) content: TemplateRef<any>;
`
# javascript ref
https://javascript.info/array
# css  ref
https://cssgradient.io/gradient-backgrounds/
https://www.quackit.com/css/flexbox/examples/flexbox_website_layout_examples.cfm
https://www.educba.com/software-development/software-development-tutorials/css-tutorial/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
https://pages.github.com/

# angular ref
https://www.pluralsight.com/guides?gone=using-generics-angular
https://www.pluralsight.com/guides/building-a-custom-directive
https://indepth.dev/authors/1106/scooper

# ngClass
`
• Space delimited string

[ngClass]="is-info-element is-item has-no-border"

• Array of Strings

[ngClass]="['is-info-element', 'is-item', 'has-no-border'"]

• Object
[ngClass]="{'is-info-element': true, 'is-item': true}
[ngClass]="name === 'erxk' ? 'is-author' : 'is-reader'
`
# @injectable
`
providers: [
// long hand syntax
{provide: MyService, useClass: MyService},
// short hand syntax
MyService
]


import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyService {

constructor(private httpClient: HttpClient) { }
}

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
providers: [LoggingService]
})

@Injectable({
providedIn: MyUserModule,
})

@Injectable({
providedIn: 'root',
})
`
# auther ref
https://andromedagalactic.com/blog/
https://github.com/martine-dowden
https://martine.dev/
https://codepen.io/martine-dowden
https://www.thisdot.co/author/chris-trze%C5%9Bniewski
# binding
// two way
<input  [ngModel]="name" (ngModelChange)="assignName($event)"/>
// 1 way
<input  [ngModel]="name"/>
// event binding two way
<input  [value]="name" (input)="assignName($event)"/>
// attribute
<h1 [attr.aria-label]="header">Welcome to Angular</h1>
// property binding
 <span [innerHTML]="name"></span>
// string interpolation
{{  name }}

# rest dummy apis
http://dummy.restapiexample.com/


https://icanhazdadjoke.com/
https://swapi.co/api/people/

# public apis
1.  https://jsonplaceholder.typicode.com/
2.  https://cloud.google.com/translate/docs/
3.  https://openweathermap.org/api
4. https://restcountries.com/
5.  https://ipapi.co/
6. https://ipapi.co/json
7. https://random-data-api.com/
8. https://pokeapi.co/
9. https://www.weatherapi.com/
10. https://openweathermap.org/api
11. https://static.elfsight.com/covid/current.json
12. const URL = 'https://api.punkapi.com/v2/beers';


# image tools
### https://tapajyoti-bose.medium.com/7-free-lifesaver-image-tools-every-frontend-developer-must-have-in-their-arsenal-%EF%B8%8F-5a2600cbc257
1. [Online Photoshop web client](https://www.photopea.com/)
2. [Royalty free images](https://unsplash.com/)(https://www.freepik.com/)
3. [Responsive image generator](https://responsivebreakpoints.com/)
4. [Background generator](https://bgjar.com/)(https://heropatterns.com/)
5. [ Background remover](https://www.remove.bg/)
6. [Image converter](https://convertio.co/jpg-webp/)
7. [SVG tools](https://haikei.app/)(https://jakearchibald.github.io/svgomg/)

# 7-vs-code-tricks
1.  Sticky Scroll
   ```
settings.json
"editor.stickySrcoll.enabled": true
``` 
2. Command Palette (Ctrl + Shift + P)
3. Custom Snippets
4.  File Finder (Ctrl + P)
5. Go to Symbol (Ctrl + Shift + O)
6. Check out file changes

# secret-typescript-tricks
1.  Inference
```
enum CounterActionType {
  Increment = "INCREMENT",
  IncrementBy = "INCREMENT_BY",
}

interface IncrementAction {
  type: CounterActionType.Increment;
}

interface IncrementByAction {
  type: CounterActionType.IncrementBy;
  payload: number;
}

type CounterAction =
  | IncrementAction
  | IncrementByAction;

function reducer(state: number, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.Increment:
      // TS infers that the action is IncrementAction
      // & has no payload
      return state + 1;
    case CounterActionType.IncrementBy:
      // TS infers that the action is IncrementByAction
      // & has a number as a payload
      return state + action.payload;
    default:
      return state;
  }
}
```

2. Literal Types
 ```
type Status = "idle" | "loading" | "success" | "error";

type Review = 1 | 2 | 3 | 4 | 5;

// or better yet:
const reviewMap = {
  terrible: 1,
  average: 2,
  good: 3,
  great: 4,
  incredible: 5,
} as const;

// This will generate the same type as above,
// but it's much more maintainable
type Review = typeof reviewMap[keyof typeof reviewMap];
```
3.  Type Guards
```
function isNumber(value: any): value is number {
  return typeof value === "number";
}

const validateAge = (age: any) => {
  if (isNumber(age)) {
    // validation logic
    // ...
  } else {
    console.error("The age must be a number");
  }
};

const validateAge = (age: number) => {
  // ...
};
```
4. Index Signature
   When you have dynamic keys in an object, you can use an index signature to define its type:
```
enum PaticipationStatus {
  Joined = "JOINED",
  Left = "LEFT",
  Pending = "PENDING",
}

interface ParticipantData {
  [id: string]: PaticipationStatus;
}

const participants: ParticipantData = {
  id1: PaticipationStatus.Joined,
  id2: PaticipationStatus.Left,
  id3: PaticipationStatus.Pending,
  // ...
};
```
5. Generics

Generics are a powerful tool to make your code more reusable. It allows you to define a type that will be determined by the use of your function.
```
const clone = <T>(object: T) => {
  const clonedObject: T = JSON.parse(JSON.stringify(object));
  return clonedObject;
};

const obj = {
  a: 1,
  b: {
    c: 3,
  },
};

const obj2 = clone(obj);
```

6.  Immutable Types
    You can make your types immutable by adding as const. This ensures that you don't end up accidentally changing the values.
```
const ErrorMessages = {
  InvalidEmail: "Invalid email",
  InvalidPassword: "Invalid password",
  // ...
} as const;

// This will throw an error
ErrorMessages.InvalidEmail = "New error message";
```
7. Partial, Pick, Omit & Required Types
   Often while working with server & local data, you need to make some properties optional or required.

Instead of defining hundreds of interfaces with slightly altered versions of the same data. You can do that using Partial, Pick, Omit & Required types

```
interface User {
  name: string;
  age?: number;
  email: string;
}

type PartialUser = Partial<User>;
type PickUser = Pick<User, "name" | "age">;
type OmitUser = Omit<User, "age">;
type RequiredUser = Required<User>;

// PartialUser is equivalent to:
// interface PartialUser {
//   name?: string;
//   age?: number;
//   email?: string;
// }

// PickUser is equivalent to:
// interface PickUser {
//   name: string;
//   age?: number;
// }

// OmitUser is equivalent to:
// interface OmitUser {
//   name: string;
//   email: string;
// }

// RequiredUser is equivalent to:
// interface RequiredUser {
//   name: string;
//   age: number;
//   email: string;
// }

type A = B & C;
```

# performance-of-your-website
1. Fetch only relevant resources
```
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 600px)"
/>
```
2. Minify your code
```
Minification is the process of removing unnecessary or redundant data without affecting how a resource is processed by the browser. Minification can include the removal of code comments, white space, and unused code, as well as the shortening of variable and function names.

Regardless of the build tool (Webpack, Vite, Snowpack, etc) you use, it would have a minification option. 
```
3. Pre-fetch resources
```
<link rel="preload" as="image" href="image.png" />
```
4.  Use Responsive Images or Art Direction
```
<img
  srcset="image-480w.jpg 480w, image-800w.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  src="image-800w.jpg"
  alt="some random image"
/>
```
```
<picture>
  <source
    media="(min-width: 900px)"
    srcset="desktop.jpg"
  />
  <source
    media="(min-width: 480px)"
    srcset="tablet.jpg"
  />
  <img src="mobile.jpg" alt="some random image" />
</picture>
```
5.  Lazy loading of relevant resources
```
<img
  src="placeholder.png"
  alt="some random image"
  loading="lazy"
/>
```
6. Tree-shake your code
- `Just like minification, tree-shaking & pruning unused code is also a build tool feature.`
7. Use Page Speed Insights to detect potential issues
   [Page Speed Insights](https://pagespeed.web.dev/)


# 7-amazing-github-repositories
1. [FreeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)(As the name suggests, FreeCodeCamp is the go-to place to learn to code for free!)
2.  [Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap)(Developer Roadmap makes the process simple by providing you with a clear roadmap on what skills you need to learn to master a topic)
3. [Awesome](https://github.com/sindresorhus/awesome)
4. [build your own](https://github.com/codecrafters-io/build-your-own-x)
5. [ Git Ignore](https://github.com/github/gitignore)
6. [ System Design Primer](https://github.com/donnemartin/system-design-primer)
7. [Coding Interview University](https://github.com/jwasham/coding-interview-university)

# developer-portfolio-for-inspiration-
1. https://bruno-simon.com/
2.  http://www.rleonardi.com/interactive-resume
3. https://vscode-portfolio.vercel.app
4.  https://www.dejan.works
5. https://hype4.com
6.  https://jacekjeznach.com
7.  https://tapajyoti-bose.vercel.app

# shorthand-optimization js
1. Multiple string checks
 ```
// Long-hand
const isVowel = (letter) => {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return true;
  }
  return false;
};
// Short-hand
const isVowel = (letter) =>
  ["a", "e", "i", "o", "u"].includes(letter);
```
2. For-of and For-in loops
- `For-of`
```
const arr = [1, 2, 3, 4, 5];
// Long-hand
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  // ...
}
// Short-hand
for (const element of arr) {
  // ...
}
```
- `For-in`
```
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// Long-hand
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = obj[key];
  // ...
}
// Short-hand
for (const key in obj) {
  const value = obj[key];
  // ...
}
```
3. Falsey checks
 ```
// Long-hand
const isFalsey = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === 0 ||
    value === false ||
    value === NaN ||
    value === ""
  ) {
    return true;
  }
  return false;
};
// Short-hand
const isFalsey = (value) => !value;
```

4.  Ternary operator

```
// Long-hand
let info;
if (value < minValue) {
  info = "Value is too small";
} else if (value > maxValue) {
  info = "Value is too large";
} else {
  info = "Value is in range";
}
// Short-hand
const info =
  value < minValue
    ? "Value is too small"
    : value > maxValue ? "Value is too large" : "Value is in range";
```
5.  Function calls

```
function f1() {
  // ...
}
function f2() {
  // ...
}
// Long-hand
if (condition) {
  f1();
} else {
  f2();
}
// Short-hand
(condition ? f1 : f2)();
```

6. Switch shorthand

```
const dayNumber = new Date().getDay();
// Long-hand
let day;
switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
// Short-hand
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const day = days[dayNumber];
```

7. Fallback values

```
// Long-hand
let name;
if (user?.name) {
  name = user.name;
} else {
  name = "Anonymous";
}
// Short-hand
const name = user?.name || "Anonymous";
```

# tools for web developers
1. [Omatsuri](https://omatsuri.app/)
 ```
Triangle generator
Color shades generator
Gradient generator
Page dividers
SVG compressor
SVG → JSX converter
Base64 encoding
Fake data generator
Symbols collection
Lorem ipsum
CSS cursors
Keyboard events codes
```
2. [Coolors](https://coolors.co/)
3. [ Keyframes](https://keyframes.app/)
4. [Roadmap.sh](https://roadmap.sh/)
5. [FreeCodeCamp](https://www.freecodecamp.org/)
6. [Postman]( https://www.postman.com/)
7. [CSS Layout](https://csslayout.io/)

# old Html
1.  Preload & cache assets
 ```
<link
  rel="preload"
  href="https://example.com/asset.png"
  as="image"
/>
```
2. Add Custom Link Previews for the page

```
<meta property="og:title" content="Page title" />
<meta
  property="og:description"
  content="Page description"
/>
<meta
  property="og:image"
  content="https://example.com/asset.png"
/>
```
3.  Redirect to another link

```
<meta
  http-equiv="refresh"
  content="3; url=https://google.com/"
/>
```
4. Make a call or mail

```
<a href="tel:+919876543210">Call</a>
<a href="mailto:user@emaul.com">Mail</a>
```
5. Add a Color Picker

```
<input type="color" />
```
6. Editable Content

```
<p contenteditable="true">
  This is an editable paragraph
</p>
```

# cool Html5
1. meter & progress
```
<meter
  min="0"
  max="100"
  low="25"
  high="75"
  optimum="80"
  value="50"
></meter>
```
2. sup & sub
3. datalist
4. map & area
 ```
<img
  src="workplace.jpg"
  alt="Workplace"
  usemap="#workmap"
  width="400"
  height="379"
/>
<map name="workmap">
  <area
    shape="rect"
    coords="34,44,270,350"
    alt="Computer"
    href="computer.html"
  />
  <area
    shape="rect"
    coords="290,172,333,250"
    alt="Phone"
    href="phone.html"
  />
  <area
    shape="circle"
    coords="337,300,44"
    alt="Cup of coffee"
    href="coffee.html"
  />
</map>
```
5. details & summary
6. object
7. abbr

# CSS
1.  Layout using Flexbox (one dimensional) & Grid (multi dimensional)
2. Target Different Devices with Media Queries
  ```
Desktop: 

@media screen and (min-width: 1024px) {}

Tablet:

@media screen and (min-width: 768px) and (max-width: 1063px) {}

Mobile:

@media screen and (max-width: 767px) {}

```
3. Utilize Pseudo-classes & Pseudo-elements

4. Create Eye-candy Animations
5. Join the Dark Side by adding Shadows
6.  Position Elements

# [chrome-extensions-](https://tapajyoti-bose.medium.com/6-must-have-chrome-extensions-for-web-developers-84b04e02ee04)

# JS Tricks
1. Truncate the end of arrays
 ```
let array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4, 5]
console.log(array.length); // 5
array.length = 3;
console.log(array); // [1, 2, 3]
```
2. Short

- `&&`
 ```
const showUserData = true;
const data = "not so secret data";
// will display false if showUserData is false
console.log(showUserData && data);
```
- `||`

```
const fallbackData =
  "nothing to see folks";
const data = "random data";
// will display `fallbackData` if
// `data` is false-ish (eg: null, undefined, '', etc)
console.log(data || fallbackData);
```
3. Optional chaining

```
// usage (will return undefined if any of the items is not defined)
user.data?.name;
user.data?.addressList?.[0];
user.greet?.(time);
```
4. Get unique values in an array

```
// USUAL WAY
// O(n^2) time complexity & O(n) space complexity
const uniqueValues = array.filter(
  (value, index, self) =>
    self.indexOf(value) === index
);
// SMART WAY
// complexity: O(n) time & space
const uniqueValues = [
  ...new Set(array),
];
```

5. Nullish coalescing

```
const getUserName = (user) => {
  return user?.name ?? "Anonymous";
};
```
6.  Replace all

```
const replace_string =
  "Visit replacesoft. replacesoft is a software company";
console.log(
  replace_string.replace(
    /replace/,
    "Micro"
  )
); // "Visit Microsoft. replacesoft is a software company"
console.log(
  replace_string.replace(
    /replace/g,
    "Micro"
  )
); // "Visit Microsoft. Microsoft is a software company"
```

# [small-step](https://tapajyoti-bose.medium.com/from-no-programming-experience-to-web-developer-in-11-small-steps-fc61b8da8439)
# [Tips](https://tapajyoti-bose.medium.com/7-easy-hacks-for-developers-to-become-a-productivity-jedi-%EF%B8%8F-b140a3aad555)
# [Tips](https://tapajyoti-bose.medium.com/25-tips-i-wish-i-knew-before-i-started-to-code-2c6c1af20b71)
# [Cross-Platform Desktop](https://tapajyoti-bose.medium.com/turn-your-website-into-a-cross-platform-desktop-app-with-11-lines-of-code-d3b5ae2d4fa9)

# Html
1. Form Validation

```
<form>
  <input required="true" />
</form>

function validateForm() {
  const inputText = document.forms["form-name"]["input-name"].value;
  if (!inputText) {
    // handle input empty
  } else {
    // handle input filled
  }
}
```
2. Audio

```
<audio id="click-audio">
  <source src="button-click.mp3" type="audio/mpeg">
</audio>

const audio = document.querySelector("#click-audio")
document.querySelectorAll("button")
  .forEach((button) => {
    button.onclick = () => audio.play()
  })

```
3. Picture Perfect

```
<picture>
    <source media="(max-width: 1200px)" srcSet="link-to-img">
    <source media="(max-width: 2560px)" srcSet="link-to-img@2x">
    <source media="(min-width: 2560px)" srcSet="link-to-imgl@3x">
    <img src="link-to-img@3x">
</picture>

<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
```

4. Pre-formatted Text

```
<pre>
Lorem
  Ipsum   dolor sit             amet.
</pre>
```
5. Input Pro

```
<p contenteditable="true">This is an editable paragraph.</p>

<input type="text" list="planets">
<datalist id="planets">
    <option value="Mercury"></option>
    <option value="Venus"></option>
    <option value="Earth"></option>
    <option value="Mars"></option>
    <option value="Jupiter"></option>
    <option value="Saturn"></option>
    <option value="Uranus"></option>
    <option value="Neptune"></option>
</datalist>
```
# required inputs
```

  @Input({ required: true }) text = 'submit';
  @Input({ required: true }) icon!: string;
```
