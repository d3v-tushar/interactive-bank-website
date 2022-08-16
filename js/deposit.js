document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;

    const depositTotal = parseFloat(depositTotalString);
    const depositAmount = parseFloat(depositAmountString);
    const newDeposit = depositAmount + depositTotal;
    depositTotalElement.innerText = newDeposit;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalance = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(previousBalance);
    const newBalanceTotal = balanceTotal + depositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    depositField.value = '';
})