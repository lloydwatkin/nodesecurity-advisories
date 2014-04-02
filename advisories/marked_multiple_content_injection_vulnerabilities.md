---
title:  Marked multiple content injection vulnerabilities
author:  Adam Baldwin
module_name: marked
publish_date: Fri Jan 31 2014 00:33:12 GMT-0800 (PST)
cve: CVE-2014-1850
vulnerable_versions: "<=0.3.0"
patched_versions: ">=0.3.1"
...

## Overview
Marked comes with an option to sanitize user output to help protect against content injection attacks.

```sanitize: true```

Even if this option is set, marked is vulnerable to content injection in multiple locations if untrusted user input is allowed to be provided into marked and that output is passed to the browser.

Injection is possible in two locations

- gfm codeblocks (language)
- javascript url's

## Recommendations

- Upgrade to version 0.3.1 or later

