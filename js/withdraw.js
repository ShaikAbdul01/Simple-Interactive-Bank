document.getElementById('btnWith').addEventListener('click',function(){
    const withdrawFiled=document.getElementById('withFiled');
    const withFiled=withdrawFiled.value;
    const withFiledString=parseFloat(withFiled);
    
    const WithCash=document.getElementById('WithCash');
    const WithCashText=WithCash.innerText;
    const WithCashString=parseFloat(WithCashText);
    
    const withdrawCash= withFiledString + WithCashString
    console.log(withdrawCash)

    WithCash.innerText=withdrawCash;

    const balanceCash = document.getElementById("balanceCash");
    const balanceCashString = balanceCash.innerText;
    const balanceCashTotal = parseFloat(balanceCashString);

    const totalBalance=balanceCashTotal - withdrawCash;

    balanceCash.innerText=totalBalance;
    withdrawFiled.value='';
})