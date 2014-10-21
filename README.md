slack-spotify
=============

Slack-Spotify integration

usage
=====

Requirements:
- node >= v0.10.26
- gulp >= 3.8.8
- nodemon >= v1.2.1

From slack account setting, create an Incoming WebHooks and:
- choose a channel where sending Spotify message

From slack account setting, create a Slash Commands with:
- Command: /spotify
- URL: url node application end point (i.e http://yourdomain/node-application-root)
- Method: POST

Clone repo and:
- copy and paste "config/default.json.dist" in "config/default.json" and edit "incomingWebHook" with generated "Your Unique Webhook URL"
- run "npm install"
- run "gulp build"

From slack application run command **/spotify [artist name]** and you will receive a random album of selected artist.
You can also run command **/spotify [album:album name artist:artist name]** to receive selected album.

If you want a more strict search double quotes artist name and album name: **/spotify [album:"album name" artist:"artist name"]**

Share music with your colleagues and have fun.
