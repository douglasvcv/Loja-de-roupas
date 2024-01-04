

    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    let resu = document.getElementById('resu')
    
    
    
    p1.addEventListener('click', ()=>{
        window.sessionStorage.setItem('produto', '1')
    })
    p2.addEventListener('click', ()=>{
        window.sessionStorage.setItem('produto', '2')
    })
    p3.addEventListener('click', ()=>{
        window.sessionStorage.setItem('produto', '3')
    })
    
    if(sessionStorage.getItem('produto') == '1'){
        resu.innerHTML = `asdadadada`
    }
    
   
    
