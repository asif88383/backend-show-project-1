import express from 'express';
import blogController from './controllers/BlogController.js';


const routes = express();

routes.get('/addblog', blogController.getAll);
routes.post('/', blogController.post);

export default routes;