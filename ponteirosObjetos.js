const a = {name: 'Teste'} //cria=se um objeto A que contem um campo 'nome'. O obj A nao está guardando diretamente 'nome', mas sim o seu ponteiro
console.log(a)

const b = a //b vai receber os mesmos ponteiros q estao em a
b.name = 'Aobaaa' //atribuir dados pelos ponteiros é atribuição por referencia
console.log(b)
console.log(a)
