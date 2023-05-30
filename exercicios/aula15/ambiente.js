let num = [5,2,4,8,6]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('o valor não foi encontrado')
}
else {
    console.log(`O valor está na posição ${pos}`)
}
