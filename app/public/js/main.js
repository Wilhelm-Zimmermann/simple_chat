	// O nome da variavel abaixo nao pode ser 'io'
	const socket = io('http://localhost:3000')


	socket.on('User',(data) => {//recovering user data on the callback
		// don't forget 'on' event always have a callback has second parameter
		const messages = document.getElementById('messages')

		messages.innerHTML += '<div class="message">'+
							'<h2>'+data.user+'<h2>'+
							'<p>'+data.msg+'</p>'+
							'</div>'
	})

	const btn_send = document.getElementById('btn_send')

	btn_send.onclick = () => {
		// when the button has clicked we send to back end the input value
		// and the user value
		const txt_send = document.getElementById('txt_send')
		const user = document.getElementById('user')
		socket.emit('txtMessage',
			{
				user : user.value,
				msg : txt_send.value
			}
		)
	}

	window.onkeypress = (e) => {
		// if you press the key enter btn_send will be clicked
		if(e.key == 'Enter'){
			btn_send.click()
			txt_send.value = ''
		}
	
	}

// The code below will be implemented in the next updates 

// function displayMembers(){

// 	const btnMember = document.getElementById('member')
// 	const members = document.getElementById('members')
// 	const btnChat = document.getElementById('chat')
// 	members.style.display = 'none'

// 	btnMember.onclick = () => {
// 		members.style.display = 'block'
// 		messages.style.display = 'none'

// 		socket.on('User',(data) => {
// 			members.innerHTML += '<div class="people">'+
// 									'<p>'+data.user+'</p>'+
// 								'</div>'
// 		})
// 	}

// 	btnChat.onclick = () => {
// 		members.style.display = 'none'
// 		messages.style.display = 'block'
// 	}

// }

// displayMembers()