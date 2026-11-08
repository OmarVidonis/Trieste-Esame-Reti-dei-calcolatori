var elencoCuriosita = [
  'A Trieste il caffè ha nomi propri: un espresso si chiama "nero" e un macchiato si chiama "capo".',
  "Nel 1719 l'imperatore Carlo VI d'Asburgo dichiarò Trieste porto franco.",
  "Lo scrittore irlandese James Joyce visse a Trieste per molti anni all'inizio del Novecento.",
  'Italo Svevo, autore de "La coscienza di Zeno", nacque a Trieste.',
  "La Grotta Gigante, sul Carso triestino, è una delle grotte turistiche più grandi del mondo.",
  'A Trieste c\'è un museo dedicato alla Bora, chiamato "Magazzino dei Venti".',
  "Il tram di Opicina fu inaugurato nel 1902 per unire il centro all'altipiano del Carso.",
  "Il Molo Audace prende il nome dalla prima nave italiana entrata nel porto di Trieste nel 1918.",
  "Il Caffè San Marco, uno dei caffè storici della città, aprì nel 1914.",
  "In pieno centro si possono vedere i resti di un teatro romano.",
];

function mostraCuriosita() {
  var numero = Math.floor(Math.random() * elencoCuriosita.length);
  document.getElementById("testo-curiosita").textContent =
    elencoCuriosita[numero];
}
