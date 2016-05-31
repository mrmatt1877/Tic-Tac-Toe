$(document).ready(function() {
  var elems = document.getElementsByClassName("piece");
  var arr = jQuery.makeArray(elems);
  var check = jQuery.makeArray(elems);
  var playerWins = 0;
  var ties = 0;
  var computerWins = 0;
  var madeMove;

  //player chooses a place
  $(".piece").on("click", function() {
    console.log(arr);
    console.log(check);
    if (!$(this).hasClass("ex") && !$(this).hasClass("oh")) {
      $(this).addClass("ex");

      //if there are three in a row display win else the computer goes
      if (checkForWin(check, 0, 1, 2, "ex") ||
        checkForWin(check, 3, 4, 5, "ex") ||
        checkForWin(check, 6, 7, 8, "ex") ||
        checkForWin(check, 0, 3, 6, "ex") ||
        checkForWin(check, 1, 4, 7, "ex") ||
        checkForWin(check, 2, 5, 8, "ex") ||
        checkForWin(check, 0, 4, 8, "ex") ||
        checkForWin(check, 2, 4, 6, "ex")) {
        alert("Player Wins");
        playerWins++;
        $(".pwins").text(playerWins);
        clearBoard();
      } else {
        arr.splice(arr.indexOf(this), 1);
        setTimeout(computersTurn, 70);
      }
      //computers selection
      function computersTurn() {
        
        var randomSelect = Math.floor(Math.random() * arr.length)
        madeMove = false;
        //checking for a tie
        if (arr.length === 0) {
          alert("Tie");
          ties++;
          $(".tie").text(ties);
          clearBoard();
          madeMove=true;
        }
        //computer makes a move
        if (madeMove === false) {
          smartMove(0, 1, 2);
        }
        if (madeMove === false) {
          smartMove(1, 2, 0);
        }
        if (madeMove === false) {
          smartMove(2, 0, 1);
        }
        if (madeMove === false) {
          smartMove(3, 4, 5);
        }
        if (madeMove === false) {
          smartMove(4, 5, 3);
        }
        if (madeMove === false) {
          smartMove(5, 3, 4);
        }
        if (madeMove === false) {
          smartMove(6, 7, 8);
        }
        if (madeMove === false) {
          smartMove(7, 8, 6);
        }
        if (madeMove === false) {
          smartMove(8, 6, 7);
        }
        if (madeMove === false) {
          smartMove(0, 3, 6);
        }
        if (madeMove === false) {
          smartMove(3, 6, 0);
        }
        if (madeMove === false) {
          smartMove(6, 0, 3);
        }
        if (madeMove === false) {
          smartMove(1, 4, 7);
        }
        if (madeMove === false) {
          smartMove(4, 7, 1);
        }
        if (madeMove === false) {
          smartMove(7, 1, 4);
        }
        if (madeMove === false) {
          smartMove(2, 5, 8);
        }
        if (madeMove === false) {
          smartMove(5, 8, 2);
        }
        if (madeMove === false) {
          smartMove(8, 2, 5);
        }
        if (madeMove === false) {
          smartMove(0, 4, 8);
        }
        if (madeMove === false) {
          smartMove(4, 8, 0);
        }
        if (madeMove === false) {
          smartMove(8, 0, 4);
        }
        if (madeMove === false) {
          smartMove(2, 4, 6);
        }
        if (madeMove === false) {
          smartMove(4, 6, 2);
        }
        if (madeMove === false) {
          smartMove(6, 2, 4);
        }
        if (madeMove === false) {
          $(arr[randomSelect]).addClass("oh");
          arr.splice(arr.indexOf(arr[randomSelect]), 1);
          madeMove = true;
        }

        //check to see if the computer won
        if (checkForWin(check, 0, 1, 2, "oh") ||
          checkForWin(check, 3, 4, 5, "oh") ||
          checkForWin(check, 6, 7, 8, "oh") ||
          checkForWin(check, 0, 3, 6, "oh") ||
          checkForWin(check, 1, 4, 7, "oh") ||
          checkForWin(check, 2, 5, 8, "oh") ||
          checkForWin(check, 0, 4, 8, "oh") ||
          checkForWin(check, 2, 4, 6, "oh")) {
          alert("Computer Wins");
          computerWins++;
          $(".cwins").text(computerWins);
          clearBoard();
        }
        

      };
      //function for checking if there are three in a row
      function checkForWin(arr, x, y, z, mark) {
        if ($(arr[x]).hasClass(mark) && $(arr[y]).hasClass(mark) && $(arr[z]).hasClass(mark)) {
          return true;
        } else {
          return false;
        }

      };
      //function for the computer picking a move
      function smartMove(a, b, c) {
        if ($(check[a]).hasClass("ex") && $(check[b]).hasClass("ex") && !$(check[c]).hasClass("ex") && !$(check[c]).hasClass("oh")) {
          $(check[c]).addClass("oh");
          arr.splice(arr.indexOf(check[c]), 1);
          madeMove = true;
        } else {
          madeMove = false;
        }
      };
      //function for restarting the game
      function clearBoard() {
        $(".piece").removeClass("ex");
        $(".piece").removeClass("oh");
        arr = jQuery.makeArray(elems);
      };

    }

  })

});