"use client";

import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);

  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <p>
        Redirecting to the English site...{" "}
        <a className="underline" href="/en/">
          Continue to FirmAnt Cameroon
        </a>
      </p>
    </main>
  );
}
