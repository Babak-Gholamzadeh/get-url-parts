# get-url-parts
Get all parts of the current URL (Parse URL)

[npm package](https://www.npmjs.com/package/get-url-parts)

### Installation
```
npm i get-url-parts
```

### Example
```javascript
// Import the getURL Object which contains all the methods
import getURL from 'get-url-parts';

// For instance, the current URL in the browser is
// https://www.example.com:3000/search?key-1=value-1&key-2=value-2#section-3

// Returns the whole current URL (string)
// output: 'https://www.example.com:3000/search?key-1=value-1&key-2=value-2#section-3'
getURL.href();

// Returns the origin of the current URL (string)
// output: 'https://www.example.com:3000'
getURL.origin();

// Returns just the hostname without port (string)
// output: 'www.example.com'
getURL.host();

// Returns the port of the current URL (string)
// output: '3000'
getURL.port();

// Returns the protocol of the current URL (string)
// output: 'https:'
getURL.protocol();

// Returns the hash part of the current URL (string)
// output: '#section-3'
getURL.anchor();

// Returns the path of the current URL (string)
// output: '/search'
getURL.path();

// Returns the query string of the current URL (object)
// output: { "key-1": "value-1", "key-2": "value-2" }
getURL.query();

```

All the methods get the current URL from the address bar in browser, unless you give them your own (string) URL as their argument.

### Example
```javascript
// Put your own URL in a variable
const url = 'https://www.example.com:3000/search?key-1=value-1&key-2=value-2#section-3';
// Pass url to the methods as their argument
// and the output would be the same as the example above
getURL.host(url);
getURL.anchor(url);
getURL.query(url);
.
.
.
```
