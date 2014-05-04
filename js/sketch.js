var $container = $('#container');
var $gridSize = 16;
var $panel = $(".panel");
var $color = "black";

function makeGrid(size, color){
    var color = color;
    for(var i = 1; i <= (size * size); i++){
    
      $('#container').append('<div class="panel"></div>');
    
    
  }//end outer-for
  var $panelWidth = $container.width() / $gridSize;
 
  $(".panel").css("width", $panelWidth);
  $(".panel").css("height", $panelWidth);
  $(".panel").mouseover(function(){
  draw(this, color);
  });

}


function draw(div, color){
  
    $(div).css("background-color", color);
  
}

function reset(){
  $("#container").empty();
  
}


  
  
$("#16").click(function(){
  reset();
  $gridSize = 16;
  makeGrid($gridSize);
  
});
$("#32").click(function(){
  reset();
  $gridSize = 32;
  makeGrid($gridSize, $color);
});

$("#64").click(function(){
  reset();
  $gridSize = 64;
  makeGrid($gridSize, $color);
});

$("#blue").click(function(){
  reset();
  $color = "blue";
  makeGrid($gridSize, $color);
  
});

$("#red").click(function(){
  reset();
  $color = "red";
  makeGrid($gridSize, $color);
  
});

$("#yellow").click(function(){
  reset();
  $color = "yellow";
  makeGrid($gridSize, $color);
  
});

$("#green").click(function(){
  reset();
  $color = "green";
  makeGrid($gridSize, $color);
  
});

$("#black").click(function(){
  reset();
  $color = "black";
  makeGrid($gridSize, $color);
  
});

//on Start
$(document).ready(function(){
  makeGrid($gridSize, $color);  


  
  
  
});//end .ready()







