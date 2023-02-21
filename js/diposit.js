const depo = document
  .getElementById("btnDepo")
  .addEventListener("click", function () {
    // Deposit
    const depoFiled = document.getElementById("depoFiled");
    const dipoAmaountString = depoFiled.value;
    const dipoAmaount = parseFloat(dipoAmaountString);

    // Please Deposit
    const dipoCash = document.getElementById("dipoCash");
    const dipoCashTotalString = dipoCash.innerText;
    const dipoCashTotal = parseFloat(dipoCashTotalString);

    // Deposit + Please Deposit = total
    const currentDipoCashTotal =dipoCashTotal + dipoAmaount;

    dipoCash.innerText = currentDipoCashTotal;

    // Balance 
    const balanceCash = document.getElementById("balanceCash");
    const balanceCashString = balanceCash.innerText;
    const balanceCashTotal = parseFloat(balanceCashString);

    //Balance + total
    const totalBalance = balanceCashTotal + currentDipoCashTotal;

    balanceCash.innerText=totalBalance;
    console.log(totalBalance);
    depoFiled.value = "";
  });
