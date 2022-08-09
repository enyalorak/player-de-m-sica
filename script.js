//armazenar as musica em um array
//array armazena objetos
//objt serve para armazenar varios tipos de dados dentro de uma
//unica estrutura
//cada musica vai ser um objt diferente
//dentrio das chave pomos proporiedados do objt
let musicas = [
    {titulo: 'As You Fade Away', artista:'NEFFEX', 
    src:'musicas/As You Fade Away - NEFFEX.mp3', img:'imagens/rock.jpg'},
    {titulo: 'Down With Your Getup', artista:'Mini Vandal', 
    src:'musicas/Down With Your Getup - Mini Vandals.mp3', img:'imagens/blues.jpg'},
    {titulo: 'Play Dead', artista:'NEFFEX', 
    src:'musicas/Play Dead - NEFFEX.mp3', img:'imagens/pop.jpg'}
];



let musica = document.querySelector('audio'); //p manipular a musica

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img'); //seleciona a imagem

let nomeMusica = document.querySelector('.descricao h2');//dentro da classe descricao seleciono h2

let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica); //vai recarregar tds as informaçoes do array

//atualizar a duraçaõ da musica de acordo com sua real duracao
//duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
//criar evento de click no botao
//p quando clicar no botão tocar a musica

//EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra); //evento para atualizar a barra enquanto a musica estiver tocando

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});//quando clicar executa uma funcao

document.querySelector('.proximo').addEventListener('click', () =>{
    indexMusica++;
    if (indexMusica>2){
        indexMusica 
    }
    renderizarMusica(indexMusica);
});
//FUNCOES
function renderizarMusica(index){//vamos renderizar a musica de acordo com o index do array musicas
    musica.setAttribute('src', musicas[index.src]);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })

    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}
//substituo o src original dp html pelo atributo src que esta dentro do array musicas


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    //seleciona o css pause, dps mexemos no estilo do botao (style)
    //pois ele foi declarado como display none no html
    //.diplay pra mudar a propriedade display
    //assim td vez que dermos play, o bta de pause aparece
    document.querySelector('.botao-play').style.display = 'none';
    //aqui e a mesma teoria mas o botao de play vai sumir 

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    //nessa funcao precisa acontecer o inverso
    //o botao de pausar ytem que sumir para aparecer o de play
}


function atualizarBarra(){
    let barra = document.querySelector('progress');
    //foi criado uma variavel que seleciona a tag progress
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
     //fazer a barra ir caminhando de acordo com a duracao da musica
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime)); // mostrar a duração da música
    //a variavel vai receber textcontent que vai mudar o valor da MUSICA PARA CURRENT TIMA
    
}

// para mostrar o tempo decorrido em minutos em vez de segundos
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

//funcao para renderizar a musica
//td vez que clicarmos no botao de mudar a musica
//a funcao ra mudar a musica foto snome e duracao de acordo com cada musica




