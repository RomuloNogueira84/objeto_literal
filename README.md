# 📚 Explorando Objetos Literais e Arrays de Objetos em JavaScript

Este repositório contém uma série de exercícios práticos para aprofundar o estudo e compreensão de **Objetos Literais** e **Arrays de Objetos** em JavaScript.

---

## O que são Objetos Literais?

Em JavaScript, um **objeto literal** é uma forma simples e concisa de criar objetos. Ele é uma coleção de pares **chave-valor**, onde cada chave (também chamada de propriedade) é uma string (ou um Symbol) que mapeia para um valor. Os valores podem ser de qualquer tipo de dado, incluindo outras funções ou objetos.

**Exemplo Básico:**

```javascript
var produto = {
  id: 9,
  nome: "Cafeteira Elétrica",
  valor: 99.00
};

console.log("O nome do produto: " + produto.nome);
// Saída: O nome do produto: Cafeteira Elétrica

Markdown

# 📚 Explorando Objetos Literais e Arrays de Objetos em JavaScript

Este repositório contém uma série de exercícios práticos para aprofundar o estudo e compreensão de **Objetos Literais** e **Arrays de Objetos** em JavaScript.

---

## O que são Objetos Literais?

Em JavaScript, um **objeto literal** é uma forma simples e concisa de criar objetos. Ele é uma coleção de pares **chave-valor**, onde cada chave (também chamada de propriedade) é uma string (ou um Symbol) que mapeia para um valor. Os valores podem ser de qualquer tipo de dado, incluindo outras funções ou objetos.

**Exemplo Básico:**

```javascript
var produto = {
  id: 9,
  nome: "Cafeteira Elétrica",
  valor: 99.00
};

console.log("O nome do produto: " + produto.nome);
// Saída: O nome do produto: Cafeteira Elétrica
O que são Arrays de Objetos?
Um array de objetos é, como o nome sugere, um array onde cada elemento é um objeto literal. Essa estrutura é extremamente útil para organizar coleções de dados relacionados, como listas de produtos, usuários, séries, etc.

Exemplo Básico:

JavaScript

var colecao_produtos = [
  { id: 1, nome: "Cooktop", preco: 380 },
  { id: 2, nome: "Geladeira", preco: 1350 },
  { id: 3, nome: "Notebook", preco: 2500 },
  { id: 4, nome: "Liquidificador", preco: 100 }
];

console.log(colecao_produtos.length);
// Saída: 4 (total de produtos)

console.log(colecao_produtos[3].nome);
// Saída: Liquidificador (nome do 4º produto)
Exercícios Práticos
Abaixo estão os exercícios que demonstram o uso de objetos literais e arrays de objetos em diferentes contextos.

1. Curiosidades do Chuck Norris
Este exercício demonstra a criação de um array de objetos para armazenar curiosidades e a seleção aleatória de uma delas para exibição.

JavaScript

var curiosidades_chuck_norris = [
  { titulo: " Cuidado com higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental."},
  { titulo: " Fórmula pra maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
  { titulo: " Suicida que não morre.", conteudo: "Chuck Norris foi homem bomba 34 vezes."},
  { titulo: " Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível."},
  { titulo: " Manipulando o tempo. ", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
  { titulo: " Praticando esportes radicais.", conteudo: "Chuck Norris faz bungee jump sem corda."},
  { titulo: " Não vale chorar", conteudo: "Chuck Norris fez cebolas chorarem."},
  { titulo: " Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero."},
  { titulo: " Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez,apenas uma."},
  { titulo: " Contando sem parar", conteudo: "Chuck Norris contou até o infinito.Duas vezes."},
];

var tamanho_colecao = curiosidades_chuck_norris.length;
var numero_sorteado = Math.floor(Math.random()* tamanho_colecao);
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

console.log("🥷🏻🥋🥊Curiosidade Sobre Chuck Norris 🥊🥋🤼");
console.log("Título: " + curiosidade_escolhida.titulo);
console.log("Conteúdo: " + curiosidade_escolhida.conteudo);
2. Manipulação de Arrays Simples
Este exemplo mostra como concatenar arrays, uma operação comum ao lidar com coleções de dados.

JavaScript

var tecnologias = [
  "Javascript",
  "PHP",
  "Python",
  "Java",
  "Delphi"
];

var novas_tecnologias = [
  "TypeScript",
  "Dart"
];

//a troca entre valores de um array deve ser feita aqui.
console.log(tecnologias = tecnologias.concat(novas_tecnologias));
// Saída: ["Javascript", "PHP", "Python", "Java", "Delphi", "TypeScript", "Dart"]
3. Objeto Programador
Um objeto literal simples para representar informações de um programador.

JavaScript

var programador ={
    nome: "Lucas Simões",
    linguagem: "Java"
};

var nome = programador.nome;
var linguagem = programador.linguagem;

console.log(nome + " domina a linguagem " + linguagem);
// Saída: Lucas Simões domina a linguagem Java
4. Coleção de Séries de Programação
Demonstra o uso de um array de objetos para gerenciar uma lista de séries, acessando dinamicamente a série do dia com base na data atual.

JavaScript

var colecao_series_programacao = [
    { nome: "Breaking Bad", horario: "21h", sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo", horario: "22h", sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost", horario: "20h", sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break", horario: "23h", sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror", horario: "23h", sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ", horario: "20h", sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark", horario: "22h", sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();
var dia_semana = data_atual.getDay(); // Retorna o dia da semana (0 para Domingo, 6 para Sábado)
var serie_do_dia = colecao_series_programacao[dia_semana];

console.log("Hoje é dia de " + serie_do_dia.nome + " às " + serie_do_dia.horario);
console.log("A seguir uma visão geral da série: " + serie_do_dia.sinopse);
5. Cálculo de Média de Notas
Um exemplo simples de array para armazenar notas e calcular a média.

JavaScript

var notas_aluno = [7, 6, 8, 5];

var total_notas = notas_aluno.length;

var soma_notas = notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3] ;

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno);
// Saída: Média do aluno: 6.5
6. Detalhes do Produto
Mais um exemplo de objeto literal para representar um único produto.

JavaScript

var produto ={
  id: 9,
  nome: "Cafeteira Elétrica",
  valor: 99.00
};

console.log("O nome do produto: " + produto.nome);
// Saída: O nome do produto: Cafeteira Elétrica
7. Signos do Zodíaco
Utiliza um array de objetos para listar signos com suas descrições e demonstra como acessar elementos específicos.

JavaScript

var signos = [
    { nome: "Aquário", descricao: "Inovação, originalidade e independência" },
    { nome: "Peixes", descricao: "Solidariedade, intuição e desapego" },
    { nome: "Áries", descricao: "Espontaneidade, coragem e energia" },
    { nome: "Touro", descricao: "Persistência, sensualidade e teimosia" },
    { nome: "Gêmeos", descricao: "Curiosidade, inteligência e liberdade" },
    { nome: "Câncer", descricao: "Sensibilidade, carinho e família" },
    { nome: "Leão", descricao: "Criatividade, autoestima e nobreza" },
    { nome: "Virgem", descricao: "Objetividade, humanidade e organização" },
    { nome: "Libra", descricao: "Vaidade, empatia e diplomacia" },
    { nome: "Escorpião", descricao: "Intensidade, mistério e intuição" },
    { nome: "Sagitário", descricao: "Otimismo, liberdade e movimento" },
    { nome: "Capricórnio", descricao: "Responsabilidade, ambição e persistência"}
];

var signo = {
    nome: "Gêmeos",
    descricao: "Curiosidade, inteligência e liberdade"
};

console.log(signos[11].descricao);
// Saída: Responsabilidade, ambição e persistência (Descrição de Capricórnio)

console.log(signo.nome);
// Saída: Gêmeos
8. Coleção de Produtos (Detalhada)
Um exercício que reforça o acesso a propriedades de objetos dentro de um array e a contagem de elementos.

JavaScript

var colecao_produtos = [
  { id: 1, nome: "Cooktop", preco: 380 },
  { id: 2, nome: "Geladeira", preco: 1350 },
  { id: 3, nome: "Notebook", preco: 2500 },
  { id: 4, nome: "Liquidificador", preco: 100 }
];


// Preencha as lacunas abaixo com os comandos solicitados:

// 1º Comando: Imprimir o total de produtos da coleção
console.log(colecao_produtos.length);
// Saída: 4

// 2º Comando: Imprimir o objeto que tem os dados do produto "Liquidificador"
console.log(colecao_produtos[3].nome);
// Saída: Liquidificador
console.log(colecao_produtos[3]);
/*
Saída:
{
  id: 4,
  nome: "Liquidificador",
  preco: 100
}
*/
9. Coleção de Animes
Similar aos exemplos anteriores, demonstra como acessar informações de objetos em um array.

JavaScript

var colecao_animes = [
    { id: 1, titulo: "Naruto", episodios: 673 },
    { id: 2, titulo: "Bleach", episodios: 366 },
    { id: 3, titulo: "One Piece", episodios: 931 }
];

var primeiro_anime = colecao_animes[0];

var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;

console.log("CURIOSIDADE SOBRE ANIMES:");
console.log("Id do anime: " + id_anime);
console.log("Título do anime: " + titulo_anime);
console.log("Total de episódios do anime: " + total_episodios_anime);
/*
Saída:
CURIOSIDADE SOBRE ANIMES:
Id do anime: 1
Título do anime: Naruto
Total de episódios do anime: 673
*/
10. Curiosidades Pokémon
Outro exemplo de sorteio aleatório de um objeto de um array, similar ao das curiosidades do Chuck Norris.

JavaScript

var curiosidades_pokemon = [
    { pokemon: "Kabuto", curiosidade: "Pokémon regenerado a partir de um fóssil" },
    { pokemon: "Electabuzz", curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans", curiosidade: "Seu nome ao contrário significa cobra em inglês" },
    { pokemon: "Dragonite", curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp", curiosidade: "Pula montanhas facilmente" },
    { pokemon: "Taillow", curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk", curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro" },
    { pokemon: "Slowbro", curiosidade: "Único pokémon que pode voltar à evolução anterior" },
    { pokemon: "Zapdos", curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários" },
    { pokemon: "Spoink", curiosidade: "Esse pokémon nunca para de pular" }
];

var tamanho_colecao = curiosidades_pokemon.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];

var nome_pokemon = pokemon_escolhido.pokemon;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);
/*
Saída (exemplo, pois é aleatório):
CURIOSIDADE SOBRE O UNIVERSO POKÉMON
Pokémon: Slowbro
Curiosidade: Único pokémon que pode voltar à evolução anterior
*/
11. Dados do Aluno
Um objeto literal simples para armazenar e exibir informações de um aluno.

JavaScript

var aluno ={
    nome: "Diego",
    idade: 25,
    email: "diego@email.com"
};

console.log("nome: " + aluno.nome);
console.log("idade: " + aluno.idade);
console.log("email: " + aluno.email);
/*
Saída:
nome: Diego
idade: 25
email: diego@email.com
*/
12. Coleção de Livros
Este exercício explora o acesso ao primeiro e último elementos de um array de objetos, além de obter o total de elementos.

JavaScript

var colecao_livros = [
  {id: 1, nome: "Dom Quixote", numero_paginas :863 },
  {id: 2, nome: "O Senhor dos Aneis", numero_paginas : 1200 },
  {id: 3, nome: "As Crônicas de Nárnia", numero_paginas : 752 },
  {id: 4, nome: "O Caçador de Pipas", numero_paginas : 371 },
  {id: 5, nome: "A Montanha Mágica", numero_paginas : 848 },
];

var total_livros = colecao_livros.length;//Aqui obtem o numero total de livros apresentados.

var primeiro_livro = colecao_livros[0];
var ultimo_livro = colecao_livros[colecao_livros.length - 1];

console.log("O total de livros é: " + total_livros);
console.log("O nome do primeiro livro da coleção é: " + primeiro_livro.nome);
console.log("O nome do último livro da coleção é: " + ultimo_livro.nome);
/*
Saída:
O total de livros é: 5
O nome do primeiro livro da coleção é: Dom Quixote
O nome do último livro da coleção é: A Montanha Mágica
*/
Como Usar Este Material
Para utilizar estes exemplos, você pode:

Clonar este repositório para o seu ambiente local.
Abrir os arquivos .js em um editor de texto.
Executar os scripts usando Node.js (se instalou) ou colar o código diretamente no console do navegador (Ferramentas de Desenvolvedor).
