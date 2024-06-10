let currentDisplay = "0";
let resultDisplay = false;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeydown);
    updateDisplay();
});

function handleKeydown(event){
    const keyCode = event.key;  
        if(!isNaN(keyCode) || keyCode === '.' )
        {
            appenToDisplay(keyCode);

        }
        else if (keyCode === "+" || keyCode === '-' || keyCode === '*'|| keyCode ==='/'){
            appenToDisplay(keyCode);
        } else if(keyCode === 'Enter'){
                event.preventDefault();  
                calculateResult() 
            }else if (keyCode === 'Backspace'){
                clearLastElement();

            }else if (keyCode === 'Escape'){
                clearDisplay
            }
}

function appenToDisplay(value){
    console.log(value);
    if(currentDisplay === "0" || resultDisplay ){
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    resultDisplay = false;

    updateDisplay();

}
function updateDisplay(){
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

function calculateResult(){
    try{
        const result = eval(currentDisplay);
        currentDisplay += "\n="+ result.toString();
        updateDisplay();
    } catch (error){
    currentDisplay += "\nError";
    updateDisplay();
}
resultDisplay = true;
}

function clearLastElement(){
    currentDisplay = currentDisplay.slice(0, -1)
    if (currentDisplay === ""){
        currentDisplay = "0";

    }
    updateDisplay();
}

function clearDisplay(){
    currentDisplay = "0" ;
    resultDisplay = false;
    
    updateDisplay();
}
