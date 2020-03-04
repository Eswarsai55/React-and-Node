import express from 'express';
import validateInput from '../shared/validations/login';
import User from '../database/user';
import jwt from 'jsonwebtoken';
import config from '../config.js'; 
import passwordHash from 'password-hash';

let router = express.Router();

router.post('/', (req,res) => {
  const {errors, isValid} = validateInput(req.body);
  
  if (isValid) {
    const { identifier, password} = req.body;
    User.find({email: identifier}).then(user => {
      if(passwordHash.verify(user.password, password)) {
        const token = jwt.sign({
          id: user.id,
          username: user.username
        }, config.jwtSecret);
        return res.json({
          token
        })
      } else {
        res.status(400).json({
          message: 'Invalid credentials'
        })
      }
    }).catch(err => {
      console.log(err);
      res.status(400).json(err)
    })
  } else {
  return res.status(400).json(errors)
  }
})

export default router;