let num = document.querySelector('input#txtnumero')
let listas = document.querySelector('select#lista')
let res = document.querySelector('div#resultado')
let valores = [] // ARRAY / VETOR



function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }

    else {
        return false
    }
}



function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }

    else {
        return false
    }
}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('CERTO')
    }

    else {
        window.alert('Valor Invalido ou já inserido na lista')
    }


}