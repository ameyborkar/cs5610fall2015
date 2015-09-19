#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app=express();

app.use(express.static(__dirname+'/public'));

var ip=process.env.OPENSHIFT_NODEJS_IP;
var port=process.env.OPENSHIFT_NODEJS_PORT||3002;

app.listen(port,ip);



