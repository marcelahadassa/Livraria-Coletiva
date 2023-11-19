var listaLivros = ["https://m.media-amazon.com/images/I/91LptBSFxQL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71uY1Ce7d2L._AC_UF894,1000_QL80_.jpg",
  "https://cdn.awsli.com.br/800x800/2507/2507517/produto/2107069317d8bdbcc97.jpg",
  "https://m.media-amazon.com/images/I/71kImPVRpAL._AC_UF1000,1000_QL80_.jpg"
];

var livrosNomes = ['Percy Jackson e o ladrão de raios', 'Alan Turing: The Enigma', 'Fazendo meu Filme 4', 'O clube dos amigos imaginários'];

exibirLivros();


function adicionarLivro() {
  var addLivroUrl = document.getElementById('bookUrl').value;
  var addLivroNome = document.getElementById('bookName').value;

  if (!livrosExistentes(addLivroUrl, addLivroNome)) {
    listaLivros.push(addLivroUrl);
    livrosNomes.push(addLivroNome);

    exibirLivros();
  } else {
    alert("Este livro já está no catálago!");
  }
}

function livrosExistentes(bookUrl, bookName) {
  for (var i = 0; i < listaLivros.length; i++) {
    if (listaLivros[i] == bookUrl && livrosNomes[i] == bookName) {
      return true;
    }
  }
  return false;
}

function removerLivro(posicao) {
  if (posicao >= 0 && posicao < listaLivros.length) {
    listaLivros.splice(posicao, 1);
    livrosNomes.splice(posicao, 1);
    exibirLivros();
  }
}

function exibirLivros() {
  var elementoListaLivros = document.getElementById('listaLivros');
  elementoListaLivros.innerHTML = '';

  for (var i = 0; i < listaLivros.length; i++) {
    var livroDiv = document.createElement('div');
    livroDiv.className = 'livro-item'; 

    var livroImg = document.createElement('img');
    livroImg.src = listaLivros[i];
    livroDiv.appendChild(livroImg);

    var livroNome = document.createElement('p');
    livroNome.className = 'livro-nome'; 
    livroNome.textContent = livrosNomes[i];
    livroDiv.appendChild(livroNome);

    var btnRemoverLivro = document.createElement('button');
    btnRemoverLivro.className = 'removeBook';
    btnRemoverLivro.textContent = 'Remover livro';
    btnRemoverLivro.addEventListener('click', function (posicao) {
      return function () {
        removerLivro(posicao);
      };
    }(i));

    //parte de cima: posicao = indice. Chamada de fechamento. o addEvenListener = é um ouvinte de evento, ele realiza uma função cada vez que o botão for clicado.
    //function(posicao): é uma função anônima externa
    //removerLivro(posicao): outra função anônima que está dentro da anterior. Isso cria um fechamento, pois essa função interna ainda tem acesso ao valor da posicao mesmo dps que a função externa foi concluída.
    //(i): invoca a função externa com o valor atual de i. E isso criara o fechamento (closure). Cada botão recebe o seu proprio closure com um valor especifico de i (posicao).



    livroDiv.appendChild(btnRemoverLivro); //btnRemoverLivro é o filho de livroDiv.


    elementoListaLivros.appendChild(livroDiv);
  }
}
