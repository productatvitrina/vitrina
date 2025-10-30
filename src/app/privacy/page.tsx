export default function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          ViQi by Vitrina is committed to safeguarding the privacy and security of our partners,
          clients, and the professionals represented in our intelligence network. A detailed view of
          our privacy program will be shared upon engagement.
        </p>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-muted/30 p-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            We collect and process information to power ViQi&apos;s search, qualification, outreach,
            and monitoring experiences. Data sources include our proprietary Vitrina intelligence
            graph, publicly available datasets, licensed third-party information, and user-provided
            feedback within the ViQi platform.
          </p>
          <p>
            ViQi maintains rigorous controls, including audit trails, encryption at rest and in
            transit, and role-based access policies. We continually evolve our governance model to
            align with international regulations across the markets where our entertainment partners
            operate.
          </p>
          <p>
            For formal documentation, data processing agreements, or regional compliance details,
            please contact our trust team at{" "}
            <a
              href="mailto:privacy@vitrina.ai"
              className="font-medium text-foreground underline-offset-4 hover:text-accent-foreground"
            >
              privacy@vitrina.ai
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
