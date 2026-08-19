import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { ProductCategories } from "@/components/sections/product-categories";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProject />
      <Gallery />
      <Testimonials />
      <CTABanner />
    </>
  );
}
