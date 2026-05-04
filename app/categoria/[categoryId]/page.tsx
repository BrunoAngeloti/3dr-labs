import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { getCategoryById } from "@/data/catalog";

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header backHref="/" backLabel="Categorias" />

      <section className="mx-auto max-w-5xl px-5 pb-10 pt-14">
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
          Categoria
        </span>

        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            {category.title}
          </h1>

          <p className="text-sm text-zinc-500">
            {category.products.length} produto
            {category.products.length === 1 ? "" : "s"}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.length > 0 ? (
          category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-white/10 bg-white/[0.035] p-8 text-sm text-zinc-400">
            Nenhum produto cadastrado nesta categoria ainda.
          </div>
        )}
      </section>
    </main>
  );
}