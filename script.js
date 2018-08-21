var tabuleiro = [];
var jogadores = ["instagram","snapchat"];
var vez = jogadores[0];
var status = "jogando";
var rodadas = 0;

function fill(square){

  console.log(rodadas);

    if(status != "finalizado"){
        var imagem = document.getElementById(square);
        if(imagem.className != jogadores[0] && imagem.className != jogadores[1]){
            imagem.classList.remove(square);
            imagem.classList.add(vez);
            document.getElementById(square).src = "img/"+vez+".png";
            rodadas++;

            if(rodadas == 9 && !check()){

              document.getElementById('resultado').innerHTML = "Empate!";
              status = "finalizado";

            } else if(!check()){

                if(vez == jogadores[0]){
                    vez = jogadores[1];
                    document.getElementById('resultado').innerHTML = "Player: "+jogadores[1];
                }else{
                    vez = jogadores[0];
                    document.getElementById('resultado').innerHTML = "Player: "+jogadores[0];
                }

            }else{
                document.getElementById('resultado').innerHTML = "Player "+vez+",você venceu!";
                status = "finalizado";
            }
        }else{
            document.getElementById('resultado').innerHTML = "square já marcada... Tente outra!";
        }
    }
}

function novo_jogo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          square = 'square' + i + '_' + j
           document.getElementById(square).src = "";
           document.getElementById(square).className = "";
           document.getElementById(square).classList.add(square);
      }
    }
    document.getElementById('resultado').innerHTML = "Player: "+vez;
    status = "jogando";
    rodadas = 0;
}

function check(){
   square1_1 = document.getElementById('square1_1').className;
   square1_2 = document.getElementById('square1_2').className;
   square1_3 = document.getElementById('square1_3').className;
   square2_1 = document.getElementById('square2_1').className;
   square2_2 = document.getElementById('square2_2').className;
   square2_3 = document.getElementById('square2_3').className;
   square3_1 = document.getElementById('square3_1').className;
   square3_2 = document.getElementById('square3_2').className;
   square3_3 = document.getElementById('square3_3').className;
   if (((square1_1 != '') && (square1_2 != '') && (square1_3 != '') && (square1_1 == square1_2) && (square1_2 == square1_3)) || ((square1_1 != '') && (square2_2 != '') && (square3_3 != '') && (square1_1 == square2_2) && (square2_2 == square3_3)) || ((square1_1 != '') && (square2_1 != '') && (square3_1 != '') && (square1_1 == square2_1) && (square2_1 == square3_1)) || ((square2_1 != '') && (square2_2 != '') && (square2_3 != '') && (square2_1 == square2_2) && (square2_2 == square2_3)) || ((square3_1 != '') && (square3_2 != '') && (square3_3 != '') && (square3_1 == square3_2) && (square3_2 == square3_3)) || ((square1_2 != '') && (square2_2 != '') && (square3_2 != '') && (square1_2 == square2_2) && (square2_2 == square3_2)) || ((square1_3 != '') && (square2_3 != '') && (square3_3 != '') && (square1_3 == square2_3) && (square2_3 == square3_3)) || ((square3_1 != '') && (square2_2 != '') && (square1_3 != '') && (square3_1 == square2_2) && (square2_2 == square1_3))){
       return true;
   }else{
        return false;
   }
}