import * as express from 'express'
import { Router } from 'express'

export let router : Router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

