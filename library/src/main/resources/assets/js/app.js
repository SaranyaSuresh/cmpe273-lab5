$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		url: "/library/v1/books/"+isbn+"?status=lost",
		type: 'PUT',
		success: function() 
		{
			$('#status-'+isbn).html("lost");
			$('#'+isbn).attr("disabled","disabled");
		}	
	});
});

