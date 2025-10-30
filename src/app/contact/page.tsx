import Link from "next/link";

const formFields = [
  {
    id: "fullName",
    label: "Full name",
    type: "text",
    autoComplete: "name",
    placeholder: "Alex Johnson",
  },
  {
    id: "company",
    label: "Company or studio",
    type: "text",
    autoComplete: "organization",
    placeholder: "Vitrina Entertainment",
  },
  {
    id: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    placeholder: "alex@company.com",
  },
  {
    id: "role",
    label: "Role",
    type: "text",
    autoComplete: "organization-title",
    placeholder: "Head of Content Partnerships",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr,0.9fr] md:py-24 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex w-fit items-center rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            contact
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Request a ViQi walkthrough
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Share a few details and our team will orchestrate a customized deep-dive into how ViQi
            accelerates development, financing, distribution, and partner sourcing for your slate.
          </p>
          <div className="rounded-3xl border border-border/60 bg-muted/30 p-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">What to expect</p>
            <ul className="mt-3 space-y-2">
              {[
                "Tailored product session based on your strategic priorities",
                "Insights into our global entertainment knowledge graph",
                "Playbooks for integrating ViQi with existing workflow stack",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {formFields.map((field) => (
              <label key={field.id} className="flex flex-col gap-2 text-sm font-medium">
                <span>{field.label}</span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className="rounded-xl border border-border/60 bg-background px-3 py-2 text-sm text-foreground shadow-sm transition focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  required
                />
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium">
            <span>How can we help?</span>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your current focus, slate, or workflow challenges."
              rows={5}
              className="rounded-xl border border-border/60 bg-background px-3 py-2 text-sm text-foreground shadow-sm transition focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              required
            />
          </label>
          <div className="space-y-4 text-sm text-muted-foreground">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Demo
            </button>
            <p>
              Prefer email? Reach us at{" "}
              <Link
                href="mailto:hello@vitrina.ai"
                className="font-medium text-foreground hover:text-accent-foreground"
              >
                hello@vitrina.ai
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
