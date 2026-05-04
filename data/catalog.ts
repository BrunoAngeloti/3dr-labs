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
    id: "teste",
    title: "teste",
    image: "/produtos/bonecos-croche/categoria.png",
    products: [
      {
        id: "teste",
        title: "teste",
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
