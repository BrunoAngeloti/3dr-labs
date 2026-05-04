import { Category } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

type Props = {
  category: Category;
};

export function CategorySection({ category }: Props) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
          Categoria
        </span>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          {category.title}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}