```
//     console.log('URL:' + window.location.href);
// console.log('Path:' + window.location.pathname);
// console.log('Host:' + window.location.host);
// console.log('Hostname:' + window.location.hostname);
// console.log('Origin:' + window.location.origin);
// console.log('Port:' + window.location.port);
// console.log('Search String:' + window.location.search);

```
```
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = event.url;
        this.title = this.title.replace('/', '');
      }
    });
```

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
