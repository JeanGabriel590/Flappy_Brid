const valores = [7.7, 8.9, 6.3, 9.2] // Array definida em [ ]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantos elementos tem na array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retirar um elemento 
delete valores[0]
console.log(valores)

console.log(typeof valores)