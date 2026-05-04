import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ProductCarousel } from "@/components/ProductCarousel";
import { createWhatsappLink } from "@/lib/whatsapp";
import { getProductById } from "@/data/catalog";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  const result = getProductById(productId);

  if (!result) {
    notFound();
  }

  const { product, category } = result;

  const relatedProducts = category.products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <Header backHref={`/categoria/${category.id}`} backLabel={category.title} />

      <section className="mx-auto grid max-w-5xl gap-8 px-5 pb-16 pt-14 md:grid-cols-2 md:items-start">
        <ProductCarousel images={product.images} title={product.title} />

        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <Link
            href={`/categoria/${category.id}`}
            className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 transition hover:text-white"
          >
            {category.title}
          </Link>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            {product.title}
          </h1>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            {product.description}
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Preço
            </span>

            <strong className="mt-2 block text-3xl font-semibold text-white">
              {product.price}
            </strong>

            <a
              href={createWhatsappLink(product.title)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full justify-center rounded-md border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 sm:w-auto"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-20">
          <div className="mb-5 border-t border-white/10 pt-10">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
              Veja também
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}