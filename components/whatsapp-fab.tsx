"use client";

import { motion } from "framer-motion";
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
      <svg
        aria-hidden="true"
        viewBox="0 0 448 512"
        className="size-6 fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.5 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l118.4-31.1c32.6 17.8 69.4 27.2 105.4 27.2h.1c122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65-157zm-157 341.6c-33 0-65.3-8.9-93.5-25.7l-6.7-4-70.2 18.4 18.7-68.4-4.4-7c-18.5-29.4-28.2-63.4-28.2-98 0-101.6 82.7-184.3 184.4-184.3 49.2 0 95.5 19.2 130.3 54.1 34.8 34.8 54 81.1 54 130.3 0 101.7-82.7 184.6-184.4 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.7-3.2 3.7-6.5 4.2-12 1.4-32.8-16.4-54.3-29.3-76-66.5-5.7-9.8 5.7-9.1 16.4-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.7 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.5-6.6z" />
      </svg>
    </motion.a>
  );
}