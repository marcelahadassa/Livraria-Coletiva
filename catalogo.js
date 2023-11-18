var listaLivros = ["https://m.media-amazon.com/images/I/91LptBSFxQL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71uY1Ce7d2L._AC_UF894,1000_QL80_.jpg",
  "https://cdn.awsli.com.br/800x800/2507/2507517/produto/2107069317d8bdbcc97.jpg",
  "https://m.media-amazon.com/images/I/71kImPVRpAL._AC_UF1000,1000_QL80_.jpg"
];
var livrosNomes = ['Percy Jackson e o ladrão de raios', 'Alan Turing: The Enigma', 'Fazendo meu Filme 4', 'O clube dos amigos imaginários'];

exibirLivros();

function adicionarLivro() {
  var addLivroUrl = document.getElementById('bookUrl').value;
  var addLivroNome = document.getElementById('bookCover').value;

  // Adiciona o novo livro à lista
  listaLivros.push(addLivroUrl);
  livrosNomes.push(addLivroNome);

  // Atualiza a exibição dos livros
  exibirLivros();
}

function exibirLivros() {
  var elementoListaLivros = document.getElementById('listaLivros');
  elementoListaLivros.innerHTML = '';

  for (var i = 0; i < listaLivros.length; i++) {
    var livroDiv = document.createElement('div');
    livroDiv.className = 'livro-item'; // Add a class for styling

    var livroImg = document.createElement('img');
    livroImg.src = listaLivros[i];
    livroDiv.appendChild(livroImg);

    var livroNome = document.createElement('p');
    livroNome.className = 'livro-nome'; // Add a class for styling
    livroNome.textContent = livrosNomes[i];
    livroDiv.appendChild(livroNome);

    elementoListaLivros.appendChild(livroDiv);
  }
}
