# INF1006 Assignment: Minesweeper
By Luna, Claire, and Monica

# Introduction
Minesweeper is a logic puzzle game that requires players to discover and set flags for hidden bombs without detonating any of them. 

This project is a simple version of Minesweeper in that players need to find 10 bombs in a 9*9 grid of cells.

# Requirement
This game requires all 3 files downloaded from this repository. 

The name of the three files are: 1) index.css 2) index.html 3) index.js

Link: https://github.com/enviroprogrammer/INF1006-minesweeper.git

# How to Run & Game Rules
* Steps to Start the game:
1) Open index.html
2) Start to click on squares to show numbers/set flags
3) Game result will show above the Restart button
4) Click "Restart" to start over a new game

* Game Rules:
1) When a cell is clicked, it will reveal a number ranging from 0 - 8, indicating the number of bombs that are adjacent to this cell, or a bomb. This number represents the total number of bombs in eight adjacent cells.
2) 0 means there are no bombs in the nearly eight adjacent cells which are similar functions as space in other Minesweeper games. Numbers are used as clues to help players avoid the detonating of bombs.
3) If players suspect this cell contains a bomb, they can mark this cell by a flag 🚩

* How to Win/Lose: \
    Win: \
    When all empty cells are revealed and all bombs are flagged. \
    Lose: \
    When clicking any of the bombs💣.

* Game Operation: \
Right Single Click - show numbers of bombs nearby for this cell \
Right Double Clicks - Set flag for this cell \
Right Double Clicks for the flag - Cancel the flag setting

# Troubleshooting & FAQ
* Cannot run the game properly\
Ans: Make sure all the download documents are under same location

* It takes time to show the numbers in cells\
Ans: That is the normal situation as files need time to operate

* Not showing the result of win/lose when all flags are set\
Ans: This means you are not setting the flags properly. You are neither win or lose.

# Maintainers
* Current maintainers(3): \
    Student Name: Yijun Lin \
    ID number: 1003404620 

    Student Name: Si Cheng \
    ID number: 1003834158 

    Student Name: Monica Iqbal \
    ID number: 1001452064

* This project has been sponsored by: \
University: University of Toronto \
Faculty: Faculty of information \
Program: Master of information \
Course code: INF1006 Section 0118 \
Course name: Creating and Exploring Software Environments with JavaScript and Node.js \
Instructor name: Matthew Wells

# Update Information
Created date: Mar.19, 2023 \
Last Modified date: Apr.16, 2023 

# Template from:
https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readme-template
