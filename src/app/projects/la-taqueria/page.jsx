import { HeroParallax } from "@/components/ui/hero-parallax";

export default function LaTaqueriaPage() {
  return (
    <div>
      <HeroParallax
        products={products}
        headerTitle="La Taqueria"
        headerDescription="A website for a Mexican restaurant in Vancouver."
      />
    </div>
  );
}

const products = [
  {
    title: "Home Page",
    link: "",
    thumbnail: "/projects/lataqueria/lat1.png",
  },
  {
    title: "Menu",
    link: "/menu",
    thumbnail: "/projects/lataqueria/lat2.png",
  },
  {
    title: "About Us",
    link: "/about",
    thumbnail: "/projects/lataqueria/lat3.png",
  },
  {
    title: "Contact",
    link: "/contact",
    thumbnail: "/projects/lataqueria/lat4.png",
  },
  {
    title: "Gallery",
    link: "/gallery",
    thumbnail: "/projects/lataqueria/lat5.png",
  },
  {
    title: "Specials",
    link: "/specials",
    thumbnail: "/projects/lataqueria/lat6.png",
  },
  {
    title: "Events",
    link: "/events",
    thumbnail: "/projects/lataqueria/lat7.png",
  },
  {
    title: "Catering",
    link: "/catering",
    thumbnail: "/projects/lataqueria/lat8.png",
  },
  {
    title: "Reviews",
    link: "/reviews",
    thumbnail: "/projects/lataqueria/lat9.png",
  },
  {
    title: "Blog",
    link: "/blog",
    thumbnail: "/projects/lataqueria/lat10.png",
  },
  {
    title: "FAQ",
    link: "/faq",
    thumbnail: "/projects/lataqueria/lat11.png",
  },
  {
    title: "About Us",
    link: "/about",
    thumbnail: "/projects/lataqueria/lat3.png",
  },
  {
    title: "Contact",
    link: "/contact",
    thumbnail: "/projects/lataqueria/lat4.png",
  },
  {
    title: "Specials",
    link: "/specials",
    thumbnail: "/projects/lataqueria/lat6.png",
  },
  {
    title: "Events",
    link: "/events",
    thumbnail: "/projects/lataqueria/lat7.png",
  },
];
