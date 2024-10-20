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

        //  add history
    
        const p = document.createElement('p');
        let currentdate = new Date();
        p.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh
        ${currentdate}
        `
        document.getElementById('histori-section').appendChild(p);


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

    //  add history

    const p = document.createElement('p');
    let currentdate = new Date();
    p.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh
    ${currentdate}
    `
    document.getElementById('histori-section').appendChild(p);

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

    //  



        //  add history

   const p = document.createElement('p');
   let currentdate = new Date();
   p.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh
   ${currentdate}
   `
   document.getElementById('histori-section').appendChild(p);
   
   


})