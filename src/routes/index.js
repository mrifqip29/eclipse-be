import express from 'express';
import { welcomeController } from '../controllers';
const router = express.Router();

/* GET home page. */
router.get('/', welcomeController);

export default router;
