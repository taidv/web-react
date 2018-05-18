import * as express from 'express'
import { Router } from 'express'
import { UserServices } from '../services';

export let router : Router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const user = await UserServices.getUser();
  console.log("set res: ", user);
  res.send(user);
});

