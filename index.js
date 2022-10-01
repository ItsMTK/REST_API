/*
 * This is a simple REST API supports a limited number of pathes.
 * GET: /users => Find all users
 * POST: /users => create a user
 * GET: /users/:id => find user details
 * DELETE: /users/:id => deletes a user
 * PATCH: /users/:id => update a user
*/

const express = require('express');
const bodyParser = require('body-parser');
const {users_router} = require('./routes/user_routes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users' , users_router);

app.get('/' , (req , res) => res.send('Main Page'));

app.listen(PORT , () => console.log(`Server is running... (http://localhost:${PORT}) `));
