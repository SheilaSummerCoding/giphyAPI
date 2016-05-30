$(document).ready(function(){


	function getVideos(input){ 
		$.ajax({
   		method: "GET",
   		url: "http://api.giphy.com/v1/gifs/search?q="+ input + "&api_key=dc6zaTOxFJmzC "
		}).done(function(response){
 			//console.log then I went into the server and right click to inspect then click on console
 			//and start 
   			//console.log(response.data);
   			var gifs = response.data;
   			for (var i=0;i<gifs.length;i++){
   				//putting it into var code just to simplify the look of the code
   				var code = "<p><img src='" + gifs[i].images.downsized_medium.url + " '></p>";
       			$(".gifList").append(code);
   			}
 		});
	}

	
	$('#subButton').on('click', function(){
		//getting the text from the html form
		var search = $("#inputText").val();
		//cleared out the search data
		$(".gifList").empty();
		getVideos(search);
		//search = "";
	});

});




     

		