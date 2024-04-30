function obterNumeroAleatorio() {
    return Math.floor(Math.random() * 80)
}

function aceitou() {
    let resposta = document.getElementById('principal')
    resposta.innerHTML = '<h1>HIHIHIHI TE AMO, AMOR :3</h1> <img src="https://i.pinimg.com/564x/3d/92/31/3d92315c31d4b3f70b178aa013e35b32.jpg" alt="">'
}

function rejeitou() {
    let num2 = obterNumeroAleatorio()
    let num1 = obterNumeroAleatorio()
    let btn = document.getElementById('nao')
    btn.setAttribute('style', `position: absolute; top: ${num1}%; left: ${num2}%;`)

}