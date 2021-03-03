module.exports = app => {
	app.get('/',(req,res) => {
		app.app.controllers.controller_bate_papo.renderBatePapo(app,req,res)
	})
}