
var players = ["X", "O"];//defining players so that I can toggle back & forth between "X" and "O" by calling index value.

$(document).ready(function(){//once document loads...
  var player = 0;//first click will always be "x"
  var count = 0;


  var runGame = function() {//This function will allow 1 click per .cell and alternate btw "X" and "O".
    $('.cell').one("click", function(){//one click will generate the following even, only ONCE.
    if ($(this).text() === "") {//this line becomes extraneous once I changed .on to .one in the line above.
      $(this).text(players[player]);
      player = 1 - player;
    }
    count++;//count needs to be befire the test functions because we need to record the count value before we check those conditions.
    xWinner();//calling this function checks to see if any of the "X" win conditions are met.
    oWinner();//calling this function checks to see if any of the "O" win conditions are met.
    isTieGame();//calling function to check if all 9 cells have been clicked w/o either xWinner or Owinner firing.
    console.log(count);

    });
  }

  runGame();//calling the function.

  var xWinner = function() {//checking all 8 possible scenarios for "X" wins.
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

  var oWinner = function() {//checking all 8 possible scenarios for "O" wins.
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

  var isTieGame = function() {//has the game ended in a draw?
    if (count === 9) {
      alert("Tie Game")
      reset();
    }
  }

  var reset = function() {//This function resets all cells to empty strings, restarts count, and makes sure 1st player move will always be "X".
  $('.cell').text("");
  count = 0;
  player = 0;
  $('.cell').off();
  runGame();
  };


});//closing document ready function
