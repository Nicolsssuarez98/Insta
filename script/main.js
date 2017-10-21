var cont = 0
  function mostrar(ele){
    if(cont == 0){
      ele.innerHTML = 'favorite'
      ele.style.color ='red'
      cont = 1
    }
    else{
      ele.innerHTML = 'favorite_border'
      ele.style.color ='black'
      cont = 0
    }
  }

  

 