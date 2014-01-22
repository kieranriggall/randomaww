$(function(){
//Array for storing image URLs
  var imageUrl = new Array();

//get json from reddit.com/r/aww 
$.getJSON("http://www.reddit.com/r/aww/.json?jsonp=?&limit=30", function(data) { 

    //iterate through each item in the json
    $.each(data.data.children, function(i,item){

      //assign the current url
    	var url = item.data.url;

      //check if the url contains imgur and does not contain /a/ or gallery
    	if(/imgur/.test(url) && /\/a\/|gallery/.test(url)==false){
        //check if the url has .jpg at the end, if not add it
	    	if (/.jpg/.test(url) == false){
	    		url = url + ".jpg"
	    	}
  		  }
  		  else
  		  {
  		  	return true;
  		  }

      //get the title from the current json object  
    	var title = item.data.title;
      //console.log(url + " " + i);
      //add the current url to the image url array
    	imageUrl.push(url);
    	
    });

    //call function to change the image.
    changeRandomImage();
});

function changeRandomImage(){
  //get a random number between 0 and the length of the image url array
    var rNum = 1 + Math.floor(Math.random() * imageUrl.length - 1);

  //apply random url from the array to the random image element
  $("#randomImage").css("max-width", "").attr("src", imageUrl[rNum]);
};

  //on click of the randomiser button call the randomImage function to change the image
  $("#randomiser").click(function(event){
    event.preventDefault();
    changeRandomImage();
  });

});


