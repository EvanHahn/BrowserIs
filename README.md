BrowserIs
=========

Ask questions about the browser in Express. Based on [is.js](https://github.com/Cedriking/is.js).

Example
-------

`npm install browseris` or add `browseris` to package.json.

    var is = require('browseris');

    // ...

    myExpressApp.get('/index', function(request, response) {
        if (is(request).desktop) {
            response.send('You are on a desktop!');
        } else {
            response.send('You are not on a desktop!');
        }
    });

    // ...

Supported properties
--------------------

* ie
* ie6
* ie7
* ie8
* ie9
* firefox
* gecko
* opera
* safari
* chrome
* webkit
* mobile
* tablet
* desktop
* kindle
* tv
* windows
* mac
* unix
* linux
