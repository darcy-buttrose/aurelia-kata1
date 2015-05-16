/**
 * Created by Darcy on 13/05/2015.
 */
var express = require('express'),
    logger = require('express-logger'),
    path = require('path'),
    http = require('http'),
    app = express();

app.set('port',process.env.PORT || 3000);
app.use(logger({path:'./serverLog.txt'}));
app.use(express.static('./'));

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});