import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from '../routes/routes'

const app = express();

app.set('clientPath',path.join(__dirname,'/../../../','frontend'));

app.use('/',express.static(app.get('clientPath')));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(routes);

export default app;