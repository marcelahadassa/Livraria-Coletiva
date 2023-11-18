var listaLivros = ["https://m.media-amazon.com/images/I/91LptBSFxQL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71uY1Ce7d2L._AC_UF894,1000_QL80_.jpg",
  "https://cdn.awsli.com.br/800x800/2507/2507517/produto/2107069317d8bdbcc97.jpg",
  "https://m.media-amazon.com/images/I/71kImPVRpAL._AC_UF1000,1000_QL80_.jpg"
];
var livrosNomes = ['Percy Jackson e o ladrão de raios', 'Alan Turing: The Enigma', 'Fazendo meu Filme 4', 'O clube dos amigos imaginários'];

var livrosExistentes = [];

function adicionarLivro() {
  var addLivro = document.getElementById('bookURL').value;
  var elementoListaLivros = document.getElementById('listaLivros');
  elementoListaLivros.innerHTML = '<img src=' + addLivro + '>'
  
}


for (var i = 0; i < listaLivros.length; i++) {


  document.write("<div style='display: inline-block; margin-top: 20px; margin-right: 30px; text-align: center;'>");
  document.write("<img src='" + listaLivros[i] + "'>");
  document.write("<p style='color: #ffffff; font-family: Verdana, sans-serif;'>" + livrosNomes[i] + "</p>");
  document.write("</div>");
}

