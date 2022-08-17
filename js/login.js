document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    if(email === 'tushar@github.com' && password === '00000000' || email === 'anika@bulbuli.com' && password === '88888888'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})