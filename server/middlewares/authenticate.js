import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../database/user';

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader;
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({message: 'Failed to authenticate'});
      } else {
        User.findById(decoded.id).then(user => {
          if (!user) {
            res.status(404).json({message: "No such user"})
          }
          req.currentUser = user;
          next();
        })
      }
    })
  } else {
    res.status(403).json(
    {
      message: 'No authorization'
    }
    )
  }
}