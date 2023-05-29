function tabuada() {
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('seltabuada')

    if(numero.value.length == 0){

        alert('[ERRO] Digite um número!')
    }

    else {

        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n *c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        } 
    }
    
}