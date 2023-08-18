document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-1
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number');
        withdrawField.value = '';
        return;
    }
    
    // step-2
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    
    // step-4
    // BALANCE field logics
    const balanceTotalElement = document.getElementById('balance-total');
    const previourBalanceTotalString = balanceTotalElement.innerText;
    const previourBalanceTotal = parseFloat(previourBalanceTotalString);
    
    if(newWithdrawAmount > previourBalanceTotal){
        alert('insufficient balance');
        withdrawField.value = '';
        return;
    }
    // step-3
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-5
    const newBalanceTotal = previourBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    // step-6
    withdrawField.value = '';
})