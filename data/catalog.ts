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
    id: "copa",
    title: "Especial Copa do Mundo",  
    image: "/produtos/caixas.jpeg",
    products: [
      {
        id: "caixa-grande",
        title: "Caixa Para Figurinhas - Grande",
        price: "R$ 40",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Caixa-grande.jpg",
          "/produtos/Caixa-grande2.jpg",
          "/produtos/Caixa-grande3.jpg",
        ],
      },
      {
        id: "caixa-pequena",
        title: "Caixa Para Figurinhas - Pequena",
        price: "R$ 20",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Caixa-pequena1.jpeg",
          "/produtos/Caixa-pequena2.jpeg",
          "/produtos/Caixa-pequena3.jpeg",
        ],
      },
      {
        id: "combo",
        title: "1 Caixa Para Figurinhas - Pequena + 1 Caixa Para Figurinhas - Pequena",
        price: "R$ 55",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/caixas.jpeg",
          "/produtos/Caixa-grande.jpg",
          "/produtos/Caixa-grande2.jpg",
          "/produtos/Caixa-pequena1.jpeg",
        ],
      },
       {
        id: "caixa-grande-personalizada",
        title: "Caixa Para Figurinhas - Grande com Nome",
        price: "R$ 45",
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
        id: "chaveiro-taça",
        title: "Chaveiro Taça",
        price: "R$ 20",
        description:
          "Letreiro personalizado em impressão 3D com seu nome ou palavra desejada. Ideal para decoração de quartos, mesas ou para presentear alguém especial. Com design moderno e acabamento de qualidade, é uma peça criativa que adiciona personalidade a qualquer ambiente.",
        images: [
          "/produtos/Chaveirotaça.jpg",
          "/produtos/Chaveirotaça2.jpg",
          "/produtos/Chaveirotaça3.jpg",
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
  {    
    id: "Personalizados",
    title: "Artigos Personalizados",  
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
        id: "seu-boneco-personalizado",
        title: "Seu Boneco Personalizado",
        price: "R$ 65",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/seu-boneco-personalizado.png",
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
          "/produtos/chaveiroalice.jpg",
          "/produtos/disney2.jpg",
          "/produtos/disney3.jpg",
        ],
      },
      {
        id: "letreiro-nome",
        title: "Letreiro Nome - Disney",
        price: "R$ 35",
        description:
          "Guarde para sempre um dos momentos mais importantes da sua vida. Esta miniatura estilo colecionável cria uma lembrança única e cheia de significado. Perfeita para decorar mesas, estantes ou presentear alguém especial que está conquistando uma grande etapa. Produzida em impressão 3D com ótimo nível de detalhes, é uma recordação criativa e exclusiva.",
        images: [
          "/produtos/Letreironome.jpeg",
        ],
      },
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
    ],
  },
  {
    id: "bonecos-croche",
    title: "Bonecos Crochê",
    image: "/produtos/bonecos-croche/categoria.png",
    products: [
      {
        id: "banguela-croche",
        title: "Banguela - Como Treinar Seu Dragão (Crochê)",
        price: "R$ 30",
        description:
          "Inspirado em Como Treinar Seu Dragão, este Banguela em estilo crochê combina fofura e criatividade em uma peça única. Ideal para decorar mesas, nichos e setups, ou presentear fãs do dragão mais querido do cinema. Produzido em impressão 3D, é um item colecionável cheio de personalidade e charme.",
        images: [
          "/produtos/banguela-croche.jpg",
          "/produtos/banguela-croche2.jpg",
          "/produtos/banguela-croche3.jpg",
          "/produtos/banguela-croche4.jpg",
          "/produtos/banguela-croche5.jpg",
         ],
      },
      {
        id: "esquilo-croche",
        title: "Esquilo (Crochê)",
        price: "R$ 30",
        description:
          "Uma peça decorativa cheia de charme que une o visual delicado do crochê com a criatividade da impressão 3D. Perfeito para decorar mesas, nichos e estantes, ou presentear quem ama itens fofos, criativos e colecionáveis.",
        images: [
          "/produtos/Esquilo-croche.jpg",
          "/produtos/Esquilo-croche2.jpg",
          "/produtos/Esquilo-croche3.jpg",
          "/produtos/Esquilo-croche4.jpg",
          "/produtos/Esquilo-croche5.jpg",
        ],
      },
      {
        id: "urso-panda-croche",
        title: "Urso Panda (Crochê)",
        price: "R$ 30",
        description:
          "Uma peça decorativa charmosa que combina o visual delicado do crochê com a criatividade da impressão 3D. Ideal para decorar mesas, nichos ou presentear alguém que ama itens fofos e colecionáveis.",
        images: [
          "/produtos/panda-croche.jpg",
          "/produtos/panda-croche2.jpg",
          "/produtos/panda-croche3.jpg",
          "/produtos/panda-croche4.jpg",
          "/produtos/panda-croche5.jpg",
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
    title: "Suportes",
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
    ],
  },
  {    
    id: "Formula1",
    title: "Artigos de Fórmula 1",  
    image: "/produtos/miniatura-f1.jpg",
    products: [
      {
        id: "carro-formula-1-miniatura",
        title: "Carro Fórmula 1 Miniatura",
        price: "R$ 50",
        description:
          "Uma miniatura inspirada nos carros de Fórmula 1, perfeita para fãs de automobilismo e velocidade. Com design detalhado e visual moderno, é ideal para decorar mesas, estantes, setups ou coleções. Produzido em impressão 3D de alta qualidade, combina estilo, personalidade e acabamento impecável.",
        images: [
          "/produtos/miniatura-f11.jpg",
          "/produtos/miniatura-f13.jpg",
          "/produtos/miniatura-f14.jpg",
        ],
      },
      {
        id: "logo-decorativo-f1",
        title: "Logo Decorativo F1",
        price: "R$ 30",
        description:
          "Uma peça decorativa perfeita para fãs de automobilismo e velocidade. Inspirada no universo da Fórmula 1, esta logo traz um visual moderno e marcante para setups, mesas, quartos ou coleções. Produzida em impressão 3D com ótimo acabamento, é ideal para adicionar personalidade e um toque esportivo ao ambiente.",
        images: [
          "/produtos/LLogo-F!d.jpg",
          "/produtos/LLogo-F!d6.jpg",
        ],
      },
      {
        id: "chaveiro-mercedez",
        title: "Chaveiro Escuderia Mercedez F1",
        price: "R$ 15",
        description:
          "Leve sua paixão pelo automobilismo para todo lugar. Com design inspirado na equipe Mercedes F1, este chaveiro é um acessório perfeito para fãs de corrida e também uma ótima opção para presentear.",
        images: [
          "/produtos/Chaveiro-meercedez.jpg",
          "/produtos/Chaveiro-meercedez2.jpg",
          "/produtos/Chaveiro-meercedez3.jpg",
          "/produtos/Chaveiro-meercedez4.jpg",
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
