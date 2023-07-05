import express from 'express';
import router from './config/router.js';
import db from './db/helpers.js';
import { PORT } from './config/environment.js';

const app = express();

app.use(express.json());
app.use(router);

async function startServer() {
  try {
    await db.connect();
    console.log('Mongoose is connected to the database');
    // change this port variable to be an environment variable
    app.listen(PORT, function () {
      console.log('App is listening on port ' + 3000);
    });
  } catch (err) {
    console.log('Something went wrong connecting to the database');
  }
}

startServer();
