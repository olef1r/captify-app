import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

function startExpress() {
//app.enable('trust proxy');
  app.set('port', 3001);
  app.use(bodyParser());
  app.use(routes);
  //app.use(express.static(path.join(HOME_DIR, '/comtool-react-client/build')));
  app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
  });
}

function start() {
  startExpress()
}

function stop() {
  app.close();
}

export default {
  start,
  stop
};
