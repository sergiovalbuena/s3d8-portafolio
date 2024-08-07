"use client";

import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

const LiquidSideNav = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // console.log(latest)
  });

  return (
    <div className="fixed top-0 w-full z-20">
      <div className="h-12  relative">
        <div className="absolute top-0 right-0 flex items-center text-white ">
          {/* <span className="text-sm">Open nav</span>
          <FiArrowRight className="mr-4 ml-2" /> */}
          <motion.button
            variants={{
              visible: { y: 0 },
              hidden: { y: "-200%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ y: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="text-3xl shadow-xl bg-white dark:bg-slate-800 dark:text-white dark:shadow-xl dark:shadow-slate-700 text-black hover:text-indigo-500 transition-colors p-4 absolute  top-8 right-8  rounded-full"
          >
            <FiMenu />
          </motion.button>
        </div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <div className="bg-re z-50">
      <motion.nav
        className="fixed top-0 bottom-0 w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]  dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        initial="closed"
      >
        <motion.button
          className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
          whileHover={{ rotate: "180deg" }}
          onClick={() => setIsOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <FiX />
        </motion.button>
        <motion.div
          variants={linkWrapperVariants}
          className="flex flex-col gap-4 absolute bottom-8 left-8"
        >
          <NavLink text="Home" href="/" setIsOpen={setIsOpen} />
          <NavLink text="Projects" href="/#projects" setIsOpen={setIsOpen} />
          <NavLink text="Some code" href="/#code" setIsOpen={setIsOpen} />
          <NavLink
            text="UI Components"
            href="/#ui-components"
            setIsOpen={setIsOpen}
          />
          <NavLink text="Contact" href="/#contact" setIsOpen={setIsOpen} />
        </motion.div>
      </motion.nav>
    </div>
  );
};

const NavLink = ({ text, href, setIsOpen }) => {
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <Link href={href}>
      <motion.div
        className="inline-block z-10 text-slate-800 dark:text-slate-100 w-fit font-black md:text-7xl text-3xl hover:text-indigo-500 transition-colors"
        variants={navLinkVariants}
        transition={{
          type: "spring",
          damping: 3,
        }}
        whileHover={{
          y: -15,
          rotate: "-7.5deg",
        }}
        rel="nofollow"
        onClick={closeNav}
      >
        {text}
      </motion.div>
    </Link>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
