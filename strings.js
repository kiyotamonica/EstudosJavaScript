const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //pega o valor na tabela ASCII ou UNICODE
console.log(escola.indexOf('3')) //mostra onde o 3 esta na string

console.log(escola.substring(1)) //mostra a string a partir do index 1
console.log(escola.substring(0, 3)) //mostra a string do indice 0 até antes do 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) 

console.log('Ana, Maria, Pedro'.split(',')) //transformar a string num Array, sempre q for visto a vírgula, vai fazer a separação do array