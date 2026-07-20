import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-black tracking-tight">Firm Ant</p>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Build Your Dream with reliable construction, renovation and first-class finishing across Cameroon.
          </p>
        </div>
        <div className="text-sm text-white/70">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2">{contact.address}</p>
          <p className="mt-1">{contact.phoneDisplay}</p>
          <p className="mt-1">{contact.email}</p>
        </div>
        <div className="text-sm text-white/70 md:text-right">
          <p className="font-semibold text-white">Services</p>
          <p className="mt-2">Construction · Renovation</p>
          <p>Design · Project Management</p>
          <p className="mt-4 text-white/45">© {new Date().getFullYear()} Firm Ant Company</p>
        </div>
      </div>
    </footer>
  );
}
