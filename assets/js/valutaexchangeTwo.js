
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {

    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;




    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}






// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

// skriv din kode herunder.


function calculateExchange(amountInDKK, exchangeRate) {
    let exchangedAmount = amountInDKK * exchangeRate;
    return exchangedAmount;
}

// Funktionen makeExchange tager data som input, den antager at data indeholder de nødvendige oplysninger
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

        // Kalder calculateExchange funktionen med de to forskellige vekselkurser
        let result1 = calculateExchange(myDanishAmount, myEuroRate);
        let result2 = calculateExchange(myDanishAmount, myDollarRate);

        showResult(myEuroRate, myDollarRate, myDanishAmount)
}

// De angivet valutaer på DKK og exchangeRates
let Data = {
    amountInDKK: 100,
    exchangeRate1: 1.3,
    exchangeRate2: 7.1
}






function calculateExchange(amountDKK, exchangeRate) {
    let exchangedAmount = amountDKK * exchangeRate;
    return exchangedAmount;
  }
  
  let amountInDKK = 100; 
  let exchangeRate = 1.3;
  let exchangedAmount = calculateExchange(amountInDKK, exchangeRate);