//The Collatz Conjecture
//Rules: 
// odd numbers multiply by 3 and add 1
// even numbers divide by 2

function elementPrep(content, className, id){
        //Creates elements for the odd and even numbers or text to be stored in.
        let text = document.createElement("p");
        if (className == "odd"){
            text.className = "odd";
        }
        else {
            text.className = "even";
        }
        if(id != null){
            text.id = id; //"oddLegend" or "evenLegend"
        }
        text.innerHTML = content;
        return text;
}

function steps(length){
    let steps = document.getElementById("steps");
    steps.innerHTML = `Steps to One: ${length}`;
    steps.appendChild(elementPrep("Odd Numbers, ", "odd", "oddLegend"));
    steps.firstElementChild.appendChild(elementPrep("Even Numbers, ", "even", "evenLegend")); //The legend explaining the colour code is two p elements. Appending one to the other means they will display inline while allowing me to style them indipendently.
}

function collatz(){
    //Gets the number from the input, does the collatz algorithm on it, formats that to display on the page. Stores the numbers in an array for the steps.
    let output = document.getElementById("output");
    let num = document.getElementById("number").value;
    output.innerHTML = ""; //clears the output for the next number, assuming the user is trying another number.
    let arr = []; //Array to store the numbers in the sequence
    arr.push(num);
    console.log(num);
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
            console.log(num); //For debugging
            arr.push(num);
        }
        steps(arr.length);
    }
    else {
        output.innerHTML = "Please enter a postive number or a number other than 0"; //Error message for negative numbers, 0, or no input
    }
}