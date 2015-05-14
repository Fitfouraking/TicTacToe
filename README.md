# Tic Tac Toe, Me Out To The Ballgame!

## Instructions & Rules
This game is a modern twist on an old classic. Tic Tac Toe is a turn base two player game in which players take turns marking the spaces, either "x" or "o", in a 3×3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game. If all nine spaces in the grid are marked without a winner, the game ends in a tie.

## Explanation
In this version, the first player to move is "Red Sox" and the second player is "Yankees." The game board automatically resets at the conclusion of each game and records each players' win count in the scoreboard below the grid. Either player can reset the game count to zero by clicking the button in the scoreboard area.

### User Story:
Objective: Make a tic tac toe multi-player game that allows 2 users to compete.

-Player 1 can put an "x" (redsox image) on the gameboard.
-Player 2 can put an "o" (yankees image) on the gameboard.
-Scoreboard displays winner game count to users.
-User can click on a reset button.

### Approach
I took the "brute force" approach. This made the most sense for me to actually write out all of the 8 possible winning combinations for each player. To test if the game ends in a tie, I added a variable "count", set its value to zero, and then added 1 to this upon each turn/click. I used the jQuery data method to store data associated with each of the elements or indivudual cells within the grid. I did not use .html() or .text() because I did not want to actually print the "x" or "o" within the HTML, only store the data and compare it to my "check for winner" functions.


### Unsolved Problems
If I were to start again from scratch, I would render my board grid using a table rather than separate divs. This would make it much easier to implement Bootstrap into my layout. While not necessary to have bootstrap to do so, I would also split my scoreboard to display each players' wins on either side of the board, which would clean up the user experience. Also, I repeat a lot of code within my xWinner and oWinner conditions - ideally this could be simplified to a single function.

###Firebase Integration
Visit the following website to play: https://redsox.firebaseapp.com/
