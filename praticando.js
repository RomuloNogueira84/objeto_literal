/*
Agora que sabemos como trabalhar com coleção de objetos,vamos criar um exemplo.Nele teremos algumas curiosidades do lendário Chuck Norris. A partir de um número randômico(aleatório) vamos acessar uma dessas curiosidades que está dentro de um array.
*/

var curiosidades_chuck_norris = [
  { titulo: " Cuidado com higiene bucal",              conteudo: "Chuck Norris usa arame farpado como fio dental."},
  { titulo: " Fórmula pra maratonar séries",           conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
  { titulo: " Suicida que não morre.",                 conteudo: "Chuck Norris foi homem bomba 34 vezes."},
  { titulo: " Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
  { titulo: " Manipulando o tempo. ",                  conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
  { titulo: " Praticando esportes radicais.",          conteudo: "Chuck Norris faz bungee jump sem corda."},
  { titulo: " Não vale chorar",                        conteudo: "Chuck Norris fez cebolas chorarem."},
  { titulo: " Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
  { titulo: " Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez,apenas uma."},
  { titulo: " Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito.Duas vezes."},
];

var tamanho_colecao = curiosidades_chuck_norris.length;
var numero_sorteado = Math.floor(Math.random()* tamanho_colecao);
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("🥷🏻🥋🥊Curiosidade Sobre Chuck Norris 🥊🥋🤼");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);