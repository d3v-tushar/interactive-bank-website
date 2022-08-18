document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawElement = document.getElementById('withdraw-field');
    const withdrawElementString = withdrawElement.value;
    const withdrawAmount = parseFloat(withdrawElementString);
    withdrawElement.value = '';

    if(isNaN(withdrawAmount)){
        alert('Ener Numarical Vlaue Please')
        return;
    }
    // console.log(withdrawAmount);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    // Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    if(balanceTotal < withdrawAmount){
        alert('Insufficiant Balance')
        return;
    }
    const newWithdraw = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = newWithdraw;

    // Total balance
    const balance = balanceTotal - withdrawAmount;
    balanceTotalElement.innerText = balance;
})