//We need to use document
//on click you generate an event, the event handler is the function

var players = ["X", "O"];

$(document).ready(function(){
  var player = 0;
  var count = 0;
  $('.cell').on("click", function(){
    if ($(this).text() === "") {
      $(this).text(players[player]);
      player = 1 - player;
    }
  xWinner();
  oWinner();
  });

  var xWinner = function() {
  if ($('#a').text() === "X" &&
    $('#b').text() === "X" &&
    $('#c').text() === "X" ||

    $('#d').text() === "X" &&
    $('#e').text() === "X" &&
    $('#f').text() === "X" ||

    $('#g').text() === "X" &&
    $('#h').text() === "X" &&
    $('#i').text() === "X" ||

    $('#a').text() === "X" &&
    $('#d').text() === "X" &&
    $('#g').text() === "X" ||

    $('#b').text() === "X" &&
    $('#e').text() === "X" &&
    $('#h').text() === "X" ||

    $('#c').text() === "X" &&
    $('#f').text() === "X" &&
    $('#i').text() === "X" ||

    $('#a').text() === "X" &&
    $('#e').text() === "X" &&
    $('#i').text() === "X" ||

    $('#c').text() === "X" &&
    $('#e').text() === "X" &&
    $('#g').text() === "X") {
        alert("X has won the game");
        reset();
      };
  };

  var oWinner = function() {
  if ($('#a').text() === "O" &&
    $('#b').text() === "O" &&
    $('#c').text() === "O" ||

    $('#d').text() === "O" &&
    $('#e').text() === "O" &&
    $('#f').text() === "O" ||

    $('#g').text() === "O" &&
    $('#h').text() === "O" &&
    $('#i').text() === "O" ||

    $('#a').text() === "O" &&
    $('#d').text() === "O" &&
    $('#g').text() === "O" ||

    $('#b').text() === "O" &&
    $('#e').text() === "O" &&
    $('#h').text() === "O" ||

    $('#c').text() === "O" &&
    $('#f').text() === "O" &&
    $('#i').text() === "O" ||

    $('#a').text() === "O" &&
    $('#e').text() === "O" &&
    $('#i').text() === "O" ||

    $('#c').text() === "O" &&
    $('#e').text() === "O" &&
    $('#g').text() === "O") {
        alert("O has won the game");
        reset();
      };
  };

  var reset = function() {
  $('.cell').text("");
  count = 0;
  };


});//closing document ready function
