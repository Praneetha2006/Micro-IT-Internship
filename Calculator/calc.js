let display=document.getElementById("display");
let history=document.getElementById("history");
let currentInput='0;'

function appendValue(value)
{
    if(currentInput==='0' && value!=='.')
        currentInput=value;
    else
        currentInput+=value;
    updateDisplay();
}
function updateDisplay()
{
    display.textContent=currentInput;
}
function clearDisplay()
{
    currentInput='0';
    updateDisplay();
    history.textContent='';
}
function calculate()
{
    const expression=currentInput.replace(/&times;/g,'*').replace(/&divide;/,'/');
    const result=eval(expression);
    history.textContent=currentInput;
    currentInput=result.toString();
    updateDisplay();
}

function toggleSign(){
    if(currentInput.startsWith('-'))
    {
        currentInput=currentInput.slice(1);
    }
    else if(currentInput!=='0')
    {
        currentInput='-'+currentInput;
    }
    updateDisplay();
}