$.getJSON("/articles", function(data){
	for (var i = 0; i < data.length; i++) {
		$(".news").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
	}
});


$(".blue").on("click", function(){

	var thisId = $(this).attr("data-id");

	$.ajax({
		method:"GET",
		url: "/articles" + thisId
	})
	.done(function(data){
		console.log(data);
		$(".news").append("<h2>" + data.title + "</h2><br/>");
		$(".news").append("<a href=" + data.link + "</a><br/>");
		$(".news").append("<h2>" + data._id + "</h2><br/>");
	});
	
		});
