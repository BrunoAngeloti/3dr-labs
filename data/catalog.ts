export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
};

export type Category = {
  id: string;
  title: string;
  image: string;
  products: Product[];
};

export const store = {
  name: "DR Labs",
  whatsapp: "5527988491385",
  logo: "/logo.png",
  instagram: "https://www.instagram.com/dr._labs/",
};

export const catalog: Category[] = [
   {    
    id: "brindes",
    title: "Brindes Para Empresas",  
    image: "/produtos/ursoamor.png",
    products: [ 
       {
        id: "PortaCelular",
        title: "Suporte para Celular",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "ChaveiroLogo",
        title: "Chaveiro Logo",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
          "/produtos/chaveirologo2.jpg",
        ],
      },
      {
        id: "Chaveiro Giratório",
        title: "Chaveiro Giratório",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/brindes/chaveiro giratório.jpg",
          "/produtos/brindes/chaveiro giratório2.jpg",
          "/produtos/brindes/chaveiro giratório3.jpg",
          "/produtos/brindes/chaveiro giratório4.jpg",
        ],
      },
      {
        id: "Abridoreslata",
        title: "Abridores de Lata",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/hellokittya.jpg",
          "/produtos/beijoa.jpg",
        ],
      },
      {
        id: "portaNFC",
        title: "Chaveiro porta Tag NFC",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/hellokittya.jpg",
          "/produtos/beijoa.jpg",
        ],
      },
    ],
  },
  {
      id: "religiosos",
      title: "Religiosos",
      image: "/produtos/Anjo-decorativo.jpg",
      products: [
        {
          id: "anjo-decorativo",
          title: "Anjo Decorativo",
          price: "R$ 49,90",
          description:
            "Anjo decorativo em impressão 3D, com detalhes vazados e acabamento translúcido. Ideal para decoração, presentes, lembranças religiosas ou ambientes de paz e espiritualidade.",
          images: [
            "/produtos/Anjo-decorativo3.jpg",
            "/produtos/Anjo-decorativo4.jpg",
            "/produtos/Anjo-decorativo5.jpg",
            "/produtos/Anjo-decorativo6.jpg",
          ],
        },
     {
        id: "marca-pagina-crisma",
        title: "Marca Página (Crisma) - Pomba",
        price: "R$ 25",
        description:
          "Marque suas leituras com fé e significado. Este marca-página personalizado para Crisma traz o símbolo do Espírito Santo, representando um momento especial na caminhada cristã. Perfeito como lembrança da celebração ou presente para familiares e padrinhos. Produzido em impressão 3D com ótimo acabamento e possibilidade de personalização com nome e data.",
        images: [
          "/produtos/marca-pagina-crisma.jpeg",
          "/produtos/marca-pagina-crisma3.jpeg",
        ],
      },
      {
        id: "maria-prismatica",
        title: "Escultura Virgem Maria Prismática",
        price: "R$ 60",
        description:
          "Delicada e elegante, esta escultura prismática da Santa Virgem Maria transforma devoção em decoração sofisticada. Ideal para altares, quartos ou ambientes de oração, com acabamento artístico que chama atenção em qualquer espaço.",
        images: [
          "/produtos/maria-prismatica.jpg",
          "/produtos/maria-prismatica4.jpg",
          "/produtos/maria-prismatica11.jpg",
        ],
      },
      {
        id: "jesus-prismatico",
        title: "Escultura Jesus Prismático",
        price: "R$ 60",
        description:
        "Uma peça decorativa única que une fé e arte em um design moderno prismático. Rica em detalhes e produzida em PLA dourada, é perfeita para decorar ambientes, presentear ou trazer um toque especial de espiritualidade para seu espaço.",
        images: [
          "/produtos/jesus-prismatico1.jpg",
          "/produtos/jesus-prismatico2.jpg",
          "/produtos/jesus-prismatico6.jpg",
          "/produtos/jesus-prismatico8.jpg",
        ],
      },
      {
        id: "marca-pagina-cruz",
        title: "Marca Página Personalizado - Cruz",
        price: "R$ 25",
        description:
          "Uma forma especial de eternizar a Primeira Eucaristia. Este marca-página com o símbolo da cruz representa fé, gratidão e um marco importante na vida cristã. Personalizável com nome e data, é perfeito como lembrança da celebração ou presente para familiares. Produzido em impressão 3D com design elegante e excelente nível de detalhes.",
        images: [
          "/produtos/marca-pagina-cruz.jpeg",
          "/produtos/marca-pagina-cruz2.jpeg",
        ],
      },
    ],
  },
  {    
    id: "suportes",
    title: "Suportes Celular/Controle/Fone",
    image: "/produtos/suporte-sm-teia.jpg",
    products: [
      {
        id: "suporte-sm-simples",
        title: "Suporte para Controle - Homem Aranha - Simples",
        price: "R$ 25",
        description:
          "Suporte para controle inspirado em tema de herói, feito em impressão 3D com acabamento resistente e design moderno. Ideal para organizar seu setup gamer com estilo e personalidade.",
        images: [
          "/produtos/suporte-sm-simples.jpg",
          "/produtos/suporte-sm-simples2.jpg",
          "/produtos/suporte-sm-simples4.jpg",
          "/produtos/suporte-sm-simples8.jpg",
        ],
      },
      {
        id: "suporte-sm-teia",
        title: "Suporte para Controle - Homem Aranha",
        price: "R$ 40",
        description:
          "Leve mais personalidade para seu setup com este suporte inspirado no Homem-Aranha. Além de manter seu controle organizado e protegido, ele funciona como peça decorativa para fãs da Marvel, com design criativo que destaca qualquer mesa gamer.",
        images: [
          "/produtos/suporte-sm-teia2.jpg",
          "/produtos/suporte-sm-teia3.jpg",
          "/produtos/suporte-sm-teia6.jpg",
          "/produtos/suporte-sm-teia9.jpg",
        ],
      },
      {
        id: "suporte-hf",
        title: "Suporte para Controle - Homem de Ferro",
        price: "R$ 35",
        description:
          "Organização e estilo em uma peça só. Inspirado na armadura do Homem de Ferro, este suporte acomoda seu controle com segurança e adiciona um visual marcante ao seu setup. Ideal para fãs de tecnologia, games e do universo Marvel.",
        images: [
          "/produtos/suporte-hf3.jpg",
          "/produtos/suporte-hf7.jpg",
        ],
      },
      {
        id: "suporte-ipad",
        title: "Suporte para iPad",
        price: "R$ 50",
        description:
          "Praticidade e conforto para o seu dia a dia. Este suporte mantém seu iPad na posição ideal para assistir, estudar, desenhar ou fazer videochamadas com mais ergonomia e estabilidade. Com design minimalista e resistente, é perfeito para mesas de trabalho, estudo ou uso doméstico.",
        images: [
          "/produtos/suporte-ipad.jpg",
          "/produtos/suporte-ipad2.jpg",
          "/produtos/suporte-ipad6.jpg",
          "/produtos/suporte-ipad11.jpg",
        ],
      },
      {
        id: "suporte-cristais",
        title: "Suporte para Controle de Video Game - Cristais",
        price: "R$ 35",
        description:
          "Organize seu setup com estilo. Este suporte para controle mantém seu joystick protegido, sempre acessível e ainda valoriza sua mesa com um visual geométrico moderno e diferenciado.",
        images: [
          "/produtos/suporte-cristais.jpg",
          "/produtos/suporte-cristais4.jpg",
        ],
      },
      {
        id: "suporte-ps5",
        title: "Suporte Duplo Para Controles",
        price: "R$ 35",
        description:
          "Organize seu setup com estilo. Este suporte para controle mantém seu joystick protegido, sempre acessível e ainda valoriza sua mesa com um visual geométrico moderno e diferenciado.",
        images: [
          "/produtos/suporte-duplo.jpeg",
          "/produtos/suporte-duplo1.jpeg",
          "/produtos/suporte-duplo2.jpeg",
        ],
      },
      {
        id: "suporte-cf",
        title: "Suporte Para Celular e Fone",
        price: "R$ 30",
        description:
          "Mantenha sua mesa organizada e seus dispositivos sempre à mão. Este suporte foi projetado para acomodar seu celular com estabilidade enquanto também serve como apoio para fones de ouvido, evitando bagunça e protegendo seus acessórios. Com design moderno e compacto, é perfeito para mesas de estudo, trabalho ou setup gamer. Produzido em impressão 3D de alta qualidade, é resistente, funcional e combina com qualquer ambiente.",
        images: [
          "/produtos/suporte-cf.jpg",
          "/produtos/suporte-cf4.jpg",
        ],
      },
    ],
  },
  {
    id: "animes-croche",
    title: "Animes Crochê",
    image: "/produtos/bonecos-croche/categoria.png",
    products: [
      {
        id: "Naruto-Crochê",
        title: "Naruto (Crochê)",
        price: "",
        description:
          "Inspirado em Como Treinar Seu Dragão, este Banguela em estilo crochê combina fofura e criatividade em uma peça única. Ideal para decorar mesas, nichos e setups, ou presentear fãs do dragão mais querido do cinema. Produzido em impressão 3D, é um item colecionável cheio de personalidade e charme.",
        images: [
          "/produtos/banguela-croche.jpg",
         ],
      },
      {
        id: "Zenitsucro",
        title: "Zenitsu (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/Esquilo-croche.jpg",
        ],
      },
      {
        id: "luffycro",
        title: "Luffy (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "gokucro",
        title: "Goku (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "vegetacro",
        title: "Vegeta (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "frieza",
        title: "Golden Frieza (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "makincro",
        title: "Majim Boo (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Itachicro",
        title: "Itachi (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "jirayiacro",
        title: "Jiraya (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "inosukecro",
        title: "Inosuke (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "tanjirocro",
        title: "Tanjiro (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "nezuko",
        title: "Nezuko (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Frankycro",
        title: "Franky (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "namicro",
        title: "Nami (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Ussopcro",
        title: "Usopp (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "jinbecro",
        title: "Jinbe (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Nicorobincro",
        title: "Nico Robin (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Brookcro",
        title: "Brook (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "tonytonycro",
        title: "Tony Tony Chopper (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
      {
        id: "Sanjycro",
        title: "Sanji (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/panda-croche.jpg",
        ],
      },
    ],
  },
  {    
    id: "classicoscro",
    title: "Personagens Clássicos Crochê",  
    image: "/produtos/ursoamor.png",
    products: [ 
      {
        id: "harrycro",
        title: "Harry Potter (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "mermionecro",
        title: "Hermione Granger (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "ronycro",
        title: "Rony Weasley (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "mariocro",
        title: "Mario (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "estrelaariocro",
        title: "Estrela Super Mário (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/portacll.jpg",
        ],
      },
      {
        id: "Stitchcro",
        title: "Stitch (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Stitchrosacro",
        title: "Stitch Rosa (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "lilocro",
        title: "Lilo (Stitch) (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Soniccro",
        title: "Sonic (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "taliscro",
        title: "Talis (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "dreggcro",
        title: "Dr. Eggman (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "silvercro",
        title: "Silver (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Shadowcro",
        title: "Shadow (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Supersoniccro",
        title: "Super Sonic (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Amyrosecro",
        title: "Amy Rose (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Knucklescro",
        title: "Knuckles (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/chaveirologo1.jpg",
        ],
      },
      {
        id: "Banguelacro",
        title: "Banguela (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "Snoopycro",
        title: "Snoopy (Crochê)",
        price: "Faça Seu Orçamento",
        description: "",
        images: [
          "/produtos/hellokittya.jpg",
          "/produtos/beijoa.jpg",
        ],
      },
      {
        id: "Baymaxcro",
        title: "Bay Max (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "minioncro",
        title: "Minion (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "patrick",
        title: "Patrick (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "mickeycro",
        title: "Mickey (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "Yoshy",
        title: "Yoshy (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "Bowsercro",
        title: "Bowser (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "monstrosacro",
        title: "Mike Wazowski (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "biscoitotoycro",
        title: "Homem de Gengibre Toy Story (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
      {
        id: "grinchcro",
        title: "Grinch (Crochê)",
        price: "",
        description: "",
        images: [
          "/produtos/giratório.jpg",
        ],
      },
    ],
  },
   {    
    id: "heroiscroche",
    title: "Super Heróis Crochê",  
    image: "/produtos/herois-croche/superman-croche.jpg",
    products: [
      {
        id: "supermancro",
        title: "Superman (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/superman-croche.jpg",
        ],
      },
       {
        id: "batmancro",
        title: "Batman (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/batman-croche.jpg",
        ],
      },
      {
        id: "grootcro",
        title: "Groot (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/1-groot-croche.jpg",
          "/produtos/herois-croche/19-groot-croche.jpg",
          "/produtos/herois-croche/43-groot-croche.jpg",        ],
      },
      {
        id: "darthvadercro",
        title: "Darth Vader (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/darth-vader-croche.jpg",
        ],
      },
      {
        id: "Yodacro",
        title: "Baby Yoda (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/baby-yoda-croche.jpg",
        ],
      },
      {
        id: "Stormtroopercro",
        title: "Stormtrooper (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/stormtrooper-croche.jpg",
        ],
      },
      {
        id: "droideBB-8cro",
        title: "Droide BB-8 (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/bb8-croche.jpg",
        ],
      },
      {
        id: "Mandalorianocro",
        title: "Mandaloriano (Crochê)",
        price: "",
        description:
          "",
        images: [
          "/produtos/herois-croche/mandaloriano-croche.jpg",
        ],
      },
    ],
  },
  {    
    id: "pokebola",
    title: "Pokebolas",  
    image: "/produtos/charizard.jpg",
    products: [
      {
        id: "Snorlaxpoke",
        title: "Pokebola - Snorlax",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/snorlax.png",
        ],
      },
       {
        id: "Lucariopoke",
        title: "Pokebola - Lucário",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/lucario.png",
        ],
      },
      {
        id: "leafeonpoke",
        title: "Pokebola - Leafeon",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/leafeon.png",
        ],
      },
      {
        id: "groundonpoke",
        title: "Pokebola - Groundon",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/pokebolas/groundon.png",
        ],
      },
      {
        id: "gastlypoke",
        title: "Pokebola - Gastly",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/pokebolas/gastly.png",
        ],
      },
      {
        id: "Charizardpoke",
        title: "Pokebola - Charizard",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/charizard.jpg",
        ],
      },
      {
        id: "Abrapoke",
        title: "Pokebola - Abra",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/abra.png",
        ],
      },
      {
        id: "dragonitepoke",
        title: "Pokebola - Dragonite",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/dragonite.png",
        ],
      },
      {
        id: "Caterpiepoke",
        title: "Pokebola - Caterpie",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/pokebolas/caterpie.png",
        ],
      },
      {
        id: "metapodpoke",
        title: "Pokebola - Metapod",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/pokebolas/metapod.png",
        ],
      },
      {
        id: "butterfreepoke",
        title: "Pokebola - Butterfree",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/butterfree.png",
        ],
      },
      {
        id: "fearowpoke",
        title: "Pokebola - Fearow",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/fearow.png",
        ],
      },
      {
        id: "Arbokpoke",
        title: "Pokebola - Arbok",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/arbok.png",
        ],
      },
      {
        id: "nidoranpoke",
        title: "Pokebola - Nidoran",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/nidoran.png",
        ],
      },
      {
        id: "nidoqueenpoke",
        title: "Pokebola - Nidoqueen",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/nidoqueen.png",
        ],
      },
      {
        id: "persianpoke",
        title: "Pokebola - Persian",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/persian.png",
        ],
      },
      {
        id: "kadabrapoke",
        title: "Pokebola - Kadabra",
        price: "R$ 55",
        description:
          "",
        images: [
          "/produtos/pokebolas/kadabra.png",
        ],
      },
      {
        id: "haunterpoke",
        title: "Pokebola - Haunter",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/haunter.png",
        ],
      },
      {
        id: "Gengarpoke",
        title: "Pokebola - Gengar",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/gengar.png",
        ],
      },
      {
        id: "Dratinipoke",
        title: "Pokebola - Dratini",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/dratini.png",
        ],
      },
      {
        id: "Espeonpoke",
        title: "Pokebola - Espeon",
        price: "R$ 55",
        description:
          "",
        images: [
          "/produtos/pokebolas/espeon.png",
        ],
      },
      {
        id: "Ubreonpoke",
        title: "Pokebola - Umbreon",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/pokebolas/umbreon.png",
        ],
      },
      {
        id: "Glaceonpoke",
        title: "Pokebola - Glaceon",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/glaceon.png",
        ],
      },
      {
        id: "raiquazapoke",
        title: "Pokebola - Raiquaza",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/rayquaza.png",
        ],
      },
      {
        id: "Kyogrepoke",
        title: "Pokebola - Kyogre",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/kyogre.png",
        ],
      },
      {
        id: "lugiapoke",
        title: "Pokebola - Lugia",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/lugia.png",
        ],
      },
      {
        id: "Greninjapoke",
        title: "Pokebola - Greninja",
        price: "R$ 60",
        description:
          "",
        images: [
          "/produtos/pokebolas/greninja.png",
        ],
      },
      {
        id: "Minikyupoke",
        title: "Pokebola - Minikyu",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/pokebolas/minikyu.png",
        ],
      },
      {
        id: "arcaninepoke",
        title: "Pokebola - Arcanine",
        price: "R$ 55",
        description:
          "",
        images: [
          "/produtos/pokebolas/arcanine.png",
        ],
      },
    ],
  },
  {    
    id: "animaiscroche",
    title: "Animais Crochê",  
    image: "/produtos/mariarosa.jpg",
    products: [
       {
        id: "dinobravocro",
        title: "Dino Bravo (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "dinocro2",
        title: "Dinossauro 2 (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "dinossauro",
        title: "Dinossauro (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "pouvocro",
        title: "Pouvo (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "tubaraocro",
        title: "Tubarão (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "lesmacoracro",
        title: "Lesma Coração (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "cachorrinhocro",
        title: "Cachorrinho (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "coalacro",
        title: "Coala (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "pinguincro",
        title: "Pinguim (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "golfinhocro",
        title: "Golfinho (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "baleiacro",
        title: "Baleia (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "gatocro",
        title: "Gato 2 (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "raposacro",
        title: "Raposa (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Minotaurocro",
        title: "Minotauro (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "lontracro",
        title: "Lontra (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "cachorrosalcro",
        title: "Cachorro Salsicha (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "dragãocro",
        title: "Dragão (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "dragãocro2",
        title: "Dragão 2 (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "UrsoPolarcro",
        title: "Urso Polar (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "coelhocro ",
        title: "Coelho (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "elefantecro",
        title: "Elefante (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "renacro",
        title: "Rena (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "aranhacro",
        title: "Aranha (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Gatocro",
        title: "Gato (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "gatinharosacro",
        title: "Gatinho Rosa (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Vacacro",
        title: "Vaca (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Girafacro",
        title: "Girafa (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "hipopotaocro",
        title: "Hipopotamo (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "Cachorrocro",
        title: "Cachorro (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "cachorrofofo",
        title: "Cachorro Fofo (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "rinocerrontecro",
        title: "Rinocerronte (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "porcocro",
        title: "Porco (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "passarocro",
        title: "Pássaro (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "renanaralcro",
        title: "Rena Natalina (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "ursopardocro",
        title: "Urso (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "ursocoracaocro",
        title: "Urso Coração (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "capivaracro",
        title: "Capivara (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "elefantecro2",
        title: "Elefante Colorido (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "focacro",
        title: "Foca (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "cobracro",
        title: "Cobra (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "patinhacro",
        title: "Patinha (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Galinhacro",
        title: "Galinha (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Castor",
        title: "Castor (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "lhaacro",
        title: "Lhama (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "corujacro",
        title: "Coruja (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
    ],
  },
  {    
    id: "pokecroche",
    title: "Pokemons Crochê",  
    image: "/produtos/pikachu.jpg",
    products: [
      {
        id: "caterpie",
        title: "Caterpie (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "gengarcro",
        title: "Gengar (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "eveecro",
        title: "Evee (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "charandercro",
        title: "Charmander (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "pikachucro",
        title: "Pikachu (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "pikachunatalcro",
        title: "Pikachu Natal (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Squartlecro",
        title: "Squartle (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
       {
        id: "Bulbassaurocro",
        title: "Bulbassauro (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Diglettcro",
        title: "Diglett (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Jigglypuffcro",
        title: "Jigglypuff (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "metapodcro",
        title: "Metapod (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Psyduckcro",
        title: "Psyduck (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "snorlaxcro",
        title: "Snorlax (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Wartortlecro",
        title: "Wartortle (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Togepicro",
        title: "Togepi (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Bayleefcro",
        title: "Bayleef (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Dittocro",
        title: "Ditto (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Geodudecro",
        title: "Geodude (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Omanytecro",
        title: "Omanyte (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "Voltorbcro",
        title: "Voltorb (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "pokebolacro",
        title: "pokebola (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
    ],
  },
  {    
    id: "potescroche",
    title: "Potes Crochê",  
    image: "/produtos/mariarosa.jpg",
    products: [
      {
        id: "potepresentecro",
        title: "Caixa Presente (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "caixapresentecro",
        title: "Caixa Presente 2 (Crochê)",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
       {
        id: "caixacircro",
        title: "Caixa Circular (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "tigelacro",
        title: "Tigela (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "caixacorcro",
        title: "Caixa Coração (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "bandejacircular",
        title: "Bandeja Circular (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "potecro",
        title: "Pote Cilíndrico (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "vasoflorcro",
        title: "Vaso (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "vasoflor2cro",
        title: "Vaso 2 (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "vasoflor3cro",
        title: "Vaso 3 (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "portatrecocro",
        title: "Porta Treco Coração (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "portatreco2cro",
        title: "Porta Treco (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "portatreco3cro",
        title: "Porta Treco 2 (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "portatreco4cro",
        title: "Porta Treco Grande (Crochê)",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
    ],
  },
  {    
    id: "Chaveiros-p",
    title: "Chaveiros Personalizados",  
    image: "/produtos/chaveiro1.jpg",
    products: [
      {
        id: "chaveiro-honeycomb",
        title: "Chavereiro - Colmeia",
        price: "R$ 35",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/colmeia1.jpg",
        ],
      },
      {
        id: "chaveiro-letra",
        title: "Chavereiro - Letra em Autorelevo",
        price: "R$ 35",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/relevo3.jpg",
        ],
      },
      {
        id: "chaveiro-nome",
        title: "Chaveiro Nome Simples",
        price: "R$ 20",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/chaveirosimples.jpg",
        ],
      },
      {
        id: "chaveiro-personalizado",
        title: "Chaveiro Flor/Estrela/Coração",
        price: "R$ 20",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/chaveiro1.jpg",
          "/produtos/chaveiro2.jpeg",
          "/produtos/chaveiro5.jpeg",
          "/produtos/chaveiroc.jpg",
        ],
      },
      {
        id: "chaveiro-italico",
        title: "Chaveiro Itálico",
        price: "R$ 20",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/chaveiro4.jpeg",
         "/produtos/italico3.jpg",  
        ],
      },
      {
        id: "chaveiro-disney",
        title: "Chaveiro Disney",
        price: "R$ 20",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/disney4.jpg",
        ],
      },
    ]
  },
  {    
    id: "topodebolo",
    title: "Topos de Bolo",  
    image: "/produtos/mariarosa.jpg",
    products: [
      {
        id: "Toponomedisney",
        title: "Topo de Bolo - Letreiro Disney",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
          "/produtos/placa2.jpg",
        ],
      },
       {
        id: "topoidade",
        title: "Topo de Bolo - Personalizado",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "topopersonagens",
        title: "Topo de Bolo - Heróis",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
      {
        id: "topopersonagens",
        title: "Topo de Bolo - Princesas",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
        ],
      },
    ],
  },
  {    
    id: "Abridoror",
    title: "Abridores de Lata",  
    image: "/produtos/mariarosa.jpg",
    products: [
      {
        id: "Abridorhellokitty",
        title: "Chaveiro Abridor de Lata - Hello Kitty",
        price: "R$ 15",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
       {
        id: "Abridorbeijo",
        title: "Chaveiro Abridor de Lata - Beijo",
        price: "R$ 15",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
      {
        id: "Abridormarca",
        title: "Chaveiro Abridor de Lata - Sua Marca",
        price: "R$ 15",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
        ],
      },
    ],
  },
  {    
    id: "colecionaveis",
    title: "Artigos Colecionáveis",  
    image: "/katana.jpg",
    products: [
      {
        id: "katana-inosuke",
        title: "Katana Inosuke",
        price: "R$ 80",
        description:
          "Leve para sua coleção a força e o estilo de um dos personagens mais marcantes dos animes. Esta katana inspirada em Inosuke é uma peça decorativa cheia de personalidade, perfeita para fãs, colecionadores ou para compor seu setup geek. Produzida em impressão 3D, possui design detalhado e acabamento que destaca o visual único da espada. Ideal para decoração, cosplay ou exposição.",
        images: [
          "/katana.jpg",
          "/katana3.jpg",
          "/katana5.jpg",
          "/katana7.jpg",
        ],
      },
      {
        id: "carrof1deco",
        title: "Carro Fórmula 1 - Decoração",
        price: "R$ 80",
        description:
          "Leve para sua coleção a força e o estilo de um dos personagens mais marcantes dos animes. Esta katana inspirada em Inosuke é uma peça decorativa cheia de personalidade, perfeita para fãs, colecionadores ou para compor seu setup geek. Produzida em impressão 3D, possui design detalhado e acabamento que destaca o visual único da espada. Ideal para decoração, cosplay ou exposição.",
        images: [
          "/katana.jpg",
        ],
      },
    ],
  },
  {    
    id: "decora",
    title: "Decoração",  
    image: "/produtos/mariarosa.jpg",
    products: [
      {
        id: "placa-timao",
        title: "Placa Escudos - Corinthians",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
          "/produtos/placa2.jpg",
        ],
      },
       {
        id: "personagens",
        title: "Personagens para Decoração",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
          "/produtos/pikachu.jpg",
          "/produtos/hellokitty.jpg",
          "/produtos/bixinho.jpg",

        ],
      },
    ],
  },
  {    
    id: "Personalizados",
    title: "Encomendas Personalizadas",  
    image: "/produtos/seu-boneco-personalizado.png",
    products: [
      {
        id: "letreiro-nome-personalizado",
        title: "Letreiro Nome Personalizado",
        price: "R$ 30",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/letreiro-personalizado.jpg",
          "/produtos/letreiro-personalizado2.jpg",
          "/produtos/letreiro-personalizado3.jpg",
          "/produtos/letreiro-personalizado4.jpg",
        ],
      },
      {
        id: "placa-timao",
        title: "Placa Escudos - Corinthians",
        price: "R$ 40",
        description:
          "",
        images: [
          "/produtos/placa.jpg",
          "/produtos/placa2.jpg",
        ],
      },
       {
        id: "personagens",
        title: "Personagens para Decoração",
        price: "R$ 20",
        description:
          "",
        images: [
          "/produtos/mariarosa.jpg",
          "/produtos/pikachu.jpg",
          "/produtos/hellokitty.jpg",
          "/produtos/bixinho.jpg",

        ],
      },
    ],
  },
  {    
    id: "dianamorados",
    title: "Especial Dia dos Namorados",  
    image: "/produtos/ursoamor.png",
    products: [ 
       {
        id: "ursoamor",
        title: "Ursinho do Amor",
        price: "R$ 35",
        description: "",
        images: [
          "/produtos/ursoamor.png",
          "/produtos/ursoamor2.png",
        ],
      },
      {
        id: "cartaamor",
        title: "Carta de Amor",
        price: "R$ 25",
        description: "",
        images: [
          "/produtos/cartaamor.png",
        ],
      },
      {
        id: "Legodoamor",
        title: "Lego do Amor",
        price: "R$ 60",
        description: "",
        images: [
          "/produtos/legoamor.png",
        ],
      },
      {
        id: "polaroidiloveu",
        title: "Polaroid I Love U",
        price: "R$ 20",
        description: "",
        images: [
          "/produtos/polaroidlove.png",
        ],
      },
      {
        id: "Gatinhoapai",
        title: "Gatinho Apaixonado",
        price: "R$ 25",
        description: "",
        images: [
          "/produtos/gatinhoapai.png",
        ],
      },
      {
        id: "molduraspot",
        title: "Gatinho Apaixonado",
        price: "R$ 25",
        description: "",
        images: [
          "/produtos/molduraspoti.png",
        ],
      },
      {
        id: "diadosnamosss",
        title: "Dia dos Namorados",
        price: "R$ 50",
        description: "",
        images: [
          "/produtos/diadosnamo.png",
          "/produtos/diadosnamo2.png",
        ],
      },
      {
        id: "Rosa4ever",
        title: "Rosa For Ever",
        price: "R$ 50",
        description: "",
        images: [
          "/produtos/rosa4ever.png",
        ],
      },
      {
        id: "molduralove",
        title: "Moldura Love",
        price: "R$ 30",
        description: "",
        images: [
          "/produtos/molduralov.png",
          "/produtos/molduralov2.png",
          "/produtos/molduralov3.png",
        ],
      },
      {
        id: "MolduradoAmor",
        title: "Moldura do Amor - Personalizável",
        price: "R$ 50",
        description: "",
        images: [
          "/produtos/molduradoamor.png",
          "/produtos/molduradoamor2.png",
        ],
      },
      {
        id: "molduracorac",
        title: "Moldura Coração",
        price: "R$ 60",
        description: "",
        images: [
          "/produtos/molduracorac.png",
        ],
      },
      {
        id: "Leetrirodoamor",
        title: "Letreiro do Amor",
        price: "R$ 30",
        description: "",
        images: [
          "/produtos/letreiroamor.png",
        ],
      },
      {
        id: "rosacaixa",
        title: "Rosa na Caixa",
        price: "R$ 40",
        description: "",
        images: [
          "/produtos/rosanacaixa.png",
          "/produtos/rosanacaixa2.png",
        ],
      },
      {
        id: "luminariaflor",
        title: "Luminária Flor",
        price: "R$ 40",
        description: "",
        images: [
          "/produtos/lumiflor.png",
        ],
      },
      {
        id: "marcapaginaamor",
        title: "Marca Página - Coração",
        price: "R$ 15",
        description: "",
        images: [
          "/produtos/marcapaginaamor.png",
        ],
      },
      {
        id: "ursoderosas",
        title: "Urso de Rosas",
        price: "R$ 60",
        description: "",
        images: [
          "/produtos/ursoderosas.png",
        ],
      },
    ],
  },
  {    
    id: "copa",
    title: "Especial Copa do Mundo",  
    image: "/produtos/neymar.jpg",
    products: [
      {
        id: "caixa-neymar",
        title: "Caixa Para Figurinhas - Especial Neymar JR",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/neymar.jpg",
          "/produtos/neymar2.jpg",
          "/produtos/neymar3.jpg",
          "/produtos/neymar4.jpg",
        ],
      },
      {
        id: "caixa-cr7",
        title: "Caixa Para Figurinhas - Especial Cristiano Ronaldo",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/cr7.jpg",
          "/produtos/cr72.jpg",
        ],
      },
      {
        id: "caixa-messi",
        title: "Caixa Para Figurinhas - Especial Messi",
        price: "R$ 50",
        description:
          "",
        images: [
          "/produtos/messi.jpg",
          "/produtos/messi2.jpg",
        ],
      },
      {
        id: "caixa-taca",
        title: "Caixa Para Figurinhas - Especial Taça",
        price: "R$ 45",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/caixa-taça.jpg",
          "/produtos/caixa-taça2.jpg",
        ],
      },
      {
        id: "caixa-granden",
        title: "Caixa Para Figurinhas - Grande",
        price: "R$ 40",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Caixa-granden.jpg",
          "/produtos/Caixa-granden2.jpg",
          "/produtos/caixa-granden3.jpg",
          "/produtos/Caixa-grande.jpg",

        ],
      },
      {
        id: "caixa-pequena",
        title: "Caixa Para Figurinhas - Pequena",
        price: "R$ 25",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/caixa-pequenan1.jpg",
          "/produtos/caixa-pequenan2.jpg",
          "/produtos/Caixa-pequenan3.jpg",
        ],
      },
       {
        id: "caixa-grande-personalizada",
        title: "Caixa Para Figurinhas - Grande com Nome",
        price: "R$ 40",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Caixa-grandep.jpg",
          "/produtos/Caixa-grandep2.jpg",
          "/produtos/Caixa-grandep3.jpg",
        ],
      },
      {
        id: "caixa-pequena-personalizada",
        title: "Caixa Para Figurinhas - Pequena com Nome",
        price: "R$ 25",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Caixa-pequenap.jpg",
          "/produtos/Caixa-pequenap2.jpg",
        ],
      },
      {
        id: "chaveiro-taca",
        title: "Chaveiro Taça",
        price: "R$ 10",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Chaveirotaça.jpg",
          "/produtos/Chaveirotaça2.jpg",
        ],
      },
    ],
  },
  {    
    id: "maes",
    title: "Especial Dia das Mães",  
    image: "/produtos/maecap.jpg",
    products: [
      {
        id: "latreiro",
        title: "Letreiro: Mãe, Eu Te Amo",
        price: "R$ 40",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/maeteamo.jpg",
        ],
      },
      {
        id: "moldura",
        title: "Moldura Dia das Mães",
        price: "R$ 45",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/moldura.jpg",
          "/produtos/moldura2.jpg",
        ],
      },
      {
        id: "melhormaedomundo",
        title: "Letreiro: Melhor Mãe do Mundo",
        price: "R$ 35",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/melhormae.jpg",
        ],
      },
      {
        id: "chaveiroiloveu",
        title: "Chaveiro: I Love You",
        price: "R$ 15",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/iloveu.jpg",
        ],
      },
      {
        id: "chaveirocoracao",
        title: "Chaveiro Coração: Nome Personalizado",
        price: "R$ 20",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/chaveiro5.jpeg",
        ],
      },
    ],
  },
];

export function getCategoryById(categoryId: string) {
  return catalog.find((category) => category.id === categoryId);
}

export function getProductById(productId: string) {
  for (const category of catalog) {
    const product = category.products.find((item) => item.id === productId);

    if (product) {
      return {
        product,
        category,
      };
    }
  }

  return null;
}
