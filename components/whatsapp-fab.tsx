"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/utils";

/** Floating WhatsApp action button — fixed bottom-right on every page */
export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-soft transition hover:bg-ember"
      aria-label="Chat with Firm Ant on WhatsApp"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}