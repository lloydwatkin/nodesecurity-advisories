---
title:  codem-transcode potential command injection in ffprobe functionality
author:  Neal Poole
module_name: codem-transcode
publish_date: Jul 07 2013 09:33:48 GMT-0800 (PST) 
cve: CVE-temp
vulnerable_versions: "<0.5.0"
patched_versions: ">=0.5.0"
...

## Overview

When the ffprobe functionality is enabled on the server, HTTP POST requests can be made to /probe. These requests are passed to the ffprobe binary on the server. Through this HTTP endpoint it is possible to send a malformed source file name to ffprobe that results in arbitrary command execution.

## Mitigating Factors:
The ffprobe functionality is not enabled by default. In addition, exploitation opportunities are limited in a standard configuration because the server binds to the local interface by default.

## Recommendations:
An updated and patched version of the module (version 0.5.0) is available via npm. Users who have enabled the ffprobe functionality are especially encouraged to upgrade.
