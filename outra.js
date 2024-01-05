if(sessionStorage.getItem('produto') == '1'){
    document.getElementById('resu').innerHTML = `<img src="./images/blusaazul.jpg" width="350"> <p>Blusa azul - R$ 80,00</p>`
}
if(sessionStorage.getItem('produto') == '2'){
    document.getElementById('resu').innerHTML = `<img src="./images/blusapreta.jpg" width="350"> <p>Blusa preta - R$ 80,00</p>`
}
if(sessionStorage.getItem('produto') == '3'){
    document.getElementById('resu').innerHTML = `<img src="./images/kitblusas.webp" width="350"> <p>Kit blusas - R$ 160,00</p>`
}