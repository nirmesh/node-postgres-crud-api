const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
var cors = require('cors')

const db = require('./queries');
app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: `Node.js, Express, and Postgres API developed by Nirmesh. Postgres host address::${process.env.DB_HOST},secret username::${process.env.SECRET_USERNAME},secret password::${process.env.SECRET_PASSWORD}` });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
