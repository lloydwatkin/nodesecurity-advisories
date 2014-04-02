---
title:  Potential command injection in libnotify.notify
author:  Adam Baldwin
module_name: libnotify
publish_date: 2013-05-15T22:30:05.853Z
cve: CVE-temp
vulnerable_versions: "<= 1.0.3"
patched_versions: ">= 1.0.4"
...

## Overview
Untrusted input passed in the call to libnotify.notify could result in execution of shell commands. Callers may be unaware of this.

## Example
```
var libnotify = require('libnotify')
libnotify.notify('UNTRUSTED INPUT', { title: \"\" }, function () {
    console.log(arguments);
})
```

Special thanks to Neal Poole for submitting the pull request to fix this issue.
