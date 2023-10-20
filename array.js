const valores = [7.7, 8, 2.5, 6, 0]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[5] = 10 //diferentemente de java, o array nao fica com tamanho fixo, é possível colocar dps tbm
console.log(valores[5])

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // pop funciona igualzinho o pop de pilha
console.log(valores)

console.log(typeof valores) //em JS array é object