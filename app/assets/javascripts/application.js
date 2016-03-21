// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require react_integration
//= require react_bundle

var post = {

	init: function(){

		$('form').on('submit', this.getJson)
		$('form').on('submit', this.getReq)
	},

	getJson: function(event){
		var form = $(this);
		$.ajax($('form').attr('action'), {
			contentType: 'application/json',
			dataType: 'json',
			success: function(result){
				//console.log(result);
				var result = result;
				var field = '<p> 			</p>';
				$('h1').append(result);
			},
			error: function(request,type,message){
				alert(request + ' ' + type + ' ' + message);
			}
			
		});


	},
	getReq: function(){
		var form = $(this);
		$.ajax('http://localhost:3000', {
			contentType: 'application/json',
			dataType: "json",
			data: form.serialize(),
			success: function(response){
					console.log(response);
					$('h1').append(response);

			},
			error:  function(request,errorType, errorMessage){
				alert(errorType + ' = ' + errorMessage + ' = ' + request);
			},
			timeout: 3000
		});
	}



}

var check = {
	init: function(){
		$('#select').on('change', this.changeNames)
		
	},
	changeNames: function(){
		var selected = $("#select option:selected").text();
		$('#select2').html('');
		$.ajax({
			url:  "/users",
			dataType: "json",
			success: function(data) { 
				$.each(data.users, function(index,user){
					if(user.name == selected){
						var age = parseInt(user.age);
						$.each(data.users, function(index,user){
							if(user.name != selected && Math.abs(parseInt(user.age)-age)<=5){
								$('#select2').append('<option>' + user.name + '</option>');
							}

						});						
					}

				})
			}
		});
	}

}


$(function(){
	check.init();

	$.ajax({
    url:  "/users",
    dataType: "json",
    success: function(data) { 
		$.each(data.users, function(index,user){
			var age = parseInt(user.age);
			if(age<20){
				console.log(user.name);
				$('body').prepend()
			}

		})
    }
	});

	

	var dat = $('.users_information').data('users');
})

