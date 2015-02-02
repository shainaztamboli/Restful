/**
 * Created by shainazt on 1/29/2015.
 */
var dashboard =[
    {
        "chartId":1,
        "name": "Billable Vs Bench",
        "type":"On Monthly Basis",
        "data": {
            "Jan":100,
            "Feb":125,
            "Mar":125,
            "Apr":200,
            "May":190,
            "Jun":120,
            "Jul":200,
            "Aug":220,
            "Sep":150,
            "Oct":180,
            "Nov":200,
            "Dec":300
        }
    }
];

exports.list = function (req, res){
    res.send(dashboard);
}

exports.create = function (req, res){
    dashboard.push(req.body);
    res.send(dashboard);
}

exports.getByChartId = function(req, res, next, id){
    dashboard.forEach(function(dash, index){
        if(dash.chartId===parseInt(id)){
            req.dash=dash;
        }
    });
    next();
}

exports.read = function(req, res){
    res.send(req.dash);
}

exports.update = function(req, res){
    var dash = req.dash;
    if(req.body.data != undefined){
        dash.data = req.body.data;
    }

    if(req.body.type != undefined){
        dash.type = req.body.type;
    }

    res.send(dash);
}

exports.delete = function(req, res){
    var dash = req.dash;
    dashboard.splice(dashboard.indexOf(dash), 1);
    res.send(dash);
}