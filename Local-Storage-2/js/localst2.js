const getInputValue=(id)=>{
  const input=document.getElementById(id);
  const inputValue=input.value;
  input.value='';
  return inputValue;
}

document.getElementById('send-name').addEventListener('click', function(){
  const name=getInputValue('name');  
  saveToLocalStorage('name', name);
  
})

document.getElementById('send-email').addEventListener('click', function(){
  const email=getInputValue('email');
  saveToLocalStorage('email', email);
})

document.getElementById('send-message').addEventListener('click', function(){
  const message=getInputValue('message');
  saveToLocalStorage('message', message);
})

function saveToLocalStorage(key,name){
  localStorage.setItem(key, name);
}

document.getElementById('delete-name').addEventListener('click', function(){
  localStorage.removeItem('name')
})
document.getElementById('delete-email').addEventListener('click', function(){
  localStorage.removeItem('email')
})
document.getElementById('delete-message').addEventListener('click', function(){
  localStorage.removeItem('message')
})
document.getElementById('reset').addEventListener('click', function(){
  localStorage.clear();
})

document.getElementById('send-info').addEventListener('click', function(){
  const name=getInputValue('name');
  const email=getInputValue('email');
  const message=getInputValue('message');
  const info={
    name:name,
    email:email,
    message:message
  }
  const infoString=JSON.stringify(info);
  if(name || email|| message===null){    
    saveToLocalStorage('info', infoString);
  }
  else{
    alert('Please fill in all fields');
  }
})


