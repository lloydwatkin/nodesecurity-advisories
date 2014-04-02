---
title:  Hubot Scripts Potential command injection in email.coffee
author:  Neal Poole
module_name: hubot-scripts
publish_date: 2013-05-15T22:14:38.178Z
cve: CVE-temp 
vulnerable_versions: "<= 2.4.3"
patched_versions: "> 2.4.3"
severity: high
...

## Overview
Untrusted input passed in to the hubot-scripts/package/src/scripts/email.coffee module can allow for command injection. This may be unexpected behavior for the caller.
 
 ## Mitigating Factors
The email script is not enabled by default, it has to be manually added to hubot's list of loaded scripts.

## Remediation Note
A new version containing a fix has yet to be pushed to NPM. Use the version located at https://github.com/github/hubot-scripts/ until version 2.4.4 comes out.
