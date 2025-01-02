document.getElementById('btn-count').addEventListener('click', function(){
  let countField = document.getElementById('counter').innerText;
  let countValue = parseInt(countField);  
  countValue++;
  document.getElementById('counter').innerText = countValue;
  localStorage.setItem('number',countValue);
})

const getStoredNumber=()=>{
  let number='';
  const storedNumber=window.localStorage.getItem('number');
  if(storedNumber){
    number=JSON.parse(storedNumber)
  }
  return number;
}

const displayNumber=()=>{
  const number=getStoredNumber();
  if(number){
    document.getElementById('counter').innerText=number;
  }
}
displayNumber()