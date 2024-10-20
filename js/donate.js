document.getElementById('noakhali-donate')
.addEventListener('click', function(){
    const addMoney = getInputFieldvalueById('add-doenat-money');

    if(isNaN(addMoney)){
        alert('faild  to Donat ')
        return addMoney;
    }

    const balance = getTextFieldValueById('noakhali-balance')
     const newNoakhaliBalance = balance + addMoney ;

     const myBalance =getTextFieldValueById('my-balance');
     const myNewbalance = myBalance - addMoney;

     document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
     document.getElementById('my-balance').innerText = myNewbalance;

     alert('Congratulation ');

})

// 

document.getElementById('fani-donat')
.addEventListener('click', function(){
    const addMoney = getInputFieldvalueById('add-fani-donat-money');

    if(isNaN(addMoney)){
        alert('faild  to Donat ')
        return addMoney;
        
    }

    const balance = getTextFieldValueById('fani-balance');
    
     const newNoakhaliBalance = balance + addMoney ;

     const myBalance =getTextFieldValueById('my-balance');
     const myNewbalance = myBalance - addMoney;

     document.getElementById('fani-balance').innerText = newNoakhaliBalance;
     document.getElementById('my-balance').innerText = myNewbalance;

     alert('Congratulation ');

})


// 

document.getElementById('Quota-movement-donat')
.addEventListener('click', function(){
    const addMoney = getInputFieldvalueById('add-quata-doenat-money');

    if(isNaN(addMoney)){
        alert('faild  to Donat ')
        return addMoney;
    }

    const balance = getTextFieldValueById('Quota-movement-money')
     const newNoakhaliBalance = balance + addMoney ;

     const myBalance =getTextFieldValueById('my-balance');
     const myNewbalance = myBalance - addMoney;

     document.getElementById('Quota-movement-money').innerText = newNoakhaliBalance;
     document.getElementById('my-balance').innerText = myNewbalance;

     alert('Congratulation ');

})