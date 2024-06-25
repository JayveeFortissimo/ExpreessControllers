import express from 'express';
import  Router  from 'express';
import { getData,PushData } from '../Controllers/Controller.js';

const routes = express.Router();

routes.get('/get',getData);
routes.post('/push',PushData);



export default routes;