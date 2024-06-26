function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +=  `<div>Valor Invalido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O número secreto era: <span class="span__numero-secreto">${numeroSecreto}!</span></h3>
        
        <button id ="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})