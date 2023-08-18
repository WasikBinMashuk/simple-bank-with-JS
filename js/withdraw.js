document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    

    // BALANCE field logics
    const balanceTotalElement = document.getElementById('balance-total');
    const previourBalanceTotalString = balanceTotalElement.innerText;
    const previourBalanceTotal = parseFloat(previourBalanceTotalString);
    

    const newBalanceTotal = previourBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




    withdrawField.value = '';
})