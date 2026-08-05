import { redirect } from "next/navigation";

import { routing } from "@/i18n/routing";

// The locale middleware normally redirects "/" to the default locale before
// this renders; this exists so the "/" route has a page and redirects on any
// direct hit that bypasses the middleware.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
