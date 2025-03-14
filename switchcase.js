function colorirFundo(){ //declara a função colorir
    document.body.bgColor = "  #ffffff";

    let txtCorFundo = document.getElementById("txtCorFundo");
    let corFundo = txtCorFundo.value.toLowerCase(); //define uma variável temporária que recebe o valor do elemento "txtCor" em forma minúscula

    switch(corFundo){ //o algoritimo "switch" vai procurar a cor e vai executar a troca dela se existir no fundo da página
        case "azul": //
            document.body.bgColor = "  #0000ff"; //troca a cor de fundo para azul
            break; //fecha o interruptor
        case "verde": //
            document.body.bgColor = "  #00ff32"; //troca a cor de fundo para verde
            break; //fecha o interruptor
        case "vermelho": //
            document.body.bgColor = "  #ff0000"; //troca a cor de fundo para vermelho
            break; //fecha o interruptor
        case "amarelo": //
            document.body.bgColor = "  #ffff00"; //troca a cor de fundo para amarelo
            break; //fecha o interruptor
        case "roxo": //
            document.body.bgColor = "  #a600ff"; //troca a cor de fundo para roxo
            break; //fecha o interruptor
        case "laranja": //
            document.body.bgColor = "  #ff7c00"; //troca a cor de fundo para laranja
            break; //fecha o interruptor
        case "vermelha": //
            document.body.bgColor = "  #ff0000"; //troca a cor de fundo para vermelho
            break; //fecha o interruptor
        case "amarela": //
            document.body.bgColor = "  #ffff00"; //troca a cor de fundo para amarelo
            break; //fecha o interruptor
        case "roxa": //
            document.body.bgColor = "  #a600ff"; //troca a cor de fundo para roxa
            break; //fecha o interruptor
        case "preto": //
            document.body.bgColor = " #000000"; //troca a cor de fundo para preto
            document.body.style.color = "  #ffffff"; //troca a cor do texto para branco
            break; //fecha o interruptor
        case "preta": //
            document.body.bgColor = " #000000"; //troca a cor de fundo para preto
            document.body.style.color = "  #ffffff"; //troca a cor do texto para branco
            break; //fecha o interruptor
        default: //
            document.body.bgColor = "  #ffffff"; //troca a cor de fundo para branco
            break; //fecha o interruptor
    } //


} //

function colorirTexto(){
    document.body.style.color = " #000000";

    let txtCorTexto = document.getElementById("txtCorTexto");
    let corTexto = txtCorTexto.value.toLowerCase()


    switch(corTexto){ //o algoritimo "switch" vai procurar a cor e vai executar a troca dela se existir no fundo da página
        case "azul": //
            document.body.style.color = "  #0000ff"; //troca a cor do texto para azul
            break; //fecha o interruptor
        case "verde": //
            document.body.style.color = "  #00ff32"; //troca a cor do texto para verde
            break; //fecha o interruptor
        case "vermelho": //
            document.body.style.color = "  #ff0000"; //troca a cor do texto para vermelho
            break; //fecha o interruptor
        case "amarelo": //
            document.body.style.color = "  #ffff00"; //troca a cor do texto para amarelo
            break; //fecha o interruptor
        case "roxo": //
            document.body.style.color = "  #a600ff"; //troca a cor do texto para roxo
            break; //fecha o interruptor
        case "laranja": //
            document.body.style.color = "  #ff7c00"; //troca a cor do texto para laranja
            break; //fecha o interruptor
        case "vermelha": //
            document.body.style.color = "  #ff0000"; //troca a cor do texto para vermelho
            break; //fecha o interruptor
        case "amarela": //
            document.body.style.color = "  #ffff00"; //troca a cor do texto para amarelo
            break; //fecha o interruptor
        case "roxa": //
            document.body.style.color = "  #a600ff"; //troca a cor do texto para roxa
            break; //fecha o interruptor
        case "preto": //
            document.body.style.color = " #000000"; //troca a cor do texto para preto
            break; //fecha o interruptor
        case "preta": //
            document.body.style.color = " #000000"; //troca a cor do texto para preto
            break; //fecha o interruptor
        default: //
            document.body.style.color = "  #000000"; //troca a cor do texto para branco
            break; //fecha o interruptor
    } //

}

document.getElementById("txtCorFundo").addEventListener('keyup', function(event) { //adiciona um evento de pressionar a tecla
        colorirFundo(); //chama a função colorir
}); //


document.getElementById("txtCorTexto").addEventListener('keyup', function(event) { //adiciona um evento de pressionar a tecla
        colorirTexto(); //chama a função colorir
}); //