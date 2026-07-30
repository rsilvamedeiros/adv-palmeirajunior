import { ArticlesPreview } from "@/components/sections/articles-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { PracticeAreas } from "@/components/sections/practice-areas";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <Journey />
      <ArticlesPreview />
      <Faq />
      <ContactCta />
    </>
  );
}
