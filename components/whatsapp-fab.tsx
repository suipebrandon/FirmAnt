"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/utils";

/** Floating WhatsApp action button — fixed bottom-right, directly above the back-to-top button */
export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}
      className="focus-ring fixed bottom-24 right-6 z-50 inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:bg-[#1ebe5d]"
      aria-label="Chat with Firm Ant on WhatsApp"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1 }}
    >
      <WhatsAppIcon className="size-6" />
    </motion.a>
  );
}