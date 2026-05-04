import Image from "next/image";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { catalog } from "@/data/catalog";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      {/* BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 overflow-hidden md:left-auto md:right-0 md:h-[680px] md:w-[1100px] md:translate-x-0">
        <Image
          src="/hero.png"
          alt="Produto impresso em 3D"
          fill
          priority
          className="object-cover object-center opacity-10 [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)]"
        />
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-5 pb-14 pt-14 md:pt-20">
        <div className="max-w-md">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
            Catálogo 3D
          </span>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-5xl">
            Peças impressas em 3D para presentear, decorar e colecionar.
          </h1>

          <a
            href="#catalogo"
            className="mt-6 inline-flex rounded-md border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="catalogo" className="relative mx-auto max-w-5xl px-5 pb-20">
        <div className="mb-5">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-300">
            Categorias
          </span>
        </div>

        <div className="grid gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}