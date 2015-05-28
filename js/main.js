$(document).ready(function(){
	var username;
	var password;



	$(".login").on('click',function(e){
		username = $('#user').val().toLowerCase();
		console.log(username);
		pw = $('#pw').val();
		e.preventDefault();
		var userCheck = function(){
			if(users.hasOwnProperty(username) && users[username]["password"] === pw){
				// console.log("true");
				window.location.href = "home.html";
				// HomePics();
			}
			else {
				console.log("nope");
				alert("nope");

			}
		}();
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
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push( "<img id='" + key + "' "+"src='"+val+"'>");
	    items.push("<div class='likeBox'></div>");
	  
	  // console.log(items[key], items[val]);
	  });
	 $('<ul class="my-new-list"></ul>').append(items.join("")).appendTo('.home-screen-pics');
	 
	  // $("<ul/>", {
	  //   "class": "my-new-list",
	  //   html: items.join("")
	 	//  }).appendTo( ".home-screen-pics" );
	});






});
	