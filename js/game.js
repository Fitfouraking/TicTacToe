
var players = ["X", "O"];//defining players so that I can toggle back & forth between "X" and "O" by calling index value.

var playerImage = ['<img src ="image/redSox.png">', '<img src ="image/yankees.gif">']

$(document).ready(function(){//once document loads...
  var player = 0;//first click will always be "x"
  var count = 0;
  var xWins = 0;
  var oWins = 0;


  var runGame = function() {//This function will allow 1 click per .cell and alternate btw "X" and "O".
    $('.cell').one("click", function(){//one click will generate the following even, only ONCE.
    if ($(this).html() === "") {//this line becomes extraneous once I changed .on to .one in the line above.
      $(this).html(playerImage[player]);
      $(this).data('players', players[player]);
      player = 1 - player;
    }
    count++;//count needs to be before the test functions because we need to record the count value before we check those conditions.
    xWinner();//calling this function checks to see if any of the "X" win conditions are met.
    oWinner();//calling this function checks to see if any of the "O" win conditions are met.
    isTieGame();//calling function to check if all 9 cells have been clicked w/o either xWinner or Owinner firing.
    console.log(count);

    });
  }

  runGame();//calling the function.

  var xWinner = function() {//checking all 8 possible scenarios for "X" wins.
  if ($('#a').data('players') === "X" &&
    $('#b').data('players') === "X" &&
    $('#c').data('players') === "X" ||

    $('#d').data('players') === "X" &&
    $('#e').data('players') === "X" &&
    $('#f').data('players') === "X" ||

    $('#g').data('players') === "X" &&
    $('#h').data('players') === "X" &&
    $('#i').data('players') === "X" ||

    $('#a').data('players') === "X" &&
    $('#d').data('players') === "X" &&
    $('#g').data('players') === "X" ||

    $('#b').data('players') === "X" &&
    $('#e').data('players') === "X" &&
    $('#h').data('players') === "X" ||

    $('#c').data('players') === "X" &&
    $('#f').data('players') === "X" &&
    $('#i').data('players') === "X" ||

    $('#a').data('players') === "X" &&
    $('#e').data('players') === "X" &&
    $('#i').data('players') === "X" ||

    $('#c').data('players') === "X" &&
    $('#e').data('players') === "X" &&
    $('#g').data('players') === "X") {
        xWins++;
        $('#xGames').text("X Wins: " + xWins);
        alert("Red Sox Win!!");
        reset();
      };
  };

  var oWinner = function() {//checking all 8 possible scenarios for "O" wins.
  if ($('#a').data('players') === "O" &&
    $('#b').data('players') === "O" &&
    $('#c').data('players') === "O" ||

    $('#d').data('players') === "O" &&
    $('#e').data('players') === "O" &&
    $('#f').data('players') === "O" ||

    $('#g').data('players') === "O" &&
    $('#h').data('players') === "O" &&
    $('#i').data('players') === "O" ||

    $('#a').data('players') === "O" &&
    $('#d').data('players') === "O" &&
    $('#g').data('players') === "O" ||

    $('#b').data('players') === "O" &&
    $('#e').data('players') === "O" &&
    $('#h').data('players') === "O" ||

    $('#c').data('players') === "O" &&
    $('#f').data('players') === "O" &&
    $('#i').data('players') === "O" ||

    $('#a').data('players') === "O" &&
    $('#e').data('players') === "O" &&
    $('#i').data('players') === "O" ||

    $('#c').data('players') === "O" &&
    $('#e').data('players') === "O" &&
    $('#g').data('players') === "O") {
        oWins++;
        $('#oGames').text("0 Wins: " + oWins);
        alert("Yankees Win!!");
        reset();
      };
  };

  var isTieGame = function() {//has the game ended in a draw?
    if (count === 9) {
      alert("Tie Game")
      reset();
    }
  }

  var reset = function() {//This function resets all cells to empty strings, restarts count, and makes sure 1st player move will always be "X".
  $('.cell').html("");
  $('.cell').data("players", null);
  count = 0;
  player = 0;
  $('.cell').off();

  runGame();
  };


$('#resetGameCount').on("click", function() {
  $('.cell').html("");
  $('.cell').data("players", null);
  count = 0;
  player = 0;
  xWins = 0;
  oWins = 0;
  $('#xGames').text(xWins);
  $('#oGames').text(oWins);
  $('.cell').off();
  runGame();
});


});//closing document ready function
