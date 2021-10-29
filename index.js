function calculate(percent){
    const people=document.getElementById('people').value;
    if(people<1){
        document.getElementById('people').style='outline: solid rgba(189, 76, 76, 0.76);;';
        document.getElementById('error-message').style='display: block';
    }
    else{
        const bill=Number(document.getElementById('bill-amount').value);
        const tip=(bill*percent)/people;
        document.getElementById('tip-amount').textContent='$'+Math.floor(tip*100)/100;
        document.getElementById('total-amount').textContent='$'+((bill/people)+tip).toFixed(2);
        document.getElementById('people').style='outline: none';
        document.getElementById('error-message').style='display: none';
    }
}

function reset(){
    document.getElementById('tip-amount').textContent='$0.00';
    document.getElementById('total-amount').textContent='$0.00';
    document.getElementById('bill-amount').value=''
    document.getElementById('btn-custom').value='';
    document.getElementById('people').value='';
    document.getElementById('people').style='outline: none';
    document.getElementById('error-message').style='display: none';
}

function customtip(){
    const percent = document.getElementById('btn-custom').value/100;
    calculate(percent);
}



