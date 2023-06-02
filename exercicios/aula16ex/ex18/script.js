let num = document.querySelector('input#txtnumero')
let listas = document.querySelector('select#lista')
let res = document.querySelector('div#resultado')
let valores = [] // ARRAY / VETOR


// PERGUNTA SE O NÚMERO ESTÁ ENTRE 1 E 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }

    else {
        return false
    }
}


// PERGUNTA SE O NÚMERO JÁ SE ENCONTRA NA LISTA OU NÃO
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }

    else {
        return false
    }
}


// PERGUNTA SE JÁ TEM UM NÚMERO INSERIDO NA LISTA OU NÃO, CHAMANDO POR DUAS FUNÇÃO
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        
        valores.push(Number(num.value)) // ADICIONAR O NUMERO DIGITADO NO VETOR/ARRAY
        let item = document.createElement('option') // CRIAR UM ELEMENTO
        item.text = `Valor adicionado foi ${num.value}` // ADICIONA O VALOR NA LISTA
        listas.appendChild(item) // LISTA RECEBE O FILHO ITEM PARA ADICIONAR A LISTA 
        res.innerHTML = '' // LIMPAR O RESULTADO AO ADICIONAR UM NOVO VALOR

    }

    else {
        window.alert('Valor Invalido ou já inserido na lista')
    }

    num.value = '' // AO INSERIR O VALOR, A CAIXA FICA LIMPA
    num.focus()    // AO INSERIR O VALOR, A CAIXA FICA SELECIONADA SEM PRECISAR CLICAR PARA DIGITAR

}


function finalizar() {
    if(valores.length == 0) {
        alert('[ERRO] Adicione valores para finalizar !')
    }

    else {

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        // ANALISA UM POR UM E VERIFICAR QUAL DELES E O MAIOR!
        for (let pos in valores) { 

            // SOMA OS VALORES DO VETOR
            soma += valores[pos]

            // SE O VALORES[POS] > FOR MAIOR, EXEMPLO: 9 // PASSA A SER O MAIOR VALOR DO VETOR
            if(valores[pos] > maior) {
                maior = valores[pos]
            }

            // SE O VALORES[POS] < FOR MENOR, EXEMPLO: 3 // PASSA A SER O MENOR VALOR DO VETOR
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>AO TODO TEM ${total} CADASTRADOS `
        res.innerHTML += `<p> O MENOR NUMERO FOI ${menor}`
        res.innerHTML += `<p> O MAIOR NUMERO FOI ${maior}`
        res.innerHTML += `<p> A SOMA DOS VALORES É ${soma}`
        res.innerHTML += `<p> A MEDIA TOTAL DOS VALORES É ${media}`
    }
}