sudoku
======

## Requirements
- UI
  - New Game
  - Check Solution
  - Clear
  - Board Game
    - 9x9 grid of numbers
    - many empty spaces, should be able to change value in these spaces
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
 - CoffeeScript
   - Code readability
 - Jade
   - Templating
 - Grunt
   - Automation
   - Simplify compiling coffeescript and jade
### Classes
 - Views (views are used like Backbone views, handle user interaction and rendering)
   - Board
   - Menu
 - Models
   - Cell
     - final: boolean (can not be changed by user)
     - getValidVals()
     - setValue(v), getValue()
   - Grid
     - getCell(x, y), getCell(id)
     - getCol(x)
     - getRow(y)
     - getRegion(x, y), getRegion(id), getRegion(cell)
     - isSolved()
