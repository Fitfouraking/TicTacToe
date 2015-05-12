//We need to use document
//on click you generate an event, the event handler is the function

var players = ["X", "O"];


$(document).ready(function(){
  var player = 0;
  var count = 0;
  $('.cell').on("click", function(){
    if ($(this).text() === "") {
      $(this).text(players[player]);
     player = 1 - player
    }
  });

});
