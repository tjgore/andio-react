## Andio - React App with Rails Api (*still in development*)

Andio is an aid platform that connects people in need to willing volunteers in your neighborhood

This repo is the React app here [https://andio-react.surge.sh](https://andio-react.surge.sh),which uses a Rails api [https://andio.herokuapp.com](https://andio.herokuapp.com)

You can find the Rails API repo here [https://github.com/tjgore/andio-rails-api](https://github.com/tjgore/andio-rails-api)

### Libraries/Tech/Tools
#### Frontend
* React js
* Redux
* Router
* React Component Form
* Axios
* Bootstrap 4 (custom css)
* Google map and places library

 
#### React setup

Note: Add your own Google api key to use map functionality

React components using Google api
* index.js
* Map/MapWithAMarkerClusterer.js
* Header/UserNavi.js

**Update to have api key in one location**

In the react project directory, not in docker container, run

`$ npm install`

`$ npm start`

*Note*: **If you are using the docker conatiner provided**, make sure the react app is running on host port:3000 and Rails api on host port:3001

In package.json and src/axios_instances.js change all occurences of https://andio-react.surge.sh to your own domains

 #### Deploy to surge execute

`$ npm run deploy`
