// window.onload=function(){

	// var form = document.getElementById('form');
	// var user = document.getElementById('user').value;
	// function myFunction(){
	// 	// var variable = user;
	// 	alert(user);
	//}
// }
$(document).ready(function(){
	console.log("ready");
	$(".login").on('click',function(e){
		console.log("still ready");
		var UserName = $('#user').val();
		var PassWord = $('#pw').val();
		console.log(UserName, PassWord);
		e.preventDefault();
	})
	
});
	