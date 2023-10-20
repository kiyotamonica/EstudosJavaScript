let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //! é sinal de diferença, entao o segundo ! anula o primeiro, é só pra confirmar se o valor é verdadeiro
isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //basicamente, todo numero inteiro vai ser true, o 0 não é.

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN) //NaN = Not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'Tanjiro Acamado'))

let nome = ''
console.log(nome || 'Desconhecido')

let nome2 = 'Noah'
console.log(nome2 || 'Desconhecido')