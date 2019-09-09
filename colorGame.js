
var colors = ["aqua", "black", "blue", "brown", "chartreuse", "crimson", "green", "orange", "olive", "purple", "pink", "red", "salmon", "teal", "yellow"];
colors = colors.sort();
            
function do_game() {
    var target_index = Math.floor(Math.random() * (colors.length - 0)) + 0
	var target = colors[target_index];
	var message = "Guess which one of these colors I am thinking of:\n\n";
        for (var i = 0 ; i < colors.length ; i++) {
		message += colors[i];
        if (i == (colors.length-2)) {
		message += " and ";
    } 
        else if (i != (colors.length-1)) {
		message += ", ";
	}
}
	var guess_input;
	var finished = false;
	var gameCount = 0;
        alert(target);
        while (!finished) {
		guess_input = prompt(message).toLowerCase();
		gameCount++;
		finished = check_guess(guess_input,target);
        if (finished) {
	var myBody = document.getElementsByTagName("body")[0];
		myBody.style.background = target;
        alert("Congratulations! You have guessed the color!\n\nIt only took you " + gameCount + " guesses to figure out which color I was thinking!\n\nYou can see the color in the background.");}
	}
    }
function check_guess(guess, target) {
        if (colors.indexOf(guess)<0) {
		alert("Sorry, I don't recognize your color.\n\nPlease try again.");
        return false; 
    }   
        else if(guess > target) {
        alert("Sorry, your guess is wrong!\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.");
    } 
        else if (guess < target) {
					alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.");
    } 
        else {
		return true;
	}
}