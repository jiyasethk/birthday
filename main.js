var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromurl('birthdayimage.jpg', function(Img) {
   block_image_object = Img;
   
   block_image_object.scaleToWight(700);
   block_image_object.scaleToHeight(510);
   top:0
   left:0
})	;
	
}

function playSound(){
	x.play();
}
