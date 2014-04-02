nodesecurity-advisories
=======================

![](https://nodesecurity.io/img/nodesecurity.png)

Node Security Project Published Advisories 

How to collect metadata?

```javascript
var advisories = require('nodesecurity-advisories');

advisories(function(err, module_index){ 
  console.log(module_index)
});

```