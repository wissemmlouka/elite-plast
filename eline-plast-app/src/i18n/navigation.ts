import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

// Locale-aware navigation APIs. Using these keeps the active locale in the URL
// and preserves the current route when switching languages.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
