function verificar() {

    // VARIAVEIS INICIAIS
    var data = new Date()
    var ano = data.getFullYear() // pegar o ano com os 4 números
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tenta novamente! ')
    }


    else {

        // VARIAVEIS
        var fsexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixa = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        // HOMEM
        if (fsexo[0].checked) {
            genero = 'Homem'


            if(idade >= 0 && idade < 5) {
                 faixa = 'Bebê'
                img.setAttribute('src', '../ex15/imagens/bebem.png')
            }
            else if (idade < 10) {
                faixa = 'Criança'
                img.setAttribute('src', '../ex15/imagens/criançam.png')
            }
            else if (idade < 21) {
                faixa = 'Jovem'
                img.setAttribute('src', '../ex15/imagens/jovemm.png')
            }
            else if (idade < 50) {
                faixa = 'Adulto' 
                img.setAttribute('src', '../ex15/imagens/adultom.png')
            }
            else {
                faixa = 'Idoso'
                img.setAttribute('src', '../ex15/imagens/idosom.png')
            }
        }



        // MULHER
        else if (fsexo[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 5) {
                faixa = 'Bebê'
                img.setAttribute('src', '../ex15/imagens/bebef.png')
            }
            else if (idade < 10) {
                faixa = 'Criança'
                img.setAttribute('src', '../ex15/imagens/criançaf.png')
            }
            else if (idade < 21) {
                faixa = 'Jovem'
                img.setAttribute('src', '../ex15/imagens/jovemf.png')
            }
            else if (idade < 50) {
                faixa = 'Adulto'
                img.setAttribute('src', '../ex15/imagens/adultof.png')
            }
            else {
                faixa = 'Idoso'
                img.setAttribute('src', '../ex15/imagens/idosof.png')
            }
        }
    
        // resultado.style.textAlign = 'center' // centralizar o texto com javascript
        resultado.innerHTML = `Detectamos um(a) ${genero} ${faixa} com ${idade} anos de idade! `
        resultado.appendChild(img)// Mostrar a foto/imagem
    }
}