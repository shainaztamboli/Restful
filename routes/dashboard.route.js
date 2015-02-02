/**
 * Created by shainazt on 1/29/2015.
 */
var dashboardCtrl = require('../controllers/dashboard.controller');
module.exports = function(app){
    app.route("/api/dashboard")
        .get(dashboardCtrl.list)
        .post(dashboardCtrl.create);

    app.route("/api/dashboard/:chartId")
        .put(dashboardCtrl.update)
        .delete(dashboardCtrl.delete)
        .get(dashboardCtrl.read);

    app.param("chartId", dashboardCtrl.getByChartId);
}