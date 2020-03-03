import mongoose from 'mongoose';

export const connectDb = () =>  {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://root:root@localhost:27017/SampleApp?authSource=admin',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
      console.log('Database connection Successfull');
      return resolve(result)
    }).catch(err => {
      console.log('Database connection error', err);
      return reject(err);
    })
  })
}