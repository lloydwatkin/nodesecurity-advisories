---
title:  printer potential command injection on untrusted input
author:  Adam Baldwin
module_name: printer
publish_date: Tue Mar 06 2014 09:33:48 GMT-0800 (PST) 
cve: CVE-temp
vulnerable_versions: "<= 0.0.1"
patched_versions: "> 0.0.1"
...

## Overview
printer does not sanitize command arguments properly in the ```printDirect()``` function. If untrusted client input is passed in, command injection is possible.

Special thanks to [Wes Cruver](https://github.com/chieffancypants) for providing a pull request!

## Recommendations
- Update to version > 0.0.1 which is available on github at https://github.com/tojocky/node-printer

## References
- https://github.com/tojocky/node-printer
- https://github.com/tojocky/node-printer/commit/e001e38738c17219a1d9dd8c31f7d82b9c0013c7
