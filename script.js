//The Collatz Conjecture
//Rules: 
// odd numbers multiply by 3 and add 1
// even numbers divide by 2

function elementPrep(content, className, id){
        //Creates elements for the odd and even numbers or text to be stored in.
        const text = document.createElement("p");
        text.innerHTML = content;
        text.className = className;
        if (id) { text.id = id; } //"oddLegend" or "evenLegend"
        return text;
}

function steps(length){
    const steps = document.getElementById("steps");
    steps.innerHTML = `Steps to One: ${length}`;
    const legend = document.getElementById("legend");
    if (length > 0) {
        if (legend.hasChildNodes()) { return; } //Prevents the legend from being added multiple times.
        legend.appendChild(elementPrep("Odd Numbers", "odd", "oddLegend"));
        legend.appendChild(elementPrep("Even Numbers", "even", "evenLegend"));
        return;
    }
    legend.innerHTML = ""; //Clears the legend if the input is invalid.
}

function collatz(){
    //Gets the number from the input, does the collatz algorithm on it, formats that to display on the page. Stores the numbers in an array for the steps.
    const output = document.querySelectorAll("#output, #error")[0]; //Selects the output or error element, whichever is present.
    let num = document.getElementById("number").value;
    output.innerHTML = ""; //clears the output for the next number, assuming the user is trying another number.
    if (num < 1) {
        steps(0); //Sets the steps to 0 if the input is invalid.
        output.id = "error"; //Changes the output id to error to apply error styling.
        output.innerHTML = "Please enter a postive number <br> or a number other than 0"; //Error message for negative numbers, 0
        return; //Stops the function from continuing.
    };
    output.id = "output"; //Resets the output id to output in case it was changed to error from a previous invalid input.
    let stepsToOne = 1; //Counts the steps to reach 1. Starts at one as the last number, 1, is not counted in the loop.
    while (num != 1){ //If you don't have the loop break when it reaches 1, it will infinitely loop through 1, 4, 2, 1.
        if(num % 2 === 0) {
            output.appendChild(elementPrep(num, "even", null));
            num /= 2;
        }
        else {
            output.appendChild(elementPrep(num, "odd", null));
            num = (num * 3) + 1;
        }
        stepsToOne++;
    }
    output.appendChild(elementPrep(1, "even", null)); //Appends the final 1 to the output.
    steps(stepsToOne);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("number").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            collatz();
        }
    });
});