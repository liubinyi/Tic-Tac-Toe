$(document).ready(function(){
      var turn = 0; //0 is x turn, 1 is o turn
      var x_win_time = 0;
      var o_win_time = 0;
      var count_tie = 0;
      var term = "player1: X's"
      
      $(".cureent_state_x").html(x_win_time);
      $(".cureent_state_o").html(o_win_time);
      $(".term").html(term);
      
      //reset the game
      $("#reset").click(function(){
          $( "p" ).empty();
          $(".grids td").removeClass('o');
          $(".grids td").removeClass('x');
          var term = "player1: X's"
          $(".term").html(term);
       });
      
      
      $("#cell11, #cell12,#cell13,#cell21,#cell22,#cell23,#cell31,#cell32,#cell33").click(function(){
          var cell = $(this);
          var Xwin = false;
          var Owin = false
          //if not occupied
          //alert(cell.hasClass("chip"));
          if ((cell.hasClass("o") == false) && (cell.hasClass("x") == false)) {
              if (turn == 0) {
                cell.append("<p id='ok'>X</p>");
                cell.addClass("x");
                Owin = ocheckWin();
                Xwin = xcheckWin();
                turn = 1; //change the term
                term = "player2: O's"
                $(".term").html(term);
                count_tie += 1;
              } else {
                  cell.append("<p>O</p>");
                  cell.addClass("o");
                  Owin = ocheckWin();
                  Xwin = xcheckWin();
                  turn = 0;
                  term = "player1: X's"
                 $(".term").html(term);
                 count_tie += 1;
              }
          } //end of if else
          
           if (Xwin == true) {
                x_win_time += 1;
                $(".cureent_state_x").html(x_win_time);
                alert("Player X won the game");
              
           } else if (Owin == true) {
                o_win_time += 1;
               $(".cureent_state_o").html(o_win_time);
                alert("Player O won the game");
               
           } else {
              if (count_tie == 9) {

                alert("Tie");
              }
              //check tie 
           }
      }                                                                                   

      );//end of click function
      
  });
    
  function ocheckWin() {
      //1,2,3
      if ($("#cell11").hasClass('o') && $("#cell12").hasClass('o') && $("#cell13").hasClass('o')) {
        return true; 
      //4,5,6
      } else if ($("#cell21").hasClass('o') && $("#cell22").hasClass('o') && $("#cell23").hasClass('o')) {
        return true;
      //7,8,9
      } else if ($("#cell31").hasClass('o') && $("#cell32").hasClass('o') && $("#cell33").hasClass('o')) {
        return true;
      //1,4,7
      } else if ($("#cell11").hasClass('o') && $("#cell21").hasClass('o') && $("#cell31").hasClass('o')) {
        return true;
      //2,5,8
      } else if ($("#cell12").hasClass('o') && $("#cell22").hasClass('o') && $("#cell32").hasClass('o')) {
        return true;
      //3,6,9
      } else if ($("#cell13").hasClass('o') && $("#cell23").hasClass('o') && $("#cell33").hasClass('o')) {
        return true;
      //1,5,9
      } else if ($("#cell11").hasClass('o') && $("#cell22").hasClass('o') && $("#cell33").hasClass('o')) {
        return true;
       //3,5,7
      } else if ($("#cell13").hasClass('o') && $("#cell22").hasClass('o') && $("#cell31").hasClass('o')) {
        return true;
      } else {
        return false; 
      }
      
  }
  
   function xcheckWin() {
      //1,2,3
      if ($("#cell11").hasClass('x') && $("#cell12").hasClass('x') && $("#cell13").hasClass('x')) {
        return true; 
      //4,5,6
      } else if ($("#cell21").hasClass('x') && $("#cell22").hasClass('x') && $("#cell23").hasClass('x')) {
        return true;
      //7,8,9
      } else if ($("#cell31").hasClass('x') && $("#cell32").hasClass('x') && $("#cell33").hasClass('x')) {
        return true;
      //1,4,7
      } else if ($("#cell11").hasClass('x') && $("#cell21").hasClass('x') && $("#cell31").hasClass('x')) {
        return true;
      //2,5,8
      } else if ($("#cell12").hasClass('x') && $("#cell22").hasClass('x') && $("#cell32").hasClass('x')) {
        return true;
      //3,6,9
      } else if ($("#cell13").hasClass('x') && $("#cell23").hasClass('x') && $("#cell33").hasClass('x')) {
        return true;
      //1,5,9
      } else if ($("#cell11").hasClass('x') && $("#cell22").hasClass('x') && $("#cell33").hasClass('x')) {
        return true;
       //3,5,7
      } else if ($("#cell13").hasClass('x') && $("#cell22").hasClass('x') && $("#cell31").hasClass('x')) {
        return true;
      } else {
        return false; 
      }
      
  }