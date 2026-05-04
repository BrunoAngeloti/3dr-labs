import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { store } from "@/data/catalog";
import { createWhatsappLink } from "@/lib/whatsapp";

type Props = {
  backHref?: string;
  backLabel?: string;
};

export function Header({ backHref, backLabel }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B10]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/10 bg-white">
              <Image
                src={store.logo}
                alt={store.name}
                fill
                className="object-contain p-1"
              />
            </div>

            <span className="text-lg font-semibold tracking-tight text-white">
              {store.name}
            </span>
          </Link>

          {backHref && backLabel && (
            <Link
              href={backHref}
              className="hidden text-sm text-zinc-400 transition hover:text-white md:block"
            >
              ← {backLabel}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={store.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>

      {backHref && backLabel && (
        <div className="border-t border-white/10 px-5 py-3 md:hidden">
          <Link href={backHref} className="text-sm text-zinc-400">
            ← {backLabel}
          </Link>
        </div>
      )}
    </header>
  );
}