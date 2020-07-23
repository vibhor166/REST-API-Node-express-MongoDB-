# REST-API-Node-express-MongoDB-
REST API (Node,express,MongoDB)
A RESTful API, wherein a user can create an account, upload avatar images and delete the account. Used sendgrid service to send an email from the app on the event of a new user formation & on deletion of the user account. 
A custom middleware made with Node/Express utilized bcryptjs and jsonwebtoken to hash the user password and issue a token, thereby protecting the GET, POST, PATCH and DELETE routes under authentication. Implemented full CRUD operations by using MongoDB as the database. 
The npm modules multer and sharp were used for making file uploads, auto-cropping and resizing of images. Postman was used for testing the API endpoints 
