export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-b from-surface to-white px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-primary">
          Static demo
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
          TunnelCheck Demo
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          A simple, pixel-clean landing page showing how a product page can look — built for
          demonstration purposes only, no backend required.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Get in touch
          </a>
          <a
            href="#about"
            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:border-primary hover:text-primary"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
