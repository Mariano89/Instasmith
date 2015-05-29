$(document).ready(function(){
	var username;
	var password;
	var items;
	var commentsArray = [];

	var current_user = document.cookie; 

	$(".login").on('click',function(e){
		username = $('#user').val().toLowerCase();
		pw = $('#pw').val();
		e.preventDefault();
		
		var userCheck = function(){
			if(users.hasOwnProperty(username) && users[username]["password"] === pw){
				document.cookie = username;
				window.location.href = "home.html";
			}
			else {
				console.log("nope");
				alert("nope");
			}
		}();
	});
	
	$('.test').on('click', function(){
		console.log(document.cookie, "cookie");
		console.log("current user", current_user);
	});



	var users = {
		travis: {
			password: 'travis123'
		},
		mariano: {
			password: 'mariano123'
		},
		david: {
			password: 'david123'
		},
		victoria: {
			password: 'victoria123'
		},
		will: {
			password: 'will123'
		},
		alex: {
			password: 'alex123'
		},
		a: {
			password: 'a'
		}
	};


	$.getJSON( "https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json", function( data ) {

	  items = [];
	  $.each( data, function( key, val ) {
	    items.push( "<img id='" + key + "' " + "src='"+ val + "'>");
	    items.push("<div class='likeBox'><div class='likeIcon'></div></div>");
	  	items.push("<div class='comment_display'></div>");
	  	items.push("<form><input class='comment_input'></form>");
	  // console.log(items[key]);
	  });
	  	makeArrays(commentsArray, data.length);
	  	console.log(commentsArray);
	 $('<ul class="my-new-list"></ul>').append(items.join("")).appendTo('.home-screen-pics');
	 
	  // $("<ul/>", {
	  //   "class": "my-new-list",
	  //   html: items.join("")
	 	//  }).appendTo( ".home-screen-pics" );
	});


	function makeArrays(arr, len){
		var blank = ["a","b","c"];
		for(var i = 0; i < len; i++){
			arr.push(blank);
		}
		console.log(arr);
	}


	var img = document.createElement('img');
	function getPicture(user){
		if(user == "alex"){
			img.src = 'images/alex.jpeg';
			document.getElementById('img_div').appendChild(img);
		} else if (user == "david"){
			img.src = 'images/david.jpeg';
			document.getElementById('img_div').appendChild(img);
		}
		else if (user == "mariano"){
			img.src = 'images/mariano.jpeg';
			document.getElementById('img_div').appendChild(img);
		}
		else if (user == "travis"){
			img.src = 'images/travis.jpeg';
			document.getElementById('img_div').appendChild(img);
		}
		else if (user == "victoria"){
			img.src = 'images/victoria.jpeg';
			document.getElementById('img_div').appendChild(img);
		}
		else if (user == "will"){
			img.src = 'images/will.jpeg';
			document.getElementById('img_div').appendChild(img);
		}
	};

	getPicture(current_user);
	
	var p = document.createElement('p');
	function welcomeUser(user){
		if(current_user){
		p.innerHTML = "Welcome " +  current_user + "!";
		document.getElementById('img_div').appendChild(p);		
		}
	}

		welcomeUser(current_user);



});
	