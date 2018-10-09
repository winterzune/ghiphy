//global variables

var gifArray = ["kitty", "hello", "k"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifArray + "&api_key=R6q1UJ54Ofh8Hl52jkU0yfDMvNt6MeTP&limit=10"
var gif = $("#gif-input").val().trim();

//api request
$.ajax({
    URL: queryURL,
    Method: "GET"
}).then(function (response) {
//getting the images and sending them to the image div
    imgURL = response.data.image_original_url;
    gifImage = $("<img>");
    gifImage.attr ("src", imgURL);
    gifImage.attr ("src", "gif Image");
    $("#images").preprend(gifImage);
});

// buttons
function createButtons () {
    var gifArray = ["kitty", "hello", "k"];
    $("#gif-post").empty();
    for (var i = 0; i < gifArray.length; i++ ) {
    var a = $("<button>");
        a.addClass("giftastic");
        a.attr("name", gifArray[i]);
        a.text(gifArray[i]);
    $("#gif-post").append(a);
    } 
}    
//when you click the search button
$("#find-gif").on("click", function (event) {
//so that we can also hit enter, not just click submit
    event.preventDefault();    
//add new search item into the array    
    gif.push(gifArray);
    
createButtons();

});

createButtons();