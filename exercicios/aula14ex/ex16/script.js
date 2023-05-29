function contagem() {
    
    let inicio = document.getElementById('txtinicio') 
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    let resultado = document.getElementById('resultadodaContagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        resultado.innerHTML = 'Impossivel Contar!'
        window.alert('ERRO')
    }

    else {
        resultado.innerHTML = `Contando: <br>`

        let i = Number(inicio.value) // pegar o valor da variavel inicio e converte em número
        let f = Number(fim.value) // pegar o valor da variavel fim e converte em número
        let p = Number(passos.value) // pegar o valor da variavel passos e converte em número

        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1 automaticamente')
            p = 1
        }

        if (i < f) {

            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449} `
            }
            
        } 

        else {

            // Contagem regressiva
            for(let c = i; c >= f; c -=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }

        resultado.innerHTML += `\u{1F3C1} `
    }
}