
module.exports = function(app, formModel) {
	
	app.get("/api/assignment/user/:userId/form", function(req, res) {
		var userId = req.params.userId;
		res.json(formModel.findUserForms(userId));
	});
	app.get("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		res.json(formModel.findFormById(formId));
	});
	app.delete("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		res.json(formModel.deleteForm(formId));
	});
	
	app.post("/api/assignment/user/:userId/form", function(req, res) {
		var userId = req.params.userId;
		var form = req.body;
		res.json(formModel.createForm(form, userId));
	});
	
	app.put("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		var form = req.body;
		res.json(formModel.updateForm(formId, form));
	});
}
