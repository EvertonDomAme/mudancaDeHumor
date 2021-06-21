window.onload = () => {

    const jim = {    

    nome : "Jim",
    cafe : true,
    imagem1 : "https://media1.tenor.com/images/944cb7ca395db20c661ddf65c4be17dc/tenor.gif?itemid=15443059",
    imagem2 : "https://media1.tenor.com/images/bde301a588b9c2c12556b2948f85016e/tenor.gif?itemid=15452780",
    texto1 : "JIM TEM CAFÉ!",
    texto2 : "JIM SEM CAFÉÉÉÉÉÉ!",
    }
    const imagem = document.getElementById("imagem");

    const paragrafo = document.getElementById("paragrafo");

    const trocaDados = () =>{

        if (jim.cafe){  

            paragrafo.innerHTML = jim.texto1;
            imagem.src= jim.imagem1;
        }else{
            paragrafo.innerHTML = jim.texto2;
            imagem.src= jim.imagem2;
        }

    }

    trocaDados();
    

    const botao = document.getElementById("botao")    
    botao.addEventListener("click", () =>{
        jim.cafe = !jim.cafe;
        trocaDados()
        
       

    })

}
