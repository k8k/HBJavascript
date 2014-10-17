

var myText = document.getElementById("get-text");

myText.addEventListener('click', function(e)
{

    e.preventDefault();
    myText.innerHTML ="world";

});


var myGreenDiv = document.getElementById("text-box-color");
var colorLink = document.getElementById('get-color');

colorLink.addEventListener('click', function(e)
{

    e.preventDefault();
    myGreenDiv.style.backgroundColor = 'red';

});



var myImg = document.getElementById("get-melon");
var myImgPic = document.getElementById("melon");
var myImageDiv = document.getElementById("melon-box");

myImg.addEventListener('click', function(e)
{

    e.preventDefault();
    // myImgPic.setAttribute("src","http://upload.wikimedia.org/wikipedia/commons/1/1b/Baby_Pandas.JPG");
    // myImgPic.style.width = "200px";
    // myImagDiv.replaceChild("http://upload.wikimedia.org/wikipedia/commons/1/1b/Baby_Pandas.JPG", 'http://mda.bigoven.com/pics/rs/256/melon-with-chile-salt-and-lime-3.jpg');  
    myImageDiv.innerHTML = '<img width="200px" src="http://upload.wikimedia.org/wikipedia/commons/1/1b/Baby_Pandas.JPG">';
});


// Add an event listener and attach it to the "get-melon" id.
//         When the link is clicked:
//             Prevent the default action
//             Change the content of the "melon" div to an image of a new melon



var message = document.getElementById("be-awesome");
var spanmessage = document.getElementById("awesome-box");


message.addEventListener('click', function(e)
{

    e.preventDefault();
    if (spanmessage.style.display != "block")
    {

    spanmessage.style.display = "block";}
    else {
        spanmessage.style.display = "none";
    }

});

