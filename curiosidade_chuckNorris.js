// Lista de curiosidades sobre Chuck Norris
var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
    { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
    { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível." },
    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
    { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito. Duas vezes." }
];

// Obtém o tamanho da coleção
var tamanho_colecao = curiosidades_chuck_norris.length;

// Sorteia um número aleatório dentro do intervalo de índices da coleção
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

// Obtém a curiosidade sorteada
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

// Exibe a curiosidade corretamente
console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + curiosidade_escolhida.titulo);
console.log("Conteúdo: " + curiosidade_escolhida.conteudo);