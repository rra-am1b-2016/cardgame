//alert("Hoi");
var photos = [{"artistName": "Prince", "photoName": "Prince.jpg"},
              {"artistName": "George Michael", "photoName": "george-michael.png"}];

var images = document.getElementsByTagName("img");
document.getElementById("btn_01").onclick = function(){
   loop();
   setInterval(loop, 5000);
}

document.getElementById("btn_01").onclick = function(){
   loop();
   setInterval(loop, 5000);
}

function loop()
{
   //alert(images.length);
   for (i=0; i < images.length; i++)
   {
      var index = Math.floor(Math.random() * photos.length);
      //alert(photos.length);
      images[i].setAttribute("src", "./images/" + photos[index].photoName);
      images[i].setAttribute("alt", photos[index].artistName);
   }
   setTimeout(test, 2000);
}

function test()
{
   for (i=0; i < images.length; i++)
   {
      images[i].setAttribute("src", "./images/card.jpg");
      images[i].setAttribute("alt", "card");
   }
}