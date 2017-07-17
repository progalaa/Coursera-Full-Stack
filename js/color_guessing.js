


function do_game () {
  while(!finished) {

    guess_input = prompt("i am thinking of therse colors :\n"+colors+"\n What color am i thinking of ? ");
    guess_input_index = colors.indexOf(guess_input);

    finished = check_guess();
  }

}
function check_guess() {
  if(colors.indexOf(guess_input) < 0){
    alert("Sorry , I don't recognize your color.\n Please try again");
    return false;
  }
  if(guess_input_index > target_index ) {
    alert("Sorry , Your guess is not correct! \n Hint: your color is alphabetically higher than mine.\n Please try again");
    return false;
  }
  if(guess_input_index < target_index ) {
    alert("Sorry , Your guess is not correct! \n Hint: your color is alphabetically lower than mine.\n Please try again");
    return false;
  }
  document.body.style.backgroundColor = target;
  alert("Congratulations You've Guessed The Color! \n It took you 4 Guesses to finish the Game.\n"+
      "You Can See The Color in the backGround");
      return true;
}
