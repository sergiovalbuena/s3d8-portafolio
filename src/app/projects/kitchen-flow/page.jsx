import { HeroParallax } from "@/components/ui/hero-parallax";

export default function KitchenflowPage() {
  return (
    <div>
      <HeroParallax
        products={products}
        headerTitle="Kitchen Flow"
        headerDescription="Revolutionizing Culinary Operations! Powered by cutting-edge technologies and innovative design thinking, Kitchen Flow is the ultimate kitchen management solution. Streamline your restaurant or food business with our platform, developed using expert skills in NextJS, Node.js, Agile methodologies, and UI/UX design for efficiency like never before."
        githubLink="https://github.com/sergiovalbuena"
        demoLink="https://kitchenflow.ca/"
      />
    </div>
  );
}

const products = [
  {
    title: "Home Page",
    link: "",
    thumbnail: "/projects/kf/kf1.png",
  },
  {
    title: "Pricing",
    link: "",
    thumbnail: "/projects/kf/kf2.png",
  },
  {
    title: "Features",
    link: "",
    thumbnail: "/projects/kf/kf3.png",
  },

  {
    title: "Pledge",
    link: "",
    thumbnail: "/projects/kf/kf4.png",
  },
  {
    title: "Team",
    link: "",
    thumbnail: "/projects/kf/kf5.png",
  },
  {
    title: "Contact",
    link: "",
    thumbnail: "/projects/kf/kf6.png",
  },

  {
    title: "KitchenMetric Engine",
    link: "",
    thumbnail: "/projects/kf/kf7.png",
  },
  {
    title: "Work Smarter",
    link: "",
    thumbnail: "/projects/kf/kf8.png",
  },
  {
    title: "Employee List",
    link: "",
    thumbnail: "/projects/kf/kf9.png",
  },
  {
    title: "Chef AI - ChatGPT",
    link: "",
    thumbnail: "/projects/kf/kf10.png",
  },
  {
    title: "Updating Task",
    link: "",
    thumbnail: "/projects/kf/kf11.png",
  },

  {
    title: "Updating Task",
    link: "",
    thumbnail: "/projects/kf/kf12.png",
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail: "/projects/kf/kf13.png",
  },
  {
    title: "Recipes Employee View",
    link: "",
    thumbnail: "/projects/kf/kf14.png",
  },
  {
    title: "Task List",
    link: "",
    thumbnail: "/projects/kf/kf15.png",
  },
  {
    title: "Waste Reports",
    link: "",
    thumbnail: "/projects/kf/kf16 .png",
  },
];
