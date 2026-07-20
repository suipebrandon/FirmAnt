"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/button";
import { contact } from "@/lib/content";
import { whatsappHref } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(7, "Enter a valid phone or WhatsApp number"),
  projectType: z.string().min(1),
  city: z.string().min(2, "Enter the project city"),
  budget: z.string().min(1),
  details: z.string().min(15, "Share a few project details")
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = () => setSent(true);

  const values = getValues();
  const message = `Hello Firm Ant, my name is ${values.name ?? ""}. Project: ${values.projectType ?? ""} in ${values.city ?? ""}. Budget: ${values.budget ?? ""}. Details: ${values.details ?? ""}. Phone: ${values.phone ?? ""}`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 rounded-lg border border-ink/10 bg-white p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className="field" {...register("name")} placeholder="Your full name" />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message}>
          <input className="field" {...register("phone")} placeholder="+237…" />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Project type" error={errors.projectType?.message}>
          <select className="field" {...register("projectType")}>
            <option value="Residential">Residential</option>
            <option value="Church">Church</option>
            <option value="Commercial">Commercial</option>
            <option value="Renovation">Renovation</option>
            <option value="Interior/Furniture">Interior / Furniture</option>
            <option value="Project Management">Project Management</option>
          </select>
        </Field>
        <Field label="Project city" error={errors.city?.message}>
          <input className="field" {...register("city")} placeholder="Buea, Limbe, Douala…" />
        </Field>
      </div>

      <Field label="Budget range" error={errors.budget?.message}>
        <select className="field" {...register("budget")}>
          <option value="Under 5M XAF">Under 5M XAF</option>
          <option value="5M - 20M XAF">5M – 20M XAF</option>
          <option value="20M - 60M XAF">20M – 60M XAF</option>
          <option value="60M+ XAF">60M+ XAF</option>
          <option value="Need guidance">Need guidance</option>
        </select>
      </Field>

      <Field label="Project details" error={errors.details?.message}>
        <textarea
          className="field min-h-32 resize-y"
          {...register("details")}
          placeholder="Tell us what you want to build, renovate or design."
        />
      </Field>

      {sent && (
        <div className="rounded-md bg-blush p-4 text-sm font-medium text-brand">
          Your details are ready. Continue on WhatsApp or email Firm Ant for the fastest follow-up.
        </div>
      )}

      <button
        className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
        type="submit"
      >
        <Check size={18} /> Review details
      </button>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button href={whatsappHref(message)}>
          <MessageCircle size={18} /> Continue on WhatsApp
        </Button>
        <Button
          variant="secondary"
          href={`mailto:${contact.email}?subject=Firm Ant quote request&body=${encodeURIComponent(message)}`}
        >
          <Mail size={18} /> Send email
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}
