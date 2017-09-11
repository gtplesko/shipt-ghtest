## Github user lookup
This is an application that uses api.github.com to allow user lookups which displays information on their accounts.


## Design choices
I chose to use Node.js with Express and Request and EJS for templating. Node was an obvious choice for me with the plan to push it to Heroku. Express is the natural extension of Node to avoid reinventing the wheel on server code, and request would do the same for interacting with the github api. I chose EJS as the templating engine because it is simple and lightweight, mirroring the application. I chose to use bootstrap on a CDN to save time from focusing on UX design when I had little time to dedicate to this project.

### Features to be added 
(Scheduling conflicts did not allow me to dedicate enough time to this project)

Listing followers
-----
Listing followers will require a seperate call to the api. The options are listed and the template will be very similar to the template for the primary user, but with a for loop. 

Pagination
-----
The pagination is yet to be implemented, and will require using AJAX to pull information using the ?page argument with the api as specified here https://developer.github.com/v3/#pagination

Styling
-----
The styles are all bootstrap default styles, which I would have liked to spend time making a custom stylesheet had I had more time.

Tests
-----
Currently there is no automated testing. I was planning on writing a test for pagination to ensure that there were no repeated users and that it wouldn't create a page before having something to add to it (e.g. if the page limit is 30 and there are 30 users do not display a new page) however I did not get to implementing pagination.
