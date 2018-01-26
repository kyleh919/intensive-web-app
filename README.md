# intensive-web-app
Codecademy Build Front-End Web Applications from Scratch intensive course

Folders:
-minesweeper
  --Terminal based minesweeper game using JavaScript and node
      To play Minesweeper, we will create instances of MineSweeperGame in the
      terminal.

        For example:
          In the terminal, navigate to the lib directory and run 'node'
          Run '.load game.js' to load contents of this file
          Then create a Game instance and run commands like so:
            let game = new Game(3, 3, 3);
            game.playMove(0, 1);
            game.playMove(1, 2);
            When done, run '.exit'

-ravenous
  --Browser based web app that allows a user to search for businesses in a user
    provided location. The user is also allowed to select from three sorting
    methods to provide different results. Based on these three inputs, once the
    search is initiated, an API call to the Yelp API is made to request
    information on the businesses.

    --Components:
        Business - represents how a business should be displayed to the user
        BusinessList - represents how the list of returned businesses should be
          displayed to the user
        SearchBar - represents how the search bar should be displayed and the
          utility methods used by the search bar

    --Other useful files:
        ./util/Yelp.js - handles interactions with the Yelp API
