import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whatsappHref = (message: string) => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "237654270882";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
