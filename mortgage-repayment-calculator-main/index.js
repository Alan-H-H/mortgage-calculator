const repayment = document.getElementById('output-one')
const radioInterest = document.getElementById('interestRadio')
const repaymentRadio = document.getElementById('repaymentRadio')
const clearBtn = document.getElementById('clear-btn')
const amountEl = document.getElementById('amount')
const yearsEl = document.getElementById('years')
const interestEl = document.getElementById('interest')
const outputEl = document.querySelector('.first')

function calculate(){

    const amountValue = parseFloat(amountEl.value)
    const yearsValue = parseFloat(yearsEl.value)
    const interestValue = parseFloat(interestEl.value)
    
    outputEl.classList = 'third'

    if (repaymentRadio.checked){
    
      const monthlyInterest = interestValue / (100 * 12);
      const months = yearsValue * 12;
      
      const monthlyPayment =
          (amountValue *
            (monthlyInterest * Math.pow(1 + monthlyInterest, months))) /
          (Math.pow(1 + monthlyInterest, months) - 1); 
          
      const totalPayment = monthlyPayment * months;

    document.querySelector('.output').innerHTML = `
    <div class="second">
      <h3>Your results</h3>

      <p>Your results are shown below based on the information you provided. 
      To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div class="three">  
        <p>Your monthly repayments</p>
        <div id="output-one">$${((totalPayment - amountValue) / months).toFixed(2)}</div>
        <hr>
        <p>Total you'll repay over the term</p>
        <div id="output-two">$${(totalPayment - amountValue).toFixed(2)}</div>
      </div>  
    </div>`
    document.querySelector('.second').classList = 'fourth'
}
    else if (radioInterest.checked){
    
      const monthlyInterest = interestValue / (100 * 12);
      const months = yearsValue * 12;
    
      const monthlyPayment =
        (amountValue *
          (monthlyInterest * Math.pow(1 + monthlyInterest, months))) /
        (Math.pow(1 + monthlyInterest, months) - 1); 
        
      const interestPayment = monthlyPayment * months; 

    document.querySelector('.output').innerHTML = `
    <div class="second">
      <h3>Your results</h3>

      <p>Your results are shown below based on the information you provided. 
      To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div class="three">  
        <p>Your monthly repayments</p>
        <div id="output-one">$${(interestPayment / months) .toFixed(2)}</div>
        <hr>
        <p>Total you'll repay over the term</p>
        <div id="output-two">$${interestPayment.toFixed(2)}</div>
      </div>  
    </div>`
    document.querySelector('.second').classList = 'fourth'

    
}

clearBtn.onclick = function(){
    location.reload()
}




}
