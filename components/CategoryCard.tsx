import Image from "next/image";
import Link from "next/link";
import { Category } from "@/data/catalog";

type Props = {
  category: Category;
};

export function CategoryCard({ category }: Props) {
  return (
    <Link href={`/categoria/${category.id}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-white/25">
        <div className="relative aspect-[3/3] overflow-hidden bg-zinc-900">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-xs text-black font-medium bg-white px-3 py-1 rounded-full">
              {category.products.length} itens
            </span>

            <h2 className="mt-1 text-sm font-medium text-white">
              {category.title}
            </h2>
          </div>
        </div>
      </article>
    </Link>
  );
}