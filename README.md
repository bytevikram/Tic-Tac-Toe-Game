# Tic-Tac-Toe Game

## Overview

This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to compete by marking a 3x3 grid with "0" or "X". The first player to align three of their symbols in a row, column, or diagonal wins the game. If all nine squares are filled without a winner, the game ends in a draw. The winning combination is highlighted with a green background to indicate the winner.

## Features

- **Two-Player Mode**: Players alternate between "0" or "X".
- **Winner Highlighting**: The winning combination of boxes is highlighted with a green background color.
- **Draw Condition**: A message is displayed if the game ends in a draw.
- **Reset and New Game Functionality**: Players can reset the game or start a new game at any time.

## How to Play

1. **Game Start**:
   - Player "0" always starts the game.
   - Click on any empty box in the grid to place your mark.

2. **Turn Switching**:
   - Players take turns clicking on the grid to place their marks.
   - Player "0" and Player "X" alternate turns automatically.

3. **Winning**:
   - The game automatically checks for a winner after each turn.
   - If a player wins, the winning combination of boxes is highlighted in green, and a congratulatory message is displayed.

4. **Draw**:
   - If all boxes are filled without a winner, a message indicating a draw is displayed.

5. **Reset/New Game**:
   - Use the "New Game" or "Reset Game" button to clear the grid and start a new round.

## Code Structure

- **index.html**: Contains the basic structure and elements of the game.
- **style.css**: Handles the styling of the game board and other visual elements.
- **script.js**: Contains the game logic, including handling player turns, checking for a winner, and resetting the game.

### Key Functions in `script.js`:

- **resetGame()**: Resets the game state, allowing a new game to start with Player "0".
- **gameDraw()**: Handles the game draw condition by displaying a message and disabling the grid.
- **disableBoxes()**: Disables the remaining boxes when a player wins or the game ends in a draw.
- **enableBoxes()**: Re-enables the boxes and clears their content when starting a new game.
- **showWinner(winner, winningPattern)**: Displays the winning message and highlights the winning combination.
- **checkWinner()**: Checks if any player has won the game based on predefined winning patterns.
