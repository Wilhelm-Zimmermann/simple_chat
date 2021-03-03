module.exports.login = (app,req,res) => {
	res.render('login',{errors : {}})
}

module.exports.loginUser = (app,req,res) => {
	// geting the body information
	const user = req.body

	// validating the body

	req.assert('user','User cannot be empty').notEmpty()
	const errors = req.validationErrors()

	if(errors){
		res.render('login',{errors : errors})
		return 
	}

	if(user.user != ''){
		// we create a session called login which has the user information
		req.session.login = user.user
	}


	// we are sending to front end user information by socket
	// app.get('io') to recover the global variable
	app.get('io').emit('User',
		{user : user.user , msg : 'joined in chat'}
	)

	res.redirect('/')

}