// Site footer — a full-height blue mesh-gradient panel (with a chrome heart that
// settles at its centre, see FooterScene) that slides up over the pinned contact form.
import type { FooterContent } from "@/data/mocks/contact";
import { FooterScene } from "@/views/footer-scene";
import { AnimatedHeading } from "@/components/common/animated-heading";

export interface SiteFooterProps {
  content: FooterContent;
}

export const SiteFooter = ({ content }: SiteFooterProps) => {
  const { labelId, heading, cta, tagline, copyright, credit } = content;

  return (
    <footer
      aria-labelledby={labelId}
      className="relative z-20 flex min-h-lvh flex-col overflow-hidden bg-footer px-6 pb-6 pt-20 text-footer-fg md:px-10 md:pb-10 lg:px-12 lg:pb-12"
    >
      <FooterScene />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex flex-col items-center text-center">
          <AnimatedHeading
            as="h2"
            id={labelId}
            className="mx-auto max-w-[14ch] text-[2rem] font-light leading-[1.05] tracking-tight sm:text-[2.5rem] lg:max-w-none lg:text-[4rem]"
          >
            {heading}
          </AnimatedHeading>
          <span className="mt-8 rounded-full border border-footer-fg/40 px-6 py-3 text-sm font-medium text-footer-fg/90">
            {cta.label}
          </span>
        </div>

        <div className="flex-1" />

        <div className="-mx-6 mt-16 flex flex-col gap-4 border-t border-footer-fg/15 px-6 pt-12 text-sm text-footer-fg/80 md:-mx-10 md:mt-12 md:flex-row md:items-end md:justify-between md:px-10 lg:-mx-12 lg:px-12">
          <p>{tagline}</p>
          <div className="flex flex-col gap-1 md:items-end">
            <p>{copyright}</p>
            <p>{credit}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
