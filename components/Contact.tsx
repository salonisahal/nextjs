"use client";

import { useState } from "react";

import { validateEmail, validateRequiredString } from "@/lib/validation/contact";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const initialErrors: ContactFormErrors = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>(initialErrors);
  const [touched, setTouched] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  function computeErrors(nextValues: ContactFormValues): ContactFormErrors {
    return {
      name: validateRequiredString(nextValues.name, "Name"),
      email: validateEmail(nextValues.email),
      message: validateRequiredString(nextValues.message, "Message"),
    };
  }

  const liveErrors = computeErrors(values);
  const isValid = !liveErrors.name && !liveErrors.email && !liveErrors.message;

  function handleChange(field: keyof ContactFormValues, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched) {
      setErrors(computeErrors(nextValues));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = computeErrors(values);
    setErrors(nextErrors);
    setTouched(true);

    const formIsValid = !nextErrors.name && !nextErrors.email && !nextErrors.message;
    if (!formIsValid) {
      return;
    }

    // MOCK: this is a UI-only demo form with no backend — submission just
    // shows a success message instead of sending the message anywhere.
    setSubmitStatus("success");
    setValues(initialValues);
    setErrors(initialErrors);
    setTouched(false);
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-surface px-6 py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-dark sm:text-4xl">Contact us</h2>
        <p className="mt-3 text-base text-muted">
          Fill out the form below and we will get back to you. This is a static demo, so nothing
          is actually sent.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-dark">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(event) => handleChange("name", event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Jane Doe"
            />
            <p className="mt-1 text-xs text-muted">Let us know who you are.</p>
            {touched && errors.name && (
              <p className="mt-1 text-xs font-medium text-danger">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-dark">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="jane@example.com"
            />
            <p className="mt-1 text-xs text-muted">We will only use this to reply to you.</p>
            {touched && errors.email && (
              <p className="mt-1 text-xs font-medium text-danger">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-dark">
              Message
            </label>
            <textarea
              id="message"
              value={values.message}
              onChange={(event) => handleChange("message", event.target.value)}
              rows={5}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="How can we help?"
            />
            <p className="mt-1 text-xs text-muted">Tell us a little about your question.</p>
            {touched && errors.message && (
              <p className="mt-1 text-xs font-medium text-danger">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={touched && !isValid}
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send message
          </button>

          {submitStatus === "success" && (
            <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-success">
              Thanks! Your message has been received (demo only — nothing was sent).
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
