export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          © {currentYear} TunnelCheck Demo. All rights reserved.
        </p>
        <p className="text-xs text-muted">Built as a static, UI-only demonstration page.</p>
      </div>
    </footer>
  );
}
