var start = document.getElementById('start')
var end = document.getElementById('end')
var steps = document.getElementById('steps')
var clicar = document.getElementById('btn')
var resul = document.getElementById('resultado')

clicar.addEventListener('click', calcular)

function calcular() {
    let inicio = Number(start.value)
    let fim = Number(end.value)
    let passos = Number(steps.value)
    let i;
    
    if (inicio == '' && fim == '' && passos == '') {
        alert('Por favor, digite algum número!')
    } else if (inicio == '' || fim == '' || passos == '' ) {
        resul.innerHTML = 'Impossível contar.'
    } else {    
        resul.innerHTML = `Contando: `
        
        if (inicio < fim){
            // Contagem crescente
            for (i = inicio; i <= fim; i += passos){
                resul.innerHTML += `${i} \u{1f449} ` // Esse código é o emoji de dedo apontando 
            } 

        } else {
            // Contagem regressiva
            for (i = inicio; i >= fim; i -= passos){
                resul.innerHTML += `${i} \u{1f449}` // Esse código é o emoji de dedo apontando
            }
            resul.innerHTML += `\u{1f3c1}`  // Esse código é o emoji de bandeira   
        }    
    }
}
