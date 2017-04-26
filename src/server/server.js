import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/App'

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  const html = ReactDOMServer.renderToString(
    <App />
  );
  res.send(html)
})

const PORT = 3000;

app.listen(PORT, function(){
  console.log('Listening on ' + PORT)
});
