import express from 'express';
const router  = express.Router();
import * as controller from './register-controller'


//create new register
router.post('/register', controller.create);

export default router;
