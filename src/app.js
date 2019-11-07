import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import routes from './routes';
import postgres from './services';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

function startExpress() {
app.enable('trust proxy');
  app.set('port', PORT);
  app.use(helmet());
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
    res.header('Content-Security-Policy', 'frame-src *');
    next();
  });
  app.use(bodyParser.json())
  app.use(routes);
  app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
  });
}

function onError(err) {
   console.error('Server not started.');
  console.error(`Message: ${err.message}`);
}

function start() {
  postgres
    .checkConnection()
    .then(startExpress)
    .catch(onError);
}

function stop() {
  app.close();
}

export default {
  start,
  stop
};
