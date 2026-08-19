"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ProductOption {
  slug: string;
  label: string;
}

type Field =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "projectType"
  | "crop"
  | "surface"
  | "location"
  | "message";

type Errors = Partial<Record<Field, string>>;

const REQUIRED: Field[] = ["name", "email", "phone", "projectType"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PROJECT_TYPES = [
  "new",
  "extension",
  "renovation",
  "supply",
  "other",
] as const;

const fieldClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-sm";

/**
 * Quote request form. Validates on submit and reports errors inline; there is
 * no backend at prototype stage, so a successful submission simply confirms.
 * Built on the existing UI primitives — no form library added.
 */
export function QuoteForm({ productOptions }: { productOptions: ProductOption[] }) {
  const t = useTranslations("quote");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  function validate(data: FormData): Errors {
    const next: Errors = {};

    for (const field of REQUIRED) {
      const value = String(data.get(field) ?? "").trim();
      if (!value) next[field] = t("errors.required");
    }

    const email = String(data.get("email") ?? "").trim();
    if (email && !EMAIL.test(email)) next.email = t("errors.email");

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move attention to the summary, then to the first field at fault.
      requestAnimationFrame(() => {
        summaryRef.current?.focus();
        const first = Object.keys(found)[0];
        formRef.current
          ?.querySelector<HTMLElement>(`[name="${first}"]`)
          ?.scrollIntoView({ block: "center", behavior: "smooth" });
      });
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-muted/50 p-8">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-strong">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-semibold text-foreground">
          {t("successTitle")}
        </h2>
        <p className="text-muted-foreground">{t("successBody")}</p>
        <Button
          variant="outline"
          onClick={() => {
            setSent(false);
            setErrors({});
          }}
        >
          {t("successAgain")}
        </Button>
      </div>
    );
  }

  const labelFor = (field: Field, required: boolean) => (
    <label
      htmlFor={field}
      className="text-sm font-medium text-foreground"
    >
      {t(field === "company" ? "companyField" : field)}
      {required ? (
        <span className="text-destructive" aria-hidden="true">
          {" *"}
        </span>
      ) : (
        <span className="ml-1 text-xs font-normal text-muted-foreground">
          ({t("optional")})
        </span>
      )}
    </label>
  );

  const errorFor = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null;

  const invalidProps = (field: Field) => ({
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-10"
    >
      <p
        ref={summaryRef}
        tabIndex={-1}
        role={Object.keys(errors).length > 0 ? "alert" : undefined}
        className={cn(
          "rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive outline-none",
          Object.keys(errors).length === 0 && "hidden",
        )}
      >
        {t("errors.summary")}
      </p>

      <fieldset className="flex flex-col gap-6">
        <legend className="text-sm font-semibold tracking-wide text-primary uppercase">
          {t("sectionContact")}
        </legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            {labelFor("name", true)}
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder={t("placeholders.name")}
              className={fieldClass}
              {...invalidProps("name")}
            />
            {errorFor("name")}
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("company", false)}
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder={t("placeholders.company")}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("email", true)}
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t("placeholders.email")}
              className={fieldClass}
              {...invalidProps("email")}
            />
            {errorFor("email")}
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("phone", true)}
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={t("placeholders.phone")}
              className={fieldClass}
              {...invalidProps("phone")}
            />
            {errorFor("phone")}
          </div>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <legend className="text-sm font-semibold tracking-wide text-primary uppercase">
          {t("sectionProject")}
        </legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            {labelFor("projectType", true)}
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              className={fieldClass}
              {...invalidProps("projectType")}
            >
              <option value="" disabled>
                {t("select")}
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {t(`projectTypes.${type}`)}
                </option>
              ))}
            </select>
            {errorFor("projectType")}
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("crop", false)}
            <Input
              id="crop"
              name="crop"
              placeholder={t("placeholders.crop")}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("surface", false)}
            <Input
              id="surface"
              name="surface"
              placeholder={t("placeholders.surface")}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            {labelFor("location", false)}
            <Input
              id="location"
              name="location"
              placeholder={t("placeholders.location")}
              className={fieldClass}
            />
          </div>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm font-medium text-foreground">
            {t("productsField")}
            <span className="ml-1 text-xs font-normal text-muted-foreground">
              ({t("optional")})
            </span>
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {productOptions.map((option) => (
              <label
                key={option.slug}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-border px-3 text-sm transition-colors hover:border-primary/50 has-checked:border-primary has-checked:bg-primary/5"
              >
                <input
                  type="checkbox"
                  name="products"
                  value={option.slug}
                  className="size-4 accent-[var(--primary)]"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-2">
          {labelFor("message", false)}
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t("placeholders.message")}
            className="rounded-md bg-background px-3 py-2.5"
          />
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {t("submit")}
        </Button>
        <p className="text-xs text-muted-foreground">{t("prototypeNote")}</p>
      </div>
    </form>
  );
}
