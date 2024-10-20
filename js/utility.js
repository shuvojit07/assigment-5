function getInputFieldvalueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber ;
}

function getTextFieldValueById(id){
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat (textvalue);
    return textNumber ;
    
}

function showSectionById(id){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('histori-section').classList.add('hidden');


    // show 

    document.getElementById(id).classList.remove('hidden');



}