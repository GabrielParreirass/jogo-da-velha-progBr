document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll('.square')

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', foiClicado)
    })
})



function foiClicado() {

    let square = event.target

    let position = square.id

    let classx = document.getElementById('jogoX')

    let classO = document.getElementById('jogoO')

    if (classx.checked) {
        if (board[position] == 'a') {
            board[position] = 'x'
            square.innerHTML = `<div class=x></div>`
            checkVencedorX()
        }
        else if (board[position] == 'x') {
            window.alert('Esta casa ja está selecionada')
        }
        else if (board[position] == 'o') {
            window.alert('Esta casa ja está selecionada')
        }
    } else if (classO.checked) {
        if (board[position] == 'a') {
            board[position] = 'o'
            square.innerHTML = `<div class=o></div>`
            checkVencedorO()
        }
        else if (board[position] == 'x') {
            window.alert('Esta casa ja está selecionada')
        }
        else if (board[position] == 'o') {
            window.alert('Esta casa ja está selecionada')
        }


    }


}


function checkVencedorX() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    var indices = [];
    var array = board;
    var elemento = 'x';
    var idx = array.indexOf(elemento);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(elemento, idx + 1);
    }

    for (let i = 0; i < winStates.length; i++) {
        cond = winStates[i].toString()
        if (cond == indices.toString()) {
            gameOver(elemento.toUpperCase())
        }
    }


}

function checkVencedorO() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    var indices = [];
    var array = board;
    var elemento = 'o';
    var idx = array.indexOf(elemento);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(elemento, idx + 1);
    }

    for (let i = 0; i < winStates.length; i++) {
        cond = winStates[i].toString()
        if (cond == indices.toString()) {
            gameOver(elemento.toUpperCase())
        }
    }


}


function gameOver(jogador) {
    let square = event.target
    let quadrados = document.querySelectorAll('.square')
    quadrados.forEach((quadrado) => {
        quadrado.removeEventListener('click', foiClicado)
    })

    
    
    const node = document.createElement("LI");
    const textnode = document.createTextNode(`O jogador ${jogador} venceu a partida!`);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);

}


addEventListener('click', () => {
    const ul = document.getElementById("lista").innerHTML
    localStorage.setItem('saveList',ul)
})

addEventListener('DOMContentLoaded', () =>{
    const saveUl = localStorage.getItem('saveList')
    document.getElementById("lista").innerHTML = saveUl
})

const deleteAll = () =>{
    const ul = document.getElementById("lista")
    ul.innerHTML = ""
  }




var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});

