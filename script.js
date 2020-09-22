let btnLess = document.querySelector('button#btn-less')
let btnMore = document.querySelector('button#btn-more')
let btnReset = document.querySelector('button#btn-reset') 
let display = document.querySelector('p.display')
var count = 0

btnLess.addEventListener('click', diminuiValor)
btnMore.addEventListener('click', aumentaValor)
btnReset.addEventListener('click', resetaValor)

// window.alert(display)


function aumentaValor() {
    // window.alert('Entrou aumenta')
    count++
    display.innerHTML = `<p>${count}</p>`
}

function diminuiValor() {
    // window.alert('Entrou diminui')
    if (count == 0) {
        window.alert('Contador zerado! Operação inválida.')
        return
    } else {
        count--
        display.innerHTML = `<p>${count}</p>`
    }
}

function resetaValor() {
    // window.alert('Entrou reseta')
    if (count == 0) { window.alert('Contador já estava Zerado!') }
    count = 0
    display.innerText = "0"
    
}

