//estas variables contienen elvalor inicial de la vida de ambos jugadores
var vidaEnemigo = 100;
var vidaYo = 100;
var jugadoractual;

//esta funcion sirve para verificar el total de la vida del enemigo
function totalVidaEnemigo(){
    var texto;
    texto = "la vida de tu enemigo es: "+vidaEnemigo;
    document.getElementById('mensaje').innerHTML=texto;
    console.log(texto);
}

//esta funcion sirve para verificar el total de la vida del jugador
function totalVidaYo(){
    var texto;
    texto = "tu vida es: "+vidaYo;
    document.getElementById('mensaje').innerHTML=texto;
    console.log(texto);
}

//esta funcion sirve para mostrar el mensaje del tipo de ataque que utilizas, que tipo de defensa utiliza tu enemigo y que cantidad de vida le resta a tu enemigo
//adional nos ayuda a determinar si ganaste la partida para finalizar el juego
function muestraVidaEnemigo(nombre,accion,defensa){
    var mensaje;
    if(vidaEnemigo<=0){
        mensaje = "you win";
        cambiarTurno(mensaje);
        console.log(mensaje);
    }else{
    mensaje = "tu has "+accion+" con "+nombre+" tu enemigo se ha defendido con "+defensa+" a tu enemigo se ha restado "+pot+" de vida";
    document.getElementById('mensaje').innerHTML=mensaje;
    console.log(mensaje);
    cambiarTurno(1);
}
}

//esta funcion ejecuta los valores de ataque del jugador, genera una defensa aleatoria a la maquina y retorna valores a la funcion muestraVidaEnemigo()
function ataqueEnemigo (potencia,nombreAtaque) {
//este es un arreglo que almacena las posibles defefensas
const escudoDefensor1 = [
        'el muro de sombras',
        'shongun',
        'el divino arsenal'
    ];
    //esta es una variable que me genera un dato aleatorio para el arreglo de escudoDefensor1
    const defensaMaq = escudoDefensor1[Math.floor(Math.random()*escudoDefensor1.length)];
     //en los siguientes tres bloques se validan los datos y se ejecuta una orden segun los datos y retorna la funcion muestraVidaEnemigo()
    if(defensaMaq==="el muro de sombras" && nombreAtaque==="el mago oscuro"){
        pot = potencia-potencia;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el muro de sombras",pot); 
        verificarVidaJugador(vidaEnemigo);
    }else if (defensaMaq==="el muro de sombras" && nombreAtaque==="el dragon de ojos azules"){
        pot = potencia-5;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el muro de sombras",pot); 
        verificarVidaJugador(vidaEnemigo);
    }else if (defensaMaq==="el muro de sombras" && nombreAtaque==="exodia"){
        pot = potencia-2;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el muro de sombras",pot); 
        verificarVidaJugador(vidaEnemigo);
    }

    if(defensaMaq==="shongun" && nombreAtaque==="el dragon de ojos azules"){
        pot = potencia-potencia;
        vidaEnemigo -= pot;
       muestraVidaEnemigo(nombreAtaque,"atacado","shongun",pot); 
       verificarVidaJugador(vidaEnemigo);
    }else if(defensaMaq==="shongun" && nombreAtaque==="el mago oscuro"){
        pot = potencia-5;
        vidaEnemigo -= pot;
       muestraVidaEnemigo(nombreAtaque,"atacado","shongun",pot); 
       verificarVidaJugador(vidaEnemigo);
    }else if (defensaMaq==="shongun" && nombreAtaque==="exodia"){
        pot = potencia-2;
        vidaEnemigo -= pot;
       muestraVidaEnemigo(nombreAtaque,"atacado","shongun",pot); 
       verificarVidaJugador(vidaEnemigo);
    }

    if(defensaMaq==="el divino arsenal" && nombreAtaque==="exodia"){
        pot = potencia-potencia;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el divino arsenal",pot); 
        verificarVidaJugador(vidaEnemigo);
    }else if(defensaMaq==="el divino arsenal" && nombreAtaque==="el dragon de ojos azules"){
        pot = potencia-5;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el divino arsenal",pot);
        verificarVidaJugador(vidaEnemigo); 
    }else if (defensaMaq==="el divino arsenal" && nombreAtaque==="el mago oscuro"){
        pot = potencia-2;
         vidaEnemigo -= pot;
        muestraVidaEnemigo(nombreAtaque,"atacado","el divino arsenal",pot); 
        verificarVidaJugador(vidaEnemigo);
    } 
}

//esta funcion sirve para mostrar el mensaje del tipo de ataque que utilizas, que tipo de defensa utiliza tu enemigo y que cantidad de vida le resta a tu enemigo
//adional nos ayuda a determinar si perdiste la partida para finalizar el juego
function muestraVidaYo(nombre,accion,ataque,pot){
    var mensaje;
    if(vidaYo<=0){
        mensaje = "game over";
        cambiarTurno(mensaje);
        console.log(mensaje);
    }else{
        mensaje = "te has "+accion+" con "+nombre+" tu enemigo te ha atacado con "+ataque+" se le ha restado "+pot+" a tu vida";
        document.getElementById('mensaje').innerHTML=mensaje;
        console.log(mensaje);
        cambiarTurno(2);
    } 
}
//esta funcion ejecuta los valores de ataque del jugador, genera una defensa aleatoria a la maquina y retorna valores a la funcion muestraVidaYo()
function escudoDefensor(potencia,nombrePosion){
    const listaDeAtaque = [
        'exodia',
        'el dragon de ojos azules',
        'el mago oscuro'
    ];
    //este es un arreglo que almacena los posibles ataques
    const miAtaque = listaDeAtaque[Math.floor(Math.random()*listaDeAtaque.length)];
    //en los siguientes tres bloques se validan los datos y se ejecuta una orden segun los datos y retorna la funcion muestraVidaYo()
    if(miAtaque==="el mago oscuro" && nombrePosion==="el muro de sombras"){
        pot = potencia-potencia;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el mago oscuro",pot); 
         verificarVidaJugador(vidaYo);
    }else if (miAtaque==="el dragon de ojos azules" &&  nombrePosion==="el muro de sombras"){
        pot = potencia-5;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el dragon de ojos azules",pot); 
         verificarVidaJugador(vidaYo);
    }else if (miAtaque==="exodia" && nombrePosion==="el muro de sombras"){
        pot = potencia-2;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","exodia",pot); 
         verificarVidaJugador(vidaYo);
    }


    if(miAtaque==="el dragon de ojos azules" && nombrePosion==="shongun"){
        pot = potencia-potencia;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el dragon de ojos azules",pot); 
         verificarVidaJugador(vidaYo);
    }else if(miAtaque==="el mago oscuro" && nombrePosion==="shongun"){
        pot = potencia-5;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el mago oscuro",pot); 
         verificarVidaJugador(vidaYo);
    }else if (miAtaque==="exodia" && nombrePosion==="shongun"){
        pot = potencia-2;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","exodia",pot); 
         verificarVidaJugador(vidaYo);
    }

    if(miAtaque==="exodia" && nombrePosion==="el divino arsenal"){
        pot = potencia-potencia;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","exodia",pot); 
         verificarVidaJugador(vidaYo);
    }else if(miAtaque==="el dragon de ojos azules" && nombrePosion==="el divino arsenal"){
        pot = potencia-5;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el dragon de ojos azules",pot); 
         verificarVidaJugador(vidaYo);
    }else if (miAtaque==="el mago oscuro" && nombrePosion==="el divino arsenal"){
        pot = potencia-2;
        vidaYo -= pot;
         muestraVidaYo(nombrePosion,"defendido","el mago oscuro",pot); 
         verificarVidaJugador(vidaYo);
    } 
}

/**
//era una funcion para tratar de iniciar el juego de manera aleatoria
function inicioJuego(){
    const player = [
        1,
        2
    ];
    var jugadoractual = player[Math.floor(Math.random()*player.length)];
    console.log(jugadoractual);
    var yo = document.getElementById("jugador1");
    var enemigo = document.getElementById("jugador2");

    if(jugadoractual === 1){
        yo.style.display = "none";
        enemigo.style.display = "block";
        jugadoractual = 2;
    }else{
        yo.style.display = "block";
        enemigo.style.display = "none";
        jugadoractual = 1;
    }

}
console.log(inicioJuego);
*/
//cambiar turno muestra o habilita en pantalla los elementos segun sea de ataque o defensa del jugador, adicional nos genera o controla el mensaje en pantalla para la finalizacion del juego
//tambien lo utilizamos para mostrar o no mostrar ciertas cosas en pantalla en determinado momento
function cambiarTurno(jugadoractual){
    var yo = document.getElementById("jugador1");
    var enemigo = document.getElementById("jugador2");
    var yoa = document.getElementById("ganador");
    var enemigoa = document.getElementById("perdedor");
    var mensaje = document.getElementById("mensaje");
    var yughi = document.getElementById("yo");
    var dartz = document.getElementById("enemigo");

    if(jugadoractual === 1){
        yo.style.display = "none";
        mensaje.style.display = "block";
        enemigo.style.display = "block";
        dartz.style.display = "block";
        yughi.style.display = "block";
        jugadoractual = 2;
    }else if(jugadoractual === 2){
        yo.style.display = "block";
        enemigo.style.display = "none";
        mensaje.style.display = "block";
        dartz.style.display = "block";
        yughi.style.display = "block";
        jugadoractual = 1;
    }else if(jugadoractual === "game over"){
        yo.style.display = "none";
        mensaje.style.display = "none";
        enemigo.style.display = "none";
        yoa.style.display = "none";
        yughi.style.display = "none";
        enemigoa.style.display = "block";
        dartz.style.display = "block";
        jugadoractual = "you win";
    }else if(jugadoractual === "you win"){
        yo.style.display = "none";
        mensaje.style.display = "none";
        enemigo.style.display = "none";
        yoa.style.display = "block";
        enemigoa.style.display = "none";
        dartz.style.display = "none";
        yughi.style.display = "block";
        jugadoractual = "game over";
    }
    }

    //esta funcion sirve para verificar el total de la vida del enemigo y el jugador e interactua con la barra de salud 
    function verificarVidaJugador(){
        var vidaYoBarra = document.getElementById('vidayo');
        var vidaEnemigoBarra = document.getElementById('vidaenemigo');
        var vidaActualYo = vidaYo;
        var vidaActualEnemigo = vidaEnemigo;
        vidaYoBarra.style.width = vidaActualYo + '%';
        vidaEnemigoBarra.style.width = vidaActualEnemigo + '%';
        var vidaYoBarra1 = vidaActualYo + '%';
        document.getElementById('vidayo').innerHTML=vidaYoBarra1;
        var vidaEnemigoBarra1 = vidaActualEnemigo + '%';
        document.getElementById('vidaenemigo').innerHTML=vidaEnemigoBarra1;
    }