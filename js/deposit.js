document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('clicked');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value) ;
    // console.log(depositAmount);

    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid number');
        depositField.value = '';
        return;
    }

    // setting the value to the deposit section
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    const currentDepositTotal = parseFloat(previousDepositTotal)  + parseFloat(newDepositAmount) ;

    depositTotalElement.innerText = currentDepositTotal; 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    const currentBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;
    

    // clearing the field
    depositField.value = '';
})