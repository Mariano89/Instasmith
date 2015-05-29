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
	
	// $('.test').on('click', function(){
	// 	console.log(document.cookie, "cookie");
	// 	console.log("current user", current_user);
	// });



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
	    items.push("<div>");
	    items.push( "<img id='" + key + "' " + "src='"+ val + "'>");
	    items.push("<div class='likeBox'><div class='likeIcon'></div></div>");
	  	items.push("<div class='comment_display'></div>");
	  	items.push("<input class='comment_input'data-value='" + key + "'/><button name='Submit' value='Submit' class='comment_button' data-value='" + key + "'/>");
	  	items.push("</div>");
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

	//creates P element, attaches comment input to it, and attatches it to the commentdisplay

	//var comment_text = document.createElement('p');
	$('body').on('click', '.comment_button',function(){

		var x = $(this).siblings(".comment_input").val();

		console.log($(x).val());
		//console.log(comment_text);
	//	comment_text.innerHTML = x;
		//console.log(x);
		// var el = document.getElementsByClassName('.comment_display');
		//console.log("data", $(this).data('value'));
		// var y = this.closest(el);
		// $(this).x.append(y);
		
		console.log($(this).data('value'));
		console.log("x", x);
		console.log("comment display", $(this).siblings('.comment_display'));
		//this code will display comments to all pictures
		console.log($(this).data('value'));
		$(this).siblings('.comment_display').append(current_user+ ": " + x + "<br>");
		$('.comment_input').val('');
	  });



	function makeArrays(arr, len){
		var blank = [];
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
		p.innerHTML = "Welcome, " +  current_user + "!";
		document.getElementById('img_div').appendChild(p);		
		}
	}

		welcomeUser(current_user);

		$('body').on('dblclick','img', function(){
				$('.likeIcon').toggleClass('likeIcon2');
			// 	if($('.likeIcon').css('background-color','grey')){
			// 	$('.likeIcon').addClass('background-color','red');
			// }
				
			// 	else if($('.likeIcon').addClass('background-color','red')) {
			// 		$('.likeIcon').css('background-color','grey');
			// 	}
		});


});
	