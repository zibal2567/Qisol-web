interface NavbarLink {
  href: string;
  label: string;
}

interface Navbar {
  logo: string;
  links: NavbarLink[];
}

interface Hero {
  title: string;
  subtitle: string;
  cta?: string;
}

interface Product {
  title: string;
  description: string;
}

interface Features {
  title: string;
  items: string[];
}

interface Problem {
  title: string;
  points: string[];
  solutionTitle: string;
  solution: string;
}

interface Benefits {
  title: string;
  items: string[];
}

interface TechnologyItem {
  title: string;
  desc: string;
}

interface Technology {
  title: string;
  items: TechnologyItem[];
}

interface Research {
  title: string;
  details: string[];
}

interface CTA {
  text: string;
  button: string;
}

interface LandingLocale {
  navbar: Navbar;
  hero: Hero;
  product: Product;
  features: Features;
  problem: Problem;
  benefits: Benefits;
  technology: Technology;
  research: Research;
  cta: CTA;
}

export interface LandingConfig {
  th: LandingLocale;
  en: LandingLocale;
}
