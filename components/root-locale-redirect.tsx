"use client";

import { useEffect } from "react";
import Link from "next/link";

export function RootLocaleRedirect() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);

  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <p>
        Redirecting to the English site...{" "}
        <Link className="underline" href="/en/">
          Continue to FirmAnt Cameroon
        </Link>
      </p>
    </main>
  );
}
