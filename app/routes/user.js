module.exports = app => {
	app.get('/user/login',(req,res) => {
		app.app.controllers.controller_user.login(app,req,res)
	})
	app.post('/user/login',(req,res) => {
		app.app.controllers.controller_user.loginUser(app,req,res)
	})
}