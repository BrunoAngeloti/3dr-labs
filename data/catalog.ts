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
        id: "ursinho-croche",
        title: "Ursinho Crochê 3D",
        price: "R$ 49,90",
        description:
          "Boneco decorativo com acabamento texturizado, ideal para presentes e decoração.",
        images: [
          "/produtos/bonecos-croche/ursinho-1.png",
          "/produtos/bonecos-croche/ursinho-2.png",
          "/produtos/bonecos-croche/ursinho-3.png",
        ],
      },
    ],
  },
  {
    id: "religiosos",
    title: "Religiosos",
    image: "public/produtos/Anjo-decorativo.jpg",
    products: [
      {
        id: "anjo-decorativo",
        title: "Anjo Decorativo",
        price: "R$ 49,90",
        description:
          "Anjo decorativo em impressão 3D, com detalhes vazados e acabamento translúcido. Ideal para decoração, presentes, lembranças religiosas ou ambientes de paz e espiritualidade.",
        images: [
          "/produtos/Anjo-decorativo.jpg",
          "/produtos/Anjo-decorativo1.jpg",
          "/produtos/Anjo-decorativo2.jpg",
          "/produtos/Anjo-decorativo3.jpg",
          "/produtos/Anjo-decorativo4.jpg",
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
