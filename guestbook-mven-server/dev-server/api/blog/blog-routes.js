import express from 'express';
const router  = express.Router();
import * as controller from './blog-controller';

//Task-3b
/**
 * create a guestbook entry
 */
router.post('/blog', controller.erzeugeGuestbookEintrag);
//End Task

//Task-2c
/**
 * get all guestbook entries
 */
router.get('/blog', controller.holeGuestbookEintraege);
//End Task

export default router;
