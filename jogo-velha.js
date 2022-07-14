const X = "X";
const O = "O";
const todosQuadradosDoJogo = document.querySelectorAll(".quadrado-jogo");
let turno = 0;
let checarTurno = true;
let terminarJogo = false;
let jogador = O;

function reiniciarJogo() {
    console.log("Chamando a Função");
    location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    console.log("Chamando a Função");
    console.log(posicaoLinha, posicaoColuna);

    marcarJogadorAtivo(jogador)
        if(checarTurno==true){
            jogador = X;
            verificaVencedor();
        }
        else{
            jogador = O;
            verificaVencedor();
        }
        
    
        if(checarTurno==true){
            desenharSimbolo("X", posicaoLinha, posicaoColuna);
            verificaVencedor();
        } 
        else if(checarTurno==false){
            desenharSimbolo("O", posicaoLinha, posicaoColuna);
            verificaVencedor();
        }

    turno = checarTurno ? X : O
    checarTurno = !checarTurno;

}



function verificaQuadrados(square1, square2, square3){

    if(square1.textContent === square2.textContent && square1.textContent === square3.textContent && square1.textContent !== ""){
        return true;
    }
    return false;
}

function todosOsQuadrados(){

    for(let i in todosQuadradosDoJogo){
        if(todosQuadradosDoJogo[i].textContent ===''){
            return false;
        }       
    }
    return true;
}



function verificaVencedor(){
    
    const square = document.querySelectorAll(".quadrado-jogo");

    if( verificaQuadrados(square[0], square[1], square[2]) || 
        verificaQuadrados(square[3], square[4], square[5]) ||
        verificaQuadrados(square[6], square[7], square[8]) ||
        verificaQuadrados(square[0], square[3], square[6]) ||
        verificaQuadrados(square[1], square[4], square[7]) ||
        verificaQuadrados(square[2], square[5], square[8]) ||
        verificaQuadrados(square[0], square[4], square[8]) ||
        verificaQuadrados(square[2], square[4], square[6])
    ){
        todosQuadradosDoJogo.forEach((square) => {
            square.removeAttribute("onclick");
        })

        exibirResultado(`Jogador ${jogador} venceu!`);
    } 
    else{
        todosOsQuadrados() ? exibirResultado(`Empate!`) : '';
    }

}
