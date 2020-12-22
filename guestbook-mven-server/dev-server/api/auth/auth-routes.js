import express from 'express';
const router  = express.Router();
import * as controller from './auth-controller';

//create new order
router.post('/auth', controller.index);

export default router;
