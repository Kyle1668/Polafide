# Polafide :: Find Vegetarian Eats

######

Polafide is a web application where a user enters the desired location and is given a list of eateries that have vegetarian options. This was my first time experiementing with splitting the client and back-end into two seperate projects that communicate with one another via HTTP requests.

######

### Getting Started
Interested in contributing? 

1. Clone this repo.
2. Install dependencies.
    * Front End: `npm install`
    * Back End: `bundle install`
3. Configure to API path to your localhost port for the rails server. (default `3000`). 
4. Register for a Google Places API key.
 
######
 
### Example API Responce
`  http://polafide-search-api.herokuapp.com/api/places?loc="San Francisco"`

```javascript
{
    name: "The Lucky Creation Vegetarian Restaurant",
    address: "854 Washington St, San Francisco, CA 94108, USA",
    image_url: "[very long photo url]",
    is_open: true,
    place_id: "ChIJQdwWVPOAhYAR6ZL-cDxRC5s",
    rating: 4.3,
    types: "restaurant"
}
```

######

### Developed With
  - Front-End
    - ReactJS
    - Bootstrap
    - Sass
  - Back-End
    - Ruby on Rails
    - Google Places API
    - REST
  - Deployment
    - Heroku
    - Heroku Buildpacks

######

### Links
  - [Kyle O'Brien Linkedin](www.linkedin.com/in/kyle1668)
  - [Polafide Live on Heroku](https://polafide-client.herokuapp.com/)
  - [Google Places API](https://developers.google.com/places/)