document.getElementById("btnWith").addEventListener("click", function () {
  // STEP1
  const withdrawFiled = document.getElementById("withFiled");
  const withFiled = withdrawFiled.value;
  const withFiledString = parseFloat(withFiled);
  // STEP2
  const WithCash = document.getElementById("WithCash");
  const WithCashText = WithCash.innerText;
  const WithCashString = parseFloat(WithCashText);

  // STEP4
  const balanceCash = document.getElementById("balanceCash");
  const balanceCashString = balanceCash.innerText;
  const balanceCashTotal = parseFloat(balanceCashString);

  if (withFiledString > balanceCashTotal) {
    alert("Sorry!!");
    return;
  }
  // STEP3
  const withdrawCash = withFiledString + WithCashString;
  WithCash.innerText = withdrawCash;
  // STEP5
  const totalBalance = balanceCashTotal - withFiledString;
  withdrawFiled.value = "";

  balanceCash.innerText = totalBalance;
});
