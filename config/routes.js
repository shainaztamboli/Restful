/**
 * Created by shainazt on 1/29/2015.
 */
module.exports = function(app){

    require('../routes/dashboard.route')(app);

    app.use('/api/*', function(req, res, next){
        res.json({'error':'No Such Service Present'}, 404);
    })

    app.use('*', function(req, res, next){
        res.send('<html><body><h1>404 Page Not Found</h1></body></html>');
    })


}