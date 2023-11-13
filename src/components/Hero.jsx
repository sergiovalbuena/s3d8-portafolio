"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import {
  useAnimation,
  useInView,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../components/SocialIcons";
import Link from "next/link";
import Image from "next/image";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const WaterDropHero = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState(["front", "middle", "back"]);
  const [dragging, setDragging] = useState(false);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      orderCopy.unshift(orderCopy.pop());
      setOrder(orderCopy);
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    // Automatically shuffle the list ever 5 seconds, so long
    // as it isn't being dragged
    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          orderCopy.unshift(orderCopy.pop());
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
  }, []);
  return (
    <section className="text-slat-100 overflow-hidden bg-slate-900 px-8 py-24 md:px-12 md:py-32">
      <div className="flex flex-col md:flex-row xl:flex-row relative mx-auto max-w-5xl gap-8">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-5xl font-black text-slate-100 md:text-7xl">
              Hi, {""}
              <span className="text-4xl">👋🏼</span>
              <span className="text-6xl">👨🏻‍💻</span> <br />
              I&#39;m Sergio<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
              Interactive Media <span className="font-bold"> Developer </span>{" "}
              <br />
              <span className=" text-indigo-500">
                and Product <span className="font-bold">Designer</span>
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
              I&#39;ve spent the last 5 years building and scaling software for
              some pretty cool companies. I also teach people to paint online
              (incase youve got an empty canvas layin&#39; around 🎨). Let&#39;s
              connect!
            </p>
          </Reveal>
          <Reveal>
            <div className=" flex gap-8  mt-4 md:mt-6 ">
              <button className="pointer-events-auto  rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 ">
                Contact me
              </button>
              <button className="pointer-events-auto  rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 ">
                Email me
              </button>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-6 flex gap-6">
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sergiovalbuena"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                className="pointer-events-auto"
              />

              {/* <SocialLink
                target="_blank" // Agregado para abrir en una nueva ventana
                rel="noopener noreferrer"
                href="https://instagram.com/sergio_valbuena"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              /> */}

              <SocialLink
                target="_blank" // Agregado para abrir en una nueva ventana
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sergio-valbuena-galindo-73056327/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="pointer-events-auto"
              />
            </div>
          </Reveal>
        </div>
        {/* <DotGrid /> */}
        <div className="sm:mt-8">
          <motion.div
            whileTap={{ scale: 0.985 }}
            className="relative h-[450px] w-[350px]"
          >
            <Card
              imgUrl="/imgs/head-shots/7.jpg"
              testimonial="I feel like I&#39;ve learned as much from X as I did completing my masters. It&#39;s the first thing I read every morning."
              author="Design, UX & Art"
              handleDragEnd={handleDragEnd}
              dragProgress={dragProgress}
              position={order[0]}
              dragging={dragging}
              setDragging={setDragging}
            />
            <Card
              imgUrl="/imgs/head-shots/8.jpg"
              testimonial="My boss thinks I know what I&#39;m doing. Honestly, I just read this newsletter."
              author="Code & Problem Solving"
              handleDragEnd={handleDragEnd}
              dragProgress={dragProgress}
              position={order[1]}
              dragging={dragging}
              setDragging={setDragging}
            />
            <Card
              imgUrl="/imgs/head-shots/9.jpg"
              testimonial=""
              author="Management & Leadership"
              handleDragEnd={handleDragEnd}
              dragProgress={dragProgress}
              position={order[2]}
              dragging={dragging}
              setDragging={setDragging}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-gradient-to-br from-indigo-600 to-purple-600 transform rotate-180"
      />
    </div>
  );
};

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
  imgUrl,
  author,
  setDragging,
  dragging,
}) => {
  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    // When component first mounts, dragX will be a percentage
    // due to us setting the initial X value in the animate prop.
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      // Default back to 0 so that setInterval can continue
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={imgUrl}
        alt={`Image of ${author}`}
        width={"190"}
        height={"100"}
        className="pointer-events-none mx-auto h-32 w-32  border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        {testimonial}
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default WaterDropHero;
