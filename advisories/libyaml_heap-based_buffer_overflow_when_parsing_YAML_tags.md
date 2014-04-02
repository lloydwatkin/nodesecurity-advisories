---
title:  libyaml - heap-based buffer overflow when parsing YAML tags
author:  N/A
module_name: libyaml
publish_date: Tue Feb 04 2014 09:31:34 GMT-0800 (PST
cve: CVE-2013-6393
vulnerable_versions: "<0.2.3"
patched_versions: ">=0.2.3"
...


## Overview

LibYAML, the library that libyaml provides bindings for is vulnerable to a heap-based buffer overflow when parsing YAML tags.

## Recommendation

- Update to version 0.2.3 that includes a version of LibYAML that contains a fix for this issue.

## References
- [CVE-2013-6393](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2013-6393)
- https://bitbucket.org/xi/libyaml/pull-request/1/fix-cve-2013-6393/diff

