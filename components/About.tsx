export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-dark sm:text-4xl">About TunnelCheck</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            TunnelCheck Demo is a lightweight example landing page used to showcase how a
            single-page marketing site can be structured with a navbar, a hero section, an about
            section, and a contact form — all on one scrollable page.
          </p>
          <p>
            This page is a static UI-only demonstration: no data is sent anywhere, there is no
            backend, and the contact form below does not submit to a server. It exists purely to
            illustrate layout, typography, and smooth in-page navigation.
          </p>
        </div>
      </div>
    </section>
  );
}
