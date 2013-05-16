BrowserIs
=========

Ask questions about the browser. Works clientside and in Node.js with Express. Based on [is.js](https://github.com/Cedriking/is.js).

Browser-based example
---------------------

    <script src="browseris.js"></script>
    <script>
    
    if (browser().isMobile) {
        console.log('You are on mobile!');
    } else {
        console.log('You are not on mobile!');
    }
    
    </script>

Node.js example
---------------

`npm install browseris` or add `browseris` to package.json.

    var browser = require('browseris');
    
    // ...
    
    myExpressApp.get('/index', function(request, response) {
        if (browser(request).isDesktop) {
            response.send('You are on a desktop!');
        } else {
            response.send('You are not on a desktop!');
        }
    });
    
    // ...

Supported functions
-------------------

* isIE
* isIE6
* isIE7
* isIE8
* isIE9
* isFirefox
* isGecko
* isOpera
* isSafari
* isChrome
* isWebkit
* isMobile
* isTablet
* isDesktop
* isKindle
* isTV
* isWindows
* isMac
* isUnix
* isLinux
