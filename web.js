/**
 * Created by shainazt on 1/29/2015.
 */
var app=require('./config/express')();

require('./config/routes.js')(app);

app.listen('3000');
console.log('Listening on port 3000');