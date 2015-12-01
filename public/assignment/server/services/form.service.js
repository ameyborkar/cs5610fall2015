module.exports = function(app, formModel) {
	
	//returns an array of forms for certain user
	app.get("/api/assignment/user/:userId/form", function(req, res) {
		var userId = req.params.userId;
		formModel.findUserForms(userId).then(function(response){
			res.json(response);
		});
	});
	
	//returns the form by id
	app.get("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		formModel.findFormById(formId).then(function(response){
			res.json(response);
		});
	});
	
	//removes the form by id
	app.delete("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		formModel.deleteForm(formId).then(function(response){
			res.json(response);
		});
	});
	
	//create a new form
	app.post("/api/assignment/user/:userId/form", function(req, res) {
		var userId = req.params.userId;
		var form = req.body;
		formModel.createForm(form, userId).then(function(response){
			res.json(response);
		});
	});
	
	//updates the form by id
	app.put("/api/assignment/form/:formId", function(req, res) {
		var formId = req.params.formId;
		var form = req.body;
		formModel.updateForm(formId, form).then(function(response){
			res.json(response);
		});
	});
	
	//get all forms
	app.get("/api/assignment/form", function(req, res) {
		formModel.findAllForms().then(function(response){
			res.json(response);
		});
	});
}
