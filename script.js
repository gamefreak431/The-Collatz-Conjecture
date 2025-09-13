//The Collatz Conjecture
//Rules: 
// odd numbers multiply by 3 and add 1
// even numbers divide by 2

function elementPrep(content, className, id){
        //Creates elements for the odd and even numbers or text to be stored in.
        const text = document.createElement("p");
        text.innerHTML = content;
        className === "odd" ? text.className = "odd" : text.className = "even";
        if (id) { text.id = id; } //"oddLegend" or "evenLegend"
        return text;
}

function steps(length){
    const steps = document.getElementById("steps");
    steps.innerHTML = `Steps to One: ${length}`;
    steps.appendChild(elementPrep("Odd Numbers, ", "odd", "oddLegend"));
    steps.firstElementChild.appendChild(elementPrep("Even Numbers, ", "even", "evenLegend")); //The legend explaining the colour code is two p elements. Appending one to the other means they will display inline while allowing me to style them indipendently.
}

function collatz(){
    //Gets the number from the input, does the collatz algorithm on it, formats that to display on the page. Stores the numbers in an array for the steps.
    const output = document.getElementById("output");
    let num = document.getElementById("number").value;
    output.innerHTML = ""; //clears the output for the next number, assuming the user is trying another number.
    let stepsToOne = 1; //Counts the steps to reach 1. Starts at one as the user input is the first step.
    num % 2 == 0 ? output.appendChild(elementPrep(num, "even", null)) : output.appendChild(elementPrep(num, "odd", null)); //Displays the user input number in the correct colour.
    if(num > 0){
        while (num != 1){ //If you don't have the loop break when it reaches 1, it will infinitely loop through 1, 4, 2, 1.
            if(num % 2 == 0) {
                num = num / 2;
                output.appendChild(elementPrep(num, "even", null));
            }
            else {
                num = num * 3 + 1;
                output.appendChild(elementPrep(num, "odd", null));
            }
            stepsToOne++;
        }
        steps(stepsToOne);
    }
    else {
        output.innerHTML = "Please enter a postive number or a number other than 0"; //Error message for negative numbers, 0, or no input
    }
}