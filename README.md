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