#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app=express();

app.use(express.static(__dirname+'/public'));

var ip=process.env.OPENSHIFT_NODEJS_IP;
var port=3002;

app.listen(3000);



