# Asssignment2 - Web API

Name: Jingyi Wang

# Features

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

1. The main branch that tries to push to github contains some previously local submissions.
The error message fatal: refusing to merge unrelated histories indicates that Git has detected that the local and remote repositories have diverged in such a way that they do not share a common base commit. The error message "Committing is not possible because you have unmerged files." indicates that a file conflict was not resolved when I merged. Git cannot commit because there are unmerged files.

git pull origin main --allow-unrelated-histories
git commit -m "Resolve conflicts and merge unrelated histories"
git push origin main

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=MongoURL
TMDB_KEY=tmdb_key
SECRET=JWTSecret   

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

1. Integrate the package.json in react app (npm install)
1. Integrate the source code from assignment 1.
 

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.