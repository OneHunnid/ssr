import express from 'express'
import router from './routes/index.js'

const app = express();

app.use(express.static('public'));
app.use(router);

const PORT = 3000;
app.listen(PORT, function(){
  console.log('Listening on ' + PORT)
});
