import { store } from "@/data/catalog";

export function createWhatsappLink(productTitle?: string) {
  const message = productTitle
    ? `Olá! Tenho interesse no produto: ${productTitle}`
    : "Olá! Vim pelo catálogo e gostaria de saber mais.";

  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
}