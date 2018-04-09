const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/static', express.static('public'));

// Set view engine with Pug
app.set('view engine', 'pug');

// Set up routes
app.use(routes);

// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});