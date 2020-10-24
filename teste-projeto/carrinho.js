const items = [
  {
    id: 0,
    nome: "Orquídia",
    img: "img/orquidia.jpg",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Tulipa",
    img: "img/tulipa.jpg",
    preco: 39.9,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Rosas",
    img: "img/rosa.jpg",
    preco: 45.9,
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Suculenta",
    img: "img/suculenta.jpg",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Terrário",
    img: "img/terrario1.jpg",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 5,
    nome: "Terrário com fonte",
    img: "img/terrario2.png",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 6,
    nome: "Manjericão",
    img:
      "img/Screenshot_2020-10-15 Arranjo de Buquê De Manjericão Artificial Em Vaso de Cerâmica com Musgo Florae.png",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 7,
    nome: "Alecrim",
    img:
      "img/Screenshot_2020-10-15 Arranjo de Buquê De Alecrim Artificial Em Vaso de Cerâmica com Musgo Florae.png",
    preco: 50.9,
    quantidade: 0,
  },
  {
    id: 8,
    nome: "Agrião",
    img:
      "img/Screenshot_2020-10-15 Como cultivar Agrião em casa - Ciclo Orgânico.png",
    preco: 50.9,
    quantidade: 0,
  },
];
inicializarLoja = () => {
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    containerProdutos.innerHTML +=
      ` <div id="produtos-container">
                <div class="produto-single" >
                    <img id="img-card" src="` +
      val.img +
      `" />
                    <p> ` +
      val.nome +
      ` </p>
                    <a class="adicionar" key="` +
      val.id +
      `" href="#"> Adicionar ao carrinho </a>
                </div>
        </div>
        `;
  });
};
inicializarLoja();

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = "";
  items.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
         <p>` +
        val.nome +
        ` | quantidade: ` +
        val.quantidade +
        ` | preço ` +
        val.preco +
        `</p>
         <hr>
  
        `;
    }
  });
};
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let soma = this.getAttribute("soma");
    items[soma].i * preco;
    atualizarCarrinho();
    return false;
  });
}