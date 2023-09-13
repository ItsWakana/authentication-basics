# Authentication Basics

## What I learned

- I got introduced to the PassportJS authentication middleware and got to experiment with validating a log in and sign up form. This middleware simplifies the concept of user authentication. The middleware uses things called strategies to support different types of authentications from a simple username and password to more involved auths like facebook, twitter or instagram.

- I played around with password hashing using bcryptJS, naturally you don't want to storing user created passwords in plain-text in the database so when recieving the user password in the POST request I had some practice hashing that password and then sending the hashed version to the database. Then when a user tries to log in we compare the input password with the database password using a bcrypt method. 

## How I could improve moving forward

- In my next projects I plan to implement both passportJS for user authentication and bcrypt for password hashing.