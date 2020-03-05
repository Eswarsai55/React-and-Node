import express from 'express';
import Event from '../database/event';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/' , authenticate, (req, res) => {
  const event = new Event(req.body);
  event.save()
  .then(result => res.json(result))
  .catch(err => {
    console.log(err);
    res.status(400).json({
      message: 'Unable to create event'
    });
  })
});

export default router;