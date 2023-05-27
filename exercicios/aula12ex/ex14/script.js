function carregar () {

    // Variaveis no Javascript para receber do HTML
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var paragrafo = window.document.getElementById('paragrafo')
    
    var data = new Date()
    var minutos = data.getMinutes()
    var hora = data.getHours()

    
    
    // Estrutura IF e ELSE/ perguntando qual horario
    if (hora >= 0 && hora < 6) {

        // BOA MADRUGADA
        img.src = 'madrugada.png'
        document.body.style.background = '#030b22'
        paragrafo.innerHTML = 'Boa Madrugada!'
        paragrafo.style.background = '#030b22'
        msg.innerHTML = `Agora são <strong>${hora}:${minutos} da manhã</strong>`
        


    } else if (hora >= 6 && hora < 12) {

        //BOA DIA
        img.src = 'tarde.png'
        document.body.style.background = '#fde583'
        paragrafo.innerHTML = 'Bom Dia!'
        paragrafo.style.background = '#fde583'
        msg.innerHTML = `Agora são <strong>${hora}:${minutos} da manhã</strong>`


    } else if (hora >= 12 && hora < 18) {

        // BOA TARDE
        img.src = 'manha.png'
        document.body.style.background = '#d4a426'
        paragrafo.innerHTML = 'Boa Tarde!'
        paragrafo.style.background = '#d4a426'
        msg.innerHTML = `Agora são <strong>${hora}:${minutos} da tarde</strong>`


    } else {

        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#392e4c'
        paragrafo.innerHTML = 'Boa Noite!'
        paragrafo.style.background = '#392e4c'
        msg.innerHTML = `Agora são <strong>${hora}:${minutos} da noite</strong>`

    }
}