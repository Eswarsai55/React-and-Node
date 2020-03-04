import express from 'express';
import validateInput from '../shared/validations/signup';
import User from '../database/user';
import passwordHash from 'password-hash';

let router = express.Router();

router.post('/' ,(req, res) => {
  const {errors, isValid} = validateInput(req.body);

  if (isValid) {
    const {username,email,password,timezone} = req.body;
    const data = {
      username,
      email,
      password: passwordHash.generate(password),
      timezone
    }
    const user = new User(data);
    user.save()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: 'Unable to signup'
      });
    })
  } else {
   res.status(400).json(errors);
  }

});

export default router;