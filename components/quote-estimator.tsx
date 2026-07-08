"use client";

import { Calculator, CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/button";
import { whatsappHref } from "@/lib/utils";

const baseRates = {
  residential: 210000,
  church: 240000,
  commercial: 230000,
  renovation: 90000
};

export function QuoteEstimator() {
  const [type, setType] = useState<keyof typeof baseRates>("residential");
  const [size, setSize] = useState(120);
  const [finish, setFinish] = useState(1.15);

  const estimate = useMemo(() => Math.round(baseRates[type] * size * finish), [type, size, finish]);
  const formatted = new Intl.NumberFormat("en-CM", {
    style: "currency",
    currency: "XAF",
    maximumFractionDigits: 0
  }).format(estimate);

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-md bg-blush text-brand">
          <Calculator size={20} />
        </span>
        <div>
          <h3 className="text-lg font-bold">Quick cost guide</h3>
          <p className="text-sm text-ink/65">Indicative only. Site visit gives the final quote.</p>
        </div>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold">
          Project type
          <select className="focus-ring rounded-md border border-ink/15 bg-white p-3" value={type} onChange={(event) => setType(event.target.value as keyof typeof baseRates)}>
            <option value="residential">Residential home</option>
            <option value="church">Church building</option>
            <option value="commercial">Commercial space</option>
            <option value="renovation">Renovation</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Approximate size: {size} sqm
          <input className="accent-brand" type="range" min="30" max="800" step="10" value={size} onChange={(event) => setSize(Number(event.target.value))} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Finish level
          <select className="focus-ring rounded-md border border-ink/15 bg-white p-3" value={finish} onChange={(event) => setFinish(Number(event.target.value))}>
            <option value={1}>Standard</option>
            <option value={1.15}>Quality finishing</option>
            <option value={1.35}>Premium finishing</option>
          </select>
        </label>
      </div>

      <div className="my-5 rounded-md bg-ink p-4 text-white">
        <p className="text-sm text-white/70">Planning estimate</p>
        <p className="text-2xl font-bold">{formatted}</p>
      </div>

      <ul className="mb-5 grid gap-2 text-sm text-ink/70">
        {["Material choices can change cost", "Diaspora supervision reports available", "Quote includes timeline discussion"].map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 text-brand" size={17} /> {item}
          </li>
        ))}
      </ul>

      <Button className="w-full" href={whatsappHref(`Hello Firm Ant, my estimated project budget is ${formatted}. Please contact me.`)}>
        <Send size={18} /> Send estimate on WhatsApp
      </Button>
    </div>
  );
}
