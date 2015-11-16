
module.exports = function(app, formModel) {

	app.get("/api/assignment/form/:formId/field", function(req, res) {
		var formId = req.params.formId;
		res.json(formModel.getFormFields(formId));
	});
	
	app.get("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		res.json(formModel.getField(formId, fieldId));
	});
	
	app.delete("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		res.json(formModel.deleteField(formId, fieldId));
	});

	app.post("/api/assignment/form/:formId/field", function(req, res) {
		var formId = req.params.formId;
		var field = req.body;
		res.json(formModel.createField(formId, field));
	});

	app.put("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		var field = req.body;
		res.json(formModel.updateField(formId, fieldId, field));
	});
}
