sudoku
======

## Requirements
- UI
  - Check Solution
  - Board Game
    - 9x9 grid of numbers
    - many empty spaces, should be able to change value in these spaces
    - fixed spaces that cannot be changed
    - ability to use keyboard (1-9) to modify value of selected key
- 

## Nice to have
- Timer
- Hints
  - Show possible numbers for each empty cell
- Background music
- Instructions before play
  
## App Structure
### Technologies
 - jQuery
   - DOM manipulation
   - Utilities
 - Underscore
   - utility functions
 - Require.js
   - Dependency management
 - Jade
   - Templating
 - make
   - run ./make to compile jade
### Classes
 - Views (views are used like Backbone views, handle user interaction and rendering)
   - BoardView
     - responsible for rendering the board and handling all user interaction
 - Models
   - CellModel
     - stores cell state 
   - GridModel
     - stores and manages all cells
   - GridCheckerModel
     - responsible for checking if the sudoku board has been solved

## Future improvements
 - Tests
   - Each model could use unit tests
   - The whole game would benefit from a white-box integration test
 - Refactoring
   - the BoardView is responsible for too much, it's functionality should be broken down into...
     - GridView: handles rendering the cells
       - CellView: handles input to a single cell
     - MenuView: handles options (bottom row) inputs and "Check Game" functionality
