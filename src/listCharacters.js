const listCharacters = [
  {
    titleCard: "Mister No",
    imgCard: require(`./assets/cards/mister.jpg`),
    descriptionCard:
      "Jerry Drake é um piloto americano que vive suas aventuras na Amazônia dos anos cinquenta. Apelidado de Mister No pela sua falta de afabilidade, lutou na Segunda Guerra Mundial e agora acompanha turistas nos céus da sua nova pátria.",
  },
  {
    titleCard: "Dampyr",
    imgCard: require(`./assets/cards/dampyr.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dylan Dog",
    imgCard: require(`./assets/cards/dylan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Brad Barron",
    imgCard: require(`./assets/cards/brad.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Adam Wild",
    imgCard: require(`./assets/cards/adam.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Julia",
    imgCard: require(`./assets/cards/julia.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Legs Weaver",
    imgCard: require(`./assets/cards/legs.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Caravan",
    imgCard: require(`./assets/cards/caravan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Cassidy",
    imgCard: require(`./assets/cards/cassidy.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Commissario Ricciardi",
    imgCard: require(`./assets/cards/commissario.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Jass Dix",
    imgCard: require(`./assets/cards/dix.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Demian",
    imgCard: require(`./assets/cards/demian.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Magico Vento",
    imgCard: require(`./assets/cards/magico.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dragonero",
    imgCard: require(`./assets/cards/dragonero.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Grey Storm",
    imgCard: require(`./assets/cards/greystorm.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dessa",
    imgCard: require(`./assets/cards/dessa.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Lilith",
    imgCard: require(`./assets/cards/lilith.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Martin",
    imgCard: require(`./assets/cards/martin.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Lukas",
    imgCard: require(`./assets/cards/lukas.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Morgan Lost",
    imgCard: require(`./assets/cards/morgan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Nick Raider",
    imgCard: require(`./assets/cards/nick.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Napoleone",
    imgCard: require(`./assets/cards/napoleone.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Tex",
    imgCard: require(`./assets/cards/tex.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Jonathan Steele",
    imgCard: require(`./assets/cards/jonathan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Nathan Never",
    imgCard: require(`./assets/cards/nathan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Saguaro",
    imgCard: require(`./assets/cards/saguaro.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Shanghai Devil",
    imgCard: require(`./assets/cards/shanghai.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Gea",
    imgCard: require(`./assets/cards/gea.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Zagor",
    imgCard: require(`./assets/cards/zagor.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Brendon",
    imgCard: require(`./assets/cards/brendon.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Gregory Hunter",
    imgCard: require(`./assets/cards/gregory.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
];

export default listCharacters;
