import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {connectDb}  from './database/index';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/event',events);

connectDb()

const compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
}));
app.use(webpackMiddleware(webpack(webpackConfig)));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(3000, () => console.log('Running on localhost'));