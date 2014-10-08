slack-spotify
=============

Slack-Spotify integration

usage
=====

Requirements: node >= v0.10.26

From slack account setting, create an Incoming WebHooks:
- choose a channel where sending Spotify message
- edit variable "incomingWebHook" with generated "Your Unique Webhook URL"

From slack account setting, create a Slash Commands with:
- Command: /spotify
- URL: url node application end point (i.e http://yourdomain/node-application-root)
- Method: POST

Clone repo and:
- run "npm install"
- run "node app.js"

From slack application run command "/spotify [artist name]" and you will receive the open Spotify url of a random album of selected artist.

Share music with your colleagues and have fun.
