"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiAdobephotoshop,
  SiCsharp,
  SiAdobecreativecloud,
  SiFigma,
  SiSwift,
  SiCss3,
  SiUnity,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiVite,
  SiHeroku,
  SiGit,
  SiMongodb,
  SiGithub,
  SiDigitalocean,
  SiAdobexd,
  SiBlender,
  SiAdobeillustrator,
} from "react-icons/si";

const DoubleScrollingLogos = () => {
  return (
    <section className="bg-indigo-500 py-12 px-4">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Some of the tools
          <br />
          <span className="text-slate-300"> I 🫶🏼 use</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          See more
        </motion.button>
      </div>
      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiCsharp} />
    <LogoItem Icon={SiFigma} />
    <LogoItem Icon={SiSwift} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiUnity} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiVite} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiNodedotjs} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiAdobephotoshop} />
    <LogoItem Icon={SiGit} />
    <LogoItem Icon={SiAdobecreativecloud} />
    <LogoItem Icon={SiDigitalocean} />
    <LogoItem Icon={SiAdobexd} />
    <LogoItem Icon={SiBlender} />
    <LogoItem Icon={SiGithub} />
    <LogoItem Icon={SiAdobeillustrator} />
    <LogoItem Icon={SiHeroku} />
    <LogoItem Icon={SiMongodb} />
  </>
);

export default DoubleScrollingLogos;
