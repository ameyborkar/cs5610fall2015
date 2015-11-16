
module.exports = function(app) {
	var uuid = require('node-uuid');
	var userModel = require('./models/user.model.js')(uuid);
	require('./services/user.service.js')(app, userModel);
	
	var formModel = require('./models/form.model.js')(uuid);
	require('./services/form.service.js')(app, formModel);
	require('./services/field.service.js')(app, formModel);
};
