
module.exports = function(app, formModel) {
	
	//returns an array of fields by id
	app.get("/api/assignment/form/:formId/field", function(req, res) {
		var formId = req.params.formId;
		formModel.getFormFields(formId).then(function(response){
			res.json(response);
		});
	});
	
	//returns the field object for certain form by id
	app.get("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		formModel.getField(formId, fieldId).then(function(response){
			res.json(response);
		});
	});
	
	//removes the field by id
	app.delete("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		formModel.deleteField(formId, fieldId).then(function(response){
			res.json(response);
		});
	});
	
	//create a new field 
	app.post("/api/assignment/form/:formId/field", function(req, res) {
		var formId = req.params.formId;
		var field = req.body;
		formModel.createField(formId, field).then(function(response){
			res.json(response);
		});
	});
	
	//updates the field object by id
	app.put("/api/assignment/form/:formId/field/:fieldId", function(req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		var field = req.body;
		formModel.updateField(formId, fieldId, field).then(function(response){
			res.json(response);
		});
	});
}
