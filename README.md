# get-url-parts
Get all parts of the current URL

[npm package](https://www.npmjs.com/package/get-url-parts)

### Installation
```
npm i get-url-parts
```

### Example
```javascript
// Import the getURL Object which contains all the methods
import getURL from 'get-url-parts';

// Returns the whole the current URL (string)
getURL.href();
// Returns the origin of the current URL (string)
getURL.origin();
// Returns just the hostname without port (string)
getURL.host();
// Returns the port of the current URL (string)
getURL.port();
// Returns the protocol of the current URL (string)
getURL.protocol();
// Returns the path of the current URL (string)
getURL.path();
// Returns the query string of the current URL (object)
getURL.query();

```
