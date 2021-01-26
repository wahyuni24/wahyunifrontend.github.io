$('#search-button').on('click', function(){
	
	$.ajax({
	url:'https://pixabay.com/api/docs/',
	type:'get',
	dataType:'json',
	data: {
	'apikey' : '17006014-eb3a8f4b80cf4f0230855ad34',
	's' : $('#search-input').val()
	},
	success : function (result){
	console.log(result);
	
	}
	
	});
});