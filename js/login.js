document.getElementById('btnLogin').addEventListener('click',function(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    if(email == 'shaik@abdul.com' && pass == 'Shaik'){
        window.location.href='bank.html';
    }
    else{
        alert("Your email or password incorrect!!")
    }
  })