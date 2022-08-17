document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawElement = document.getElementById('withdraw-field');
    const withdrawElementString = withdrawElement.value;
    const withdrawAmount = parseFloat(withdrawElementString);
    // console.log(withdrawAmount);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    // console.log(withdrawTotal);
    const newWithdraw = withdrawTotal + withdrawAmount;
    // console.log(newWithdraw);
    withdrawTotalElement.innerText = newWithdraw;
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const balance = balanceTotal - withdrawAmount;
    console.log(balance);
    balanceTotalElement.innerText = balance;
    withdrawElement.value = '';
})