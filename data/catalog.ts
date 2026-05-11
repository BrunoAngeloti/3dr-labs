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
          "/produtos/Banguela-croche.jpg",
          "/produtos/Banguela-croche2.jpg",
          "/produtos/Banguela-croche3.jpg",
          "/produtos/Banguela-croche4.jpg",
          "/produtos/Banguela-croche5.jpg",
         ],
      },
      {
        id: "esquilo-croche",
        title: "Esquilo (Crochê)",
        price: "R$ 30",
        description:
          "Uma peça decorativa cheia de charme que une o visual delicado do crochê com a criatividade da impressão 3D. Perfeito para decorar mesas, nichos e estantes, ou presentear quem ama itens fofos, criativos e colecionáveis.",
        images: [
          "/produtos/esquilo-croche.jpg",
          "/produtos/esquilo-croche2.jpg",
          "/produtos/esquilo-croche3.jpg",
          "/produtos/esquilo-croche4.jpg",
          "/produtos/esquilo-croche5.jpg",
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
            "/produtos/Anjo-decorativo.jpg",
            "/produtos/Anjo-decorativo2.jpg",
            "/produtos/Anjo-decorativo3.jpg",
            "/produtos/Anjo-decorativo4.jpg",
            "/produtos/Anjo-decorativo5.jpg",
          ],
        },
     {
        id: "marca-pagina-crisma",
        title: "Marca Página (Crisma) - Pomba",
        price: "R$ 25",
        description:
          "Marque suas leituras com fé e significado. Este marca-página personalizado para Crisma traz o símbolo do Espírito Santo, representando um momento especial na caminhada cristã. Perfeito como lembrança da celebração ou presente para familiares e padrinhos. Produzido em impressão 3D com ótimo acabamento e possibilidade de personalização com nome e data.",
        images: [
          "/produtos/marca-pagina-crisma.jpg",
          "/produtos/marca-pagina-crisma2.jpg",
          "/produtos/marca-pagina-crisma3.jpg",
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
          "/produtos/maria-prismatica2.jpg",
          "/produtos/maria-prismatica3.jpg",
          "/produtos/maria-prismatica4.jpg",
          "/produtos/maria-prismatica5.jpg",
        ],
      },
      {
        id: "jesus-prismatico",
        title: "Escultura Jesus Prismático",
        price: "R$ 60",
        description:
        "Uma peça decorativa única que une fé e arte em um design moderno prismático. Rica em detalhes e produzida em PLA dourada, é perfeita para decorar ambientes, presentear ou trazer um toque especial de espiritualidade para seu espaço.",
        images: [
          "/produtos/jesus-prismatico.jpg",
          "/produtos/jesus-prismatico2.jpg",
          "/produtos/jesus-prismatico3.jpg",
          "/produtos/jesus-prismatico4.jpg",
          "/produtos/jesus-prismatico5.jpg",
        ],
      },
      {
        id: "marca-pagina-cruz",
        title: "Marca Página Personalizado - Cruz",
        price: "R$ 25",
        description:
          "Uma forma especial de eternizar a Primeira Eucaristia. Este marca-página com o símbolo da cruz representa fé, gratidão e um marco importante na vida cristã. Personalizável com nome e data, é perfeito como lembrança da celebração ou presente para familiares. Produzido em impressão 3D com design elegante e excelente nível de detalhes.",
        images: [
          "/produtos/marca-pagina-cruz.jpg",
          "/produtos/marca-pagina-cruz2.jpg",
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
