module.exports.renderBatePapo = (app,req,res) => {
	if(!req.session.login){// we are verifing if the session has created
		// if not created we will be redirected to login page
		res.redirect('/user/login')
		return
	}

	const user = req.session.login // this variable has the user information
	res.render('home',{user : user.user})
}