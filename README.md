## Andio - React App with Rails Api (*still in development*)

Andio is an aid platform that connects people in need to willing volunteers in your neighborhood

### Libraries/Tech/Tools
#### Frontend
* React js
* Redux
* Router
* React Component Form
* Axios
* Bootstrap 4 (custom css)

#### Backend
* Docker (optional)
* Rails 5.2.0
* Rails active storage
* Ruby 2.5.1
* jwt
* Database: sqlite3

### Installation

- *(Optional)* Download and install docker
 
- Clone repo to your system

#### Rails setup

- Pull rubyonrails docker image or create your own ruby on rails docker container.
  
  `$ docker pull tjwesleygore/rubyonrails:1.1`

- Run docker image and start the container.

  ```
  $ docker run -it --rm --name andio -p 3001:3000 -v /path/to/repo/railsapi/folder:/usr/src/my-app tjwesleygore/rubyonrails:1.1
  ```

- Start up rails.
  
  ```
  #In your docker container

  $ cd /usr/src/my-app
  $ bundle install
  $ EDITOR="nano --wait" rails credentials:edit
  $ rails active_storage:install
  $ rails db:migrate
  $ rails s
  ```
- Run all rails test

  ```
  $ rails test test/
  ```
 
#### React setup

Note: Add your own Google api key to use map functionality

React components using Google api
* Map/MapWithAMarkerClusterer.js
* Views/SubmitRequest.js
* Header/UserNavi.js

**Update to have api key in one location**

Not in docker container

`$ npm install`

`$ npm start`

*Note*: **If you are using the docker conatiner provided**, make sure the react app is running on host port:3000 and Rails api on host port:3001