import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/catalog";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/produto/${product.id}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-white/25">
        <div className="relative aspect-[3/3] overflow-hidden bg-zinc-900">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-md font-medium text-white">{product.title}</h3>

            <span className="mt-1 block text-sm text-zinc-200">
              {product.price}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}