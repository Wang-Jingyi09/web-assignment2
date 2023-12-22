# Asssignment2 - Web API

Name: Jingyi Wang

# Features

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Add several additional API endpoints, and some of them use parameterised URL that can fetch from TMDB/Mongo
 + Frontend and backend apps are connected
 + Several additional API endpoints are called from frontend app
 + Signup and login included in site header
 + Some routes are protected (only visible when logging in)
 + Improve validation of username and passwords, and the error messages will be displayed on frontend.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

1. The main branch that tries to push to github contains some previously local submissions.
The error message fatal: refusing to merge unrelated histories indicates that Git has detected that the local and remote repositories have diverged in such a way that they do not share a common base commit. The error message "Committing is not possible because you have unmerged files." indicates that a file conflict was not resolved when I merged. Git cannot commit because there are unmerged files.

`git pull origin main --allow-unrelated-histories`
`git commit -m "Resolve conflicts and merge unrelated histories"`
`git push origin main`

## API Configuration
______________________

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=MongoURL
TMDB_KEY=tmdb_key
SECRET=JWTSecret       
______________________


## API Design

### [actors]
- '/api/actors/tmdb/movies/:id/credits' | GET | Gets a list of actors with a link below to navigate details page to actors

### [genres]
- '/api/genres/tmdb/genres' | GET | Gets all movie genres

### [movies]
- '/api/movies/tmdb/movies' | GET | Gets a list of movies 
- '/api/movies/{id}' | GET | Gets a single movie 
- '/api/movies/tmdb/upcoming' | GET | Gets upcoming movies
- '/api/movies/tmdb/movies/{id}/images' | GET | Gets images of a single movie 
- '/api/movies/tmdb/latest' | GET | Gets latest movies
- '/api/movies/tmdb/top_rated' | GET | Gets top_rated movies 
- '/api/movies/tmdb/trending' | GET | Gets trending movies
- '/api/movies/movies/{id}/recommendations' | GET | Gets recommended movies of a single movie 


### [reviews]
- '/api/reviews/{id}/reviews' | GET | Gets all reviews for a movie 
- '/api/reviews/{id}/reviews' | POST | Create a new review for a Movie 

### [users]

- '/api/users/' | GET | Gets all users
- '/api/users/' | POST | Creates a user
- '/api/users/{id}' | PUT | Updates a user


If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Authentication is utilized to manage user sessions like favorite page.

## Integrating with React App

+ Integrate the package.json in react app (npm install)
+ Integrate the source code from assignment 1.
+ Several additional API endpoints are called from frontend app
+ When a user attempts to access a protected page, they are redirected to the login page.