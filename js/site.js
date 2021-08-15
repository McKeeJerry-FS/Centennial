
// get the values from the UI
// starts or controller function
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    // Parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate user input
    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        // we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
         // we call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("Please enter only numbers")
    }
   
}


// generate numbers from the start value to the end value
// logic function(s)
function generateNumbers(sValue, eValue){
    
    let numbers = [];
    
    // we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){
        //this will execute in a loop until index = eValue
        numbers.push(index);

    }

    

    return numbers;
}


// Display the numbers and mark the even numbers in BOLD
// display or view functions
function displayNumbers(numbers){
    let templateRows ="";
    for (let index = 0; index < numbers.length; index++){
        
        let className = "even";
        let number = numbers[index];
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}
