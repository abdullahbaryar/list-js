let screen=document.getElementById('screen');
let	buttons =Array.from(document.getElementsByCassName('button'));
	
  buttons.map(button =>{
    button.addEventListener('click',(e)=>{
      console.log('click');
      console.log(e);
      console.log(e.target);
    });
  })