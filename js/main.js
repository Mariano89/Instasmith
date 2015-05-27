$(document).ready(function(){
	var username;
	var password;
	// console.log("ready");
	$(".login").on('click',function(e){
		username = $('#user').val();
		pw = $('#pw').val();
		// console.log(username, password);
		e.preventDefault();
		// console.log(users[username]);
		var userCheck = function(){
			if(users.hasOwnProperty(username) && users[username]["password"] === pw){
				console.log("true");
			}
			else {
				console.log("nope");
			}
		}();
		// userCheck(users[username]);
	});
	
	var users = {
		Travis: {
			password: 'travis123'
		},
		Mariano: {
			password: 'mariano123'
		},
		David: {
			password: 'david123'
		},
		Victoria: {
			password: 'victoria123'
		},
		Will: {
			password: 'will123'
		},
		Alex: {
			password: 'alex123'
		}
	};

	// console.log(users['Travis']);

// console.log(users['Travis']['password']);


});
	