//funcao para exibir tempo da muisica    
var time = document.getElementById("time_view");
var time_cont = [];
var  secunds = 0, minutes = 0, hours = 0;

//essa funcão tem que ser atualizada todos os segundos
function atualizar_tempo(){
      //esse if verifica se ainda não deu um hora nosso tempo
      /* 
      devidimos a duracão do nosso tempo por 60 isso retorna um valor se é menor que 60 quer dizer que o o nosso video não tem uma hora.
      depois obtemos o tempo currente do nosso video se é menor que 60 vamos obter apenas os segundos
      se for maior vamos obter o resto da devisão para o segundo e depois devidimos o valor por 60 para obter os minutos.

      */
      if(Math.floor(reprodutor.duration/60) < 60 ){
           if( reprodutor.currentTime < 60) {
            secunds = Math.floor(reprodutor.currentTime);

          }
           else { 
            secunds = Math.floor( reprodutor.currentTime%60);
            minutes = Math.floor( reprodutor.currentTime/60);
          }
      }
      //else quando a duração da musica/video der uma hora analizamos aqui
      /*
          aqui já que o nosso video tem mais de uma hora vamos começar a obter a hora 
          já para obter a hora devidimos uma vez por 60 para obter os minutos e depois mais uma vez para obter a hora.
          Obtemos o resto da divisão disso para obter os minutos
      */
      else{
        var aux = Math.floor( reprodutor.currentTime/60);
        var aux2 = Math.floor( reprodutor.currentTime/60)
        hours = Math.floor(aux/60);
        minutes = Math.floor( aux2%60 );
        secunds =  Math.floor( reprodutor.currentTime%60);
      }
      // esse é a parte onde vamos verificar se ainda ainda não for 10 uzamos zero a frente se sim não usamos
      if( secunds <= 9) time_cont[2] = '0'+secunds;
      else time_cont[2] = secunds;
      if(minutes <= 9)time_cont[1] = '0'+minutes;
      else time_cont[1] = minutes;
      if(hours <= 9)time_cont[0] = '0'+ hours;
      else time_cont[0] = hours;

     seuElemento.innerText = time_cont[0]+':'+time_cont[1]+':'+time_cont[2];
}