let sum = 0

let gem = sessionStorage.setItem("test",23)

test.addEventListener('click',
  function(){
    bestillinger.innerHTML += bibim.innerHTML
    bestillinger.innerHTML +=  parseInt( sessionStorage.getItem("test")) + parseInt( sessionStorage.getItem("test"))
  })

// betal knap
betal.addEventListener('click',function(){
  localStorage.setItem("liste",bestillinger.innerHTML)
  })
