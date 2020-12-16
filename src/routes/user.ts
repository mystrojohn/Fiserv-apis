import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.post('/v1/parse', controller.parseCheckv1);
router.post('/v2/parse', controller.parseCheckv2);

export = router;
