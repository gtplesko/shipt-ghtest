## Github user lookup
This is an application that uses api.github.com to allow user lookups which displays information on their accounts.

https://shipt-takehome.herokuapp.com

Using https://github.com/gtplesko/shipt-ghtest as the working repository for the application

## Design choices
I chose to use Node.js with Express and Request and EJS for templating. Node was an obvious choice for me with the plan to push it to Heroku. Express is the natural extension of Node to avoid reinventing the wheel on server code, and request would do the same for interacting with the github api. I chose EJS as the templating engine because it is simple and lightweight, mirroring the application. I chose to use bootstrap on a CDN to help expedite time spent on UX.

Followers are pulled on the client side to keep server requests low. However to keep calls to the api quick, the primary user is still selected on server side. Load more is displayed even if a user has a multiple of 100 followers. This is done because I would rather have a user see the button disappear without adding followers than make unnecessary api calls, especially given the 60 calls per hour limit that github enforces.

There are no implemented tests because this program was largely just http requests that have error handling built in.

NOTE:: Logging has been disabled for heroku's sake.
