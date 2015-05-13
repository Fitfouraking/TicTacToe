
var players = ["X", "O"];//defining players so that I can toggle back & forth between "X" and "O" by calling index value.

var playerImage = ['<img src ="image/redSox.png">', '<img src ="image/yankees.gif">']//defining playerImage as an array that contains the redsox image & yankees image.

$(document).ready(function(){//once DOM loads execute the following...
  var player = 0;//first click will always be "x" (redsox image)
  var count = 0;//keeps track of clicks, because I use this to determine the "Tie" scenario in later function called isTieGame.
  var xWins = 0;//Default set the number of game wins for both "X" and "O" to zero, by adding 1 to this count after each win scenario fires, this is what will be displayed in the html scoreboard section.
  var oWins = 0;


  var runGame = function() {//This function will allow 1 click per .cell and alternate btw "X" and "O".
    $('.cell').one("click", function(){//one click method will generate the following event, only ONCE.
    if ($(this).html() === "") {//this line becomes extraneous once I changed .on to .one in the line above.
      $(this).html(playerImage[player]);//actually displays the image by inserting into the html.
      $(this).data('players', players[player]);//sets object 'this' with name of players and value of players[player].
      player = 1 - player;//this will ensure that index of var players alternates btw 1 and 0, hence "X" and "O".
    }
    count++;//count needs to be before the test functions because we need to record the count value before we check those conditions.
    $('#shake').removeClass('animated wobble animated flipInX');
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
        $('#soxScore').text(xWins);//if "X" wins, print the integer xWins in the scoreboard area.
        $('#shake').addClass('animated wobble');
        setTimeout(function() {reset();}, 3000);
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
        $('#yankScore').text(oWins);//if "O" wins, print the integer xWins in the scoreboard area.
        $('#shake').addClass('animated wobble');
        setTimeout(function() {reset();}, 3000);
      };
  };

  var isTieGame = function() {//has the game ended in a draw?
    if (count === 9) {
      alert("On To Extra Innings, Folks...")
      $('#shake').addClass('animated wobble');
      setTimeout(function() {reset();}, 3000);
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
  $('#soxScore').text("");
  $('#yankScore').text("");
  $('.cell').off();
  runGame();
});


});//closing document ready function
