import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="text-3xl font-bold text-dark">Page not found</h1>
      <p className="max-w-md text-base text-muted">
        The page you are looking for does not exist. TunnelCheck Demo is a single-page site — try
        heading back home.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
      >
        Go Home
      </Link>
    </div>
  );
}
