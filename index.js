function calculate(percent){
    const bill=Number(document.getElementById('bill-amount').value);
    const people=document.getElementById('people').value;
    const tip=(bill*percent)/people;
    document.getElementById('tip-amount').innerHTML='$'+Math.floor(tip*100)/100;
    document.getElementById('total-amount').innerHTML='$'+((bill/people)+tip).toFixed(2);
}