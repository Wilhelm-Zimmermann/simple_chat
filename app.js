const app = require('./server')
const port = process.env.PORT || 3000

const server = app.listen(port,(req,res) => {
	console.log('Server is running on port '+port)
})

const io = require('socket.io')(server)

// 'on' listen a envents, the 'on' event always have a callback
// 'emit' speak envents,the second parameter could be a string, or a JSON

app.set('io',io)// this is to create a global variable

io.on('connection',(client) => {// verifing if the client has been connected
	console.log('Client connected')

	client.on('txtMessage',(data) => {
		// recovering that input value
		// emiting again on the user event
		client.emit('User',
			{
				user: data.user,
				msg : data.msg
			}
		)

		// broadcast send to all clients,exept that which send the event
		client.broadcast.emit('User',
			{
				user: data.user,
				msg : data.msg
			}
		)
	})
	client.on('disconnect',() => {// verifing if the client has disconnected
		console.log('Client has disconnected')
	})
})
