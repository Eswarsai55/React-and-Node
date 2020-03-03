import express from 'express';
import validateInput from '../shared/validations/signup';
import User from '../database/user';

let router = express.Router();

router.post('/' ,(req, res) => {
  const {errors, isValid} = validateInput(req.body);

  if (isValid) {
    const user = new User(req.body);
    user.save();
    res.json(user);
  } else {
   res.status(400).json(errors);
  }

});

export default router;