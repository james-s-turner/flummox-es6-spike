# flummox-es6-spike
A small spike for my own delectation and delight.

# Disclaimer
I've only developed it on OSX and run against latest chrome.
Not even tried to make it vaguely pretty.

# Installing and running
* Install node. see https://nodejs.org/download/
* Clone the repository
`git clone git@github.com:james-s-turner/flummox-es6-spike.git`
* Enter the directory
`cd flummox-es6-spike`
* Install node modules `npm install`
* Start the server
`npm start`
You should see the following:
```
Listening on port 3000
MailApp Started
```
* Open your browser, go to "http://localhost:3000"

# Testing
* `npm test`

# Production
* Generate the production bundle and source maps.
* `node build`
*  Open your browser, go to "http://localhost:3000/?mode=prod"

# TODO
* Run tests in travis.
* Add libsass to build. Relying on using SASS from webstorm at the moment
* Add autoprefixer to build
* Upgrade so systemjs 0.17.*

