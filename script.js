var tabuleiro = [];
var jogadores = ["Estrela","Bola"];
var vez = jogadores[0];
var status = "jogando";
var rodadas = 0;

function marcar(casa){

  console.log(rodadas);

    if(status != "finalizado"){
        var imagem = document.getElementById(casa);
        if(imagem.className != jogadores[0] && imagem.className != jogadores[1]){
            imagem.classList.remove(casa);
            imagem.classList.add(vez);
            document.getElementById(casa).src = "img/"+vez+".png";
            rodadas++;

            if(rodadas == 9 && !verifica_ganhador()){

              document.getElementById('feedbacks').innerHTML = "Empate!";
              status = "finalizado";

            } else if(!verifica_ganhador()){

                if(vez == jogadores[0]){
                    vez = jogadores[1];
                    document.getElementById('feedbacks').innerHTML = "Jogador: "+jogadores[1];
                }else{
                    vez = jogadores[0];
                    document.getElementById('feedbacks').innerHTML = "Jogador: "+jogadores[0];
                }

            }else{
                document.getElementById('feedbacks').innerHTML = "Parabéns "+vez+",você venceu!";
                status = "finalizado";
            }
        }else{
            document.getElementById('feedbacks').innerHTML = "Casa já marcada... Tente outra!";
        }
    }
}

function novo_jogo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          casa = 'casa' + i + j
           document.getElementById(casa).src = "";
           document.getElementById(casa).className = "";
           document.getElementById(casa).classList.add(casa);
      }
    }
    document.getElementById('feedbacks').innerHTML = "Jogador: "+vez;
    status = "jogando";
    rodadas = 0;
}

function verifica_ganhador(){
   casa11 = document.getElementById('casa11').className;
   casa12 = document.getElementById('casa12').className;
   casa13 = document.getElementById('casa13').className;
   casa21 = document.getElementById('casa21').className;
   casa22 = document.getElementById('casa22').className;
   casa23 = document.getElementById('casa23').className;
   casa31 = document.getElementById('casa31').className;
   casa32 = document.getElementById('casa32').className;
   casa33 = document.getElementById('casa33').className;
   if (((casa11 != '') && (casa12 != '') && (casa13 != '') && (casa11 == casa12) && (casa12 == casa13)) || ((casa11 != '') && (casa22 != '') && (casa33 != '') && (casa11 == casa22) && (casa22 == casa33)) || ((casa11 != '') && (casa21 != '') && (casa31 != '') && (casa11 == casa21) && (casa21 == casa31)) || ((casa21 != '') && (casa22 != '') && (casa23 != '') && (casa21 == casa22) && (casa22 == casa23)) || ((casa31 != '') && (casa32 != '') && (casa33 != '') && (casa31 == casa32) && (casa32 == casa33)) || ((casa12 != '') && (casa22 != '') && (casa32 != '') && (casa12 == casa22) && (casa22 == casa32)) || ((casa13 != '') && (casa23 != '') && (casa33 != '') && (casa13 == casa23) && (casa23 == casa33)) || ((casa31 != '') && (casa22 != '') && (casa13 != '') && (casa31 == casa22) && (casa22 == casa13))){
       return true;
   }else{
        return false;
   }
}