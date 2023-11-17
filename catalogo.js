var listaLivros = [];
listaLivros[0] =
  "https://m.media-amazon.com/images/I/91LptBSFxQL._AC_UF1000,1000_QL80_.jpg";
listaLivros[1] =
  "https://m.media-amazon.com/images/I/71uY1Ce7d2L._AC_UF894,1000_QL80_.jpg";
listaLivros[2] =
  "https://cdn.awsli.com.br/800x800/2507/2507517/produto/2107069317d8bdbcc97.jpg";
listaLivros[3] =
  "https://m.media-amazon.com/images/I/71kImPVRpAL._AC_UF1000,1000_QL80_.jpg";

for (var i = 0; i < 4; i = i++) {
  document.write("<img src= " + listaLivros[i] + ">");
}

document.write("<img src= " + listaLivros[0] + ">");
document.write("<img src= " + listaLivros[1] + ">");
document.write("<img src= " + listaLivros[2] + ">");
document.write("<img src= " + listaLivros[3] + ">");
