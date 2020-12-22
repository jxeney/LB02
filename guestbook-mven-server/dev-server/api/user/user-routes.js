import express from 'express';
import * as controller from './user-controller';
const router  = express.Router();

//create new order
router.get('/user', controller.index);

export default router;
